import Dog from "./dog.js";
import Obstacle from "./obstacle.js";
import House from "./house.js";

export default class Game{
	
  constructor(ctx,width,height){
    this.obstacles = [];
    this.house = [];
    this.dog = new Dog(width,height);
    this.finished = false;
    this.ctx = ctx;
    this.spacePressed = false;
    this.fencesToGo = Game.FENCES_TO_WIN;

    //set the frames per second
    this.then = 0;
    this.fps = 10;
    this.fpsInterval = 700 / this.fps;
    this.animationFrame = null;
    this.width=width;
    this.height=height;

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
    requestAnimationFrame(this.frame.bind(this));
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
    this.animationFrame = requestAnimationFrame(this.frame.bind(this));

    //if game is finished handle
    if (this.fencesToGo <= 0){
      this.won();
      return true;
    } else if (this.finished === true) {
        this.gameOver();
        return false;
      }
      const now = Date.now();
      const timeDelta = now - this.then;

      if (timeDelta > this.fpsInterval) {
        this.then = now - (timeDelta % this.fpsInterval);
        this.checkObstacles();
        this.checkCollisions();
        this.checkJumps();
        this.draw(this.ctx);
      }
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

  this.ctx.clearRect(0, 0, this.width, this.height);
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  startSprite(){

	const startSprite = new Image();
    startSprite.onload = () => {

      this.ctx.drawImage(startSprite, this.width/2.3, this.height/5, this.width/5, this.height/6);
     
    };
    startSprite.src = "./src/images/start.png";
  }

  addObstacles() {
    //if won -> don't add obstacles
    if ( this.fencesToGo <= 0){ return this.won();}
    //create a random spot for the fence but make sure it's big enough
    let x;
    if (this.obstacles.length >= 1) {
      // if have obstacle make sure they are a good distance apart
    
    let y = Math.floor((Math.random() * this.width*1.3)) + this.width*1.2;
      x = this.obstacles[this.obstacles.length - 1].x + y;
    } else {
     
      x = Math.floor((Math.random() * this.width*3) + 1);
     
      if (x < this.width*2.8){
        x += this.width*1.4;
      }
    }
    //choose a random number for fence image
    let imageNum = Math.floor((Math.random() * 7) + 1);
  
   this.add(new Obstacle(x,this.height, imageNum));
  }

  removeObstacles() {
    //if an obstacle has gone off screen - remove count down to game end
    if (this.obstacles.length >= 1 || this.fencesToGo < 3){
      if (this.obstacles[0].x < - this.width/1.3){
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
  }

  clearObstacles(){
    this.obstacles = [];
  }

  won() {
    if ( this.fencesToGo === 0){
      cancelAnimationFrame(this.animationFrame);
  this.ctx.clearRect(0, 0, this.width, this.height);
      this.house = [];
      const houseSprite = new Image();
      houseSprite.onload= () => {
      this.ctx.drawImage(houseSprite,this.width/1.37, this.height/3,this.width/3, this.height/1.46);
       
    };

      const winDogSprite = new Image();
      winDogSprite.onload= () => {
   
      this.ctx.drawImage(winDogSprite, this.width/1.46, this.height/1.30,this.width/6, this.height/5);//50 30
      };

      const winSprite = new Image();
      winSprite.onload= () => {
		 
       this.ctx.drawImage(winSprite, this.width/12, this.height/2.8,  this.width/2, this.height/3);
      };

      const startSprite = new Image();
      startSprite.onload= () => {
      this.ctx.drawImage(startSprite, this.width/5, this.height/5, this.width/5, this.height/6);
      };

      startSprite.src = "./src/images/start.png";
      winDogSprite.src = "./src/images/dogWin.png";
      houseSprite.src = "./src/images/houseSprite.png";
      winSprite.src = "./src/images/winSprite.png";

      this.finished = true;
      this.clearObstacles();
      this.fencesToGo = Game.FENCES_TO_WIN;
      this.ctx.canvas.addEventListener('click', this.loadCycle);
    } else {
      this.finished = false;
    }
  }

  gameOver(){
    cancelAnimationFrame(this.animationFrame);
 this.ctx.clearRect(0, 0, this.width, this.height);
    this.startSprite();

    const gameOverSprite = new Image();
    gameOverSprite.onload= () => {
     this.ctx.drawImage(gameOverSprite, this.width/2.3, this.height/2.8,this.width/5, this.height/6);
    };

    const sadDogSprite = new Image();
    sadDogSprite.onload= () => {
     
     this.ctx.drawImage(sadDogSprite, this.width/2.3, this.height/1.37,this.width/5, this.height/6);
    };

    sadDogSprite.src = "./src/images/dog gameover.png";
    gameOverSprite.src = "./src/images/gameover.png";

    this.clearObstacles();
    this.ctx.canvas.addEventListener('click', this.loadCycle);
    this.house = [];
    this.fencesToGo = Game.FENCES_TO_WIN;
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
//Game.DIM_X = 800;
//Game.DIM_Y = 600;
