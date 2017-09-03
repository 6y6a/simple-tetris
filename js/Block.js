define(function () {

  var DrawIDs = {
    NONE: 0,
    I: 1,
    Z: 2,
    J: 3,
    L: 4,
    S: 5,
    O: 6,
    T: 7
  };

  function Block (id) {
    this.setType(id || "none");
  }

  Block.prototype.setType = function(id) {
    this.ID = typeof id === "number" ? id : DrawIDs[id.toUpperCase()];
    this.solid = this.ID !== DrawIDs.NONE;
  };

  for (var id in DrawIDs) {
    Block[id] = DrawIDs[id];
  }

  return Block;
});