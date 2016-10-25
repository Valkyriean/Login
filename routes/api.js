/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();
var app = express();


app.post('/login', function (req, res) {
    //debug
    console.log("got it");

    var username = req.body.username;
    var password = req.body.password;
    if (username=="alex" && password=='alex') {
        res.json({"status": "success"});
    } else {
        res.send({"status":"error"});
    }
});



module.exports = router;
