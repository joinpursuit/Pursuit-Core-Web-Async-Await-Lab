const button = document.querySelector("button");
const counter = document.querySelector("select");
const cardsList = document.getElementById("cards-list");

for (let i = 1; i <= 10; i += 1) {
  const option = document.createElement("option");
  option.text = i;
  option.value = i;
  counter.appendChild(option);
}

counter.selectedIndex = 4;

async function getFetchJson(route) {
  const response = await fetch(route);

  return await response.json();
}

async function main() {
  const { deck_id: deckId } = await getFetchJson(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );

  button.addEventListener("click", drawCards);

  async function drawCards() {
    const count = counter.value;
    const { cards } = await getFetchJson(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
    );

    cardsList.innerHTML = "";

    for (const card of cards) {
      const cardImage = document.createElement("img");
      cardImage.className = "card";
      cardImage.src = card.image;
      cardsList.appendChild(cardImage);
    }
  }
}

window.addEventListener("load", main);
