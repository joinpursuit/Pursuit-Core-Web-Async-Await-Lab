// const { default: axios } = require("axios");

const select = document.querySelector("select");
const cardUL = document.querySelector("ul")
const form = document.querySelector("form")
const cardSubmitButton = document.querySelector("#cardButton");
const remaining = document.querySelector("#remaining");

const cards = (num) => {
    for (let i = 1; i <= num; i++) {
        const option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
};
cards(10);
// select.value = "5"
//   debugger;

form.addEventListener("submit", async (e) => {
e.preventDefault();
  const numOfCards = Number(select.value);

  const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);

  const deckID = res.data.deck_id;
  const cardsRemaining = `${res.data.remaining} card(s) left `;

  const res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`);

  const cards = res2.data.cards;
  
  const cardDisplaySection = document.querySelector("#card-display-section");
  cardUL.textContent = "";
  
  cards.forEach((card) => {
    const cardImg = document.createElement("img");
    cardImg.src = card.image;
    cardImg.classList.add("card");
    const li = document.createElement("li");

    cardUL.appendChild(li)
    li.appendChild(cardImg);
  
    // remaining.appendChild(cardsRemaining);
  });
});

// create event listener for the submit button
// load cards
// itterate through and display # of cards that user selects
//
