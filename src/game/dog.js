import MovingObject from "./movingobject.js";

   const STEP_SPEED = 11;
   const JUMP_DISTANCE = 350;
   const JUMP_HEIGHT = 100;

   class Dog{
     constructor(options){
       this.x= 20;
       this.y= 460;
       this.srcX=0;
       this.srcY=0;
       this.trackRight = 0;
       this.rows = 1;
       this.columns= 4;
       this.spriteWidth = 410;
       this.spriteHeight = 120;
       this.width = this.spriteWidth/this.columns;
       this.height = this.spriteHeight/this.rows;
       this.curFrame = 0;
       this.frameCount = 4;
       this.jumpStart = false;
       this.spacePressed = false;
       this.y_velocity = 0;
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

  Dog.prototype.clearFloor = function(){
    if (this.y > 460){
      this.jumpStart = false;
      this.y = 460;
      this.y_velocity = 0;
    }
  };

  Dog.prototype.draw = function(context){

    if (this.spacePressed && this.jumpStart === false){
      this.y_velocity -= 160;
      this.jumpStart = true;
    }

    this.y_velocity += 40;
    this.y += this.y_velocity;
    this.y_velocity *= .09;

    this.clearFloor();
    this.updateFrame();

    const dogSprite = new Image();
    dogSprite.src = "src/images/dogRunBig-resize.png";
    context.drawImage(dogSprite,this.srcX,this.srcY,this.width,
      this.height,this.x,this.y,this.width,this.height);
  };


export default Dog;
