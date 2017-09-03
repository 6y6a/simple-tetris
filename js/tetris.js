define(['numfont'], function (Numfont) {

  function Tetris (){
    this.back = content.get('back');

    var num = content.get('numbers');
    this.font = {
      gray: new Numfont(num, 0, 9)
  }
  }

  Tetris.prototype.handleInputs = function (input) {

  };

  Tetris.prototype.update = function () {
  };

  Tetris.prototype.draw = function (ctx) {
    ctx.drawImage(this.back, 0 ,0);
    this.font.gray.draw(ctx, 42, 10, 10, 8);
  };

  return Tetris;
});