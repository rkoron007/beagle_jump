import MovingObject from "./movingobject.js";


   // const spriteWidth = 840;
   // const spriteHeight = 185;
   // const row = 1;
   // const cols = 4;

   // const trackRight = 0;
   // const spacePressed = false;

   // const width = spriteWidth/cols;
   // const height = spriteHeight/row;

   // const curFrame = 0;
   // const frameCount = 4;


   // const x= 0;
   // const y= 0;
   //
   // const srcX=0;
   // const srcY=0;

   // const up = false;
   // const down = false;
   //
   // const speed = 12;
   const STEP_SPEED = 11;
   const JUMP_DISTANCE = 350;
   const JUMP_HEIGHT = 100;

   class Dog{
     constructor(options){
       this.x= 20;
       this.y= 350;
       this.srcX=0;
       this.srcY=0;
       this.trackRight = 0;
       this.rows = 1;
       this.columns= 4;
       this.spriteWidth = 431;
       this.spriteHeight = 93;
       this.width = this.spriteWidth/this.columns;
       this.height = this.spriteHeight/this.rows;
       this.curFrame = 0;
       this.frameCount = 4;
       this.jumpStart = null;
       this.spacePressed = false;
     }
   }

   Object.setPrototypeOf(Dog.prototype, MovingObject);

   Dog.prototype.Jumping = function(offset) {
   return this.jumpStart !== null && this.jumpDistance(offset) > 0;
  };

  Dog.prototype.jumpDistance = function(offset) {
		if (this.jumpStart === null){
      return 0;
    } else {
      return this.jumpStart + JUMP_DISTANCE - offset;
    }
	};

  Dog.prototype.startJump = function(offset) {
    this.jumpStart = offset;
  };

  Dog.prototype.jumpHeight = function(offset) {
		let dRemaining = this.jumpDistance(offset);
		if (dRemaining > 0) {
			let maxJump = JUMP_DISTANCE / 2;

			if (dRemaining >= maxJump) {
				dRemaining -= JUMP_DISTANCE;
			}
			let arcPos = Math.abs(dRemaining / maxJump);

			return JUMP_HEIGHT * arcPos;
		}
		return 0;
	};

  Dog.prototype.updateFrame = function(){
    this.curFrame = ++this.curFrame % this.frameCount;
    this.srcX = this.curFrame * this.width;
  };

  Dog.prototype.draw = function(context){
    if (this.spacePressed){
      console.log("hey");
    }
    this.updateFrame();
    context.clearRect(this.x,this.y,this.width,this.height);
    const dogSprite = new Image();
    dogSprite.src = "src/images/dogRunSmall.png";
    context.drawImage(dogSprite,this.srcX,this.srcY,this.width,
      this.height,this.x,this.y,this.width,this.height);
  };


export default Dog;
