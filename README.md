# Beagle Jump! - a game about a dog finding way his home.

### Background and Overview

Help Max the Beagle find his way home in this fun Javascript game. Max the Beagle will be jumping over all sorts of obstacles just trying to find his way home.

The game centers around timing your jumps correctly to avoid obstacles.
![Start Screen](https://media.giphy.com/media/20IB5CvqMveCZ1mw8V/giphy.gif)

### Possible Endings
Beagle Jump features two seperate game endings based on game through the game or not
![GameOver](https://i.imgur.com/SfuNv1s.png)
![Winner](https://i.imgur.com/F7SpDZG.png)

### Jumping Fun!
One of the hardest things about this game was getting the jump animation feeling good. I've never rendering a sprite before- or really worked with canvas before- so I had my work cut out for me. I eventually ended up creating a jump cycle that relied on defining a set number of frames in the beginning and then decreasing the y axis a certain amount with each frame gone by.

Additionally I created mock-gravity by decreasing velocity on the y_axis with each frame.


```Javascript

Dog.prototype.jump = function(){
  this.jumping = true;
  this.jumpFrame = 13;
  this.y -= 35;
};

Dog.prototype.animateJump = function(){
  if (this.jumpFrame < 1){
    return false;
  }

  this.y -= 31;
  this.jumpFrame -= 1;
};


Dog.prototype.draw = function(context){
  this.y_velocity += 20.5;
  this.y += this.y_velocity;
  this.y_velocity *= .09;

  etc...
}

```

### Future features
 * There will be life system in game (each play through you start with 1 extra life to get to the end of the level. If you lose that extra life and then collide with something the game will be over)
 * Create in game item that makes you invincible for a short amount time.
 * Create in game item that gives you an extra life.
 * Create a difficulty setting that will give you more obstacles/bigger obstacles
