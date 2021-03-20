const form = document.querySelector("form");
const select = document.querySelector("select");
const p = document.querySelector("#remaining")
const section = document.querySelector("section");

let deckId
const getDeck = async (e) => {
  try {
    const res = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      deckId = res.data.deck_id;
      debugger
  } catch (error) {
    console.log(error);
  }
};
getDeck();

form.addEventListener("submit", async (e) => {
  try {
      e.preventDefault();
      const res2 = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${Number(
          select.value
        )}`
      );
      section.textContent = "";
      const remaining = res2.data.remaining 
      p.textContent = `${remaining} card(s) left.`
      res2.data.cards.forEach((image) => {
        const img = document.createElement("img");
        img.classList.add("card")
        img.src = image.image;
        section.appendChild(img);
        // remaining--
      });
      debugger
    } catch (error) {
      console.log(error);
    }
});
