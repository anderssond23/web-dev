const { appendFile } = require("fs")
console.log('hello')
function hit(){
    console.log('hit')
    fetch('http://localhost:3001/hit', {method:'post'})
        .then(data => data.json())
        .then(game => {
            console.log(game);
        })
}
function stand(){
    console.log('stand')
    fetch('http://localhost:3001/stand', {method:'post'})
        .then(data => data.json())
        .then(game => {
            console.log(game);
        })
}