const { urlencoded } = require("express");
const express = require("express");
const port=3000;
const app=express();
var session = require('express-session')

let userData=[
    {username: "", password: ""}
]
let currentUser;
let newPost=[
    {post: ""}
]
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "awesomeSecret04",
    saveUninitialized:true,
    cookie: { maxAge: oneDay, secure:false },
    resave: false 
}));
app.use(urlencoded({extended: false}))
app.use(express.static('public'));

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

app.post('/register', (req,res) => {

    for(let user of userData){
        if(user.username===req.body.username){
        htmlStart(res)
            res.write(`
            <p>username already registered</p>
            <a href=register.html>Retry</a>`)
        htmlEnd(res);
        }
    }
userData.push({username: req.body.username, password: req.body.password});
    htmlStart(res);
        res.write(
            `
            <p>You're registered!</p>
            <a href=login.html>Login</a>
            `
        );
    htmlEnd(res);
})
app.post('/login', (req,res) => {
    for(let user of userData){
        if(user.username===req.body.username && user.password===req.body.password){
            req.session.currentUser = user.username;
            console.log(req.session.currentUser)
            res.redirect('actualPage.html')
            return;
    }
}
    htmlStart(res);
        res.write(
            `
            <p>invalid username or passord</p>
            <a href=login.html>Retry</a>
            `
        )
    htmlEnd(res);
})
app.post('/logout', (req,res) => {
    req.session.currentUser=undefined;
    res.redirect('index.html');
})
app.post('/post', (req, res) => {
    for(let newP of newPost){
        console.log(`post: ${newP}`);
    };
})
app.listen(port, () => {
    console.log(`its on port ${port}`)});

