export default class House {
  constructor() {
    this.x = 1000;
    this.y = 120;
    this.houseSprite = new Image();
    this.houseSprite.src = "src/images/houseSprite.png";
  }

  draw(ctx) {
    if (this.x > 500) {
      this.x -= 15;
    }
    return ctx.drawImage(this.houseSprite, this.x, this.y, 500, 500);
  }
}
