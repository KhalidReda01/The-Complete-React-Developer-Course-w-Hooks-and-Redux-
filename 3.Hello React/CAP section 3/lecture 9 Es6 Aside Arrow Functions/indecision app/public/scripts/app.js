'use strict';

// 9.ES6 Aside Arrow Functions
// const square = function (x) {
//   return x * x;
// }
// function square(x) {
//   return x * x;
// }

// // es6 arror function
// // All arrow functions are anonymous
// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(square(8))
// console.log(squareArrow(8))

// Challenge Time
// getFirstName
// create regular arrow function 
// create arrow function using shorthand syntax

var fullName = "Yousefss  Reda";
var firstName = void 0;

var getFirstName = function getFirstName() {
  return firstName = fullName.split(' ')[0];
};
var getFirstNameSS = function getFirstNameSS() {
  return firstName = fullName.split(' ')[0];
};
var reslut = getFirstNameSS();
console.log(reslut);
