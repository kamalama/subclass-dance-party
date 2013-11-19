// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);

  this.step();
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
  }, this.timeBetweenSteps);
};
