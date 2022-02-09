// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
var nameVar = "Khalid";
var nameVar="Yousef"
console.log("nameVar", nameVar);


let nameLet = "Moha";
nameLet = "Hamada"
// you can't redfine it let nameLet="loda"
console.log('nameLet',nameLet)

const nameConst = 'Frank';
// nameConst = 'loda'; wrong too
// const nameConst = 'Jane'; wrong // Duplicate dclaration "nameConst 

console.log("nameConst", nameConst)

// function getPetName() {
//   var petName = "Hal";
//   return petName
// }
// getPetName();
// console.log(petName)
// //app.js:24 Uncaught ReferenceError: petName is not defined
// you will get the exact same error let const var 
function getPetName() {
  const petName = "Hal";
  return petName
}

const petName=getPetName();
console.log(petName)
// Block Scoping
//functioned scope vs blocked scopes
const fullName = "Yousef  Reda";
let firstName
if (fullName) {
   firstName = fullName.split(' ')[0];
  console.log(firstName)
}
console.log(firstName)
