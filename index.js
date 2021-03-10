const button = document.querySelector("button");
const counter = document.querySelector("select");
const cardsList = document.getElementById("cards-list");
const remainingIndicator = document.getElementById("remaining");

// It'd be fine to put these in the HTML too. We just didn't want to copy & paste so much 😉
for (let i = 1; i <= 10; i += 1) {
  const option = document.createElement("option");
  option.text = i;
  option.value = i;
  counter.appendChild(option);
}

counter.selectedIndex = 4;

async function main() {
  const newDeckResponse = await axios(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const { deck_id: deckId, remaining } = newDeckResponse.data;

  button.addEventListener("click", drawCards);

  remainingIndicator.textContent = `${remaining} card(s) left.`;

  async function drawCards() {
    const count = counter.value;
    const drawCardsResponse = await axios(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
    );
    const { cards, remaining } = drawCardsResponse.data;

    cardsList.innerHTML = "";

    for (const card of cards) {
      const cardImage = document.createElement("img");
      cardImage.className = "card";
      cardImage.src = card.image;
      cardsList.appendChild(cardImage);
    }

    remainingIndicator.textContent = `${remaining} card(s) left.`;
  }
}

window.addEventListener("load", main);
