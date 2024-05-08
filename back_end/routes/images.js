var express = require('express');
var fs = require('fs')
var router = express.Router();

router.post('/', function(req, res, next) {
    res.send('success')
});

module.exports = router;