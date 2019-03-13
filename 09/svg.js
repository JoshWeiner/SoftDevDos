// Joshua Weiner
//SoftDev2 pd06
//K #09: Connect the Dots. . .
//2019-03-13

//svg to be drawn on
var svg = document.getElementById("vimage");
//Clear Button
var clear_button = document.getElementById("clear_button");
//Coordinates of prior circle
var lastX;
var lastY;
//state variable for drawing dots vs circles
var started = 0;

var draw_circle = function(e) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "20");
    circle.setAttribute("fill", "blue");
    circle.setAttribute("stroke", "blue");
    svg.appendChild(circle);
};

var draw_line = function(e) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lastX);
    line.setAttribute("y1", lastY);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
}

var draw = function(e) {
    draw_circle(e);
    if (started % 2 != 1){
      started += 1;
    }
    else {
        draw_line(e);
    }
    lastX = e.offsetX;
    lastY = e.offsetY;
}

var clear = function(e) {
    while(svg.lastChild){
	svg.removeChild(svg.lastChild);
    }
  started = 0;
}

clear_button.addEventListener("click", clear);
svg.addEventListener("click", draw);
