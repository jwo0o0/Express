const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
    res.send('Hello world!');
})

app.post('/', function (req, res) {
    res.send('Got a post request');
})

app.delete('/', function (req, res) {
    res.send('Got a delete request');
})

app.listen(port);