const select = document.querySelector("select");
const createOptions = (num) => {
    for (let i = 1; i <= num; i++) {
      const option = document.createElement("option");
      option.textContent = i 
      option.value = i;
      select.appendChild(option);
    }
  };
  createOptions(10);

  const section = document.querySelector("section");
  const getDeck = async () => {
      try {
          const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
          const deckId = res.data.deck_id
          const res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
          res2.data.cards.forEach((image) =>{
            const img = document.createElement("img");
            img.src = image.image;
            section.appendChild(img);
            //   section.innerHTML = image.image
            //   debugger;
          })
          
          

          
          
      } catch (error) {
          
      }
  }
  getDeck()