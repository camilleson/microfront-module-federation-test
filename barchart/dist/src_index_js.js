"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbarchart"] = self["webpackChunkbarchart"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n\n\nvar myChart = echarts__WEBPACK_IMPORTED_MODULE_0__.init(document.getElementById('barchart-dev'))\n\n\n  // Display the chart using the configuration items and data just specified.\n  myChart.setOption({\n    title: {\n      text: 'ECharts Getting Started Example'\n    },\n    tooltip: {},\n    legend: {\n      data: ['sales']\n    },\n    xAxis: {\n      data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']\n    },\n    yAxis: {},\n    series: [\n      {\n        name: 'sales',\n        type: 'bar',\n        data: [5, 20, 36, 10, 10, 20]\n      }\n    ]\n  });\n\n//# sourceURL=webpack://barchart/./src/index.js?");

/***/ })

}]);