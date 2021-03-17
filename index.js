// const { default: axios } = require("axios");

const select = document.querySelector("select");
const cardUL = document.querySelector("ul");
const form = document.querySelector("form");
const cardSubmitButton = document.querySelector("#cardButton");
const remaining = document.querySelector("#remaining");
const cardDisplaySection = document.querySelector("#card-display-section");

const cards = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};
cards(10);


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const numOfCards = Number(select.value);
  const res = await axios.get(
    `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
  );
  const deckID = res.data.deck_id;
  const res2 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`
  );
  const cardsRemaining = `${res2.data.remaining} card(s) left `;
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

});


