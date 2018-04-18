# Beagle Jump! - a game about a dog finding way his home.

### Background and Overview

Help Max the Beagle find his way home in this fun Javascript game. Max the Beagle will be jumping over all sorts of obstacles just trying to find his way home.

This game will center around timing your jumps correctly to avoid obstacles.


### Functionality & MVP  

In Beagle Jump users can:
- [ ] make the Dog jump
- [ ] see the background moving from right to left
- [ ] reach the end goal -> resulting in a win screen
- [ ] Can Collide with obstacles -> resulting in a game over screen
- [ ] Jump over different obstacles
- [ ] Start, pause, restart (via winning or losing) the game

In addition, this project will have:
- [ ] The rules of the game on the start screen.

### Wireframes
This app will consist of a single screen with the simulation canvas, start button(with rules above it), and nav links to my Github rep for the project and my LinkedIn.  

The game will initialize will a picture of a beagle and the start button visible.

![beagle start](https://i.imgur.com/Fs7GjNp.png)


The rules for the game will be above the button- once start is pressed the game will begin and a pause button icon will be visible in the top right-hand corner.


![beagle start](https://i.imgur.com/S3Bjf9b.png)


Gameover screen will have a button to restart.


![beagle end](https://i.imgur.com/KG9bcoW.png)


Players win when they reach the house at the end- the victory sceen will have a picture of the Beagle's home with the beagle looking happy. There will be a repaly button on this screen.


![win screen](https://i.imgur.com/vamq3Oz.png)


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic
- `HTML5 Canvas` for rendering
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be four scripts involved in this project:

`background.js`: this script will handle the logic for rendering the background moving continuously from left to right by creating and updating the necessary DOM elements.

`dog.js`: this script will house the physics logic for Beagle movement and collision logic for fences.

`obstructions.js`: this script will handle generating various fences with collision logic.

`utility.js`: this script will house the constructor and other basic utility functions.

### Implementation Timeline

**Over the weekend**:
- [x] Do Mozilla Game Tutorial for a better grip on for to make a single page game.
- [x] Reserach any relevant libraries that would help in the creation of my game.
- [x] Start creating sprite Sheets for in game movement.
- [x] Research how to animate a sprite in html5.

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  Goals for the day:
<<<<<<< HEAD
- [ ] Get `webpack` serving files and frame out index.html
- [ ] Create or Find sprites for dog, fences and any other in game objects
- [ ] Create game backgrounds
=======
- [X] Get `webpack` serving files and frame out index.html
- [X] Create or Find sprites for dog, fences and any other in game objects
- [X] Create game backgrounds
>>>>>>> 5d73a72657a8b4e4c502d2cc7a4bea094f35788d

**Day 2**: Create in game logic for the dog jumping. Create fence collision physics. Goals for the day:

- [ ] Create Jump Logic for dog.rb
- [ ] Create Collision Logic for dog.rb and obstruction.rb.
- [ ] Build the start page with button to start the game


**Day 3**: Build the in game logic for the user winning and losing the game. Goals for the day:
- [ ] Create gameover and game won end pages
- [ ] Make sure that starting, stopping, and resetting the game works.
- [ ] Have functional window of canvas that will correctly render in game events.


**Day 4**: Get everything working and looking as good as possible! Goals for the day:

- [ ] Try to wrap everything up and get the game as playable as possible.
- [ ] Style and polish the game
- [ ] Style and design the outer window for the canvas.



### Bonus features
- [ ] There will be life system in game (each play through you start with 1 extra life to get to the end of the level. If you lose that extra life and then collide with something the game will be over)
- [ ] Create in game music that is able to be muted.
- [ ] Create in game item that makes you invincible for a shot amount time.
- [ ] Create different kinds of obstacles (wider and smaller)
