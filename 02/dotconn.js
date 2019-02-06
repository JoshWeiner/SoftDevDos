// Team !Dvorak - Joshua Weiner and Maggie Zhao
// SoftDev2 pd06
// K02-- Connecting the Dots
// 2019-02-01

const c = document.getElementById("playground"); //Canvas element
// console.log(c); //Print statement for debugging
const ctx = c.getContext("2d"); //Get context of canvas
var clear_button = document.getElementById("clear"); //Element which when pressed clears the canvas
var is_drawn = 0; // boolean to check if any circles have been drawn
var lastx = []; // stores x-coordinates of circles drawn by clicking
var lasty = []; // stores y-coordinates of circles drawn by clicking

// Adds event listener to the canvas
// On mouse click within the canvas, will create a dot at mouse click. If it is not the first dot drawn, it will connect the center of the last dot created to the current dot.
c.addEventListener('click', function(e){

    // upon clicking (the mouseEvent), reads the X-coordinate of the mouse pointer in local (DOM content) coordinates (aka the offset in the X coordinate between the event and the padding edge of the target node)
    var x = e.offsetX;
    // upon clicking (the mouseEvent), reads the Y-coordinate of the mouse pointer in local (DOM content) coordinates (aka the offset in the Y coordinate between the event and the padding edge of the target node)
    var y = e.offsetY;


    ctx.fillStyle = "blue";
    // begins a path, or any series of strokes (i.e. lines, arcs, ellipses) so that it can be drawn with different strokestyles
    ctx.beginPath();
    ctx.ellipse(x, y, 10, 10, 0, 0, 4 * Math.PI);
    ctx.fill();

    // if there is more than 1 circle, draw a line that connects the centers of the two circles
    if (is_drawn > 0) {
        // begins a path for a line
        ctx.beginPath();
        // path starts at the x- and y- coordinates of the last circle drawn
        ctx.moveTo(lastx[lastx.length - 1], lasty[lasty.length - 1]);
        // adds a straight line to the x- and y- coordinates of the clicking
        ctx.lineTo(x,y);
        // changes the stroke color of the line to red
        ctx.strokeStyle = "red";
        // renders the line
        ctx.stroke();

    }
    // adds x and y coordinates to the appropriate arrays
    lastx.push(x);
    lasty.push(y);
    is_drawn += 1;

    circ_de_solei();
})

// Clears the canvas
clear_button.addEventListener('click', function() {
    // erases the pixels in the canvas by making them transparent black
    ctx.clearRect(0,0, c.width, c.height);
    // resets counter- no circles are on the board
    is_drawn = 0;
    // clears array of recorded coordinates
    lastx = [];
    lasty = [];
})

// Redraws circles so that lines do not cross over the circles
var circ_de_solei = function() {
    // for each recorded set of x and y coordinates, redraw the circle
    for (var i = 0; i < lastx.length; i ++) {
        ctx.beginPath();
        ctx.ellipse(lastx[i], lasty[i], 10, 10, 0, 0, 4 * Math.PI);
        ctx.fill();

    }
}

/* EXPLANATIONS
ctx.clearRect();
 - erases the pixels in the canvas by making them transparent black
e.preventDefault();
 - prevents the default action of the user's interaction of the html element.
 - This can be used for error checking / data filtering
 - Does not work for buttons, but does work for checkboxes and inputs
ctx.beginPath();
 - begins a path, or any series of strokes (i.e. lines, arcs, ellipses) so that it can be drawn with different strokestyles
 - primes the canvas to draw the specified line (stroke) between the given coordinates
 - if not to begin the path, then beginPath() resets the current path
e.offsetX
 - upon clicking (the mouseEvent), reads the X-coordinate of the mouse pointer in local (DOM content) coordinates (aka the offset in the X coordinate between the event and the padding edge of the target node)
e.offsetY
 - upon clicking (the mouseEvent), reads the Y-coordinate of the mouse pointer in local (DOM content) coordinates (aka the offset in the Y coordinate between the event and the padding edge of the target node)
ctx.moveTo(x, y);
 - begins a new subpath at the point specified by the given (x, y) coordinates
ctx.lineTo(x, y);
 - creates a straight line linking the last point of the path to the points specified by the (x, y) coordinates
 - does not directly render anything
ctx.stroke();
 - strokes (or outlines) the current path with the current stroke style
*/
