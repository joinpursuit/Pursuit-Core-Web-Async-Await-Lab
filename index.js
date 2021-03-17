
console.log('IM in')



document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()
  
    const cardsOP = document.querySelector('select')
        for (let i = 1; i <= 10; i++){
            const options = document.createElement('option')
            options.value = i
            options.textContent = i
            if (i === 5){
                options.setAttribute('id', 'card-value')
                options.setAttribute('selected', 'selected')
            }
            cardsOP.appendChild(options)
        }
    async function loadCards () {
        const result = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                let {deck_id: cardsID, remaining: cardsReman } = result.data
                console.log(cardsID)
                console.log(cardsReman)
          let deckrem = document.getElementById('remaining')
          deckrem.textContent = `${cardsReman}  card(s) left.`
  
          let button = document.getElementById('btn')
              button.addEventListener('click', e => {
                   e.preventDefault()
                   let options = document.getElementById('Card')
  
                  async function take () {
                    const roll = await axios.get(`https://deckofcardsapi.com/api/deck/${cardsID}/draw/?count=${options.value}`)
                    cardsReman = roll.data.remaining
                          let deckrem = document.getElementById('remaining')
                          deckrem.textContent = `${cardsReman} card(s) left.`
  
                         
                          let cardImg = document.querySelector('div')
                          if(options.value > 5){
                            cardImg.setAttribute('style','height: 100%')
                          }
  
                          cardImg.textContent = ''
  
                              for (let i = 0; i <= options.value - 1; i++) {
                                  let img = document.createElement('img')
                                  img.setAttribute('class', 'card')
                                  img.setAttribute('style','height: 230px')
                                  cardImg.appendChild(img)
                                  img.src = roll.data.cards[i].image
                                  
                              }
                       
                         
      
                  }
                  take()
              })
    }
    loadCards ()
  
})

