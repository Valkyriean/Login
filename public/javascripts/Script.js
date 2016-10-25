/**
 * Created by david on 16/6/25.
 */


var url = "http://localhost:3000/api/login";

function test() {
    alert("Hello!")
}
function getName(name) {
    var result = prompt("Sorry, then your name is...", name)
    return result
}
function getOriginalName() {
    var name = prompt("Your name is...")
    return name
}

var init = function() {
    $("#Button").click(function() {
        var text = document.getElementById("EnterText").value;
        var password = document.getElementById("EnterPassword").value;
        // $.ajax({
        //     "url": "locolhost:3000",
        //     "method": "POST",
        //     "data": {
        //         "name" : text,
        //         "password" : password
        //     },
        //     "crossDomain": true,
        //     "async": true
        // });
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "111a5e94-6cf4-0e6c-915a-84d49505e7f0"
            },
            "data": "{\"username\":\""+text+"\",\"password\":\""+password+"\"}"
        }

        $.ajax(settings).done(function (response) {
            alert()
        });

        var settings1 = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/login",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "ac82e977-a2ea-1843-3cb5-bd78e1b06fee"
            },
            "data": "{\"username\":\"ii\",\"password\":\"alex\"}"
        }

        $.ajax(settings1)
            .done(function (response) {alert(success)});
    });
};

$(document).ready(init);