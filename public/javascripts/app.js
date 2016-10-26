var url = "http://localhost:3000/api/login";

var init = function() {
  $("#Button").click(function(e) {
    e.preventDefault();
    var text = document.getElementById("EnterText").value;
    var password = document.getElementById("EnterPassword").value;


    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        //"cache-control": "no-cache",
        //"postman-token": "111a5e94-6cf4-0e6c-915a-84d49505e7f0"
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