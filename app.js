/**
 * Created by Alexander on 17/10/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');

var app = express();


app.use(express.static('public'));
app.use('/api',api);
app.use(bodyParser.json());


app.post('/', function (req, res) {
    //debug
    console.log("got it");

    var username = req.body.username;
    var password = req.body.password;
    if (username=="alex" && password=='alex') {
        //能正确解析 json 格式的post参数
        res.json({"status": "success"});
    } else {
        res.send({"status":"error"});
    }
});



app.listen(3000);

