
console.log('IM in')


document.addEventListener('DOMContentLoaded', ()=>{
    const cardsOP = document.getElementById('cards')
    for (let i = 1; i <= 10; i++){
        const options = document.createElement('options')
        options.textContent = i
        options.value = i
        // if(i > 5){
        //     options.setAttribute(cardsID)
        //     options.setAttribute(cardsReman)
        // }
        cardsOP.appendChild(options)
    }
    
    async function loadCards(){
        const result = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
        let {deck_id: cardsID, remaining: cardsReman } = result.data
        console.log(result.data)
        console.log(cardsID)
        console.log(cardsReman)

        let deckrem = document.getElementById('deckrem')
        deckrem.textContent = cardsReman  + " " + cards + "left"
        
        
        
        const btn = document.getElementById('btn')
        btn.addEventListener('click', ()=>{
            const cardsOP = document.getElementById('cards')

        })
        
        
    }
    loadCards()



    // const btn = document.getElementById('btn')
    // btn.addEventListener('click', ()=>{
    // loadCards() 
   
    


})


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
