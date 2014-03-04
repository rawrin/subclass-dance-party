var BlueDancer = function(top, left, timeBetweenSteps){
	this.$node = $('<span class="blueDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};