import MovingObject from "./movingobject";

export default class Obstacle{
  constructor(){
    this.x = 500;
    this.y = 500;
    this.height = 600;
    this.width = 680;
  }

  draw(ctx){
    const fenceSprite = new Image();
    fenceSprite.src = "src/images/fence.png";
    ctx.drawImage(fenceSprite,this.y,this.x,this.width,
      this.height,this.x,this.y,this.width,this.height);
  }

}

Object.setPrototypeOf(Obstacle.prototype, MovingObject);
