// vars that set up function
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var rad = 0;
var growing = 1;
var reqId;
//cyan
ctx.fillStyle = "#00ffff";

// retrieve buttons from index
var stop = document.getElementById("stop");
var animeight = document.getElementById("circle");
//draw the expanding circle
var drawDot = function() {
  //prevents the function from accelerating the circle each time clicked
  stopIt();
  //clears old frame
  ctx.clearRect(0,0,c.width,c.height);
  //if reaches edge, stop growing
  if(rad == c.width/2){
    growing = 0;
  }
  //if shrinks to center, start growing again
  if(rad == 0){
    growing = 1;
  }
  //expand
  if(growing){
    rad += 1;
  }
  //shrink
  else{
    rad-=1;
  }
  //draws circle
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, rad, 0, 2 *Math.PI);
  ctx.stroke();
  ctx.fill();
  //gets new frame
  reqId = window.requestAnimationFrame(drawDot);
};

var stopIt = function() {
  //stops request for next animation frame
  window.cancelAnimationFrame(reqId);
}

var dvdLogoSetup = function(){
  stopIt();
  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor( Math.random() * (c.width-rectWidth));
  var rectY = Math.floor( Math.random() * (c.height - rectHeight));

  var xVel = 1;
  var yVel = 1;

  var logo = newImage();
  logo.src = "logo_dvd.jpg";
}





//assigns functions to buttons
animeight.addEventListener("click", drawDot);
stop.addEventListener("click", stopIt);
