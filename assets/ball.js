class Ball {
    constructor(
        diameter = 40,
        xSpeed = 5,
        ySpeed = 5,
        growth = 1,
        x = 40,
        y = 40,
        originalDiameter = 40) {
        this.diameter = diameter;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.growth = growth;
        this.x = x;
        this.y = y;
        this.originalDiameter = originalDiameter;
    }

    on = true;
    col = {
        r: 50,
        g: 150,
        b: 200
    }
    test() {
        console.log("it works");
    }
    mouseClicked() {
        this.on = !this.on;
    }

    displayBall() {
        background(this.col.r / 4, this.col.g / 4, this.col.b / 4);
        circle(this.x, this.y, this.diameter);
        fill(this.col.r, this.col.g, this.col.b);
        //growball();
    }

    colorChange(val = false) {
        if (val) {
            this.col.r = random(0, 255);
            this.col.g = random(0, 255);
            this.col.b = random(0, 255);
            return this.col;
        }
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    growball() {
        if (this.diameter < this.originalDiameter) { //for undersize breakpoint
            this.growth *= -1;
        }
        if (this.diameter >= width / 3 || this.diameter >= height / 4) {//for oversize breakpoint
            this.growth *= -1;
        }
        this.diameter += this.growth;   //for constant growth
    }

    bounce() {

        /*  //for no screen overflow,setting max values
          var radius = this.diameter;
          var maxX = radius + this.x;
          var maxY = radius + this.y;
          var minX = this.x - radius;
          var minY = this.y - radius; */

        if (this.x >= width || this.x <= 0) {
            this.xSpeed *= -1;
            this.colorChange(true);
        }
        if (this.y >= height || this.y <= 0) {
            this.ySpeed *= -1;
            this.colorChange(true);
        }

        //growball();
        //colorChange();

    }
}