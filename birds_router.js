const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

router.get('/', function (req, res) {
    res.send('birds home page');
})

router.get('/about', function (req, res) {
    res.send('about birds');
})

module.exports = router;