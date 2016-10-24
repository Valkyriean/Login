
var inite=function(){
  console.log("Hellow world");
  $("#bot" ).click(function() {
    alert( "Yes you did it" );
      $(".bot").css("background-color","D5FFFD");
      $(".block1").css("color","red");
    // $("body").css("background-color","red");
  });
}

$(document).ready(inite);
