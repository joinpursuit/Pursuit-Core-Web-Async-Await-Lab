
// Creates and shuffles a new deck when the page loads.
    // DOMContentLoaded { creates and shuffles a new deck }
    // 'async' so that we can execute contents asynchronously, and use 'await'

// Includes a <select> element and a button to draw 1-10 cards from that deck.
    // make a function that draws cards.
    // plug in the deck_id variable into the function that GETs the draw in decks
    // attach button from DOM to variable, and save to btn variable
    // attach add click event listener to btn and execute drawCards with it
    // ?save those cards in an array? I think?

// Displays those cards to the user.
    // setAttribute src=imgUrl
    // setAttribute .class "card"


// When the user clicks the button again, draws another set of cards from that same deck.

// Shows the user how many cards remain in the deck, and updates this number every time cards are drawn.


document.addEventListener('DOMContentLoaded', async () => {
    
    const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const id = deck.data.deck_id
    const container = document.getElementById("container")
    const p = document.getElementById("remaining")
    let remainingCards = Number(deck.data.remaining)

        
    console.log(deck)
    console.log("ID: " + id)

    let btn = document.querySelector("button")
    btn.addEventListener("click", async () => {
        container.innerHTML = ''
        let val = Number(document.querySelector("select").value)
        console.log(val)   


        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${val}`)
        .then((body) => {return body.data})
        console.log(response)

        let cardsArr = response.cards
        console.log(cardsArr)
        for (let cardObj of cardsArr) {
            let card = document.createElement("img")
            card.setAttribute('src', cardObj.image)
            card.setAttribute('class', 'card')
            container.appendChild(card)

        }
        remainingCards = remainingCards - cardsArr.length
        p.textContent = `${remainingCards} card(s) left`
    })



})