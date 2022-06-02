export class Clock {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;
        this.radius = (((this.stageWidth)) - (10 / 100 * this.stageWidth))/2
         this.dx = 0;
         this.dy = 0;
        this.angle = 0;
    }

    drawBorder(ctx) {
        this.sizeUpdate();
        ctx.fillStyle = 'black';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,0,Math.PI*2);
       ctx.stroke();
       this.drawClockDot(ctx);
       this.drawArrow(ctx);
    }

    drawArrow(ctx){
        // this.dx = this.x + (Math.cos(this.angle * (Math.PI / 180)) * this.radius);
        // this.dy = this.y + (Math.sin(this.angle * (Math.PI / 180)) * this.radius);
        
        // if(this.angle > 360){
        //     this.angle = 0;
        // }
        
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.radius-10,5);
        ctx.fill();
         
        // this.angle += 1;
    }
    drawClockDot(ctx){
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x,this.y,10,0,Math.PI*2);
        ctx.fill();
    }
    
    sizeUpdate(){
        this.radius = (((window.innerWidth)) - (10 / 100 * window.innerWidth))/3
        this.x = window.innerWidth /2;
        this.y = window.innerHeight/2;
    }




}