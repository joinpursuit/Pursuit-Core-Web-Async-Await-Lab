
console.log('IM in')


document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('btn')
    btn.addEventListener('click', ()=>{


 loadCards() 
   

    
})
const result = axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
.then((result) =>{
    const rob = result.data
    console.log(rob)
    const span = document.createElement('form')
    const options = document.createElement('options')
    options.textContent = rob.remaining
    options.value = rob.remaining
    console.log(options)
    span.appendChild(options)
    cards.appendChild(span)

})
})