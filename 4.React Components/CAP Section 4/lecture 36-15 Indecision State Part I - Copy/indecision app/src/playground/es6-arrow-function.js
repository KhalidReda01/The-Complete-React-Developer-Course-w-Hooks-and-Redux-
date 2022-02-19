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
/**
 * 
 * my solution 
 * const fullName = "Yousefss  Reda";
let firstName

const getFirstName = () => {
return  firstName = fullName.split(' ')[0];
}
const getFirstNameSS = () =>firstName = fullName.split(' ')[0] ;
const reslut = getFirstNameSS()
console.log(reslut)
 */

// Andrea Solution
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];

}
const getFirstNames = (fullName) => fullName.split(' ')[0];



console.log(getFirstName("Mike Smith"))
console.log(getFirstNames("khalid Reda"))