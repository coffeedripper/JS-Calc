// num pad

$(function(){

$("#1").click(function() {
  $("#display").append("1");

});
$("#2").click(function() {
  $("#display").append("2");

});
$("#3").click(function() {
  $("#display").append("3");

});
$("#4").click(function() {
  $("#display").append("4");

});
$("#5").click(function() {
  $("#display").append("5");

});
$("#6").click(function() {
  $("#display").append("6");

});
$("#7").click(function() {
  $("#display").append("7");

});
$("#8").click(function() {
  $("#display").append("8");

});
$("#9").click(function() {
  $("#display").append("9");

});
$("#0").click(function() {
  $("#display").append("0");

});

// operators

$("#divide").click(function() {
  $("#display").append("/");

});
$("#multiply").click(function() {
  $("#display").append("*");

});
$("#add").click(function() {
  $("#display").append("+");

});
$("#subtract").click(function() {
  $("#display").append("-");

});
$("#decimal").click(function() {
  $("#display").append(".");

});
$("#equals").click(function() {
  $("#display").append("=");

});

$(".c").click(function() {
  $("#display").text(" ");

});
});
