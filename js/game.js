define(function () {

  var _vendors = ["o", "ms", "moz", "webkit"];

  for (i = _vendors.length; i-- && !window.requestAnimationFrame;) {
    var v = _vendors[i];
    window.requestAnimationFrame = window[v + "RequestAnimationFrame"];
    window.cancelAnimationFrame = window[v + "CancelAnimationFrame"] ||
                                  window[v + "CancelRequestAnimationFrame"];


  }

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
      input.clearPressed();
      canvas.flip();
    }
    this._reqframe = window.requestAnimationFrame(loop);
  };

  return Game;
});