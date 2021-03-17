const selectBar = document.querySelector("#select-bar") 
const button = document.querySelector("button")
const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option")
    option.textContent = i;
    option.value = i;
    selectBar.appendChild(option)
  }
}

createOptions(10);

const shuffleCards = async () =>{
    const section = document.querySelector("section")
    try {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        const deckId = res.data.deck_id;
        const remaining = res.data.remaining;
    }
 catch (err) {
    console.log(err)
}
shuffleCards()

button.addEventListener("click", async (e) => {
    try{
  const numOfCards = Number(e.target.value);
  const count = 0
  const res1 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`)
  debugger
    const cardsSection = document.querySelector("section");
    cardsSection.innerHTML = ""
    res1.data.cards.forEach(card => {
      const img = document.createElement("img");
      img.src = cards[i].image;
      cards.appendChild(img);
  })
  .catch(err => {
    console.log(err);
  }
})
