document.addEventListener("DOMContentLoaded", async () => {
  let form = document.getElementById("form");
  let id = await getId();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    shuffle(id);
  });
});

const shuffle = async (id) => {
  let input = document.getElementById("input").value;
  let ul = document.getElementById("ul");
  let p = document.querySelector("#remaining");
  ul.innerHTML = "";
  console.log(input);
  try {
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

const getId = async () => {
  let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new");
  return newDeck.data.deck_id;
};

const reset = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
