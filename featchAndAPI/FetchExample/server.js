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
        res.write(`<h1>Artists</h1>`)
        
        let fRes = await fetch('http://localhost:3001/artists');
        let artists = await fRes.json(); 
        for (let art of artists) {
            res.write(`<h2>${art.name}:</h2>`)
            res.write(`<p>Best Work: ${art.bestWork}</p>`);
            res.write(`<p>Fascism status: ${art.fascism}</p>`);
            res.write(`<p>No. of ears: ${art.ears}</p>`);
            res.write(`<p>Coolness: ${art.coolness}</p>`);
        }

        htmlEnd(res);
        }
    
    catch(err){
        res.write(`<h1>bad: ${err.message}</h1>`)
        htmlStart(res);
    }
})
app.listen(port, () => {
    console.log(`server: ${port}`)
})