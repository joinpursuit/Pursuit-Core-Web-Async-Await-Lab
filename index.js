const card = document.querySelector(".card");
const select = document.querySelector("select");
const p = document.querySelector("#remaining");
const body = document.querySelector("body");
const ul = document.querySelector("#all-cards");

const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    // img.src = [i];
    const option = document.createElement("option");
    option.textContent = i + " card(s)";
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(10);

let cards = [];
let deck_Id;
const getTheDeckOfCards = async (e) => {
  const res = await axios.get(
    `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
  );
  deck_Id = res.data.deck_id;
};
getTheDeckOfCards();

const drawCards = async () => {
  const res = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck_Id}/draw/?count=${select.value}`
  );
  res.data.cards.forEach((card) => {
    const img = document.createElement("img");
    img.src = card.image;
    ul.appendChild(img)
  });
  debugger;
};

card.addEventListener("click", (e) => {
  e.preventDefault();
  drawCards();
});
