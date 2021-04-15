
document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    let cardDisplay = document.querySelector("div")
    let left = document.querySelector('#remaining')
    const shuffle = async () => {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        let deckId = res.data.deck_id
        button.addEventListener("click", event => {
            event.preventDefault()
            let input = (document.querySelectorAll("option")[document.querySelector("select").selectedIndex].innerHTML)
            const draw = async () => {
                let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${input}`)
                let cards = res.data.cards
                cardDisplay.innerHTML = ""
                left.innerHTML = `${res.data.remaining} card(s) left.`
                cards.forEach(el => {
                    let img = document.createElement('img')
                    img.classList.add("card")
                    img.src = el.images.png
                    cardDisplay.appendChild(img)
                })

            }
            draw()

        })

    }
    shuffle()
}) 