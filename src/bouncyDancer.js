var BouncyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("bouncydancer");

  this.bounceHeight = Math.random() * 50;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
    this.oldStep();
    this.$node.animate({
      top: '-=' + this.bounceHeight + 'px'
    });
    this.$node.animate({
      top: '+=' + this.bounceHeight + 'px'
    })
};