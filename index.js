import Game from "./src/game/game";
import GameView from "./src/game/gameview";


import Dog from "./src/game/dog";
import MovingObject from "./src/game/movingobject";
import Obstacle from "./src/game/obstacle";
import Utility from "./src/game/utility";

const dog = new Dog();

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game");
  const ctx = canvasEl.getContext("2d");
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const game = new Game(dog);
  new GameView(game, ctx).start();
});

    const keyDownHandler = (e)=>{
      if(e.keyCode === 32) {
        dog.spacePressed = true;
      }
    };

    const keyUpHandler = (e) => {
      if(e.keyCode === 32) {
          dog.spacePressed = false;
      }
    };
