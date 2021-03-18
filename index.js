document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    let div = document.querySelector("div")
    let p = document.querySelector('#remaining')

    const shuffle = async () => {
        
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        let deckId = res.data.deck_id

        button.addEventListener("click", event => {
            event.preventDefault()

            let options = document.querySelectorAll("option")
            let input = options[document.querySelector("select").selectedIndex].innerText

            const draw = async () => {
                let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${input}`)
                let cards = res.data.cards
                
                div.innerHTML = ""
                p.innerHTML = `${res.data.remaining} card(s) left.`

                cards.forEach(el => {
                    let img = document.createElement('img')
                    img.classList.add("card")
                    img.src = el.images.png
                    div.appendChild(img)
                })
                
            }
            draw()

        })

    }
    shuffle()
})