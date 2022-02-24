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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__6_Webpack_CAP_Section_6_lecture_51_5_Es6_import_export_indecision_app_src_person__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(2);
// CFSC  ES6 import export
// import './utils.js'
// import {square,add }from'./utils.js'
// console.log("this time from SC")
// console.log(square(4))
// console.log(add(4,5))


console.log(__WEBPACK_IMPORTED_MODULE_1__person__["a" /* isAdult */](14))
console.log(__WEBPACK_IMPORTED_MODULE_0__6_Webpack_CAP_Section_6_lecture_51_5_Es6_import_export_indecision_app_src_person__["a" /* canDrink */](21))


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// const isAdult = (age) => age >= 18;
// const canDrink = (age) => age >= 21;
const isAdult = (age) => age >= 18;
/* harmony export (immutable) */ __webpack_exports__["a"] = isAdult;

 const canDrink = (age) => age >= 21;
/* unused harmony export canDrink */

// export {isAdult,canDrink}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isAdult */
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


/***/ })
/******/ ]);