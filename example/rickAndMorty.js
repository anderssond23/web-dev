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
app.get('/', async (req, res) =>{
    try {
    htmlStart(res);
    res.write(`<h1>Funny awesome page</h1>`);

    let fRes = await fetch('https://rickandmortyapi.com/api/character');
    let data = await fRes.json(); 
    for (let person of data.results) {
        res.write(`<h1>${person.name}:</h1>`)
        res.write(`<p1>Gender: ${person.gender} </p1>`)
        res.write(`<p1>Status: ${person.status} </p1>`)
    }
    htmlEnd(res);
    }
    catch(err) {
        res.write(`<h1>bad ${err.message}</h1>`)
        htmlStart(res);
    }
});
app.listen(port, () => {
    console.log(`server: ${port}`)
});