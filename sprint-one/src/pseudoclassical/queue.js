var Queue = function() {
  this.length = 0;
  this.start = 0;
  this.end = 0;
  this.storage = {};
};

queueMethods = {};


Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
  this.length++;
};
Queue.prototype.dequeue = function(){
  if (this.end !== this.start) {
    var result = this.storage[this.start];
    this.length--;
    this.start++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.length;
};


var line = new Queue();
