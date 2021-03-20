const section = document.querySelector("#card-image");
const button = document.querySelector("#draw-cards-bttn");

const select = document.querySelector("select")
const options = () =>{
  for(let i=1; i<=10; i++){
    const option= document.createElement("option")
    option.textContent=i
    option.value=i
    select.appendChild(option)
  }
}
options()
select.selectedIndex="5"

let deckData;
const deckOfcards = async () => {
  try {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    deckData = response.data;
    console.log(deckData);
  } catch (err) {
    console.log("The error was thrown", err);
  }
};



const drawCards = async () => {
  try {
    let deckId = deckData.deck_id;
    const numOfCards= Number(select.value)
    let response2 = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`
      );
      section.innerHTML=""
      response2.data.cards.forEach((card) => {
        const remaining = response2.data.remaining;
        const img = document.createElement("img");
        img.classList.add("card");
        img.src = card.image;
        section.appendChild(img);
        const p = document.querySelector("#remaining");
        p.textContent = `${Number(remaining)} card(s) left.`;
      });
} catch (err) {
    console.log("The error that was thrown: ", err);
}
};





button.addEventListener("click", drawCards);
deckOfcards();