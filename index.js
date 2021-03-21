document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    shuffle();
  });
});

const shuffle = async () => {
  let input = document.getElementById("input").value;
  let ul = document.getElementById("ul");
  let p = document.querySelector("#remaining");
  reset(ul);
  try {
    let newDeck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
    );
    let id = newDeck.data.deck_id;
    let draw = await axios.get(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${input}`
    );
    let data = draw.data;
    let cards = data.cards;
    cards.forEach((card) => {
      let img = document.createElement("img");
      img.setAttribute("src", card.image);
      img.setAttribute("class", "card");
      ul.appendChild(img);
    });
    p.textContent = `${data.remaining} card(s) left.`;
  } catch (error) {
    console.log(error);
  }
};

const reset = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
