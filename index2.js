const select = document.querySelector("select");
const button = document.querySelector("button");
const section = document.querySelector("section");

const showCards = async (e) => {
  try {
    const res1 = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`); // shuffled new deck
    const deckId = res1.data.deck_id; // saves deckID
    const numOfCards = document.querySelector("#default");
    const num = Number(numOfCards.value);
    const res2 = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${num}`
    ); // draws cards
    const cards = res2.data.cards;
    const remaining = res2.data.remaining;
    const p = document.querySelector("#remaining");
    p.innerText = `${remaining} card(s) left.`;
    section.innerHTML = "";
    cards.forEach((card) => {
      const img = document.createElement("img");
      img.src = card.image;
      img.classList.add("card"); //gives class name
      section.appendChild(img);
    });
  } catch (err) {
    console.log(err);
  }
};

button.addEventListener("click", showCards);
document.addEventListener("DOMContentLoaded", showCards)
