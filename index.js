const select = document.querySelector("select");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");

const createOptions = () => {
  for (i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    //option.value = i;  if we use the form button this assignment of the value separates the value from the event to get the #
    select.appendChild(option);
  }
};
createOptions(10);

form.addEventListener("submit", (event) => {
event.preventDefault()
    // const loadedDeck = () => { 
    ul.textContent = ""        
        fetch (`https://deckofcardsapi.com/api/deck/new/draw/?count=${select.value}`)
        .then (res =>{
            return res.json()
        }).then (res =>{
            res.cards.forEach((card) => {
                
                const li = document.createElement("li");
                li.innerHTML = "" 
                ul.appendChild(li);
                const img = document.createElement("img"); 
                img.src = card.image
                li.appendChild(img)
                
            })
            p.textContent = `${res.remaining} card(s) left`
            // return res.message
        })
    })
// })
