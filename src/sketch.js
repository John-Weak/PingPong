let Ball1;
let Bar1, Bar2;
let frameRateValue = 120;
function setup() {
  createCanvas(1920, 1080);
  Ball1 = new Ball();
  Bar1 = new Bar(0, 0);
  //Bar2 = new Bar();
  frameRate(frameRateValue);
  resizeCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    factor = windowHeight;
    factdiv = 1080;
  } else {
    factor = windowWidth;
  }
}

function draw() {
  background(100, 100, 200);
  Ball1.displayBall();
  Ball1.bounce();
  Ball1.move();
  Bar1.displayBar();
  Bar1.move();
  if (Bar1.bounce(Ball1.x, Ball1.y, Ball1.diameter)) Ball1.bounce(true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (windowHeight > windowWidth) {
    factor = windowHeight;
    factdiv = 1080;
  } else {
    factor = windowWidth;
    factdiv = 1920;
  }
}
