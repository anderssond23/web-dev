const express = require('express');
const app = express();
const port = 3001;

let artists = [
    {id: 1, name: "Pablo Picasso", ears: "2", coolness: "pretty cool", bestWork: "Les Demoiselles d'Avignon", fascism: "Not facist"},
    {id: 2, name: "Salvador Dali", ears: "2", coolness: "cool art but he liked Hitler", bestWork: "The Great Masturbator", fascism: "Very Facist"},
    {id: 3, name: "Edward Hopper", ears: "2", coolness: "fucking awesome (exept all the political stuff)", bestWork: "Soir Bleu", fascism: "Conservative (kinda fascist)"},
    {id: 4, name: "Vincent Van Gogh", ears: "1", coolness: "he was alright", bestWork: "Skeleton Smoking", fascism: "Not fascist"},
    {id: 8008, name: "Mich Kaufmann", ears: "2", coolness: "super fucking awesome", bestWork: "idk man", fascism: "i hope not"}
]
app.get('/artists',( req, res) =>{
    res.json(artists)
})
app.listen(port, () => {
    console.log(`server: ${port}`)
})