const selectBar = document.querySelector("#select-bar");
const button = document.querySelector("button");
let cardsLeft = document.querySelector("#remaining");
let deckId;


const shuffleCards = async () => {
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    deckId = res.data.deck_id;
    
  } catch (err) {
    console.log(err);
  }
};

shuffleCards();

button.addEventListener("click", async () => {
  let numOfCards = Number(selectBar.value);
  try {
    let res1 = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`
    );
    const cardsSection = document.querySelector("section");
    cardsSection.innerHTML = "";
    cardsLeft.textContent = `${res1.data.remaining} card(s) left.`;
    res1.data.cards.forEach((card) => {
      const img = document.createElement("img");
      img.src = card.image;
      img.classList.add("card");
      cardsSection.appendChild(img);
    });
  } catch (err) {
    console.log(err);
  }
});
