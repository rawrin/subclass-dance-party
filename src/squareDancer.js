var SquareDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="squareDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};