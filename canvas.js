$(document).ready(function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  var globalAlpha = 1;

  function drawBorder(){
    context.strokeRect(0,0, size.x, size.y);
  }

  function drawSquare(color) {
    var startX = Math.floor(Math.random()*size.x);
    var startY = Math.floor(Math.random()*size.y);
    var endX = Math.floor(Math.random()*(size.x - startX) + startX);
    var endY = Math.floor(Math.random()*(size.y - startY) + startY);
    context.fillStyle = color;
    context.fillRect(startX, startY, endX, endY);
    context.globalAlpha = globalAlpha;
    globalAlpha -= 0.1;
  }

  function drawCircle(color) {
    var startX = Math.floor(Math.random()*size.x);
    var startY = Math.floor(Math.random()*size.y);
    var radius = Math.floor(Math.random()*size.y/2);
    context.beginPath();
    context.arc(startX, startY, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.stroke();
    context.globalAlpha = globalAlpha;
    globalAlpha -= 0.1;
  }

  $("#canvas").on("click", function() {
    context.fillStyle = "blue";
    context.fillRect(0, 0, size.x/2, size.y/2);
  });

  $("#canvas").on("dblclick", function() {
    context.fillStyle = "red";
    context.fillRect(size.x/2, size.y/2, size.x, size.y);
  });

  $("button").on("click", function() {
    var random = Math.round(Math.random());
    if (random === 1) {
      drawCircle($(this).html());
    } else {
      drawSquare($(this).html());
    }
  });

  $("#clear").on("click", function() {
    context.clearRect(0, 0, size.x, size.y);
    globalAlpha = 1;
    context.globalAlpha = globalAlpha;
    drawBorder();
  });

  drawBorder();
});
