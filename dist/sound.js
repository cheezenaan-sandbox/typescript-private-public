'use strict';
var Sample = /** @class */ (function() {
  function Sample() {}
  Sample.prototype.public = function() {
    this.private();
    return 'Public method!';
  };
  Sample.prototype.private = function() {
    return 'Private method!';
  };
  return Sample;
})();
var sample = new Sample();
sample.public();
