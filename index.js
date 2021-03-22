async function shuffleDeck() {
    let result = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    console.log(result.data)

    //deconstructing

    //let deckID = result.data.deck_id
    //let remaining = result.data.remaining

    let {deck_id: deckID, remaining} = result.data
    // console.log(deckID)
    // console.log(remaining)
    return {
        deckID: deckID,
        remaining: remaining
    }
}

function drawCard() {

}

let deck = await shuffleDeck()
console.log(deck)