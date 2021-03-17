// - Creates and shuffles a new deck when the page loads.
// - Includes a `<select>` element and a button to draw 1-10 cards from that deck.
// - Displays those cards to the user.
// - When the user clicks the button again, draws another set of cards from that same deck.
// - Shows the user how many cards remain in the deck, and updates this number every time cards are drawn.

const select = document.querySelector('#select-cards')

const createOptions = (num)=>{
    for(let i=1; i<= num; i++) {
        const option = document.createElement('option')
        option.textContent = i
        select.appendChild(option)
    }
}
createOptions(10)

const getCards = async (event) => {
 let numCards = select.value;
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${numCards}`
    );
    debugger;
  } catch (err) {
    console.log(err);
  }
};

let cardsButton = document.querySelector("#cards-button");
cardsButton.addEventListener("click", getCards);
