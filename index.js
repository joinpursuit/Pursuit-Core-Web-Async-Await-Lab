// const { Response } = require("node-fetch")

//  const shuffle = async () => {
//     let grab = await axios.get(
//         'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(
//         (deck) => {
//             let deckId = deck.data.deck_id
//             let remainder = deck.data.remaining
//             console.log(remainder)
//             return deckId
//         }
//     )
    
//  }

// shuffle()

// const withTheHeartOfTheCards = (count) => {
//     axios.get(
//         'https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5')
//     .then(response => console.log(response))
// }
// withTheHeartOfTheCards()


const grabDeck = async () => {
    let grab = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(
            (deck) => {
                let deckId = deck.data.deck_id
                let remainder = deck.data.remaining
                console.log(deck)
                return deckId
            }
        )
    
}

grabDeck()

const drawCard = (count) => {
    axios.get(
        'https://deckofcardsapi.com/api/deck/cmt8qln2qa8t/draw/?count=5')
        .then(
            (response) => {
                console.log(response.data.cards)
                const cards = response.data.cards

            }
        )
}

drawCard()




