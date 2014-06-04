var makeQueue = function(){
  // try not not reference your old code in writing the new style.
  var newQue = {};

  newQue.startPoint = 0;
  newQue.endPoint = 0;
  newQue.queSize = 0;
  newQue.storage = {}

  _.extend(newQue, queueMethods);

  return newQue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.endPoint] = value;
  this.endPoint++;
  this.queSize++;
};

// Dequeue removes from front
queueMethods.dequeue = function(){
  if (this.endPoint !== this.startPoint) {
    var result = this.storage[this.startPoint];
    this.startPoint++;
    this.queSize--;
    return result;
  }
};

queueMethods.size = function(){
  return this.queSize;
};
