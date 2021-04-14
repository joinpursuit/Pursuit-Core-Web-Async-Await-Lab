const select = document.querySelector("select");
const button = document.querySelector("button");
const createOptions = (cards) => {
  for (let i = 1; i <= cards; i++) {
    const option = document.createElement("option");
    // debugger
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(10);
let deck;
const newSetOfDeck = async () => {
    try{
        const res = await axios.get(
            "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
            );
            deck = res.data;
    }catch (err) {
        console.log(err);
    }
};

const cardDecks = async () => {
  try {
      let deckID = deck.deck_id;
      const numberOfCards = Number(select.value);
      const cards = document.querySelector("section");
      cards.innerHTML = "";
      const newcard = await axios.get(
          `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numberOfCards}`
          );
          // debugger
          newcard.data.cards.forEach((card) => {
              const img = document.createElement("img");
              img.classList.add("card");
              // debugger
              img.src = card.image;
              cards.appendChild(img);
              const remaining = newcard.data.remaining;
              const p = document.getElementById("remaining");
              p.innerText = parseInt(remaining) + " card(s) left.";
              p.value = parseInt(remaining);
              debugger;
            });
        } catch (err) {
            console.log(err);
        }
    };
button.addEventListener("click", cardDecks);
cardDecks();
newSetOfDeck();

document.querySelector("select").selectedIndex = "5";
