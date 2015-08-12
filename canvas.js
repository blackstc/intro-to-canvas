$(document).ready(function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };

  function drawBorder(){
    context.strokeRect(0,0, size.x, size.y);
  }

  drawBorder();

  $("#canvas").on("click", function() {
    context.fillStyle = "blue";
    context.fillRect(0, 0, size.x/2, size.y/2);
  });

  $("#canvas").on("dblclick", function() {
    context.fillStyle = "red";
    context.fillRect(size.x/2, size.y/2, size.x, size.y);
  });

  $("#red").on("click", function() {
    var startX = Math.floor(Math.random()*size.x);
    var startY = Math.floor(Math.random()*size.y);
    var endX = Math.floor(Math.random()*(size.x - startX) + startX);
    var endY = Math.floor(Math.random()*(size.y - startY) + startY);
    context.fillStyle = $(this).html();
    context.fillRect(startX, startY, endX, endY);
  });

$("#blue").on("click", function() {
    var startX = Math.floor(Math.random()*size.x);
    var startY = Math.floor(Math.random()*size.y);
    var endX = Math.floor(Math.random()*(size.x - startX) + startX);
    var endY = Math.floor(Math.random()*(size.y - startY) + startY);
    context.fillStyle = $(this).html();
    context.fillRect(startX, startY, endX, endY);
  });

$("#green").on("click", function() {
    var startX = Math.floor(Math.random()*size.x);
    var startY = Math.floor(Math.random()*size.y);
    var endX = Math.floor(Math.random()*(size.x - startX) + startX);
    var endY = Math.floor(Math.random()*(size.y - startY) + startY);
    context.fillStyle = $(this).html();
    context.fillRect(startX, startY, endX, endY);
  });

$("#orange").on("click", function() {
    var startX = Math.floor(Math.random()*size.x);
    var startY = Math.floor(Math.random()*size.y);
    var endX = Math.floor(Math.random()*(size.x - startX) + startX);
    var endY = Math.floor(Math.random()*(size.y - startY) + startY);
    context.fillStyle = $(this).html();
    context.fillRect(startX, startY, endX, endY);
  });



});
