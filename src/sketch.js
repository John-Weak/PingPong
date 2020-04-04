var Ball1;
function setup() {

  createCanvas(800, 600);
   Ball1 = new Ball();
  
  //frameRate(frameRateValue);
}

function draw() {
  background(100, 100,200);
  Ball1.displayBall();
  Ball1.bounce();
  Ball1.move();
}



