const select = document.querySelector("select");
const button = document.querySelector("button");
const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(10);


const showCards = async (e) => {
  const numOfCards = Number(e.target.value);
  const section = document.querySelector("section");
  try {
    const res1 = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/`); // shuffled new deck
    const deckId = res1.data.deck_id; // saves deckID
    const res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`); // draws cards
    const cards = res2.data.cards
    debugger
    const remaining = res2.data.remaining
    const p = document.querySelector("#remaining");
    p.innerText = `${remaining} card(s) left.`
    section.innerHTML = ""
    cards.forEach((card) => {
      const img = document.createElement("img");
      img.src = card.image;
      img.classList.add("card"); //gives class name
      section.appendChild(img);
    });
    // debugger
    
  } catch (err) {
    console.log(err);
  }
};

//just want to load 5 cards to window
const fiveCards = async (e) => {
  try {
    (`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
  } catch (err) {
  console.log(err);
  }
}

select.addEventListener("change", showCards);
window.addEventListener("DOMContentLoaded", fiveCards)