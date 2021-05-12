export class Ball{
    constructor(stageWidth, stageHeight, radius, speed){
        this.radius = radius;
        // x와 y의 속도를 조절하는 vx, vy
        this.vx = speed;
        this.vy = speed;

        // 스테이지에 랜덤으로 공이 위치 할 수 있도록 정의
        const diameter = this.radius*2;
        this.x=diameter +(Math.random() * stageWidth -diameter);
        this.y=diameter +(Math.random() * stageHeight -diameter);
        
        
    }
    // cavas에 그림을 그릴 수 있도록 만들기
    draw(ctx,stageWidth,stageHeight,block){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth,stageHeight);
        
        // 공 위치 파악해서 반사값 정의하기
        this.bounceBlock(block);
       
        // 공 색 정하고 그림 그리기!
        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
        ctx.fill();

      
    }

    //스테이지에 닿는지 안닿는지 판단
    bounceWindow(stageWidth, stageHeight){

        const minX = this.radius;
        const maxX = stageWidth -this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;


        // 스테이지에 닿았다면 -1을 곱해 반대로 공이 튕기도록
        if(this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y <= minY ||this.y >= maxY){
            this.vy *=-1;
            this.y += this.vy;
        }
    }

    bounceBlock(block) { 
        const minX = block.x - this.radius;
        const maxX = block.maxX +this.radius;
        const minY = block.y - this. radius;
        const maxY = block.maxY + this.radius;

        if(this.x > minX && this.x < maxX && this.y > minY &&this.y < maxY){
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x -maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min1 = Math.min(x1, x2)
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1, min2);

            if(min == min1){
                this.vx *= -1;
                this.x += this.vx;

            }else if(min == min2){
                this.vy *= -1;
                this.y += this.vy;
                
            }
        }

        console.log(minX, maxX, minY, maxY)
       
    }

    
}