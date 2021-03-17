const selectBar = document.querySelector("#select-bar") 
const button = document.querySelector("button")
let deckId
let remaining


// const createOptions = (num) => {
//   for (let i = 1; i <= num; i++) {
//     const option = document.createElement("option")
//     option.textContent = i;
//     option.value = i;
//     selectBar.appendChild(option)
//   }
// }

// createOptions(10);

const shuffleCards = async () =>{
    try {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=5`)
        debugger
         deckId = res.data.deck_id;
         remaining = res.data.remaining;
    }
 catch (err) {
    console.log(err)
}
}


shuffleCards()



button.addEventListener("click", async (e) => {
  try{
    let numOfCards = Number(selectBar.value);
    
  const res1 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`)
  
    const cardsSection = document.querySelector("section");
    cardsSection.innerHTML = ""

    res1.data.cards.forEach(card => {
      const img = document.createElement("img");
      img.src = card.image;
      card.classlist.add("card")
      cardsSection.appendChild(img);
  })
} catch (err) {
    console.log(err);
  }
})

