var url = "http://localhost:3000/api/login";

var init = function() {
    $("#Button").click(function(e) {
        e.preventDefault();
        var text = document.getElementById("EnterText").value;
        var password = document.getElementById("EnterPassword").value;


        // $.post(
        //   url,
        //     "{\"username\":\""+text+"\",\"password\":\""+password+"\"}",
        //   function(response){
        //       alert(text+password);
        //       alert("Login "+response.status);
        //   }, "json"
        // );
        var settings = {
            "url": url,
            "method": "POST",
            "headers": {
            "content-type": "application/json",
        },
        "data": "{\"username\":\""+text+"\",\"password\":\""+password+"\"}"
        }

    $.ajax(settings).done(function (response) {
      console.log(response.status);
      alert("Login "+response.status)
    });
  });
};

$(document).ready(init);