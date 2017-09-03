define (function () {
  function StateManager() {
    this.reset();
  }

  StateManager.prototype.reset = function () {
    this.tetraminos = {
      L: 0,
      I: 0,
      T: 0,
      S: 0,
      Z: 0,
      O: 0,
      J: 0,
      Total: 0
    }
  };

  StateManager.prototype.incTetramino = function (id){
    this.tetraminos[id] += 1;
    this.tetraminos.Total += 1;
  }



  return StateManager;
});