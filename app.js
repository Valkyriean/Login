/**
 * Created by Alexander on 17/10/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');

var app = express();


app.use(express.static('public'));
app.use('/api',api);
app.use(express.json());
app.use(express.bodyParser());


app.post('/', function (req, res) {


    if(username=="alex" && password)
    res.send();
})


app.post('/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    res.set('Content-Type', 'application/json; charset=utf-8');
    if (username=="alex" && password=='alex') {
        //能正确解析 json 格式的post参数
        res.send({"status": "success"});
    } else {
        //不能正确解析json 格式的post参数
        var body = '', jsonStr;
        req.on('data', function (chunk) {
            body += chunk; //读取参数流转化为字符串
        });
        req.on('end', function () {
            //读取参数流结束后将转化的body字符串解析成 JSON 格式
            try {
                jsonStr = JSON.parse(body);
            } catch (err) {
                jsonStr = null;
            }
            if(username=="alex" && password){
                jsonStr ? res.send({"status":"success"}) : res.send({"status":"error"});
            }
        });
    }
});

// app.post('/', function(req, res) {
//     ans=req.getJSON('')
//     console.log(req.body);
// });


// app.get('/', function(req, res) {
//     res.send()
//     console.log(req.body);
// });


// app.get('/', function (req, res) {
//     res.send('go to /api/login please');
// });

app.listen(3000);

// app.get('/school', function (req, res) {
//     res.send('RDFZ');
// });
//
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//
//     console.log('Example app listening at http://%s:%s', host, port);
// });


