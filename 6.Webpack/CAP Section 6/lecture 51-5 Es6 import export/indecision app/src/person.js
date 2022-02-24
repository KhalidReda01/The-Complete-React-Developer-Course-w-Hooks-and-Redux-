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
export{isAdult,canDrink}