
console.log('IM in')



document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()
  
    const cardsOP = document.getElementById('Card')
        for (let i = 1; i <= 10; i++){
            const options = document.createElement('option')
            options.textContent = i
            options.value = i
            // if(i === 5){
            //     options.setAttribute('id', 'card-value')
            //     options.setAttribute('seleted', 'seleted')
            // }
            cardsOP.appendChild(options)
        }
    async function loadCards () {
        const result = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                let {deck_id: cardsID, remaining: cardsReman } = result.data
          
          let deckrem = document.getElementById('deckrem')
          deckrem.textContent = `${cardsReman}  card(s) left.`
  
          let button = document.getElementById('btn')
              button.addEventListener('click', e => {
                   e.preventDefault()
                   let options = document.getElementById('Card')
  
                  async function take () {
                    const roll = await axios.get(`https://deckofcardsapi.com/api/deck/${cardsID}/draw/?count=${options.value}`)
                    cardsReman = roll.data.remaining
                          let deckrem = document.getElementById('deckrem')
                          deckrem.textContent = `${cardsReman} card(s) left.`
  
                         
                          let cardImg = document.querySelector('div')
                          if(options.value > 1){
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
                       let count = document.getElementById('count1')  
                       if(options.value > 1){
                        cardImg.setAttribute('style','height: 100%')
                      }    
                        count.textContent = ''
                        let view = ''
                        for (let i = 0; i <= options.value; i++) {
                            let photo= document.createElement('img')
                            photo.setAttribute('class', 'pre')
                            photo.setAttribute('style','height: 40px')
                            count.appendChild(photo)
                            photo.src = roll.data.cards[i].image
                            view += photo.src
                            
                        }
                         
      
                  }
                  take()
              })
    }
    loadCards ()
  
})




// document.addEventListener('DOMContentLoaded', e =>{
//     e.preventDefault()
//     const cardsOP = document.getElementById('Card')
//     for (let i = 1; i <= 10; i++){
//         const options = document.createElement('option')
//         options.textContent = i
//         options.value = i
//         if(i === 5){
//             options.setAttribute('id', 'card-value')
//             options.setAttribute('seleted', 'seleted')
//         }
//         cardsOP.appendChild(options)
//     }
    
//     async function loadCards(){
//         const result = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//         let {deck_id: cardsID, remaining: cardsReman } = result.data
//         console.log(result.data)
//         console.log(cardsID)
//         console.log(cardsReman)

//         let deckrem = document.getElementById('deckrem')
//         deckrem.textContent = cardsReman  + " " + cards left"
        
        
        
//         const btn = document.getElementById('btn')
//         btn.addEventListener('click', ()=>{
//             const cardsOP = document.getElementById('cards')

//             async function take(){
//                 const roll = await axios.get(`https://deckofcardsapi.com/api/deck/${cardsID}/draw/?count=${options.value}`)
//                 cardsReman =roll.data.remaining
//                 let deckrem = document.getElementById('deckrem')
//                 deckrem.textContent = cardsReman  + " " + cards + "left"

//                 let cardImg = document.createElement('div')
//                 if(options.value > 5){
//                     cardImg.setAttribute('style', "height: 600px")
//                 }else{
//                     cardImg.setAttribute('style',"height: 300px")
//                 }

//                 cardImg.textContent = ''
//                 for(i=0; i <= options.value-1; i++){
//                     let img = document.createElement('img')
//                     img.setAttribute('class', 'card')
//                     cardImg.appendChild(img)
//                     img.src = roll.data.cards[i].img
//                 }


//             }
//             take()

//         })
        
        
//     }
//     loadCards()



//     // const btn = document.getElementById('btn')
//     // btn.addEventListener('click', ()=>{
//     // loadCards() 
   
    


// })


// const result = axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
// .then((result) =>{
//     const rob = result.data
//     console.log(rob)
//     const span = document.createElement('form')
//     const options = document.createElement('options')
//     options.textContent = rob.remaining
//     options.value = rob.remaining
//     console.log(options)
//     span.appendChild(options)
//     cards.appendChild(span)

// })
