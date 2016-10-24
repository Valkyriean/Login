
var inite=function(){
  console.log("Hellow world");
  $("#bot" ).click(function() {
    alert( "Yes you did it" );
      $(".bot").css("background-color","D5FFFD");
      $(".block1").css("color","red");
      // $.post();//发出用户名密码
    // $("body").css("background-color","red");
  });
}

$(document).ready(inite);
