var makeQueue = function(){
  var someInstance = {};
  
  var size = 0;
  var start = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

// Enqueue adds to end
  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
    size++;
  };

// Dequeue removes from front
  someInstance.dequeue = function(){   
    if (start !== end){
     var result = storage[start];
     start++;
     size--;
     return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
