var Ball1;
var Bar1, Bar2;
var frameRateValue = 120;
function setup() {

  createCanvas(800, 600);
  Ball1 = new Ball();
  Bar1 = new Bar(0, 0);
  //Bar2 = new Bar();
  frameRate(frameRateValue);
}

function draw() {
  background(100, 100, 200);
  Ball1.displayBall();
  Ball1.bounce();
  Ball1.move();
  Bar1.displayBar();
  Bar1.move();
  if (Bar1.bounce(Ball1.x, Ball1.y, Ball1.diameter)) 
    Ball1.bounce(true);

}



