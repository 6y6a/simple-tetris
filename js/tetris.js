define(['Gameboard', 'StateManager'], function (Gameboard, StateManager) {

  function Tetris (){

    this.gameboard = new Gameboard() ;
    this.stat = new StateManager();



  }

  Tetris.prototype.handleInputs = function (input) {

  };

  Tetris.prototype.update = function () {
  };

  Tetris.prototype.draw = function (ctx) {
    this.gameboard.draw(ctx, this.stat);
  };

  return Tetris;
});