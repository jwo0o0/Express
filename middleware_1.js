const express = require('express');
const app = express();
const port = 8080;

const myLogger= function (req, res, next) {
    console.log('LOGGED');
    next();
}

app.get('/', function (req, res) {
    res.send('hello world!');
})

app.use(myLogger);

app.listen(port);