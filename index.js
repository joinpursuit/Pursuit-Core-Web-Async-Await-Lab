document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const showDeck = document.querySelector("#selected-cards");
  const remainingNumber = document.querySelector("#remaining");

  async function newDeck() {
    const newDeck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const deckID = newDeck.data.deck_id;
    const remaining = newDeck.data.remaining;
    remainingNumber.textContent = `${remaining} card(s) left.`;

    button.addEventListener("click", (e) => {
      e.preventDefault();
      drawCards();
    });

    async function drawCards() {
      showDeck.textContent = ""
      const cardsNumber = document.querySelector("#cardsnumber").value;
      let myDeck = await axios.get(
        "https://deckofcardsapi.com/api/deck/" +
          deckID +
          "/draw/?count=" +
          cardsNumber
      );
      const remaining = myDeck.data.remaining;
      const cards = myDeck.data.cards;

      for (let card of cards) {
      
        const cardImage = document.createElement("img");
        cardImage.className = "card";
        cardImage.src = card.image;
        showDeck.appendChild(cardImage)

        cardImage.addEventListener("click", (e) => replaceCard());

        async function replaceCard() {
          const newCard = await axios.get(
            "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1"
          );
          cardImage.src = newCard.data.cards[0].image;

          const remaining = newCard.data.remaining;
          remainingNumber.textContent = `${remaining} card(s) left.`;
        }
      }
      remainingNumber.textContent = `${remaining} card(s) left.`;
    }
  }
  newDeck();
});
