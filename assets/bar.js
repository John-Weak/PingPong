class Bar {
    constructor(x, y, sizeX = width / 20, sizeY = height / 3) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;

    }

    displayBar() {
        strokeWeight(6);
        rect(this.x, this.y, this.sizeX, this.sizeY);
    }

    move() {
        if (keyIsDown(38) && (this.y >= 0)) {  //38 is the code for up arrow key
            this.y -= 7;
        }
        if (keyIsDown(40) && (this.y <= height)) {  //40 is the code for down arrow key
            this.y += 7;
        }
    }

    bounce(ballX,ballY,ballDiameter) {
        var hit = false;
        hit = collideRectCircle(this.x, this.y, this.sizeX, this.sizeY, ballX, ballY, ballDiameter);
        return hit;
    }
}