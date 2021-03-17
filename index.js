const form = document.querySelector("form");
const select = document.querySelector("select");
const p = document.querySelector("#remaining")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const section = document.querySelector("section");
  const getDeck = async (e) => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const deckId = res.data.deck_id;
      const res2 = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${Number(
          select.value
        )}`
      );
      section.textContent = "";
      p.textContent = ""
      res2.data.cards.forEach((image) => {
        const img = document.createElement("img");
        img.classList.add("card")
        img.src = image.image;
        section.appendChild(img);
      });
      const remaining = res2.data.remaining 
      p.textContent = `${remaining} card(s) left.`
    } catch (error) {
      console.log(error);
    }
  };
  getDeck();
});
