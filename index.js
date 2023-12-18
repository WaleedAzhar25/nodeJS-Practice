require('dotenv').config()

const express = require("express")
const app = express()
// const port = 4000


app.get('/',(req,res) => {
    res.send("Hello World!!")
});


app.get('/home',(req,res) => {
    res.send("Home Page!")
});

app.get('/about',(req,res) => {
    res.send("<h1>About Page!<h1>")
});

app.listen(process.env.PORT, () => {
    console.log(`Example App listening on ${process.env.PORT}`);
});