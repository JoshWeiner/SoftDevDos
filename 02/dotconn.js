// Team !Dvorak - Joshua Weiner and Maggie Zhao
// SoftDev2 pd06
// K #01: ...and I want to Paint It Better
// 2019-02-01

const c = document.getElementById("playground"); //Canvas element
// console.log(c); //Print statement for debugging
const ctx = c.getContext("2d"); //Get context of canvas
var clear_button = document.getElementById("clear"); //Element which when pressed clears the canvas
var is_drawn = 0;
var lastx = [];
var lasty = [];

//Adds event listener to the canvas
//On mouse click within the canvas, will create a dot at mouse click. If it is not the first dot drawn, it will connect the center of the last dot created to the current dot.
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

    if (is_drawn > 0) {
        ctx.beginPath();
        ctx.moveTo(lastx[-1], lasty[-1]);
        ctx.lineTo(x,y);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();

        circ_de_solei();

    }
    lastx.append(x);
    lasty.append(y);
    is_drawn += 1;

})

clear_button.addEventListener('click', function() {
    ctx.clearRect(0,0, c.width, c.height);
    is_drawn = 0;
})

var circ_de_solei = function() {
    for (int i = 0; i < lastx.length; i ++) {
            ctx.beginPath();
            ctx.ellipse(lastx[i], lasty[i], 10, 10, 0, 0, 4 * Math.PI);
            ctx.fill();
    }
}

/* EXPLANATIONS
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
*/
