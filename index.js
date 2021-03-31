
const cardContainer = document.querySelector('#card-container');
let cardNum = document.querySelector('#remaining')
const button = document.querySelector("button");
let option = document.querySelector('select')




async function cardGenerator(){
  

    try {
        
        const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        const deck = response.data

            let uniqueDeck = deck.deck_id
            
            

               
            
            button.addEventListener("click", displayCards)
            async function displayCards() { 
                let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${uniqueDeck}/draw/?count=${option.value}`)
                let selectedCards = drawCards.data.cards
                let selectedCardsNum = drawCards.data.remaining

                cardContainer.innerHTML = ""
                selectedCards.forEach(card => {
               
                    let image = document.createElement("img")
                    image.classList.add("card")
                    image.src = card.image
                    cardContainer.appendChild(image)
                })
                
                  cardNum.innerText = `${selectedCardsNum} card(s) left.`
            }
        
    } catch (err) { 

        console.log(err)

    }
}

cardGenerator()