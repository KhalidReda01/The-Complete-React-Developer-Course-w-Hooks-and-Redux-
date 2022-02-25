


console.log('utils.js is runing')

const square = (x) => {
 return  x*x
}
const add = (a, b) => {
  
return a+b
}
const subtract = (a, b) => {
    return a - b ;
}
// exports - default export 
// export { square, add,subtract as default }
export { square, add }
// export default  (a,b)=> `hello ${a-b}`
export default  (a,b)=> a-b

// export default can't come before varialble decalartion 
/**
 * with name exports we have two ways to get this job done
 * 
 */