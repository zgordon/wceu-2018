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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__i18n_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reacts__ = __webpack_require__(2);\n\n\n/**\n * Import block\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW5kZXguanM/ZWIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaTE4bi5qcyc7XG5cbi8qKlxuICogSW1wb3J0IGJsb2NrXG4gKi9cbmltcG9ydCAnLi9yZWFjdHMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("wp.i18n.setLocaleData({ '': {} }, 'reactsblock');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaTE4bi5qcz9hNDBjIl0sInNvdXJjZXNDb250ZW50IjpbIndwLmkxOG4uc2V0TG9jYWxlRGF0YSh7ICcnOiB7fSB9LCAncmVhY3RzYmxvY2snKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaTE4bi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/**\n * Block dependencies\n */\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody;\n\n/**\n * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wceu-2018/reacts-block', {\n\ttitle: __('Reacts Block', 'reactsblock'),\n\tdescription: __('A Gutenberg Block that keeps track of a post or a pages reacts.', 'reactsblock'),\n\tcategory: 'common',\n\ticon: {\n\t\tsrc: 'heart',\n\t\tbackground: '#F06861'\n\t},\n\tkeywords: [__('Meta', 'reactsblock'), __('Reacts', 'reactsblock')],\n\tattributes: {\n\t\treacts: {\n\t\t\ttype: 'integer',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'wceu_2018_gb_reacts'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar reacts = props.attributes.reacts,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\treturn [isSelected && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tlabel: __('Meta box', 'jsforwpblocks'),\n\t\t\t\t\tvalue: reacts,\n\t\t\t\t\tonChange: function onChange(reacts) {\n\t\t\t\t\t\treturn setAttributes({ reacts: reacts });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t__('Check the meta yo!', 'reactsblock')\n\t\t\t)\n\t\t)];\n\t},\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t__('Reacts go here', 'reactsblock')\n\t\t);\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVhY3RzL2luZGV4LmpzP2YyMTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCbG9jayBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keTtcblxuLyoqXG4gKiBSZWdpc3RlciBibG9ja1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKCd3Y2V1LTIwMTgvcmVhY3RzLWJsb2NrJywge1xuXHR0aXRsZTogX18oJ1JlYWN0cyBCbG9jaycsICdyZWFjdHNibG9jaycpLFxuXHRkZXNjcmlwdGlvbjogX18oJ0EgR3V0ZW5iZXJnIEJsb2NrIHRoYXQga2VlcHMgdHJhY2sgb2YgYSBwb3N0IG9yIGEgcGFnZXMgcmVhY3RzLicsICdyZWFjdHNibG9jaycpLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGljb246IHtcblx0XHRzcmM6ICdoZWFydCcsXG5cdFx0YmFja2dyb3VuZDogJyNGMDY4NjEnXG5cdH0sXG5cdGtleXdvcmRzOiBbX18oJ01ldGEnLCAncmVhY3RzYmxvY2snKSwgX18oJ1JlYWN0cycsICdyZWFjdHNibG9jaycpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdHJlYWN0czoge1xuXHRcdFx0dHlwZTogJ2ludGVnZXInLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAnd2NldV8yMDE4X2diX3JlYWN0cydcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgcmVhY3RzID0gcHJvcHMuYXR0cmlidXRlcy5yZWFjdHMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkO1xuXG5cdFx0cmV0dXJuIFtpc1NlbGVjdGVkICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRsYWJlbDogX18oJ01ldGEgYm94JywgJ2pzZm9yd3BibG9ja3MnKSxcblx0XHRcdFx0XHR2YWx1ZTogcmVhY3RzLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShyZWFjdHMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgcmVhY3RzOiByZWFjdHMgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdF9fKCdDaGVjayB0aGUgbWV0YSB5byEnLCAncmVhY3RzYmxvY2snKVxuXHRcdFx0KVxuXHRcdCldO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdwJyxcblx0XHRcdG51bGwsXG5cdFx0XHRfXygnUmVhY3RzIGdvIGhlcmUnLCAncmVhY3RzYmxvY2snKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9yZWFjdHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcmVhY3RzL3N0eWxlLnNjc3M/NWRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9yZWFjdHMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);