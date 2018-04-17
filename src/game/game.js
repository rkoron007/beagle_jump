import Dog from "./dog";
import Obstacle from "./obstacle";

export default class Game{
  constructor(dog){
    this.obstacles = [];
    this.dog = dog;
    this.finished = false;
  }

  add(object) {
   if (object instanceof Obstacle) {
      this.obstacles.push(object);
    }
  }


  addObstacles() {
  for (let i = 0; i < Game.NUM_OBSTACLES; i++) {
    this.add(new Obstacle());
    }
  }


  allObjects() {
  return [].concat(this.dog, this.obstacles);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.collidedWith(obj2)) {
          return console.log("hello!");
          // const collision = obj1.collideWith(obj2);
          // if (collision) return;
        }
      }
    }
  }


  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.addObstacles();
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  step(time) {
  this.checkCollisions();
  }
}





Game.NUM_OBSTACLES = 2;
Game.DIM_X = 800;
Game.DIM_Y = 600;
