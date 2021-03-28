




// axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((result) => {
//     const cardShow = document.getElementById('cards');
//     for (let card of result.data) {
//         const cardDisplay = document.createElement('cardDisplay')
//         cardDisplay.textContent = card.deck_id
//         cardDisplay.value = card.deck_id
//         cardShow.appendChild(cardDisplay);
//     }
// })

async function shuffleDeck() {
    let deckResult = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    console.log(deckResult.data)
    let deckID = result.data.deck_id
    let remaining = result.data.remaining

    console.log(deckResult.data.remaining)
    console.log(deckID)
    console.log(remaining)

    return {
        deckID: deckID,
        remaining: remaining
    }
}


function drawCard() {

}
