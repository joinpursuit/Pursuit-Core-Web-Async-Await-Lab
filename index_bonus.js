const select = document.querySelector('select');
const cardDisplay = document.querySelector('#card-display');
const createOptions = (num) => {
    for(let i = 1; i <= num; i++) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
    document.querySelector('option[value][value="5"]').selected = true;
}
createOptions(10);
const button = document.querySelector('#get-cards-button');
const remainingCardsDisplay = document.querySelector('#remaining');
let deckID;
let remainingCards;
let cardImg;

const getDeckID = async () => {
    const deckCount = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    deckID = deckCount.data.deck_id;
    remainingCards = deckCount.data.remaining;
    remainingCardsDisplay.textContent = `${remainingCards} card(s) left.`;
}

const getDeck = async () => {
    const numOfCards = select.value;
    try {
        const drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numOfCards}`);
        const deckLength = drawCard.data.cards.length;
        remainingCards = drawCard.data.remaining;
        cardDisplay.innerHTML = '';
        for(let i = 0; i < deckLength; i++){
            cardImg = document.createElement('img');
            cardImg.classList.add('card');
            cardImg.src = drawCard.data.cards[i].image;    
            cardDisplay.appendChild(cardImg);
            remainingCardsDisplay.textContent = `${remainingCards} card(s) left.`;
        }
    } catch (err) {
        console.log(err);
    }
}
getDeckID();
button.addEventListener('click', getDeck);

const pickCard = async (e) => {
    const drawNewCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
    const deckLength2 = drawNewCard.data.cards.length;
    remainingCards = drawNewCard.data.remaining;
    const card = e.target;
    for(let i = 0; i < deckLength2; i++){
        card.src = drawNewCard.data.cards[i].image;
        remainingCardsDisplay.textContent = `${remainingCards} card(s) left.`;
    }
    console.log(drawNewCard);
    console.log(card)
}
cardDisplay.addEventListener('click', pickCard);