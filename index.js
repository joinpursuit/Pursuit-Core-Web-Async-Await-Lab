// - Creates and shuffles a new deck when the page loads.
// - Includes a `<select>` element and a button to draw 1-10 cards from that deck.
// - Displays those cards to the user.
// - When the user clicks the button again, draws another set of cards from that same deck.
// - Shows the user how many cards remain in the deck, and updates this number every time cards are drawn.

const select = document.querySelector("#select-cards");

const createOptions = () => {
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    select.appendChild(option);
    if (option.textContent === "5") {
      option.id = "five";
      document.getElementById("five").selected = "true";
    }
  }
};
createOptions();

const getCards = async (event) => {
  let numCards = select.value;
  try {
    const res1 = await axios.get(`https://deckofcardsapi.com/api/deck/new/`);
    const resId = res1.data.deck_id;
    const res2 = await axios.get(
      `https://deckofcardsapi.com/api/deck/${resId}/draw/?count=${numCards}`
    );

    const displayCards = document.querySelector("#display-cards");
    const numOfCards = res.data.cards;
    numOfCards.forEach((el) => {
      const img = document.createElement("img");
      img.src = el.image;
      displayCards.appendChild(img);
    });

    const remaining = document.getElementById("remaining");
    remaining.textContent = `${res.data.remaining} card(s) remaining`;
  } catch (err) {
    console.log(err);
  }
};

let cardsButton = document.querySelector("#cards-button");
cardsButton.addEventListener("click", getCards);
