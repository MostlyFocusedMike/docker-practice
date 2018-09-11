// const http = require('http')
// let foo = 0;
// http.createServer(function (req, res) {
//     res.write('Hello there my good friend named ' + process.env.NAME);
//     res.end();
// }).listen(8000)

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.json({variable: process.env.NAME});
    console.log("I AM A  LOOOOGGGG")
})

app.listen(8000)