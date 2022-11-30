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
app.get('/', async (req,res) => {
    try{
        htmlStart(res);
        
        let fRes = await fetch('http://localhost:3001/pHand');
        let pHand = await fRes.json(); 
        res.write(`<h1>Player hand:</h1>`)
        for (let game of pHand) {
            res.write(`<p1>${game.playerHand}:</p1>`)
        }
        htmlEnd(res);
        }
    
    catch(err){
        res.write(`<p1>bad: ${err.message}</p1>`)
        htmlStart(res);
    }
})

app.listen(port, () => {
    console.log(`server: ${port}`)
})