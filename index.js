// data: {success: true, deck_id: "j62i7ap8nfuc", remaining: 52, shuffled: true}

const button = document.querySelector("button");
const select = document.querySelector("select");
let deckId;

const newDeck = async () => {
  try {
    let newCards = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    deckId = newCards.data.deck_id;
    // debugger
  } catch (error) {
    console.log(error);
  }
};

const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};

createOptions(10);

button.addEventListener("click", (e) => {
  // debugger
  const getCards = async () => {
    try {
      const numofCards = Number(select.value);
      const drawCards = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numofCards}`
      );
      const showCards = document.querySelector("#show-cards");
      showCards.innerText = ""
      const card = drawCards.data.cards
      for (images of card) {
        // debugger;
        const cardImage = document.createElement("img");
        cardImage.src = images.image;
        showCards.appendChild(cardImage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  getCards();
});

newDeck();
