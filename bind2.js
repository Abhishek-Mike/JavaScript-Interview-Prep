this.x = 9;    // 'this' refers to global 'window' object here in a browser
var module = {
  x: 81,
  getX: function() { 
      return this.x; 
    }
};

module.getX();
console.log(module.getX())
//  returns 81

var retrieveX = module.getX;
console.log(retrieveX());

//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
var boundGetX = retrieveX.bind(module);
boundGetX();
console.log(boundGetX());
//  returns 81
