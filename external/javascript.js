// code for showing and hiding single answers

$("#q1").click(function(){
  $("#a1").toggle();
});

$("#q2").click(function(){
  $("#a2").toggle();
});

$("#q3").click(function(){
  $("#a3").toggle();
});

$("#q4").click(function(){
  $("#a4").toggle();
});

$("#q5").click(function(){
  $("#a5").toggle();
});

$("#q6").click(function(){
  $("#a6").toggle();
});

$("#q7").click(function(){
  $("#a7").toggle();
});

$("#q8").click(function(){
  $("#a8").toggle();
});

$("#q9").click(function(){
  $("#a9").toggle();
});

$("#q10").click(function(){
  $("#a10").toggle();
});

//code for showing and hiding all answers

$("#saa").click(function(){
  $("#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a10").show();
});

$("#haa").click(function(){
  $("#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a10").hide();
});

//code for theme select dropdown

$("#theme_select_btn").mouseenter(function() {
  $("#themes").show();
});

$(window).click(function() {
  $("#themes").hide();
});

//code for index theme select

$("#pine").click(function() {
  $("body").css({"background-image":"url(images/pine.png)", "background-repeat":"repeat"});
});

$("#mmarble").click(function() {
  $("body").css({"background-image":"url(images/marble.png)", "background-repeat":"repeat"});
});

$("#mgranite").click(function() {
  $("body").css({"background-image":"url(images/granite.png)", "background-repeat":"repeat"});
});

//code for quiz theme select

$("#sandstone").click(function() {
  $("body").css({"background-image":"url(../images/sandstone.png)", "background-repeat":"repeat"});
});

$("#marble").click(function() {
  $("body").css({"background-image":"url(../images/marble.png)", "background-repeat":"repeat"});
});

$("#granite").click(function() {
  $("body").css({"background-image":"url(../images/granite.png)", "background-repeat":"repeat"});
});