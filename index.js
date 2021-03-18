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
  try {
    const res1 = await axios.get(`https://deckofcardsapi.com/api/deck/new/`);
    const cardDeck = res1.data.deck_id;
    const res2 = await axios.get(
      `https://deckofcardsapi.com/api/${cardDeck}/draw/?count=${numOfCards}`
    );
    const remainingCards = res2.data.card.remaining;
    const res3 = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    const shuffleDeck = res3.data.card.shuffled;

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
