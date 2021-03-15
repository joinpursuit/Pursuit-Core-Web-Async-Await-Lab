const getDeCK = async () => {

    let response  = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    let id = await response.data.deck_id
    let remaining = await response.data.remaining

    let remainingDisplay = document.getElementById("remaining")
    remainingDisplay.textContent = `${remaining} card(s) left.`
    let button = document.getElementById("button")
    let amount = document.getElementById("amount")

    button.addEventListener("click", (e) => {
        
        e.preventDefault()

        let cardAmount = amount.options[amount.selectedIndex].text

        async function drawCards(){
            let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${cardAmount}`)
            let cards = await draw.data.cards
            let remaining = await draw.data.remaining
            let cardDisplay = document.getElementById("cardDisplay") 
            cardDisplay.textContent = ""
    
            remainingDisplay.textContent = `${remaining} card(s) left.`


            cards.forEach((el) => {

            let card = document.createElement("img")
            card.src = `${el.image}`
            card.className ="card"
           
            cardDisplay.appendChild(card)

            })



        }

        drawCards()     
        
        
    })


}

getDeCK()

