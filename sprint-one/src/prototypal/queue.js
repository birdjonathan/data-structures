var makeQueue = function() {
   var newQueue = Object.create(queueMethods);
    newQueue.storage = {};
    newQueue.end = 0;
    newQueue.start = 0;
    newQueue.length = 0;

    return newQueue;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods =  {};

queueMethods.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
  this.length++;
};
queueMethods.dequeue = function(){
 if (this.start !== this.end){
  var result = this.storage[this.start];
  this.length--;
  this.start++;
  return result;
  }
};

queueMethods.size = function(){
  return this.length;
};





