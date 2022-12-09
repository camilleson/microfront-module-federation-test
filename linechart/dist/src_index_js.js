"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklinechart"] = self["webpackChunklinechart"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'echarts'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar myChart = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'echarts'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document.getElementById('linechart-dev'))\n\n\n  // Display the chart using the configuration items and data just specified.\n  myChart.setOption({\n    xAxis: {\n        type: 'category',\n        data: ['A', 'B', 'C']\n      },\n      yAxis: {\n        type: 'value'\n      },\n      series: [\n        {\n          data: [120, 200, 150],\n          type: 'line'\n        }\n      ]\n  });\n\n//# sourceURL=webpack://linechart/./src/index.js?");

/***/ })

}]);