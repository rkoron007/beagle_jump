
const centerText = (ctx, text, y) => {
  let measurement = ctx.measureText(text);
  let x = (ctx.canvas.width - measurement.width) / 2;
  ctx.fillText(text, x, y);
};
