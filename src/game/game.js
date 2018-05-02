import Dog from "./dog";
import Obstacle from "./obstacle";
import House from "./house";

export default class Game{
  constructor(ctx){
    this.obstacles = [];
    this.house = [];
    this.dog = new Dog();
    this.finished = false;
    this.ctx = ctx;
    this.spacePressed = false;
    this.fencesToGo = Game.FENCES_TO_WIN;
    this.set = null;

    this.loadCycle = this.loadCycle.bind(this);
  }

  loadGame() {
    this.startSprite();
    this.ctx.canvas.addEventListener('click', this.loadCycle);
  }

  loadCycle(){
    this.start();
    this.ctx.canvas.removeEventListener('click', this.loadCycle);
  }

  start() {
    this.finished = false;
    this.set = setInterval(() => this.frame(), 80);
  }


  checkObstacles(){
    if (this.fencesToGo === 1) {
      this.removeObstacles();
      this.bringUpHouse();
    } else if (this.obstacles.length < 3 && this.fencesToGo > 1)
      { this.addObstacles(); }
      this.removeObstacles();
  }

  frame(){
    //if game is finished handle
    if (this.fencesToGo <= 0){
      this.won();
      return true;
    } else if (this.finished === true) {
        this.gameOver();
        return false;
      }
    this.checkObstacles();
    this.checkCollisions();
    this.checkJumps();
    this.draw(this.ctx);
  }

  add(object) {
   if (object instanceof Obstacle) {
      this.obstacles.push(object);
    }
   if (object instanceof House) {
      this.house.push(object);
    }
  }

  draw(ctx) {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  startSprite(){
    const startSprite = new Image();
    startSprite.onload= () => {
      this.ctx.drawImage(startSprite, 300, 250, 200, 100);
    };
    startSprite.src = "src/images/start.png";
  }

  addObstacles() {
    //if won -> don't add obstacles
    if ( this.fencesToGo <= 0){ return this.won();}
    //create a random spot for the fence but make sure it's big enough
    let x;

    if (this.obstacles.length >= 1) {
      // if have obstacle make sure they are a good distance apart
      let y = Math.floor((Math.random() * 400) + 1) + 350;
      x = this.obstacles[this.obstacles.length - 1].x + y;
    } else {
      x = Math.floor((Math.random() * 1000) + 1);
      if (x < 850){
        x += 450;
      }
    }
    //choose a random number for fence image
    let imageNum = Math.floor((Math.random() * 7) + 1);
    this.add(new Obstacle(x, imageNum));
  }

  removeObstacles() {
    //if an obstacle has gone off screen - remove count down to game end
    if (this.obstacles.length >= 1 || this.fencesToGo < 3){
      if (this.obstacles[0].x < -650){
        this.obstacles.shift();
        this.fencesToGo -= 1;
      }
    }
  }

  allObjects() {
    return [].concat(this.dog, this.obstacles, this.house);
  }

  checkCollisions() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obj1 = this.dog;
      const obj2 = this.obstacles[i];
      if (obj1.collidedWith(obj2)) {
        this.obstacles = [];
        this.finished = true;
      }
    }
  }

  bringUpHouse(){
    if (this.house.length < 1){
      this.add(new House());
    }
    // const houseSprite = new Image();
    // houseSprite.onload= () => {
    // this.ctx.drawImage(houseSprite, 650, 120, 500, 500);
    // };
    // houseSprite.src = "src/images/houseSprite.png";
  }

  won() {
    if ( this.fencesToGo === 0){
      this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      this.house = [];
      const houseSprite = new Image();
      houseSprite.onload= () => {
      this.ctx.drawImage(houseSprite, 500, 120, 500, 500);
    };

      const winDogSprite = new Image();
      winDogSprite.onload= () => {
      this.ctx.drawImage(winDogSprite, 20, 390, 150,150);
      };

      const winSprite = new Image();
      winSprite.onload= () => {
        this.ctx.drawImage(winSprite, 240, 0, 300,300);
      };

      const startSprite = new Image();
      startSprite.onload= () => {
        this.ctx.drawImage(startSprite, 280, 350, 200,100);
      };

      startSprite.src = "src/images/start.png";
      winDogSprite.src = "src/images/dogWin.png";
      houseSprite.src = "src/images/houseSprite.png";
      winSprite.src = "src/images/winSprite.png";

      this.finished = true;
      this.fencesToGo = Game.FENCES_TO_WIN;
      clearInterval(this.set);
      this.ctx.canvas.addEventListener('click', this.loadCycle);
    } else {
      this.finished = false;
    }
  }

  gameOver(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.startSprite();

    const gameOverSprite = new Image();
    gameOverSprite.onload= () => {
      this.ctx.drawImage(gameOverSprite, 300, 80, 200,100);
    };

    const sadDogSprite = new Image();
    sadDogSprite.onload= () => {
      this.ctx.drawImage(sadDogSprite, 20, 360, 200,200);
    };

    sadDogSprite.src = "src/images/dog gameover.png";
    gameOverSprite.src = "src/images/gameover.png";

    this.ctx.canvas.addEventListener('click', this.loadCycle);
    this.house = [];
    this.fencesToGo = Game.FENCES_TO_WIN;
    clearInterval(this.set);
  }

  checkJumps(){
    if (this.spacePressed && this.dog.jumping === false) {
      this.dog.jump();
    }
    if (this.dog.jumping === true){
      this.dog.animateJump();
    }
  }
}


Game.FENCES_TO_WIN = 10;
Game.DIM_X = 800;
Game.DIM_Y = 600;
