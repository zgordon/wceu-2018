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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return SmartWrapper; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heart__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__count__ = __webpack_require__(3);\n/**\n * WordPress Libraries\n */\nvar withSelect = wp.data.withSelect;\n\n/**\n * Import Child Components\n */\n\n\n\n\n/**\n * Wrapper Component\n */\nvar Wrapper = function Wrapper(props) {\n\tvar active = props.active,\n\t    reacts = props.reacts;\n\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: 'reacts-block-wrap' },\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'heart-wrap' },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__heart__[\"a\" /* Heart */], { active: active })\n\t\t),\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__count__[\"a\" /* Count */], { count: reacts })\n\t);\n};\n\n/**\n * SmartWrapper Component\n * This wrapper is aware of the state\n */\nvar SmartWrapper = withSelect(function (select) {\n\treturn {\n\t\tactive: select('wceu-2018-reacts').isActivated(),\n\t\treacts: select('wceu-2018-reacts').getReacts()\n\t};\n})(Wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dyYXBwZXIuanM/OGU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBMaWJyYXJpZXNcbiAqL1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cbi8qKlxuICogSW1wb3J0IENoaWxkIENvbXBvbmVudHNcbiAqL1xuXG5pbXBvcnQgeyBIZWFydCB9IGZyb20gJy4vaGVhcnQnO1xuaW1wb3J0IHsgQ291bnQgfSBmcm9tICcuL2NvdW50JztcblxuLyoqXG4gKiBXcmFwcGVyIENvbXBvbmVudFxuICovXG5leHBvcnQgdmFyIFdyYXBwZXIgPSBmdW5jdGlvbiBXcmFwcGVyKHByb3BzKSB7XG5cdHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG5cdCAgICByZWFjdHMgPSBwcm9wcy5yZWFjdHM7XG5cblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdkaXYnLFxuXHRcdHsgY2xhc3NOYW1lOiAncmVhY3RzLWJsb2NrLXdyYXAnIH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2hlYXJ0LXdyYXAnIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSGVhcnQsIHsgYWN0aXZlOiBhY3RpdmUgfSlcblx0XHQpLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb3VudCwgeyBjb3VudDogcmVhY3RzIH0pXG5cdCk7XG59O1xuXG4vKipcbiAqIFNtYXJ0V3JhcHBlciBDb21wb25lbnRcbiAqIFRoaXMgd3JhcHBlciBpcyBhd2FyZSBvZiB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0IHZhciBTbWFydFdyYXBwZXIgPSB3aXRoU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QpIHtcblx0cmV0dXJuIHtcblx0XHRhY3RpdmU6IHNlbGVjdCgnd2NldS0yMDE4LXJlYWN0cycpLmlzQWN0aXZhdGVkKCksXG5cdFx0cmVhY3RzOiBzZWxlY3QoJ3djZXUtMjAxOC1yZWFjdHMnKS5nZXRSZWFjdHMoKVxuXHR9O1xufSkoV3JhcHBlcik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy93cmFwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Heart; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\n/**\n * Import required libraries\n */\n\n\n// Include the icon SVG directly\nvar icon = wp.element.createElement(\n\t'svg',\n\t{ width: '50px', height: '50px', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor' },\n\twp.element.createElement('rect', { fill: 'none', width: '20', height: '20' }),\n\twp.element.createElement('path', { d: 'M10 17.12c3.33-1.4 5.74-3.79 7.04-6.21 1.28-2.41 1.46-4.81.32-6.25-1.03-1.29-2.37-1.78-3.73-1.74s-2.68.63-3.63 1.46c-.95-.83-2.27-1.42-3.63-1.46s-2.7.45-3.73 1.74c-1.14 1.44-.96 3.84.34 6.25 1.28 2.42 3.69 4.81 7.02 6.21z'\n\t})\n);\n\nvar Heart = function Heart(props) {\n\tvar active = props.active;\n\n\t// Add the filled class if it's in the props using classNames\n\n\tvar classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()('reacts-block-heart', { 'active': active });\n\n\t// Return the heart icon\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: classes },\n\t\ticon\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYXJ0LmpzPzk0NjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbXBvcnQgcmVxdWlyZWQgbGlicmFyaWVzXG4gKi9cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBJbmNsdWRlIHRoZSBpY29uIFNWRyBkaXJlY3RseVxudmFyIGljb24gPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdCdzdmcnLFxuXHR7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJzUwcHgnLCB2aWV3Qm94OiAnMCAwIDIwIDIwJywgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIGZpbGw6ICdjdXJyZW50Q29sb3InIH0sXG5cdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgZmlsbDogJ25vbmUnLCB3aWR0aDogJzIwJywgaGVpZ2h0OiAnMjAnIH0pLFxuXHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTAgMTcuMTJjMy4zMy0xLjQgNS43NC0zLjc5IDcuMDQtNi4yMSAxLjI4LTIuNDEgMS40Ni00LjgxLjMyLTYuMjUtMS4wMy0xLjI5LTIuMzctMS43OC0zLjczLTEuNzRzLTIuNjguNjMtMy42MyAxLjQ2Yy0uOTUtLjgzLTIuMjctMS40Mi0zLjYzLTEuNDZzLTIuNy40NS0zLjczIDEuNzRjLTEuMTQgMS40NC0uOTYgMy44NC4zNCA2LjI1IDEuMjggMi40MiAzLjY5IDQuODEgNy4wMiA2LjIxeidcblx0fSlcbik7XG5cbmV4cG9ydCB2YXIgSGVhcnQgPSBmdW5jdGlvbiBIZWFydChwcm9wcykge1xuXHR2YXIgYWN0aXZlID0gcHJvcHMuYWN0aXZlO1xuXG5cdC8vIEFkZCB0aGUgZmlsbGVkIGNsYXNzIGlmIGl0J3MgaW4gdGhlIHByb3BzIHVzaW5nIGNsYXNzTmFtZXNcblxuXHR2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ3JlYWN0cy1ibG9jay1oZWFydCcsIHsgJ2FjdGl2ZSc6IGFjdGl2ZSB9KTtcblxuXHQvLyBSZXR1cm4gdGhlIGhlYXJ0IGljb25cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHQnZGl2Jyxcblx0XHR7IGNsYXNzTmFtZTogY2xhc3NlcyB9LFxuXHRcdGljb25cblx0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9oZWFydC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Count; });\nvar Count = function Count(props) {\n\tvar count = props.count;\n\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: \"count-wrap\" },\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"reacts-block-count\" },\n\t\t\tcount\n\t\t)\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvdW50LmpzPzNiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBDb3VudCA9IGZ1bmN0aW9uIENvdW50KHByb3BzKSB7XG5cdHZhciBjb3VudCA9IHByb3BzLmNvdW50O1xuXG5cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NOYW1lOiBcImNvdW50LXdyYXBcIiB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJyZWFjdHMtYmxvY2stY291bnRcIiB9LFxuXHRcdFx0Y291bnRcblx0XHQpXG5cdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY291bnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__i18n_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reacts__ = __webpack_require__(16);\n\n\n/**\n * Import block\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2luZGV4LmpzP2ViMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2kxOG4uanMnO1xuXG4vKipcbiAqIEltcG9ydCBibG9ja1xuICovXG5pbXBvcnQgJy4vcmVhY3RzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("wp.i18n.setLocaleData({ '': {} }, 'reactsblock');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2kxOG4uanM/YTQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3cC5pMThuLnNldExvY2FsZURhdGEoeyAnJzoge30gfSwgJ3JlYWN0c2Jsb2NrJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2kxOG4uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_wrapper__ = __webpack_require__(0);\n/**\n * Block dependencies and components\n */\n\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody;\n\n/**\n * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wceu-2018/reacts-block', {\n\ttitle: __('Reacts Block', 'reactsblock'),\n\tdescription: __('A Gutenberg Block that keeps track of a post or a pages reacts.', 'reactsblock'),\n\tcategory: 'common',\n\ticon: {\n\t\tsrc: 'heart',\n\t\tbackground: '#F06861'\n\t},\n\tkeywords: [__('Meta', 'reactsblock'), __('Reacts', 'reactsblock')],\n\tattributes: {\n\t\treacts: {\n\t\t\ttype: 'integer',\n\t\t\tdefault: '0',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'wceu_2018_gb_reacts'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar reacts = props.attributes.reacts,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\treturn [isSelected && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __('Meta box', 'jsforwpblocks'),\n\t\t\t\t\tvalue: reacts,\n\t\t\t\t\tonChange: function onChange(reacts) {\n\t\t\t\t\t\treturn setAttributes({ reacts: reacts });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_wrapper__[\"b\" /* Wrapper */], { reacts: reacts })];\n\t},\n\tsave: function save() {\n\t\t// We're rendering in PHP because this needs to be dynamic...\n\t\treturn null;\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlYWN0cy9pbmRleC5qcz9mMjE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmxvY2sgZGVwZW5kZW5jaWVzIGFuZCBjb21wb25lbnRzXG4gKi9cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dyYXBwZXInO1xuXG4vKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keTtcblxuLyoqXG4gKiBSZWdpc3RlciBibG9ja1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCd3Y2V1LTIwMTgvcmVhY3RzLWJsb2NrJywge1xuXHR0aXRsZTogX18oJ1JlYWN0cyBCbG9jaycsICdyZWFjdHNibG9jaycpLFxuXHRkZXNjcmlwdGlvbjogX18oJ0EgR3V0ZW5iZXJnIEJsb2NrIHRoYXQga2VlcHMgdHJhY2sgb2YgYSBwb3N0IG9yIGEgcGFnZXMgcmVhY3RzLicsICdyZWFjdHNibG9jaycpLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGljb246IHtcblx0XHRzcmM6ICdoZWFydCcsXG5cdFx0YmFja2dyb3VuZDogJyNGMDY4NjEnXG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ01ldGEnLCAncmVhY3RzYmxvY2snKSwgX18oJ1JlYWN0cycsICdyZWFjdHNibG9jaycpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdHJlYWN0czoge1xuXHRcdFx0dHlwZTogJ2ludGVnZXInLFxuXHRcdFx0ZGVmYXVsdDogJzAnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAnd2NldV8yMDE4X2diX3JlYWN0cydcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgcmVhY3RzID0gcHJvcHMuYXR0cmlidXRlcy5yZWFjdHMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkO1xuXG5cdFx0cmV0dXJuIFtpc1NlbGVjdGVkICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRsYWJlbDogX18oJ01ldGEgYm94JywgJ2pzZm9yd3BibG9ja3MnKSxcblx0XHRcdFx0XHR2YWx1ZTogcmVhY3RzLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShyZWFjdHMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgcmVhY3RzOiByZWFjdHMgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHJlYWN0czogcmVhY3RzIH0pXTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHQvLyBXZSdyZSByZW5kZXJpbmcgaW4gUEhQIGJlY2F1c2UgdGhpcyBuZWVkcyB0byBiZSBkeW5hbWljLi4uXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9yZWFjdHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlYWN0cy9zdHlsZS5zY3NzPzVkZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvcmVhY3RzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ })
/******/ ]);