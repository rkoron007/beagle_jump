import MovingObject from "./movingobject";

export default class Obstacle extends MovingObject{
  constructor(x){
    super();
    this.x = x + 400;
    this.y = 470;
    this.height = 100;
    this.width = 100;
    this.fenceSprite = new Image();
    this.fenceSprite.src = "src/images/fence.png";
  }

  draw(ctx){
    this.x -= 15;
    ctx.drawImage(this.fenceSprite,this.x,this.y, 110, 110);
  }

}
