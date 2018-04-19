import MovingObject from "./movingobject.js";

   const STEP_SPEED = 11;
   const JUMP_DISTANCE = 350;
   const JUMP_HEIGHT = 100;

   class Dog extends MovingObject{
     constructor(options){
       super();
       this.x= 100;
       this.y= 470;
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

       this.jumping = false;
       this.jumpFrame = 13;
       this.y_velocity = 0;
     }
   }


  Dog.prototype.updateFrame = function(){
    this.curFrame = ++this.curFrame % this.frameCount;
    this.srcX = this.curFrame * this.width;
  };

  Dog.prototype.clearFloor = function(){
    if (this.y > 470){
      this.jumping = false;
      this.y = 470;
      this.y_velocity = 0;
    }
  };

  Dog.prototype.animateJump = function(){
    if (this.jumpFrame < 1){
      return false;
    }

    this.y -= 35;
    this.jumpFrame -= 1;
  };

  Dog.prototype.jump = function(){
    this.jumping = true;
    this.jumpFrame = 13;
    this.y -= 35;
  };

  Dog.prototype.draw = function(context){
    this.y_velocity += 20.5;
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
