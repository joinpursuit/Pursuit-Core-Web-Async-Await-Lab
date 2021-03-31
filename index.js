const button = document.querySelector('button')
let remaining = 52

button.addEventListener('click', () => {
    const selectNumber = document.querySelector('#draw-cards').value
    const displayCards = document.getElementById('card-display')
    const remainingCard = document.getElementById('remaining')

    if(displayCards.firstChild) {
        displayCards.textContent = ''
    }
    remaining = remaining - selectNumber
    remainingCard.textContent = `${remaining} card(s) left.`
    

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(body => {
        display(body.deck_id)
    })
    .catch(e => {
        console.log(e)
    })
    
    
    function display(deckId) {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${selectNumber}`)
        .then(res => res.json())
        .then(body => {
            body.cards.forEach((e) => {
                const cardImage = document.createElement('img')
                cardImage.setAttribute('src', e.image)
                //card class for cypress test
                cardImage.classList.add('card')
                displayCards.appendChild(cardImage)
            })
        })
    }
})