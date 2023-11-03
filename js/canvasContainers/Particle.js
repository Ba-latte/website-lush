// 그라데이션을 위한 파티클(원) 클래스

import { randomNumBetween } from "../util.js";

export class Particle{
    constructor(x, y, radius, rgb){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        // 속도
        this.vx = randomNumBetween(1, 3);
        this.vy = randomNumBetween(1, 3);
        // console.log("vx : ", this.vx, "vy : ", this.vy);
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;

        this.isTouching();
    }
    // 화면에 닿았는지 체크
    isTouching(canvasWidth, canvasHeight){
        if(this.x <= 0 || this.x >= canvasWidth){
            return("touchX")
        }
        else if(this.y <= 0 || this.y >= canvasHeight){
            return("touchY")
        }
    }
    draw(ctx){
        console.log();

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
            this.x, this.y, this.radius * 0.01, 
            this.x, this.y, this.radius
        );

        gradient.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
        gradient.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);

        ctx.fillStyle = gradient;

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        ctx.fill();
    }
}