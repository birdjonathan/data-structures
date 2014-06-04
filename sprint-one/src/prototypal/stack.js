var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;
  return newStack;
};

var stackMethods = {  
  pop: function(){ 
    this.length && this.length--;
    var result = this.storage[this.length];
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
