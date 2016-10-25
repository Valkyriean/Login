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


    if(username=="alex" && password)
    res.send();
})




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


