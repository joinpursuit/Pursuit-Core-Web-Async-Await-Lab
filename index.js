const select = document.querySelector("select");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");
let deckID = "";

const createOptions = () => {
  for (i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    if(i === 5) {
        option.selected = true;
    }
    option.textContent = i;
    select.appendChild(option);
  }
};
createOptions(10);

const newDeck = async () => {
  try {
    const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    deckID += res.data.deck_id;
    console.log(`res = ${res}`)
    console.log(`deckID = ${deckID}`)
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("load", (event) => {
    newDeck();   
});


const dealCards = async () => {
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${select.value}`
    );
    debugger;
    res.data.cards.forEach((card) => {
      const li = document.createElement("li");
      li.innerHTML = "";
      ul.appendChild(li);
      const img = document.createElement("img");
      img.classList.add("card");
      img.src = card.image;
      li.appendChild(img);
      debugger
    });
    
    p.textContent = `${res.data.remaining} card(s) left.`;
  } catch (err) {
    console.log(err);
  }
};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  ul.textContent = "";
  dealCards();
});
