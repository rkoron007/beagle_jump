

export default class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    // this.lastTime = 0;
    // requestAnimationFrame(this.animate(100).bind(this));
    setInterval(()=> this.game.draw(this.ctx), 200);
  }

  animate(time) {
    // const timeDelta = time - this.lastTime;
    // this.game.step(time);
    // this.lastTime = time;
    // this.game.draw(this.ctx);
    // requestAnimationFrame(this.animate.bind(this));
  }
}
