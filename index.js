const select = document.querySelector("select");
const section = document.querySelector("#card-display")

const cardsDrawn = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};

cardsDrawn(10);
const getCards = async (e) => {
    const numOfCards = Number(e.target.value)
    try {
    const deckCount = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    const deckId = deckCount.data.deck.id;
    const drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=5`);
    const remainingCards = drawCard.data.remaining;
    for (let i =0; i <= )
    console.log(remainingCards);
    console.log(drawCard.data);

}
}


button.addEventListener("click", async (event) => {
   
})