const select = document.querySelector("select");
const button = document.querySelector("button");
const form = document.querySelector("#form")
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

form.addEventListener("submit", (e) => {
    e.preventDefault()
const cardDecks = async (e) => {
  try {
    const numberOfCards = Number(select.value);
    const res = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const cards = document.querySelector("section");
    cards.innerHTML = "";
    const deckID = res.data.deck_id;
    const newcards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numberOfCards}`
    );
    newcards.data.cards.forEach((card) => {
      const img = document.createElement("img");
      img.classList.add("card");
      img.src = card.image;
      cards.appendChild(img);

      const remaining = newcards.data.remaining;
      const p = document.getElementById("remaining");
      p.textContent = remaining + " card(s) left";
    });
  } catch (err) {
    console.log(err);
  }
};
cardDecks();
})


document.querySelector("select").selectedIndex = "5";
