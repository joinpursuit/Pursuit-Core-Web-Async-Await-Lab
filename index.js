document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("button")
    const num = document.querySelector("select")
    const showCardsBox = document.querySelector("#showCardsBox")
    const remaining = document.querySelector("#remaining")

    shuffle()
    let deckOfCards = ""
    let remaingCards = ""
    async function shuffle() {
        let result = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        deckOfCards = result.data.deck_id
        console.log(deckOfCards)
        // remaingCards = result.data.remaining
        remaingCards = document.createElement("p")
        remaingCards.innerHTML = `${result.data.remaining} card(s) left.`
        remaining.appendChild(remaingCards)
        // console.log(result.data.remaining)
        console.log(remaingCards)
    }


    //shuffle deck 
    //get cards from deck
    // show the number of cards remaining 
    async function getCards() {
        let result = await axios.get(`https://deckofcardsapi.com/api/deck/${deckOfCards}/draw/?count=${num.value}`)
        let cards = result.data.cards
        console.log(result.data.remaining)
        if (result.data.remaining === 1){
            remaingCards = document.createElement("p")
            remaingCards.innerHTML = `${result.data.remaining} card left.`
            remaining.appendChild(remaingCards)
        }else{
        remaingCards = document.createElement("p")
        remaingCards.innerHTML = `${result.data.remaining} card(s) left.`
        remaining.appendChild(remaingCards)
        }
        cards.forEach(element => {
            var imgageOfCard = document.createElement('img');
            imgageOfCard.src = element.image
            imgageOfCard.classList.add('card')
            // imgageOfCard.setAttribute("href", element)
            showCardsBox.appendChild(imgageOfCard)

            // console.log(element.image)
        });
        // result.data.foreach((el) => {
        //     console.log(el.image)
        // })
    }
    button.addEventListener('click', (event) => {
        showCardsBox.innerHTML = ""
        remaining.innerHTML = ""
        // console.log(num.value)
        getCards()
    })
    // const getCard = () => {

    // }
})
