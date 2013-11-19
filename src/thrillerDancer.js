var ThrillerDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("thrillerdancer");
  this.$node.removeClass("dancer")
};


ThrillerDancer.prototype = Object.create(Dancer.prototype);
ThrillerDancer.prototype.constructor = ThrillerDancer;

ThrillerDancer.prototype.step = function(){
    this.oldStep();
    this.$node.toggleClass("thrillerdancerflip");
  };