/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
// import './utils.js'


console.log('app.js is runing !!!')
/**
 * CAP first this is the most imortant step of CSMM 
 * CL
 * add new file utils.js -> contains some utility function 
 * 
 */
console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* square */](100))
console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* add */](100, 100))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
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


/***/ })
/******/ ]);