
var r = 0;
var g = 50;
var b=255;




function setup(){

  createCanvas(1200,400);
}


function draw(){
  r = map(mouseX, 0, 1200, 0, 255);
  g = map(mouseY, 0, 400, 0, 255);
  b = r + g;
  background(r,g,b);

  ellipse(mouseX, mouseY, 25, 25);
}
