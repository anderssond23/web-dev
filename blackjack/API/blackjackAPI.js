const express = require('express');
const app = express();
const port = 3001;
let deck = [];
app.use(express.static('public'));
function buildDeck(){
deck = [
    {id: 1, suite: "Hearts", rank: "Ace", value: 11},
    {id: 2, suite: "Hearts", rank: "Two", value: 2},
    {id: 3, suite: "Hearts", rank: "Three", value: 3},
    {id: 4, suite: "Hearts", rank: "Four", value: 4},
    {id: 5, suite: "Hearts", rank: "Five", value: 5},
    {id: 6, suite: "Hearts", rank: "Six", value: 6},
    {id: 7, suite: "Hearts", rank: "Seven", value: 7},
    {id: 8, suite: "Hearts", rank: "Eight", value: 8},
    {id: 9, suite: "Hearts", rank: "Nine", value: 9},
    {id: 10, suite: "Hearts", rank: "Ten", value: 10},
    {id: 11, suite: "Hearts", rank: "Jack", value: 10},
    {id: 12, suite: "Hearts", rank: "Queen", value: 10},
    {id: 13, suite: "Hearts", rank: "King", value: 10},
    {id: 14, suite: "Clubs", rank: "Ace", value: 11},
    {id: 15, suite: "Clubs", rank: "Two", value: 2},
    {id: 16, suite: "Clubs", rank: "Three", value: 3},
    {id: 17, suite: "Clubs", rank: "Four", value: 4},
    {id: 18, suite: "Clubs", rank: "Five", value: 5},
    {id: 19, suite: "Clubs", rank: "Six", value: 6},
    {id: 20, suite: "Clubs", rank: "Seven", value: 7},
    {id: 21, suite: "Clubs", rank: "Eight", value: 8},
    {id: 22, suite: "Clubs", rank: "Nine", value: 9},
    {id: 23, suite: "Clubs", rank: "Ten", value: 10},
    {id: 24, suite: "Clubs", rank: "Jack", value: 10},
    {id: 25, suite: "Clubs", rank: "Queen", value: 10},
    {id: 26, suite: "Clubs", rank: "King", value: 10},
    {id: 27, suite: "Diamonds", rank: "Ace", value: 11},
    {id: 28, suite: "Diamonds", rank: "Two", value: 2},
    {id: 29, suite: "Diamonds", rank: "Three", value: 3},
    {id: 30, suite: "Diamonds", rank: "Four", value: 4},
    {id: 31, suite: "Diamonds", rank: "Five", value: 5},
    {id: 32, suite: "Diamonds", rank: "Six", value: 6},
    {id: 33, suite: "Diamonds", rank: "Seven", value: 7},
    {id: 34, suite: "Diamonds", rank: "Eight", value: 8},
    {id: 35, suite: "Diamonds", rank: "Nine", value: 9},
    {id: 36, suite: "Diamonds", rank: "Ten", value: 10},
    {id: 37, suite: "Diamonds", rank: "Jack", value: 10},
    {id: 38, suite: "Diamonds", rank: "Queen", value: 10},
    {id: 39, suite: "Diamonds", rank: "King", value: 10},
    {id: 40, suite: "Spades", rank: "Ace", value: 11},
    {id: 41, suite: "Spades", rank: "Two", value: 2},
    {id: 42, suite: "Spades", rank: "Three", value: 3},
    {id: 43, suite: "Spades", rank: "Four", value: 4},
    {id: 44, suite: "Spades", rank: "Five", value: 5},
    {id: 45, suite: "Spades", rank: "Six", value: 6},
    {id: 46, suite: "Spades", rank: "Seven", value: 7},
    {id: 47, suite: "Spades", rank: "Eight", value: 8},
    {id: 48, suite: "Spades", rank: "Nine", value: 9},
    {id: 49, suite: "Spades", rank: "Ten", value: 10},
    {id: 50, suite: "Spades", rank: "Jack", value: 10},
    {id: 51, suite: "Spades", rank: "Queen", value: 10},
    {id: 52, suite: "Spades", rank: "King", value: 10},
];
}
let game = {
    playerHand: [],
    dealerHand: []
}
function shuffle(deck) {
    let currentIndex = deck.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
    return deck;
}
function handValue(hand){
    let handValue = 0;
    for(card of hand){
        handValue = handValue + card.value
        console.log(handValue)
    };
    return(handValue);
}
function findWinner() {
    if (handValue(game.playerHand) > handValue(game.dealerHand) && handValue(game.playerHand) < 22){
        console.log('Player Wins!')
}
    else if (handValue(game.playerHand) == handValue(game.dealerHand)) {
        console.log('Same Value, Tied Game!')
    }
    else if (handValue(game.playerHand) && handValue(game.dealerHand) >21) {
        console.log('All Bust!')
    }
    else if(handValue(game.playerHand) < handValue(game.dealerHand) && handValue(game.dealerHand)< 22) {
        console.log('dealer wins!')
    }
};
function dealPlayerCard() {
    let card = deck.pop();
    game.playerHand.push(card);
}
function dealDealerCard() {
    let card = deck.pop();
    game.dealerHand.push(card);
}
function dealerPlays() {
    while(handValue(game.dealerHand) < 17){
        dealDealerCard();
    }       
    console.log('Dealer Hand: ');
    console.log(game.dealerHand);
    findWinner()
}
function restartGame() {
    //build deck
    buildDeck();
    //shuffle deck
    shuffle(deck);
    //deal cards
    console.log('Player Hand:')
    dealPlayerCard();
    dealPlayerCard();
    console.log(game.playerHand);
    handValue(game.playerHand);
    console.log('Dealer Hand');
    dealDealerCard();
    dealDealerCard();
    console.log(game.dealerHand);
    handValue(game.dealerHand);
}
restartGame();

app.post("/hit", (req, res) => {
    dealPlayerCard();
    console.log('Player Hand:')
    console.log(game.playerHand)
    res.json(game);
})

app.post("/stand", (req, res) => {
    dealerPlays();
    res.json(game);
})

app.get('/deck',( req, res) =>{
    res.json(deck);
})
app.get('/pHand', (req, res) =>{
    res.json(game.playerHand);
})
app.get('/dHand', (req, res) =>{
    res.json(game.dealerHand);
})

app.listen(port, () => {
    console.log(`server: ${port}`)
})