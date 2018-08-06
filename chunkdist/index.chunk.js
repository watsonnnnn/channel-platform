(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/index.js!./webpackfiles/indexcss.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./webpackfiles/indexcss.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"@font-face{\\r\\n  font-family: 'Market Saturday1';\\r\\n  src: url(\" + escape(__webpack_require__(/*! ./fonts/MarketSaturday.ttf */ \"./webpackfiles/fonts/MarketSaturday.ttf\")) + \"),\\r\\n       url(\" + escape(__webpack_require__(/*! ./fonts/MarketSaturday.otf */ \"./webpackfiles/fonts/MarketSaturday.otf\")) + \");\\r\\n}\\r\\n\\r\\nbody{\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: 16px;\\r\\n  color: #444;\\r\\n}\\r\\n\\r\\n*{\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.red{\\r\\n  font-family: 'Market Saturday1';\\r\\n  color: blue;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./webpackfiles/indexcss.css?./node_modules/css-loader");

/***/ }),

/***/ "./webpackfiles/fonts/MarketSaturday.otf":
/*!***********************************************!*\
  !*** ./webpackfiles/fonts/MarketSaturday.otf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"89c1fdee82ccf00aa132323ded2a8998.otf\";\n\n//# sourceURL=webpack:///./webpackfiles/fonts/MarketSaturday.otf?");

/***/ }),

/***/ "./webpackfiles/fonts/MarketSaturday.ttf":
/*!***********************************************!*\
  !*** ./webpackfiles/fonts/MarketSaturday.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b4773ae9a7056b298fcfb90d9ccba7f3.ttf\";\n\n//# sourceURL=webpack:///./webpackfiles/fonts/MarketSaturday.ttf?");

/***/ }),

/***/ "./webpackfiles/images/header.png":
/*!****************************************!*\
  !*** ./webpackfiles/images/header.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"825669111509ece6fa5e5016db50f684.png\";\n\n//# sourceURL=webpack:///./webpackfiles/images/header.png?");

/***/ }),

/***/ "./webpackfiles/index.webpack.js":
/*!***************************************!*\
  !*** ./webpackfiles/index.webpack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// var _ = require('lodash');\r\n__webpack_require__(/*! ./indexcss.css */ \"./webpackfiles/indexcss.css\");\r\nvar imgI = __webpack_require__(/*! ./images/header.png */ \"./webpackfiles/images/header.png\");\r\nvar xmlData = __webpack_require__(/*! ./xml/data.xml */ \"./webpackfiles/xml/data.xml\");\r\nvar requirePack2 = __webpack_require__(/*! ./index.webpack2 */ \"./webpackfiles/index.webpack2.js\");\r\nvar mathF = __webpack_require__(/*! ./math */ \"./webpackfiles/math.js\").square;\r\n// import {square as mathF} from './math';\r\n\r\nif (true) {\r\n  console.log('Looks like we are in development mode!');\r\n}\r\n\r\nfunction component() {\r\n  console.log(imgI);\r\n  console.log(mathF(30));\r\n  console.log(\"development\");\r\n  var element = document.createElement('div');\r\n\r\n  // element.innerHTML = _.join(['Hello', 'webpack', '你好中国1231299999'], '~');\r\n  // element.innerHTML = 'hello world 你好中国123123';\r\n\r\n  element.classList.add('red');\r\n\r\n  var button = document.createElement('button');\r\n\r\n  button.onclick = requirePack2.click;\r\n\r\n  button.innerHTML = '点这里';\r\n\r\n  document.body.appendChild(button);\r\n\r\n  return element;\r\n}\r\n\r\nfunction imgc(){\r\n  var img = document.createElement('img');\r\n  img.src = imgI;\r\n  return img\r\n}\r\n\r\nvar ele = component();\r\n\r\ndocument.body.appendChild(ele);\r\ndocument.body.appendChild(imgc());\r\n\r\nconsole.log(xmlData);\r\n\r\nconsole.log(module);\r\n\r\nif(false){}\r\n\r\nmodule.exports = ['index.webpack']\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/module.js */ \"./C:/Users/Administrator/AppData/Roaming/npm/node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpackfiles/index.webpack.js?");

/***/ }),

/***/ "./webpackfiles/index.webpack2.js":
/*!****************************************!*\
  !*** ./webpackfiles/index.webpack2.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function click(){\r\n  alert('click33');\r\n  __webpack_require__.e(/*! require.ensure | require.ensure.test */ \"require.ensure.test\").then((function(){\r\n    __webpack_require__(/*! ./require.ensure.test */ \"./webpackfiles/require.ensure.test.js\");\r\n    console.log('require successfully');\r\n  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\r\n}\r\n\r\nmodule.exports = {\r\n  click\r\n}\n\n//# sourceURL=webpack:///./webpackfiles/index.webpack2.js?");

/***/ }),

/***/ "./webpackfiles/indexcss.css":
/*!***********************************!*\
  !*** ./webpackfiles/indexcss.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./indexcss.css */ \"./node_modules/css-loader/index.js!./webpackfiles/indexcss.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./webpackfiles/indexcss.css?");

/***/ }),

/***/ "./webpackfiles/math.js":
/*!******************************!*\
  !*** ./webpackfiles/math.js ***!
  \******************************/
/*! exports provided: square, cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cube\", function() { return cube; });\nfunction square(x) {\r\n  return x * x;\r\n}\r\n\r\nfunction cube(x) {\r\n  return x * x * x;\r\n}\n\n//# sourceURL=webpack:///./webpackfiles/math.js?");

/***/ }),

/***/ "./webpackfiles/xml/data.xml":
/*!***********************************!*\
  !*** ./webpackfiles/xml/data.xml ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"note\":{\"to\":[\"Mary\"],\"from\":[\"John\"],\"heading\":[\"Reminder\"],\"body\":[\"Call Cindy on Tuesday\"]}}\n\n//# sourceURL=webpack:///./webpackfiles/xml/data.xml?");

/***/ })

},[["./webpackfiles/index.webpack.js","runtime","verdors"]]]);