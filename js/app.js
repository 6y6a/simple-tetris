require(["game"], function(Game) {
  function App() {
    Game.apply(this, arguments);
    canvas.width = 480;
    canvas.height = 272;
    canvas.scale = 1;

    content.load('back', 'img/back.png');
    content.load('blocks', 'img/blocks.png');
    content.load('numbers', 'img/numbers.png');
  }


  App.prototype = Object.create(Game.prototype);


  App.prototype.tick = function() {
    if (content.progress() === 1) {
      canvas.ctx.drawImage(content.get('back'), 0, 0);
    }
  };



  (function () {
    var game = new App();
    game.run();
  })();


});