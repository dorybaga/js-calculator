/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function(){

  var memory = 0;
  var total = 0;

  var calculator = {
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number } current total
   */

  load: function(x){
    if (x === "number"){
      total = x;
      return total;
    } else {
      throw new Error;
    }
  },

  /**
   * Return the value of `total`
   * @return { Number }
   */

  getTotal: function(x){
    return total;
  },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  add: function(x){
    if (x === "number"){
      return total += x;
    } else {
      throw error;
    }
  },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   subtract: function(x){
    if (x === "number"){
      return total -= x;
    } else {
      throw error;
    }
   },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   multiply: function(x){
    if (x === "number"){
      return total *= x;
    } else {
      throw error;
    }
   },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   divide: function(x){
    if (x === "number"){
      return total /= x;
    } else {
      throw error;
    }
   },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   recallMemory: function(x){
    if (x === "number"){
      return memory;
    } else {
      throw error;
    }
   },

  /**
   * Stores the value of `total` to `memory`
   */
   saveMemory: function(x){
    total = memory;
    return memory;
   },

  /**
   * Clear the value stored at `memory`
   */

   clearMemory: function(x){
    memory = 0;
    return memory;
   }

  /**
   * Validation
   */

  };

return calculator;

};

calculatorModule();
