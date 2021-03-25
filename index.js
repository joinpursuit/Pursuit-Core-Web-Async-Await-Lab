const getData = async () =>{
    const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const deck = res.data
    console.log(deck)
    let {deck_id, remaining} = deck
    console.log(deck_id)
    console.log(remaining)
    
    const drawCard = () =>{
        
    }
}

getData()


