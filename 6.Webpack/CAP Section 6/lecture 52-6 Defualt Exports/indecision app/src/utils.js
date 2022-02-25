// I'm using the live-server now use webpack
//Always try to implement the new  things that you are learning



/**
 * $ yarn run build 
yarn run v1.22.5
$ webpack --watch

Webpack is watching the files…

Hash: 2dab3f67fbc8800a16d8
Version: webpack 3.1.0
Time: 50ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.65 kB       0  [emitted]  main
   [0] ./src/app.js 172 bytes {0} [built]
Hash: 7e92d647f512b723a36c
Version: webpack 3.1.0
Time: 31ms
    Asset    Size  Chunks             Chunk Names
bundle.js  3.2 kB       0  [emitted]  main
   [0] ./src/app.js 195 bytes {0} [built]
   [1] ./src/utils.js 145 bytes {0} [built]
 */



console.log('utils.js is runing')
// Now It's working

// create a function here and use it at app.js
/**
 * the other way to export 
 * export const square = (x) => {
 return  x*x
}
 export const add = (a, b) => {
  
return a+b
}} x 
 *
 */
const square = (x) => {
 return  x*x
}
const add = (a, b) => {
  
return a+b
}
// exports - default export 
export {square,add}