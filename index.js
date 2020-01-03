import Game from "./src/game/game";

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game");
  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx);

  initListeners(game);
  game.loadGame();
});

function initListeners(game) {
  const keyDownHandler = e => {
    if (e.keyCode === 32) {
      game.spacePressed = true;
    }
  };

  const keyUpHandler = e => {
    if (e.keyCode === 32) {
      game.spacePressed = false;
    }
  };

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}
