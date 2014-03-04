
var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  if (this.$node === null) {
    this.$node = $('<span class="dancer"></span>');
  }
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function() {
    that.step();
  }, this._timeBetweenSteps);
};