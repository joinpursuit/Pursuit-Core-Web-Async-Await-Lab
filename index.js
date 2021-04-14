const select = document.querySelector("select");
const cardUL = document.querySelector("ul");
const form = document.querySelector("form");
const remaining = document.querySelector("#remaining");

const cards = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
  select.value = "5";
};
cards(10);

let deckId;

const getNewDeck = async () => {
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    deckID = res.data.deck_id;
  } catch (err) {
    console.log(err);
  }
};

getNewDeck();

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const numOfCards = Number(select.value);

    const res2 = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`
    );
    const cardsRemaining = `${res2.data.remaining} card(s) left.`;
    const cards = res2.data.cards;
    cardUL.textContent = "";

    cards.forEach((card) => {
      const cardImg = document.createElement("img");
      cardImg.src = card.image;
      cardImg.classList.add("card");
      const li = document.createElement("li");

      cardUL.appendChild(li);
      li.appendChild(cardImg);
    });

    remaining.innerHTML = cardsRemaining;
  } catch (err) {
    remaining.innerHTML = `Sorry there was an error.`;
  }
});
