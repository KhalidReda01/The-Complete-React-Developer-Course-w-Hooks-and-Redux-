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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(1);
/**
 * 52/6 Default Exports 
 */
// import './utils.js'
// import  subtract,{ square,add } from './utils'
// import  anything,{ square,add } from './utils'
// import  subtract from './utils'

console.log('app.js is runing !!!')

// console.log(square(100))
// console.log(add(100, 100))
// console.log(subtract(100,81))
// console.log(anything(100,81))

//person.js
// namex export isAdult(18) - true if adult ,otherwise false
// named export canDrink(18) - true if 21 and over , otherwise false
// import isAdult and canDrink
//use both printing result to the console

console.log(__WEBPACK_IMPORTED_MODULE_0__person__["c" /* isAdult */](15))
console.log(__WEBPACK_IMPORTED_MODULE_0__person__["a" /* canDrink */](22))
// Challenge time 
console.log(__WEBPACK_IMPORTED_MODULE_0__person__["b" /* default */](65));
console.log(__WEBPACK_IMPORTED_MODULE_0__person__["b" /* default */](40));
//setting the default export and function 
// Grab te default and call it 


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
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

// other way
/* harmony default export */ __webpack_exports__["b"] = (isSenior); 
// export default (age)=> age>65 
// third way
 // you cause just put the the function after the export default because you can't put if infront of variabale unlike named export 


/***/ })
/******/ ]);