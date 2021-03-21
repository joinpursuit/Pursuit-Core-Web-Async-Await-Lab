document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const div = document.querySelector("div");
  const p = document.querySelector("p");

  // now create a const that will use API to get what we want..
  const shuffle = async () => {
    //This is used to get API, then using that info being specific about what info to use for ex: deckid
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    // if it doesn't work, it's cause it needs to be in (` backticks`)
    let deckID = res.data.deck_id;

    //add addEventListeneer

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      //grabbing all our 1-10 card numbers
      let options = document.querySelectorAll("option");

      //creating a variable to keep track of what index is being clicked 1-10
      let input = options[document.querySelector("select").selectedIndex].innerText;

      //create a const that will draw cards when clicked using api count based on the the deckid and input we created

      const draw = async () => {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${input}`);
        let cards = res.data.cards;
        //empty string because we will be adding images of cards or it will say undefined
        div.innerHTML = "";

        //this is telling how many cards are left obviously
        p.innerHTML = `${res.data.remaining} card(s) left.`;

        //creating a forEach loop for images of cards to add to the div
        //add class of card
        //give it a source
        //append it to the div we created

        cards.forEach((el) => {
          let img = document.createElement("img");
          img.classList.add("card");
          img.src = el.images.png;
          div.appendChild(img);
        });
      };
      draw();
      //call function
    });
  };
  shuffle();
});
