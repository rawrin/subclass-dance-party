var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = this.step;
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype.step = function(){
  oldStep();
  blinkyDancer.$node.toggle();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

/*sinon.spy(blinkyDancer.$node, 'toggle');
blinkyDancer.step();
expect(blinkyDancer.$node.toggle.called).to.be.true;*/