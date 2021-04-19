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
    return axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(
            (deck) => {            
                let deckId = deck.data.deck_id
                let remainder = deck.data.remaining
                console.log(deckId)
                console.log(deck)
                // return deckId
                return deck.data
            })
            .catch((err)=> console.log(err))    
 
}

grabDeck()


// let deckId = grabDeck()
// console.log(deckId)
// const drawCard = (count) => {
//     axios.get(
//         `https://deckofcardsapi.com/api/deck/${deck_Id}/draw/?count=5`)
//         .then(
//             (response) => {
//                 console.log(response.data.cards)
//                 const cards = response.data.cards

//             }
//     )
//     .catch((err)=>console.log())
// }

// drawCard()




