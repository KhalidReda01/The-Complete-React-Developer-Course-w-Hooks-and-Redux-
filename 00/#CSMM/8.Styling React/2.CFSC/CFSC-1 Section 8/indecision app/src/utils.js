console.log('utils.js is running heello')
const square = (x) => {
  return x*x
}
const add = (a, b) => {
  return a+b
}

// lecture Default Exports
// recap what you did here and repeat it Okay so let's do it
// first I have to create a new function called subtract and export it as default one using different ways as you did to with  named exports so let's do that first 
const  subtract =(a,b)=> a-b
// export { square, add }
// first way to export 
export { square, add,subtract as default }
