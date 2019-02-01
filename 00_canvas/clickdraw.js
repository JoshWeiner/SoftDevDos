// Joshua Weiner
// SoftDev2 pd06
// K #00: I See a Red Door...
// 2019-01-31

const c = document.getElementById("myCanvas"); //Canvas element
// console.log(c); //Print statement for debugging
const ctx = c.getContext("2d"); //Get context of canvas
var clear_button = document.getElementById("clear");
var draw_button = document.getElementById("draw"); //Element which toggles switch between dot & rectangle drawing mode
var msg = document.getElementById("msg"); //Element which displays current draw mode
var dots_state = 0; //State variable of whether or not user is drawing dots
//If divisible by 2, draw dots, otherwise draw rectangles
var is_drawn = 0;

//Adds event listener to the canvas
//On mouse click within the canvas, will either create a dot or rectangle at those coordinates depending on the current state
c.addEventListener('click', function(e){
    var r = c.getBoundingClientRect(); //Gets bounding coordinates of canvas

    var x = e.clientX - r.left; //Sets current mouse x-coordinate
    var y = e.clientY - r.top; //Sets current mouse y-coordinate

    //If state is to draw dots, draw a dot at the coordinates
    if (dots_state % 2 == 0){
        ctx.fillStyle = "blue";
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
    if (is_drawn > 0) {
        ctx.clearRect(0,0, c.width, c.height);
        is_drawn = 0;
        msg.innerHTML = "";
    }
    else {
        event.preventDefault();
        msg.innerHTML = "You must draw in the canvas to clear it!";
    }
})
