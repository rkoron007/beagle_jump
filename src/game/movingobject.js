export default class MovingObject {
  constructor(x, y, h, w) {
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
  }

  collidedWith(shape) {

    let minheight = (this.dogSizeY + shape.height) / 2;

    if ((this.dogSizeX > (shape.x - 25)) && ((shape.y - minheight) >= 60) && (shape.x > 100)) {//295
      return true;
    } else
      return false;
  }
}
