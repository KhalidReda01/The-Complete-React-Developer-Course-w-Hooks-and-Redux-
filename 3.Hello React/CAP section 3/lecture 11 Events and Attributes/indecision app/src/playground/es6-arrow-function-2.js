/**
 * 10.Es6 aside Arrow functions partII
 * arguments Object - no longer bound with arrow funtions
 * this keyword - no longer bound 
 */

// const add = function (a, b) {
//   console.log(arguments)
//   return a + b;
// }
// const add =  (a, b)=> {
//   // console.log(arguments) //Uncaught ReferenceError: arguments is not defined

//   return a + b;
// }
// console.log(add(55, 1,1001));
// // this keyword - no longer bound 
// const user = {
//   name: 'Khalid',
//   citites: ["cairo", "mansura", "portsaid"],
//   printPlacesLived() {
//     return this.citites.map((city) => this.name + ' has lived in ' + city);
    
    
    
//   }
// }
// console.log(user.printPlacesLived())
// Challenge area

const multipiler = {
  numbers: [1, 2, 3],
  mutiblyBy: 2,
  // numbers - array of numbers
  // myltiplyBy - single  number 
  multiply() {
    
    return this.numbers.map((num) =>num* this.mutiblyBy)
  }
  // mytiply -return a new array where the number have been multiplied 
}
console.log(multipiler.multiply()) //[1,2,3] 2 [2,4,6]