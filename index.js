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
    ul.appendChild(img);
  });
  debugger;
};

card.addEventListener("click", (e) => {
  e.preventDefault();
  drawCards();
});

// const select = document.querySelector("select");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");
let deckID = "";

const createOptions = () => {
  for (i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    if (i === 5) {
      option.selected = true;
    }
    option.textContent = i; //option.value = i;  if we use the form button this assignment of the value separates the value from the event to get the #
    select.appendChild(option);
  }
};
createOptions(10);

const newDeck = async () => {
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${select.value}`
    );
    res.data.cards.forEach((card) => {
      const li = document.createElement("li");
      li.innerHTML = "";
      ul.appendChild(li);
      const img = document.createElement("img");
      img.classList.add("card");
      img.src = card.image;
      li.appendChild(img);
      debugger;
    });
    p.textContent = `${res.data.remaining} card(s) left`;
    deckID += res.data.deck_id;
    console.log(`res = ${res}`);
    console.log(`deckID = ${deckID}`);
  } catch (err) {
    console.log(err);
  }
};

const firstDeal = async () => {
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=5`
    );
    res.data.cards.forEach((card) => {
      const li = document.createElement("li");
      li.innerHTML = "";
      ul.appendChild(li);
      const img = document.createElement("img");
      img.src = card.image;
      li.appendChild(img);
    });
    p.textContent = `${res.data.remaining} card(s) left`;
  } catch (err) {
    console.log(err);
  }
};
firstDeal();

window.addEventListener("load", (event) => {
  event.preventDefault();
  ul.textContent = "";
  newDeck();
});


