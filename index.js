const select = document.querySelector("select");
const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(10);

const button = document.querySelector("button");

const showCards = async (e) => {
  const numOfCards = Number(e.target.value);
  const section = document.querySelector("section");
  try {
    const newDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/`);
    const deckId = newDeck.data.deck_id;
    const shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?deck_count=1`)
    const blah = shuffle.data
    // debugger;
    const drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}` // shows cards according to user input
    );
    drawCards.cards.forEach((card) => {
      img.innerHTML = ""
      const img = document.createElement("img");
      img.src = card.image;
      img.classList.add("card"); //gives class name
      section.appendChild(img);
    });
    debugger;
  } catch (err) {
    console.log(err);
  }
};

select.addEventListener("change", showCards);
