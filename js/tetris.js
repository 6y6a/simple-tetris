define(['Gameboard', 'StateManager'], function (Gameboard, StateManager) {

  function Tetris (){

    this.gameboard = new Gameboard() ;
    this.stat = new StateManager();
  }


  Tetris.prototype.update = function (input) {
    if (input.pressed("space")) {
      console.log('space');
    }
  };

  Tetris.prototype.draw = function (ctx) {
    this.gameboard.draw(ctx, this.stat);
  };

  return Tetris;
});