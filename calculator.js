/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
  var memory = 0;
  var total = 0;
  var calculator = {};

  function load(x){
    total = x;
    if (typeof x === "number"){
      return total;
    } else {
      throw new Error("x is not a number");
    }
  }

  function getTotal(x){
    return total;
}
  function add(x){
    if (typeof x === "number"){
      return total += x;
    } else {
      throw new Error("x is not a number");
    }
  }

function subtract(x){
    if (typeof x === "number"){
      return total -= x;
    } else {
      throw new Error("x is not a number");
    }
  }

function multiply(x){
    if (typeof x === "number"){
      return total *= x;
    } else {
      throw new Error("x is not a number");
    }
  }

function divide(x){
    if (typeof x === "number"){
      return total /= x;
    } else {
      throw new Error("x is not a number");
    }
  }

function recallMemory(x){
    return memory;
  }

function saveMemory(x){
    memory = total;
  }

function clearMemory(x){
    memory = 0;
    return memory;
   }

return {

load: load,
getTotal: getTotal,
add: add,
subtract: subtract,
multiply: multiply,
divide: divide,
recallMemory: recallMemory,
saveMemory: saveMemory,
clearMemory: clearMemory

};
}







// var calculatorModule = function(){

//   var memory = 0;
//   var total = 0;

//   var calculator = {
//   /**
//    * sets the `total` to the number passed in
//    * @param  { Number } x
//    * @return { Number } current total
//    */

//   load: function(x){
//     total = x;
//     if (typeof x === "number"){
//       return total;
//     } else {
//       throw new Error("x is not a number");
//     }
//   },

//   /**
//    * Return the value of `total`
//    * @return { Number }
//    */

//   getTotal: function(x){
//     return total;
//   },

//   /**
//    * Sums the value passed in with `total`
//    * @param { Number } x
//    */

//   add: function(x){
//     if (typeof x === "number"){
//       return total += x;
//     } else {
//       throw new Error("x is not a number");
//     }
//   },

//   /**
//    * Subtracts the value passed in from `total`
//    * @param  { Number } x
//    */

//    subtract: function(x){
//     if (typeof x === "number"){
//       return total -= x;
//     } else {
//       throw new Error("x is not a number");
//     }
//    },

//   /**
//    * Multiplies the value by `total`
//    * @param  { Number } x
//    */

//    multiply: function(x){
//     if (typeof x === "number"){
//       return total *= x;
//     } else {
//       throw new Error("x is not a number");
//     }
//    },

//   /**
//    * Divides the value passing in by `total`
//    * @param  { Number } x
//    */

//    divide: function(x){
//     if (typeof x === "number"){
//       return total /= x;
//     } else {
//       throw new Error("x is not a number");
//     }
//    },

//   /**
//    * Return the value stored at `memory`
//    * @return { Number }
//    */

//    recallMemory: function(x){
//     return memory;
//   },

//   /**
//    * Stores the value of `total` to `memory`
//    */
//    saveMemory: function(x){
//     memory= total;
//    },

//   /**
//    * Clear the value stored at `memory`
//    */

//    clearMemory: function(x){
//     memory = 0;
//     return memory;
//    }

//   /**
//    * Validation
//    */

//   };

// return calculator;

// };

// calculatorModule();
