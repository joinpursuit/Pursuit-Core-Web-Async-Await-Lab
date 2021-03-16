document.addEventListener('DOMContentLoaded', eve => {
  eve.preventDefault()

  const options = document.querySelector('select')
    for (let i = 1; i <= 10; i++) {
        let opt = document.createElement('option')
        opt.value = i
        opt.textContent = i
            if (i === 5){
                opt.setAttribute('id', 'card-value')
                opt.setAttribute('selected', 'selected')
            }
        options.appendChild(opt)
    }

  async function deckLoader () {

        const cardsShuffle = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        let cardsID = cardsShuffle.data.deck_id
        let cardsRemaining = cardsShuffle.data.remaining

        let remainingDeck = document.getElementById('remaining')
        remainingDeck.textContent = `${cardsRemaining} card(s) left.`

        let button = document.querySelector('button')
            button.addEventListener('click', eve => {
                 eve.preventDefault()
                 let opt = document.querySelector('select')

                async function draw () {
                        const cardsLoaded = await axios.get(`https://deckofcardsapi.com/api/deck/${cardsID}/draw/?count=${opt.value}`)
                        cardsRemaining = cardsLoaded.data.remaining
                        let remainingDeck = document.getElementById('remaining')
                        remainingDeck.textContent = `${cardsRemaining} card(s) left.`

                       
                        let cardsImages = document.querySelector('div')
                        if(opt.value >5){
                            cardsImages.setAttribute('style','height: 668px')
                        }else{
                            cardsImages.setAttribute('style','height: 340px')
                        }

                        cardsImages.innerHTML = ''

                            for (let i = 0; i <= opt.value - 1; i++) {
                                let image = document.createElement('img')
                                image.setAttribute('class', 'card')
                                image.setAttribute('style','padding: 10px')
                                cardsImages.appendChild(image)
                                image.src = cardsLoaded.data.cards[i].image
                            }
                       
    
                }
                draw()
            })
  }
  deckLoader()

})
