class Obstacle{
  constructor(x,y,h,w){
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
  }

  contains(x, y){
    if ( x >= this.x && x <= this.x + this.width &&
      y >= this.y && y <= this.y + this.height){
        return true;
      } else {
        return false;
      }
  }

  collides(shape){
    if (this.contains(shape.x, shape.y) ||
    this.contains(shape.x + shape.width, shape.y ) ||
    this.contains(shape.x, shape.y + shape.height) ||
    this.contains(shape.x + shape.width, shape.y + shape.height))
      {
        return true;
      } else if ( shape.contains(this.x, this.y) ||
      shape.contains(this.x + this.width, this.y ) ||
      shape.contains(this.x, this.y + this.height) ||
      shape.contains(this.x + this.width, this.y + this.height)){
        return true;
      }
      return false;
  }

  draw(ctx, color){
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}
