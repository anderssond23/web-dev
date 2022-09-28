const express = require('express');
const app = express();
const port = 3000;

let people = [ 
    {firstName: "", lastName: ""},
]

function remButt(){
    console.log("should remove")
};

app.use(express.urlencoded({extended: false}))

function htmlStart(res)
{
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`);
}

function htmlEnd(res)
{
    res.write(`</body>
    </html>`);
    res.end()
}

app.get('/', (req, res) => {
    htmlStart(res, "basedPage");
    htmlEnd(res);
})
app.post('/', (req, res) => {

people.push({firstName: req.body.firstName, lastName: req.body.lastName});

htmlStart(res, "basedPage");
for (let peep of people){
    res.write(
        `
        <p>${peep.firstName} ${peep.lastName}</p>
        <button onclick="remButt()">remove</button>
        `
    );
    }
        htmlEnd(res);
    console.log(req.body.firstName);
})

app.listen(port, () => {
    console.log(`its on port ${port}`);
})