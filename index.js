// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
// https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
// https://deckofcardsapi.com/api/deck/new/

document.addEventListener("DOMContentLoaded", async (e) => {
	const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/");
	const deckId = deck.data.deck_id;
	const cardsRemaining = deck.data.remaining;

	const button = document.querySelector("#btn");
	button.addEventListener("click", async (e) => {
		const numOfCards = document.querySelector("#get-cards");
		const num = Number(numOfCards.value);
		const cards = await axios.get(
			`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${num}`
		);

		cards.data.cards.forEach((card) => {
			const img = document.createElement("img");
			img.src = card.image;

			document.body.appendChild(img);
		});
		// image
		// length
		// remaining
		// debugger;
	});
});
