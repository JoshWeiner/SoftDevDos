var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var img = document.getElementById("img");
var rad = 0;
var growing = 1;
var up = 1;
var left = 1;

var reqId;


ctx.fillStyle = "#00ffff";


var stop = document.getElementById("stop");
var animeight = document.getElementById("circle");

var dvd = function() {
    stopIt();
    ctx.clearRect(0,0, c.width, c.height);
    if (image.length)

    ctx.beginPath();
    ctx.drawImage(image, dx, dy);
    ctx.stroke();
    ctx.fill();
    reqId = window.requestAnimationFrame(drawDot);
}

var drawDot = function() {
  stopIt();

  ctx.clearRect(0,0,c.width,c.height);

  if(rad == c.width/2){
    growing = 0;
  }
  if(rad == 0){
    growing = 1;
  }
  if(growing){
    rad += 1;
  }
  else{
    rad-=1;
  }
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, rad, 0, 2 *Math.PI);
  ctx.stroke();
  ctx.fill();
  reqId = window.requestAnimationFrame(drawDot);
};

var stopIt = function() {
  window.cancelAnimationFrame(reqId);
}

animeight.addEventListener("click", drawDot);
stop.addEventListener("click", stopIt);
