import { Clock} from './Clock.js';


class App{
    constructor(){
       this.canvas = document.getElementById('canvas');
       this.ctx = this.canvas.getContext('2d');

       window.addEventListener('resize',this.resize.bind(this));
       this.resize();

       window.requestAnimationFrame(this.animate.bind(this));


       let clockX = window.innerWidth/2;
       let clockY = window.innerHeight/2;

       this.clock = new Clock(clockX,clockY);
       
    }
    
    resize(){
       this.canvas.width= window.innerWidth;
       this.canvas.height = window.innerHeight;
        
    }

    animate(){
        this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        window.requestAnimationFrame(this.animate.bind(this));
        this.clock.drawBorder(this.ctx,window.innerWidth,window.innerHeight);
    }
} 

window.onload = ()=>{
    new App();
}