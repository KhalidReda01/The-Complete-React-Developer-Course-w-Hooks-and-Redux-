"use strict";

/**
 * 10.Es6 aside Arrow functions partII
 * arguments Object - no longer bound with arrow funtions
 * this keyword - no longer bound 
 */

// const add = function (a, b) {
//   console.log(arguments)
//   return a + b;
// }
var add = function add(a, b) {
  // console.log(arguments) //Uncaught ReferenceError: arguments is not defined

  return a + b;
};
console.log(add(55, 1, 1001));
// this keyword - no longer bound 
var user = {
  name: 'Khalid',
  citites: ["cairo", "mansura", "portsaid"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.citites.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());
