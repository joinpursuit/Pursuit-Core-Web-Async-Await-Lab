const select = document.querySelector('select');
const cardDisplay = document.querySelector('#card-display');
const createOptions = (num) => {
    for(let i = 1; i <= num; i++) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
    // document.querySelector('option[value][value="5"]').selected = true;
}
createOptions(10);
// console.log(selectedOption)
// selectedOption.selected = true;
const button = document.querySelector('#get-cards-button');
const remainingCardsDisplay = document.querySelector('#remaining-cards');
const getDeck = async (e) => {
    const numOfCards = Number(e.target.value);
    const deckCount = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    const deckID = deckCount.data.deck_id;
    const drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`);
    try {
        let remainingCards = drawCard.data.remaining;
        console.log(drawCard.data);
        const deckLength = drawCard.data.cards.length;
        button.addEventListener('click', () => {
            cardDisplay.innerHTML = '';
            for(let i = 0; i < deckLength; i++){
                const cardImg = document.createElement('img');
                cardImg.classList.add('.card');
                cardImg.src = drawCard.data.cards[i].image;
                cardDisplay.appendChild(cardImg);
                // console.log(drawCard.data.cards[i]);
                remainingCardsDisplay.textContent = `${remainingCards} card(s) left`;
            }
        });
        console.log(remainingCards);
    } catch (err) {
        console.log(err);
    }
}
select.addEventListener('change', getDeck);
// button.addEventListener('click', () => {console.log('help')});