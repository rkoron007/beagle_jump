import Game from "./src/game/game.js";



import Dog from "./src/game/dog.js";
import MovingObject from "./src/game/movingobject.js";
import Obstacle from "./src/game/obstacle.js";


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game");
  const ctx = canvasEl.getContext("2d");
  var width = canvasEl.width;
  var height = canvasEl.height;

  const game = new Game(ctx, width, height);


  initListeners(game);
  game.loadGame();


});

function initListeners(game) {

  const keyDownHandler = (e) => {
    if (e.keyCode === 32) {
      game.spacePressed = true;
    }
  };

  const keyUpHandler = (e) => {
    if (e.keyCode === 32) {
      game.spacePressed = false;
    }
  };

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}
