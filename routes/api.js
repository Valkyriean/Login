/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();
var app = express();


app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username=="alex" && password=='alex') {
        //能正确解析 json 格式的post参数
        res.json({"status": "success"});
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



module.exports = router;
