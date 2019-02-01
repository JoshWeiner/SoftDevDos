// Team !Dvorak - Joshua Weiner and Maggie Zhao
// SoftDev2 pd06
// K #01: ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById("myCanvas"); //Canvas element
// console.log(c); //Print statement for debugging
const ctx = c.getContext("2d"); //Get context of canvas
var clear_button = document.getElementById("clear"); //Element which when pressed clears the canvas
var draw_button = document.getElementById("draw"); //Element which toggles switch between dot & rectangle drawing mode

//State variable of whether or not user is drawing dots
//If divisible by 2, draw dots, otherwise draw rectangles
var dots_state = 0;

//Adds event listener to the canvas
//On mouse click within the canvas, will either create a dot or rectangle at those coordinates depending on the current state
c.addEventListener('click', function(e){

    // upon clicking (the mouseEvent), reads the X-coordinate of the mouse pointer in local (DOM content) coordinates (aka the offset in the X coordinate between the event and the padding edge of the target node)
    var x = e.offsetX;
    // upon clicking (the mouseEvent), reads the Y-coordinate of the mouse pointer in local (DOM content) coordinates (aka the offset in the Y coordinate between the event and the padding edge of the target node)
    var y = e.offsetY;


    //If state is to draw dots, draw a dot at the coordinates
    if (dots_state % 2 == 0){
        ctx.fillStyle = "blue";
        // begins a path, or any series of strokes (i.e. lines, arcs, ellipses) so that it can be drawn with different strokestyles
        ctx.beginPath();
        ctx.ellipse(x, y, 10, 10, 0, 0, 4 * Math.PI);
        ctx.fill();
    }
    //Else, draw a rectangle at the coordinates
    else {
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 40, 40);
    }
    is_drawn += 1;
})

//Adds event listener to the toggle-drawing-mode button
//Changes the current drawing mode
draw_button.addEventListener('click', function(){
    dots_state += 1;
});

clear_button.addEventListener('click', function() {
    ctx.clearRect(0,0, c.width, c.height);
})

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
