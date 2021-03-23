document.addEventListener('DOMContentLoaded', () => {
   let deckOfCard = async () => {
      let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      console.log(res)
   }
   deckOfCard()

   let deckId = 'https://deckofcardsapi.com/api/deck/"yerp9v71ay8n"/draw/?count=2'
   let deckCount = ''

})
