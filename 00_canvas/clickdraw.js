// Joshua Weiner
// SoftDev2 pd06
// K #00: I See a Red Door...
// 2019-01-31

const c = document.getElementById("myCanvas"); //Canvas element
// console.log(c); //Print statement for debugging
const ctx = c.getContext("2d"); //Get context of canvas
var draw_button = document.getElementById("draw"); //Element which toggles switch between dot & rectangle drawing mode
var draw_mode = document.getElementById("mode"); //Element which displays current draw mode
var dots_state = true; //State variable of whether or not user is drawing dots

//Adds event listener to the canvas
//On mouse click within the canvas, will either create a dot or rectangle at those coordinates depending on the current state
c.addEventListener('click', function(e){
    var r = c.getBoundingClientRect(); //Gets bounding coordinates of canvas

    var x = e.clientX - r.left; //Sets current mouse x-coordinate
    var y = e.clientY - r.top; //Sets current mouse y-coordinate

    //If state is to draw dots, draw a dot at the coordinates
    if (dots_state){
        ctx.beginPath();
        ctx.ellipse(x, y, 10, 10, 0, 0, 4 * Math.PI);
        ctx.fill();
    }
    //Else, draw a rectangle at the coordinates
    else {
        ctx.fillRect(x - 20, y - 20, 40, 40);
    }
})

//Adds event listener to the toggle-drawing-mode button
//Changes the state of the button, state variable, and current display of the drawing mode
draw_button.addEventListener('click', function(){
    //If drawing dots, set toggle to on next click 'draw rectangles'
    //Set current mode to display 'dots'
    if (dots_state){
        this.innerHTML = "draw dots";
        mode.innerHTML = "Rectangles";
    }
    //Else, set toggle to on next click 'draw dots'
    //Set current mode to display 'rectangles'
    else {
        this.innerHTML = "draw rectangles";
        mode.innerHTML = "Dots";
    }
    //Changes the state with each click
    dots_state = !dots_state;
});

//Function, on click canvas will be cleared
//State remains unchanged
var clear_canvas = function() {
    ctx.clearRect(0,0, c.width, c.height);
}
