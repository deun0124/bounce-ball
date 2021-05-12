import {Ball} from './ball.js'
import {Block} from './block.js'
class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 10)
        this.block = new Block(700, 30, 300, 450);
        
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth *2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
       
        //이전프레임 지워주기 -> 움직이는 것 처럼 보임!
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight)
       
        //공, 벽돌 그리기
        this.block.draw(this.ctx);
       
        // + (블록값 매개변수에 추가해주기!)
        this.ball.draw(this.ctx, this.stageWidth, this. stageHeight, this.block)
    }
    
}

window.onload =() =>{
    new App();
}