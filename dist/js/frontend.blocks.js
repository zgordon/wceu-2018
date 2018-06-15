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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Wrapper; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heart_js__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter_js__ = __webpack_require__(3);\n/**\n * Import Child Components\n */\n\n\n\n/**\n * Wrapper Component\n */\nvar Wrapper = function Wrapper(props) {\n\tvar reacts = props.reacts;\n\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: 'reacts-block-wrap' },\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'heart-wrap' },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__heart_js__[\"a\" /* Heart */], null)\n\t\t),\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__counter_js__[\"a\" /* Counter */], { count: reacts })\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dyYXBwZXIuanM/OGU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEltcG9ydCBDaGlsZCBDb21wb25lbnRzXG4gKi9cbmltcG9ydCB7IEhlYXJ0IH0gZnJvbSAnLi9oZWFydC5qcyc7XG5pbXBvcnQgeyBDb3VudGVyIH0gZnJvbSAnLi9jb3VudGVyLmpzJztcblxuLyoqXG4gKiBXcmFwcGVyIENvbXBvbmVudFxuICovXG5leHBvcnQgdmFyIFdyYXBwZXIgPSBmdW5jdGlvbiBXcmFwcGVyKHByb3BzKSB7XG5cdHZhciByZWFjdHMgPSBwcm9wcy5yZWFjdHM7XG5cblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLFxuXHRcdHsgY2xhc3NOYW1lOiAncmVhY3RzLWJsb2NrLXdyYXAnIH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2hlYXJ0LXdyYXAnIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSGVhcnQsIG51bGwpXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ291bnRlciwgeyBjb3VudDogcmVhY3RzIH0pXG5cdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvd3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Heart; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\n/**\n * Import required libraries\n */\n\n\nvar icon = wp.element.createElement(\n\t'svg',\n\t{ width: '50px', height: '50px', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor' },\n\twp.element.createElement('rect', { fill: 'none', width: '20', height: '20' }),\n\twp.element.createElement('path', { d: 'M10 17.12c3.33-1.4 5.74-3.79 7.04-6.21 1.28-2.41 1.46-4.81.32-6.25-1.03-1.29-2.37-1.78-3.73-1.74s-2.68.63-3.63 1.46c-.95-.83-2.27-1.42-3.63-1.46s-2.7.45-3.73 1.74c-1.14 1.44-.96 3.84.34 6.25 1.28 2.42 3.69 4.81 7.02 6.21z'\n\t})\n);\n\nvar Heart = function Heart(props) {\n\tvar active = props.active;\n\n\t// Add the filled class if it's in the props using classNames\n\n\tvar classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()('reacts-block-heart', { 'active': active });\n\n\t// Return the heart icon\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: classes },\n\t\ticon\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYXJ0LmpzPzk0NjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbXBvcnQgcmVxdWlyZWQgbGlicmFyaWVzXG4gKi9cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgaWNvbiA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0J3N2ZycsXG5cdHsgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcsIHZpZXdCb3g6ICcwIDAgMjAgMjAnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSxcblx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdyZWN0JywgeyBmaWxsOiAnbm9uZScsIHdpZHRoOiAnMjAnLCBoZWlnaHQ6ICcyMCcgfSksXG5cdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMCAxNy4xMmMzLjMzLTEuNCA1Ljc0LTMuNzkgNy4wNC02LjIxIDEuMjgtMi40MSAxLjQ2LTQuODEuMzItNi4yNS0xLjAzLTEuMjktMi4zNy0xLjc4LTMuNzMtMS43NHMtMi42OC42My0zLjYzIDEuNDZjLS45NS0uODMtMi4yNy0xLjQyLTMuNjMtMS40NnMtMi43LjQ1LTMuNzMgMS43NGMtMS4xNCAxLjQ0LS45NiAzLjg0LjM0IDYuMjUgMS4yOCAyLjQyIDMuNjkgNC44MSA3LjAyIDYuMjF6J1xuXHR9KVxuKTtcblxuZXhwb3J0IHZhciBIZWFydCA9IGZ1bmN0aW9uIEhlYXJ0KHByb3BzKSB7XG5cdHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmU7XG5cblx0Ly8gQWRkIHRoZSBmaWxsZWQgY2xhc3MgaWYgaXQncyBpbiB0aGUgcHJvcHMgdXNpbmcgY2xhc3NOYW1lc1xuXG5cdHZhciBjbGFzc2VzID0gY2xhc3NOYW1lcygncmVhY3RzLWJsb2NrLWhlYXJ0JywgeyAnYWN0aXZlJzogYWN0aXZlIH0pO1xuXG5cdC8vIFJldHVybiB0aGUgaGVhcnQgaWNvblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLFxuXHRcdHsgY2xhc3NOYW1lOiBjbGFzc2VzIH0sXG5cdFx0aWNvblxuXHQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hlYXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Counter; });\nvar Counter = function Counter(props) {\n\tvar count = props.count;\n\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: \"count-wrap\" },\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"reacts-block-count\" },\n\t\t\tcount\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdW50ZXIuanM/Y2JlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIENvdW50ZXIgPSBmdW5jdGlvbiBDb3VudGVyKHByb3BzKSB7XG5cdHZhciBjb3VudCA9IHByb3BzLmNvdW50O1xuXG5cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NOYW1lOiBcImNvdW50LXdyYXBcIiB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJyZWFjdHMtYmxvY2stY291bnRcIiB9LFxuXHRcdFx0Y291bnRcblx0XHQpXG5cdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY291bnRlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reacts_frontend__ = __webpack_require__(9);\n// Import frontend JS\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZnJvbnRlbmQuanM/ZDEzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgZnJvbnRlbmQgSlNcbmltcG9ydCAnLi9yZWFjdHMvZnJvbnRlbmQnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_wrapper__ = __webpack_require__(0);\n// Use wp-element, which has been enqueued as a dependency\nvar _wp$element = wp.element,\n    createElement = _wp$element.createElement,\n    render = _wp$element.render;\n\nvar apiRequest = wp.apiRequest;\n\n// Import our components\n\n\n// Make our FrontendRenderer component\nvar FrontendRenderer = function FrontendRenderer(props) {\n\tvar reacts = props.reacts;\n\n\treturn createElement('div', null, wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_wrapper__[\"a\" /* Wrapper */], { reacts: reacts }));\n};\n\n// Get the reacts block\nvar reacts_block = document.getElementById('reacts-block');\n\n// Make sure we have the block and a post ID\nif (reacts_block) {\n\n\t// Grab the post_id from data attributes\n\tvar post_id = reacts_block.dataset.postId;\n\n\t// Make sure we have a post ID\n\tif (post_id) {\n\n\t\t// Make an API Request\n\t\tapiRequest({ path: '/wp/v2/posts/' + post_id }).then(function (post) {\n\n\t\t\t// Make sure we have postmeta\n\t\t\tif (post.meta) {\n\t\t\t\tvar reacts = post.meta.wceu_2018_gb_reacts;\n\n\t\t\t\t// Mount our component!\n\t\t\t\trender(FrontendRenderer({ reacts: reacts }), reacts_block);\n\t\t\t}\n\t\t});\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVhY3RzL2Zyb250ZW5kLmpzPzA3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlIHdwLWVsZW1lbnQsIHdoaWNoIGhhcyBiZWVuIGVucXVldWVkIGFzIGEgZGVwZW5kZW5jeVxudmFyIF93cCRlbGVtZW50ID0gd3AuZWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50ID0gX3dwJGVsZW1lbnQuY3JlYXRlRWxlbWVudCxcbiAgICByZW5kZXIgPSBfd3AkZWxlbWVudC5yZW5kZXI7XG5cbnZhciBhcGlSZXF1ZXN0ID0gd3AuYXBpUmVxdWVzdDtcblxuLy8gSW1wb3J0IG91ciBjb21wb25lbnRzXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd3JhcHBlclwiO1xuXG4vLyBNYWtlIG91ciBGcm9udGVuZFJlbmRlcmVyIGNvbXBvbmVudFxudmFyIEZyb250ZW5kUmVuZGVyZXIgPSBmdW5jdGlvbiBGcm9udGVuZFJlbmRlcmVyKHByb3BzKSB7XG5cdHZhciByZWFjdHMgPSBwcm9wcy5yZWFjdHM7XG5cblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHJlYWN0czogcmVhY3RzIH0pKTtcbn07XG5cbi8vIEdldCB0aGUgcmVhY3RzIGJsb2NrXG52YXIgcmVhY3RzX2Jsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0cy1ibG9jaycpO1xuXG4vLyBNYWtlIHN1cmUgd2UgaGF2ZSB0aGUgYmxvY2sgYW5kIGEgcG9zdCBJRFxuaWYgKHJlYWN0c19ibG9jaykge1xuXG5cdC8vIEdyYWIgdGhlIHBvc3RfaWQgZnJvbSBkYXRhIGF0dHJpYnV0ZXNcblx0dmFyIHBvc3RfaWQgPSByZWFjdHNfYmxvY2suZGF0YXNldC5wb3N0SWQ7XG5cblx0Ly8gTWFrZSBzdXJlIHdlIGhhdmUgYSBwb3N0IElEXG5cdGlmIChwb3N0X2lkKSB7XG5cblx0XHQvLyBNYWtlIGFuIEFQSSBSZXF1ZXN0XG5cdFx0YXBpUmVxdWVzdCh7IHBhdGg6ICcvd3AvdjIvcG9zdHMvJyArIHBvc3RfaWQgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xuXG5cdFx0XHQvLyBNYWtlIHN1cmUgd2UgaGF2ZSBwb3N0bWV0YVxuXHRcdFx0aWYgKHBvc3QubWV0YSkge1xuXHRcdFx0XHR2YXIgcmVhY3RzID0gcG9zdC5tZXRhLndjZXVfMjAxOF9nYl9yZWFjdHM7XG5cblx0XHRcdFx0Ly8gTW91bnQgb3VyIGNvbXBvbmVudCFcblx0XHRcdFx0cmVuZGVyKEZyb250ZW5kUmVuZGVyZXIoeyByZWFjdHM6IHJlYWN0cyB9KSwgcmVhY3RzX2Jsb2NrKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9yZWFjdHMvZnJvbnRlbmQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);