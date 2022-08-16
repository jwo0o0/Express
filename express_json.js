const express = require('express');
const app = express();
const jsonParser = express.json({strict: false});

app.use(jsonParser);

app.get('/', function (req, res) {
    res.json(`user is ${req.body}.`);
})

app.listen(8080);