require(["game"], function(Game) {
  function App() {
    Game.apply(this, arguments);
    canvas.width = 200;
    canvas.height = 100;
    canvas.scale = 2;

  }

  App.prototype = Object.create(Game.prototype);



  (function () {
    var game = new App();
    game.run();
  })();


});