define(['Gameboard',
        'StateManager',
        "Tetramino",
        "Block"],
  function (Gameboard, StateManager, Tetramino, Block) {

  function Tetris (cols, rows){
    this.cols = cols;
    this.rows = rows;


    this.gameBoard = new Gameboard() ;
    this.stat = new StateManager();



    this.blockControl = [];

    this.reset();


  }

  Tetris.prototype.reset = function() {
    this.frames = 1;

    this.blockControl = [];
    for (var i = 0; i < this.cols; i++) {
      this.blockControl[i] = [];
      for (var j = 0; j < this.rows; j++) {
        this.blockControl[i][j] = new Block(Block.I);
      }
    }


    this.currentTetramino = new Tetramino(Tetramino.S);
    this.currentTetramino.setTo(this.blockControl);
  };


  Tetris.prototype.update = function (input) {
    this.currentTetramino.setTo(this.blockControl, Block.NONE);

    if (this.frames++ % 20 === 0) {
      this.moveDown();
    }

    this.currentTetramino.setTo(this.blockControl);
  };

  Tetris.prototype.moveDown = function() {
    var bc = this.blockControl,
      ct = this.currentTetramino;

    if (ct.check(bc, 0, 1)) {
      ct.y += 1;
    }
  };

  Tetris.prototype.draw = function (ctx) {
    this.gameBoard.draw(ctx, this.stat);

    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        var b = this.blockControl[i][j];
        if (b.solid) {
          this.gameBoard.drawBlock(ctx, b, i, j);
        }
      }
    }
  };

  return Tetris;
});