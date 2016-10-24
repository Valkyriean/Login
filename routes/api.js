/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();
// var app = express();


router.get('/login', function (req, res) {
    res.send('Welcome');
});


module.exports = router;
