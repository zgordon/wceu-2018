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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__i18n_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reacts__ = __webpack_require__(6);\n\n\n/**\n * Import block\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5kZXguanM/ZWIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaTE4bi5qcyc7XG5cbi8qKlxuICogSW1wb3J0IGJsb2NrXG4gKi9cbmltcG9ydCAnLi9yZWFjdHMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("wp.i18n.setLocaleData({ '': {} }, 'reactsblock');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaTE4bi5qcz9hNDBjIl0sInNvdXJjZXNDb250ZW50IjpbIndwLmkxOG4uc2V0TG9jYWxlRGF0YSh7ICcnOiB7fSB9LCAncmVhY3RzYmxvY2snKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaTE4bi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_wrapper_js__ = __webpack_require__(0);\n/**\n * Block dependencies and components\n */\n\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody;\n\n/**\n * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wceu-2018/reacts-block', {\n\ttitle: __('Reacts Block', 'reactsblock'),\n\tdescription: __('A Gutenberg Block that keeps track of a post or a pages reacts.', 'reactsblock'),\n\tcategory: 'common',\n\ticon: {\n\t\tsrc: 'heart',\n\t\tbackground: '#F06861'\n\t},\n\tkeywords: [__('Meta', 'reactsblock'), __('Reacts', 'reactsblock')],\n\tattributes: {\n\t\treacts: {\n\t\t\ttype: 'integer',\n\t\t\tdefault: '0',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'wceu_2018_gb_reacts'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar reacts = props.attributes.reacts,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\treturn [isSelected && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __('Meta box', 'jsforwpblocks'),\n\t\t\t\t\tvalue: reacts,\n\t\t\t\t\tonChange: function onChange(reacts) {\n\t\t\t\t\t\treturn setAttributes({ reacts: reacts });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_wrapper_js__[\"a\" /* Wrapper */], { reacts: reacts })];\n\t},\n\tsave: function save() {\n\t\t// We're rendering in PHP because this needs to be dynamic...\n\t\treturn null;\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVhY3RzL2luZGV4LmpzP2YyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCbG9jayBkZXBlbmRlbmNpZXMgYW5kIGNvbXBvbmVudHNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd3JhcHBlci5qcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5zcGVjdG9yQ29udHJvbHMgPSB3cC5lZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoJ3djZXUtMjAxOC9yZWFjdHMtYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnUmVhY3RzIEJsb2NrJywgJ3JlYWN0c2Jsb2NrJyksXG5cdGRlc2NyaXB0aW9uOiBfXygnQSBHdXRlbmJlcmcgQmxvY2sgdGhhdCBrZWVwcyB0cmFjayBvZiBhIHBvc3Qgb3IgYSBwYWdlcyByZWFjdHMuJywgJ3JlYWN0c2Jsb2NrJyksXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0aWNvbjoge1xuXHRcdHNyYzogJ2hlYXJ0Jyxcblx0XHRiYWNrZ3JvdW5kOiAnI0YwNjg2MSdcblx0fSxcblx0a2V5d29yZHM6IFtfXygnTWV0YScsICdyZWFjdHNibG9jaycpLCBfXygnUmVhY3RzJywgJ3JlYWN0c2Jsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0cmVhY3RzOiB7XG5cdFx0XHR0eXBlOiAnaW50ZWdlcicsXG5cdFx0XHRkZWZhdWx0OiAnMCcsXG5cdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdG1ldGE6ICd3Y2V1XzIwMThfZ2JfcmVhY3RzJ1xuXHRcdH1cblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciByZWFjdHMgPSBwcm9wcy5hdHRyaWJ1dGVzLnJlYWN0cyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQ7XG5cblx0XHRyZXR1cm4gW2lzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRQYW5lbEJvZHksXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRcdGxhYmVsOiBfXygnTWV0YSBib3gnLCAnanNmb3J3cGJsb2NrcycpLFxuXHRcdFx0XHRcdHZhbHVlOiByZWFjdHMsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHJlYWN0cykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyByZWFjdHM6IHJlYWN0cyB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHsgcmVhY3RzOiByZWFjdHMgfSldO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdC8vIFdlJ3JlIHJlbmRlcmluZyBpbiBQSFAgYmVjYXVzZSB0aGlzIG5lZWRzIHRvIGJlIGR5bmFtaWMuLi5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL3JlYWN0cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVhY3RzL3N0eWxlLnNjc3M/NWRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9yZWFjdHMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);