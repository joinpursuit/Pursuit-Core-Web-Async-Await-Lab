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
    const cards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`
    );
    cards.data.cards.forEach((card) => {
      const img = document.createElement("img");
      img.src = cards.image;
      img.classList.add("card"); //gives class name
      section.appendChild(img);
    });
    debugger;
    const remainingCards = res2.data.card.remaining;

    const res3 = await axios.get(
      hh`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    // const shuffleDeck = res3.data.card.shuffled;

    //     const carsRemaining =
    //     const  = document.querySelector("#dog-pics");
    //     dogPics.innerHTML = "";
    //     res.data.message.forEach((dogURL) => {
    //       const img = document.createElement("img");
    //       img.src = dogURL;
    //       dogPics.appendChild(img);
    // });
  } catch (err) {
    console.log(err);
  }
};

select.addEventListener("change", showCards);
