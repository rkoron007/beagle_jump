# Beagle Jump! - a game about a dog finding way his home.

### Background and Overview

Help Max the Beagle find his way home in this fun Javascript game. Max the Beagle will be jumping over all sorts of obstacles just trying to find his way home.

The game centers around timing your jumps correctly to avoid obstacles.
![Start Screen](https://media.giphy.com/media/20IB5CvqMveCZ1mw8V/giphy.gif)

### Possible Endings
Beagle Jump features two seperate game endings based whether a player is able to reach the end of the game or not.

#### GameOver
Though our beagle hero jumps over fences, sheep, and flames I wanted to keep the gameover light.
![GameOver](https://i.imgur.com/SfuNv1s.png)

The beagle can't even look at you! It really makes you want to play again right?

#### Winner
The Victory Screen shows Max at home....but you know you want to play again! So there is a start button there just for you.

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

### Music Makes a Game
I really wanted some peppy 8-bit inspired songs as the background for this game.

``` Javascript
//find a random number for our next song-> but make sure its before we click
let songNum = Math.floor((Math.random() * 4) + 1);

document.getElementById("nextSong").addEventListener("click", () => {
  //all the in game songs.
  const songs = {
    1: "src/music/katamari.mp3",
    2: "src/music/animalcrossing.mp3",
    3: "src/music/gin.mp3",
    4: "src/music/zelda.mp3"
  }

  //find our audio tag
  let nextAudio = document.getElementById('gamemusic');

  // Now here is the fun part- make sure our current song isn't equal to the last song we played.
  let songNum2 = Math.floor((Math.random() * 4) + 1);

  while (songNum === songNum2){
    songNum2 = Math.floor((Math.random() * 4) + 1);
  }

  // Then we go ahead and play our new song
  songNum = songNum2;
  nextAudio.src = songs[songNum2];
  nextAudio.load();
  nextAudio.play();
})

```

### Future features
 * There will be life system in game (each play through you start with 1 extra life to get to the end of the level. If you lose that extra life and then collide with something the game will be over)
* With the life system I'll need in game item that gives you an extra  life.
 * I want to create in game item that makes you invincible for a short amount time and has cool sound effect or special effect.
 * For the future I think it'd be super fun to make a difficulty setting that will give you more obstacles/bigger obstacles
