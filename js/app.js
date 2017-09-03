require(["Game", "Tetris"], function(Game, Tetris) {
  function App() {
    Game.apply(this, arguments);
    canvas.width = 480;
    canvas.height = 272;
    canvas.scale = 1;

    content.load('back', 'img/back.png');
    content.load('blocks', 'img/blocks.png');
    content.load('numbers', 'img/numbers.png');

    this.hasLoad = false;
    this.tetris;
  }


  App.prototype = Object.create(Game.prototype);


  App.prototype.tick = function() {

    if (this.hasLoad) {
      this.tetris.update(input);
      this.tetris.draw(canvas.ctx);

    } else {
      this.hasLoad = content.progress() === 1;
      if (this.hasLoad) {
        this.tetris = new Tetris();
      }

    }

  };



  (function () {
    var game = new App();
    game.run();
  })();


});