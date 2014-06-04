var makeStack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.length = 0;
  _.extend(newStack, stackMethods);
  return newStack;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  pop: function(){ 
   this.length && this.length--
   var result;
   result = this.storage[this.length];
   delete this.storage[this.length];
   return result;
  },

  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  size: function(){
    return this.length; 
  }
};












