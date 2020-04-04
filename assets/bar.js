class bar {
    constructor(x, y, sizeX = 30, sizeY = 60,ball) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.ballDiameter=ball.diameter;
        this.ballX=ball.x;
        this.ballY=ball.y;
    }

    show() {
        stroke(50, 100, 200);
        fill(100, 100, 100, 150);
        rect(this.x, this.y, this.sizeX, this.sizeY);
    }

    move() {
        if (keyIsDown(38) && (x >= 0)) {  //38 is the code for up arrow key
            this.y += 1;
        }
        if (keyIsDown(40) && (x <= this.maxW)) {  //40 is the code for down arrow key
            this.y -= 1;
        }
    }

    bounce() {
        var hit = false;
        hit = collideRectCircle(this.x,this.y,this.sizeX,this.sizeY,ball.x,ball.y,ball.diameter);
            if(hit){
                ball.xSpeed*=-1;
            }
    }
}