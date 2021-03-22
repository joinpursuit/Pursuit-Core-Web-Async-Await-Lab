
async function deckOfCards () {
    const deck = await axios.get (

     'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1' 
     )
    return deck.data
}