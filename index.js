
const select = document.querySelector("select");
const form = document.querySelector("form")
const button = document.querySelector("button");
const p = document.querySelector("#remaining");
const ul = document.querySelector("ul");


const cards = (num) => {
    for (let i = 1; i <= num; i++) {
        const option = document.createElement("option");
        option.textContent = i;
        option.value = i;
        // debugger;
        select.appendChild(option);
    }
    select.value = "5";
};
cards(10);

let deckId;

// const getNewDeck = async () => {
//     p.textContent = "Loading...";
//     try { 
//         setTimeout( async () => {
//             const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
//             deckId = res.data.deck_id;
//             form.style.display = "block"
//             p.textContent = ""
//         },5000)
//     } catch (err) {
//         console.log(err);
//     }
// }

// getNewDeck();

const getNewDeck = async () => {
    try { 
        const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        deckId = res.data.deck_id;
    } catch (err) {
        console.log(err);
    }
}

getNewDeck();


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const numOfCards = Number(select.value);
        const res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`);
        const remainingCards = res2.data.remaining;
        // debugger
        const cards = res2.data.cards;
        ul.innerHTML = "";
        cards.forEach(card => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = card.image;
            img.classList.add("card")
            ul.appendChild(li);
            li.appendChild(img);
        });  
        p.textContent = `${remainingCards} card(s) left.`
    } catch (err) {
        console.log(err)
    }
})

