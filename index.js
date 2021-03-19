const button = document.querySelector("#draw-cards-bttn");
let deckData;


const deckOfcards = async () => {
  try {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    deckData = response.data;
    console.log(deckData);
  } catch (err) {
    console.log("The error was thrown", err);
  }
};



const drawCards = async () => {
  try {
    let deckId = deckData.deck_id;
    let response2 = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`
    );
    let cards = response2.data.cards;
    let remaining = response2.data.remaining;
    console.log(cards);
    cards.forEach((card) => {
      const img = document.createElement("img");
      img.classList.add(".card");
      img.src = card.image;
      const section = document.querySelector("#card-image");
      section.appendChild(img);
      const p = document.querySelector("#remaining");
      p.textContent = `Remaining Cards:  ${Number(remaining)}`;
    });
} catch (err) {
    console.log("The error that was thrown: ", err);
}
};





button.addEventListener("click", (e) => {
    e.preventDefault();
    drawCards();
    // let remaining = deckData.remaining
    // const p = document.querySelector("#remaining");
});


deckOfcards();