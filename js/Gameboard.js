define(['Numfont'], function (Numfont) {
  function Gameboard() {
    this.back = content.get('back');
    this.blocks = content.get('blocks');

    var num = content.get('numbers');
    this.font = {
      gray  : new Numfont(num,  0, 9),
      cyan  : new Numfont(num,  9, 9),
      red   : new Numfont(num, 18, 9),
      blue  : new Numfont(num, 27, 9),
      orange: new Numfont(num, 36, 9),
      green : new Numfont(num, 45, 9),
      yellow: new Numfont(num, 54, 9),
      purple: new Numfont(num, 63, 9)
    };
  }

  Gameboard.prototype.draw = function (ctx, stat) {
    var tet = stat.tetraminos;
    ctx.drawImage(this.back, 0 ,0);

    this.font.orange.draw(ctx, tet.L, 432,  52, 5);
    this.font.cyan.draw(  ctx, tet.I, 432,  76, 5);
    this.font.purple.draw(ctx, tet.T, 432, 100, 5);
    this.font.green.draw( ctx, tet.S, 432, 124, 5);
    this.font.red.draw(   ctx, tet.Z, 432, 148, 5);
    this.font.yellow.draw(ctx, tet.O, 432, 172, 5);
    this.font.blue.draw(  ctx, tet.J, 432, 196, 5);

    this.font.gray.draw(ctx, tet.Total, 425, 221, 6);
  };

  Gameboard.prototype.drawBlock = function (ctx, block, x, y) {
    var id = block.ID,
        size = 13;

    x = 100 + size*x;
    y = 100 + size*y;

    ctx.drawImage(this.blocks, id * (size - 1), 0, size, size, x, y, size, size);

  }

  return Gameboard;
});