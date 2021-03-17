const select = document.querySelector("select");
const cardDisplay = document.querySelector("#card-display");
const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
  document.querySelector('option[value][value="5"]').selected = true;
};
createOptions(10);

const button = document.querySelector("#get-cards-button");
const remainingCardsDisplay = document.querySelector("#remaining");
let deckID;

const getDeckID = async () => {
  const deckCount = await axios.get(
    `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
  );
  deckID = deckCount.data.deck_id;
};

const getDeck = async () => {
  const numOfCards = select.value;
  try {
    const drawCard = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`
    );
    let remainingCards = drawCard.data.remaining;
    const deckLength = drawCard.data.cards.length;
    cardDisplay.innerHTML = "";
    for (let i = 0; i < deckLength; i++) {
      const cardImg = document.createElement("img");
      cardImg.classList.add("card");
      cardImg.src = drawCard.data.cards[i].image;
      cardDisplay.appendChild(cardImg);
      remainingCardsDisplay.textContent = `${remainingCards} card(s) left.`;
    }
  } catch (err) {
  }
};
getDeckID();
button.addEventListener("click", getDeck);
