import Dog from "./dog";
import Obstacle from "./obstacle";

export default class Game{
  constructor(ctx){
    this.obstacles = [];
    this.house = [];
    this.dog = new Dog();
    this.finished = false;
    this.ctx = ctx;
    this.spacePressed = false;
    this.fencesToGo = 3;

    this.loadCycle = this.loadCycle.bind(this);
  }

  add(object) {
   if (object instanceof Obstacle) {
      this.obstacles.push(object);
    }
  }


  addObstacles() {
    if ( this.fencesToGo <= 0){
      return this.won();
    }
    let y = Math.floor((Math.random() * 800) + 1);
    if (y < 200){
      y += 200;
    }
    this.add(new Obstacle(y));
    this.fencesToGo -= 1;
  }

  removeObstacles() {
    if (this.obstacles[0].x < -150){
      this.obstacles.shift();
    }
  }

  won() {
    if ( this.fencesToGo <= 0){
      const houseSprite = new Image();
      houseSprite.src = "src/images/houseSprite.png";
      this.ctx.drawImage(houseSprite,500, 140, 500, 500);
      return true;
    } else {
      return false;
    }
  }

  allObjects() {
    return [].concat(this.dog, this.obstacles);
  }

  checkCollisions() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obj1 = this.dog;
      const obj2 = this.obstacles[i];
      if (obj1.collidedWith(obj2)) {
        // const collision = obj1.collideWith(obj2);
        // if (collision) return;
      }
    }
  }


  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }


  checkJumps(){
    if (this.spacePressed && this.dog.jumping === false) {
      this.dog.jump();
    }
    if (this.dog.jumping === true){
      this.dog.animateJump();
    }
  }


  frame(){
    if (this.obstacles.length < 1){ this.addObstacles(); }
    this.removeObstacles();
    this.checkCollisions();
    this.checkJumps();

    if ( this.won() !== true){
      this.draw(this.ctx);
    }
    // else if ( ){
    //
    // }
    //handle game over
  }

  gameOver(){

  }


  start() {
    setInterval(()=>this.frame(), 80);
  }

  loadCycle(){
    this.start();
    this.ctx.canvas.removeEventListener('click', this.loadCycle);
  }

  loadGame() {
    const startSprite = new Image();
    startSprite.onload= () => {
      this.ctx.drawImage(startSprite, 300, 250, 200,100);
    };
    this.ctx.canvas.addEventListener('click', this.loadCycle);
    startSprite.src = "src/images/start.png";
  }
}





Game.NUM_OBSTACLES = 2;
Game.DIM_X = 800;
Game.DIM_Y = 600;
