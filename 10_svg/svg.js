// Joshua Weiner
// SoftDev2 pd6
// K#10 -- Ask Circles [Change || Die]
// 2019-03-14

var svg = document.getElementById("vimage");
var clear_button = document.getElementById("clear_button");
var on_circle = false;
var node = null;

var draw_circle = function(e, on_circle, cur_node) {
    svg.childNodes.forEach(function(node) {
	if ((Math.sqrt(Math.pow((node.cx.baseVal.value - e.offsetX),2) + Math.pow((node.cy.baseVal.value - e.offsetY),2))) <= 15){
        on_circle = true;
        cur_node = node;
	}
    });

    if (on_circle) {
       if (cur_node.getAttribute("fill") == "blue"){
              cur_node.setAttribute ("fill", "red");
       }
       else{
       	   var randX = Math.floor(Math.random() * 501);
           var randY = Math.floor(Math.random() * 501);
           cur_node.setAttribute("cx", randX);
           cur_node.setAttribute("cy", randY);
           cur_node.setAttribute("fill", "blue");
       };
    }
    else {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("fill", "blue");
        circle.setAttribute("cx", e.offsetX);
        circle.setAttribute("cy", e.offsetY);
        circle.setAttribute("r", "20")
        svg.appendChild(c);
    }
}

var draw = function(e){
    on_circle = false;
    cur_node = null;
    draw_circle(e, on_circle, cur_node);
};


svg.addEventListener("click", draw);
var clear = function() {
	var dot = svg.firstChild;
	while(dot){
	    svg.removeChild(dot);
	    dot = svg.firstChild;
	}
};

clear_button.addEventListener("click", clear);
