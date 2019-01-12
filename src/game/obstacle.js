import MovingObject from "./movingobject.js";

export default class Obstacle extends MovingObject {
  constructor(x, y, imageNum) {
    super();
    this.x = x;

    this.y = y / 1.29;//1.30

    this.height = y / 5.02;//orig 100//4.95
    this.width = y / 1.97//orig 100//1.87
    this.obstacleSprite = new Image();
    this.obstacleSprite.src = Obstacle.OBSTACLE_IMAGES[imageNum];
  }

  draw(ctx) {
    this.x -= 15;//15
    ctx.drawImage(this.obstacleSprite, this.x, this.y, this.width, this.height);//orig 110 110
  }

}

Obstacle.OBSTACLE_IMAGES = {
  1: "src/images/shell.png",
  2: "src/images/fence.png",
  3: "src/images/fence2.png",
  4: "src/images/sheep.png",
  5: "src/images/fire.png",
  6: "src/images/bush.png",
  7: "src/images/fence.png",
};
