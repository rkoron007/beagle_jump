import MovingObject from "./movingobject";

export default class Obstacle extends MovingObject{
  constructor(x){
    super();
    this.x = x + 400;
    this.y = 470;
    this.height = 100;
    this.width = 100;
    this.obstacleSprite = new Image();
    this.obstacleSprite.src = "src/images/bush.png";
  }

  draw(ctx){
    this.x -= 15;
    ctx.drawImage(this.obstacleSprite,this.x,this.y, 110, 110);
  }

}

Obstacle.OBSTACLE_IMAGES = {
  1:"src/images/shell.png",
  2:"src/images/fence.png",
  3:"src/images/fence2.png",
  4:"src/images/cat.png",
  5:"src/images/hurdle.png",
  6:"src/images/fire.png",
  7:"src/images/bush.png",
};
