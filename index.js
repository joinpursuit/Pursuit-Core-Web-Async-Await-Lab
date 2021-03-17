

const select = document.querySelector("select")
const button = document.querySelector("button");
const createOptions = (cards) =>{
    for(let i=1; i<=cards; i++){
        const option = document.createElement("option");
        // debugger
        option.textContent = i;
        option.value = i
        select.appendChild(option)
    }
}
createOptions(10)
const cardDecks = async (e) => {
    try{
        const numberOfCards = Number(select.value);
        const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        const cards = document.querySelector("section")
        cards.innerHTML = ""
        const deckID = res.data.deck_id
        const newcard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numberOfCards}`)
        // debugger
        newcard.data.cards.forEach(card => {
            const img = document.createElement("img");
            img.classList.add("card")
            // debugger
            img.src = card.image;
            cards.appendChild(img);
            
        const remaining = res.data.remaining;
        const renum = Number(remaining -numberOfCards)
        const p = document.getElementById("remaining");
        p.textContent = renum + " card(s) left";
        // debugger
    });
    }catch (err){
        console.log(err);
    }
}
button.addEventListener("click", cardDecks)
cardDecks()

document.querySelector( 
    "select").selectedIndex = "5";