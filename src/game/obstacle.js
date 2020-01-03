import MovingObject from "./movingobject";

export default class Obstacle extends MovingObject {
  constructor(x, imageNum) {
    super();
    this.x = x;
    this.y = 470;
    this.height = 100;
    this.width = 100;
    this.obstacleSprite = new Image();
    this.obstacleSprite.src = Obstacle.OBSTACLE_IMAGES[imageNum];
  }

  draw(ctx) {
    this.x -= 15;
    ctx.drawImage(this.obstacleSprite, this.x, this.y, 110, 110);
  }
}

Obstacle.OBSTACLE_IMAGES = {
  1: "src/images/shell.png",
  2: "src/images/fence.png",
  3: "src/images/fence2.png",
  4: "src/images/sheep.png",
  5: "src/images/fire.png",
  6: "src/images/bush.png",
  7: "src/images/fence.png"
};
