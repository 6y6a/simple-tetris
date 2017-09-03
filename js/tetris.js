define(['Gameboard', 'StateManager', "Tetramino"], function (Gameboard, StateManager, Tetramino) {

  function Tetris (){

    this.gameboard = new Gameboard() ;
    this.stat = new StateManager();

    var tet = new Tetramino(Tetramino.S);

    console.log(tet.toString());
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