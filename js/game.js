define(function () {

  function Game() {
    this._reqframe;
  }

  Game.prototype.tick = function () {
    //console.log('перезаписать');

  };

  Game.prototype.run = function () {

    var self = this;
    function loop() {
      self._reqframe = window.requestAnimationFrame(loop);
      self.tick();
      canvas.flip();
    }
    this._reqframe = window.requestAnimationFrame(loop);
  };

  return Game;
});