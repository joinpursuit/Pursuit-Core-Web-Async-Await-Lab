const button= document.querySelector("#draw-cards-bttn")
const deckOfcards = async () => {
    try {
     const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      let deckId = response.data.deck_id
      let remaining = response.data.remaining
      let response2= await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      let cards = response2.data.cards
      console.log(cards)
      cards.forEach((card) =>{
          const img= document.createElement("img")
          img.classList.add(".card")
          img.src = card.image
          const section = document.querySelector("#card-image")
          section.appendChild(img)
          const p= document.querySelector("#remaining")
          p.textContent = remaining


        }) 
    } catch (err) {
        console.log("The error that was thrown: ", err)
    }
}
deckOfcards();

button.addEventListener("click", e=>{
    e.preventDefault()
    deckOfcards()
})