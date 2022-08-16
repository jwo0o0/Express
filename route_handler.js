const express = require('express');
const app = express();
const port = 8080;

app.route('/book')
    .get(function (req, res) {
        res.send("get a random book");
    })
    .post(function (req, res) {
        res.send("add a book");
    })
    .put(function (req, res) {
        res.send("update the book");
    });

app.listen(port);