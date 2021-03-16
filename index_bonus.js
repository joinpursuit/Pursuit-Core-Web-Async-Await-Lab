document.addEventListener("DOMContentLoaded", deckAPI)
async function deckAPI(){
    const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    deckId = deck.data.deck_id
    const button = document.querySelector("button")
    button.addEventListener("click", getCards)
    async function getCards(){
        const div = document.querySelector("div")
        div.innerHTML = ""
        const numOfCards = document.querySelector("select").value
        const cardRemain = document.querySelector("#card-remain")
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`)
        for(const card of response.data.cards){
            const img = document.createElement("img")
            img.className = "card"
            img.src = card.image
            img.addEventListener("click", replaceCard)
            async function replaceCard(e){
                const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
                e.target.src = response.data.cards[0].image
                cardRemain.textContent = response.data.remaining
            }
            div.appendChild(img)
        }
        cardRemain.textContent = response.data.remaining
    }
}