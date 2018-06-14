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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reacts_frontend__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reacts_frontend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__reacts_frontend__);\n// Import frontend JS\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnJvbnRlbmQuanM/ZDEzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgZnJvbnRlbmQgSlNcbmltcG9ydCAnLi9yZWFjdHMvZnJvbnRlbmQnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

eval("// Use wp-element, which has been enqueued as a dependency\nvar _wp$element = wp.element,\n    createElement = _wp$element.createElement,\n    render = _wp$element.render;\n\n// Make our FrontendRenderer component\n\nvar FrontendRenderer = function FrontendRenderer(props) {\n\tvar reacts = props.reacts;\n\n\treturn createElement('div', null, 'count: ' + reacts);\n};\n\n// Mount our component!\nrender(FrontendRenderer({ reacts: 100 }), document.getElementById('reacts-block'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVhY3RzL2Zyb250ZW5kLmpzPzA3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlIHdwLWVsZW1lbnQsIHdoaWNoIGhhcyBiZWVuIGVucXVldWVkIGFzIGEgZGVwZW5kZW5jeVxudmFyIF93cCRlbGVtZW50ID0gd3AuZWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50ID0gX3dwJGVsZW1lbnQuY3JlYXRlRWxlbWVudCxcbiAgICByZW5kZXIgPSBfd3AkZWxlbWVudC5yZW5kZXI7XG5cbi8vIE1ha2Ugb3VyIEZyb250ZW5kUmVuZGVyZXIgY29tcG9uZW50XG5cbnZhciBGcm9udGVuZFJlbmRlcmVyID0gZnVuY3Rpb24gRnJvbnRlbmRSZW5kZXJlcihwcm9wcykge1xuXHR2YXIgcmVhY3RzID0gcHJvcHMucmVhY3RzO1xuXG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCAnY291bnQ6ICcgKyByZWFjdHMpO1xufTtcblxuLy8gTW91bnQgb3VyIGNvbXBvbmVudCFcbnJlbmRlcihGcm9udGVuZFJlbmRlcmVyKHsgcmVhY3RzOiAxMDAgfSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdHMtYmxvY2snKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL3JlYWN0cy9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ })

/******/ });