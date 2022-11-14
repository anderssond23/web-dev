const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

function htmlStart(res) {
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`)
}
function htmlEnd(res) {
    res.write(`</body>
    </html>`);
    res.end()
}
function restartGame(){
    //build deck
    app.get('/'), async (req,res) => {
    try{
        htmlStart(res);
        let fRes = await fetch('http://localhost:3001/deck');
        let deck = await fRes.json(); 
        htmlEnd(res);
        console.log(`${deck}`);
    }
    catch(err){
        res.write(`<h1>bad: ${err.message}</h1>`);
        htmlStart(res);
    }
    //shuffle deck
    function shuffle(deck){
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    //deal cards
    try{
    htmlStart(res);
    let playerHand = deck;
    playerHand.splice (2, 50);
    deck.splice (0, 2);
    res.write(`Your Hand: ${playerHand}`);
    let dealerHand = deck;
    dealerHand.splice (2, 50)
    deck.splice (0, 2);
    res.write(`Dealer hand: ${dealerHand}`);
}

catch(err){
        res.write(`<h1>bad: ${err.message}</h1>`);
        htmlStart(res);
        }
    }
}
app.post("hit", (req,res) => {
    res.json("hit");
})

app.listen(port, () => {
    console.log(`server: ${port}`)
})