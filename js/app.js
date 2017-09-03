require(["Game", "Tetris"], function(Game, Tetris) {
  function App() {
    Game.apply(this, arguments);
    canvas.width = 480;
    canvas.height = 272;
    canvas.scale = 1;

    content.load('back', 'img/back.png');
    content.load('blocks', 'img/blocks.png');
    content.load('numbers', 'img/numbers.png');

    input.bindKey('space', input.Keys.SPACE);
    input.bindKey('left', input.Keys.LEFT_ARROW);
    input.bindKey('up', input.Keys.UP_ARROW);
    input.bindKey('right', input.Keys.RIGHT_ARROW);
    input.bindKey('down', input.Keys.DOWN_ARROW);

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
        this.tetris = new Tetris(10, 22);
      }
    }

  };



  (function () {
    var game = new App();
    game.run();

    window.onblur = game.stop.bind(game);
    window.onfocus = game.run.bind(game);
  })();


});