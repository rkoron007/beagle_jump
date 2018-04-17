import Game from "./src/game/game";
import Dog from "./src/game/dog";
import MovingObject from "./src/game/movingobject";
import Obstacle from "./src/game/obstacle";
import Background from "./src/game/background";
import Utility from "./src/game/utility";

const dog = new Dog();

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game");
  const ctx = canvasEl.getContext("2d");
  setInterval(() => dog.draw(ctx), 80);
});

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

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
