export default class MovingObject {
  constructor(x, y, h, w) {
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
  }

  collidedWith(shape) {
    let minheight = (this.height + shape.height) / 2;
    if (this.x > shape.x - 40 && this.y - minheight >= 295 && shape.x > 30) {
      return true;
    } else return false;
  }
}
