


console.log('utils.js is runing')

const square = (x) => {
 return  x*x
}
const add = (a, b) => {
  
return a+b
}
const subtract = (a, b) => {
    return a - b;
}
// exports - default export 
export { square, add,subtract as default }
