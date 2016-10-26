/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
    //debug
    console.log("got it");

    var username = req.body.username;
    var password = req.body.password;
    if (username=="alex" && password=='alex') {
        //能正确解析 json 格式的post参数
        console.log(username);
        console.log(password);
        res.json({"status": "success"});
        console.log("success");
    } else {
        console.log(username);
        console.log(password);
        res.send({"status":"error"});
        console.log("error");
    }
});


module.exports = router;
