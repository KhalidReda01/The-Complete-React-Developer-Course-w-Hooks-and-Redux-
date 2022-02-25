const isAdult = (age) => {
  if (age >= 18) {
   console.log(true) 
  }else{
console.log(false)
  }
}
const canDrink = (age) => {
  if (age >= 21) {
   console.log(true) 
  } else {
    console.log(false)
  }
}
console.log('person.js is running')
const isSenior = (age) => ` Is this person a senior ${age >= 65}`;

// export{isAdult,canDrink,isSenior as default}
export{isAdult,canDrink}
// other way
export default isSenior 
// export default (age)=> age>65 
// third way
 // you cause just put the the function after the export default because you can't put if infront of variabale unlike named export 
