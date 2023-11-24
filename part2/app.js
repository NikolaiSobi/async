// 1.
async function shuffle(){
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    res = await axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    console.log(res.data.cards[0].value, "of", res.data.cards[0].suit)
}

shuffle()

// 2.
async function shuffleGetCards(){
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    let deckId = res.data.deck_id
    res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let value1 = res.data.cards
    res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let value2 = res.data.cards
    console.log(`${value1[0].value} of ${value1[0].suit}`)
    console.log(`${value2[0].value} of ${value2[0].suit}`)
}

shuffleGetCards()

// 3.
let deckId;
let btn = document.querySelector('#btn');
let img = document.querySelector('#card');

async function shuffle(){
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    deckId = res.data.deck_id;
}

btn.addEventListener('click', async function(){
    
    res = await axios.get((`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=10`));
    let value = res.data.cards[0].value;
    let suit = res.data.cards[0].suit;
    if(value == 10){
        img.src = `https://deckofcardsapi.com/static/img/${value[1]}${suit[0]}.png`;
    } else{
        img.src = `https://deckofcardsapi.com/static/img/${value[0]}${suit[0]}.png`;
    }
}
    
)

shuffle()