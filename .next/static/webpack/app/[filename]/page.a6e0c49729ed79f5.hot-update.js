"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[filename]/page",{

/***/ "(app-pages-browser)/./src/app/[filename]/page.js":
/*!************************************!*\
  !*** ./src/app/[filename]/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _libs_awsTrancriptionHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/awsTrancriptionHelpers */ \"(app-pages-browser)/./src/libs/awsTrancriptionHelpers.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_ResultVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/ResultVideo */ \"(app-pages-browser)/./src/Components/ResultVideo.js\");\n/* harmony import */ var _Components_TransciptionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/TransciptionEditor */ \"(app-pages-browser)/./src/Components/TransciptionEditor.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FilePage(param) {\n    let { params } = param;\n    _s();\n    const filename = params.filename;\n    const [isTranscribing, setIsTranscribing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isFetchingInfo, setIsFetchingInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [awsTranscriptionItems, setAwsTranscriptionItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // getTranscription();\n        function getTranscription() {\n            setIsFetchingInfo(true);\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/transcribe?filename=\" + filename).then((response)=>{\n                var _response_data, _response_data1;\n                setIsFetchingInfo(false);\n                const status = (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.status;\n                const transcription = (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : _response_data1.transcription;\n                if (status === \"IN_PROGRESS\") {\n                    setIsTranscribing(true);\n                    setTimeout(getTranscription, 3000);\n                } else {\n                    setIsTranscribing(false);\n                    setAwsTranscriptionItems((0,_libs_awsTrancriptionHelpers__WEBPACK_IMPORTED_MODULE_1__.clearTranscriptionItems)(transcription.results.items));\n                }\n                ;\n            });\n        }\n    }, [\n        filename\n    ]);\n    if (isTranscribing) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Transcribing Your Video...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"It might take a second or two\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this);\n    }\n    if (isFetchingInfo) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Fetching Information...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid sm:grid-cols-2 gap-8 mb-8 sm:gap-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl mb-2 text-white/70\",\n                            children: \"Transcripted Text\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_TransciptionEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            awsTranscriptionItems: awsTranscriptionItems,\n                            setAwsTranscriptionItems: setAwsTranscriptionItems\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl mb-4 text-white/70\",\n                            children: \"Captions are ready to be Applied\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_ResultVideo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            filename: filename,\n                            transcriptionItems: awsTranscriptionItems\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\[filename]\\\\page.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(FilePage, \"+BZJD+PPBa4LHdYdd0HH0/USqz0=\");\n_c = FilePage;\nvar _c;\n$RefreshReg$(_c, \"FilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2ZpbGVuYW1lXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDc0U7QUFDNUM7QUFDa0I7QUFDTztBQUNlO0FBR25ELFNBQVNNLFNBQVMsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUM3QixNQUFNQyxXQUFXRCxPQUFPQyxRQUFRO0lBQ2hDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFFVCwrQ0FBUUEsQ0FBQztJQUNwRCxNQUFNLENBQUNVLHVCQUF1QkMseUJBQXlCLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFckVELGdEQUFTQSxDQUFDO1FBQ04sc0JBQXNCO1FBQ3RCLFNBQVNhO1lBQ0xILGtCQUFrQjtZQUNsQlgsNkNBQUtBLENBQUNlLEdBQUcsQ0FBQyw4QkFBNEJSLFVBQVVTLElBQUksQ0FBQ0MsQ0FBQUE7b0JBRWxDQSxnQkFDT0E7Z0JBRnRCTixrQkFBa0I7Z0JBQ2xCLE1BQU1PLFVBQVNELGlCQUFBQSxTQUFTRSxJQUFJLGNBQWJGLHFDQUFBQSxlQUFlQyxNQUFNO2dCQUNwQyxNQUFNRSxpQkFBZ0JILGtCQUFBQSxTQUFTRSxJQUFJLGNBQWJGLHNDQUFBQSxnQkFBZUcsYUFBYTtnQkFFbEQsSUFBSUYsV0FBVyxlQUFlO29CQUMxQlQsa0JBQWtCO29CQUNsQlksV0FBV1Asa0JBQWlCO2dCQUNoQyxPQUFLO29CQUNETCxrQkFBa0I7b0JBRWxCSSx5QkFDSWQscUZBQXVCQSxDQUFDcUIsY0FBY0UsT0FBTyxDQUFDQyxLQUFLO2dCQUUzRDs7WUFDSjtRQUNKO0lBQ0osR0FBSTtRQUFDaEI7S0FBUztJQUdkLElBQUdDLGdCQUFnQjtRQUNmLHFCQUNJLDhEQUFDZ0I7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHOzs7Ozs7Ozs7Ozs7SUFHaEI7SUFFQSxJQUFHakIsZ0JBQWU7UUFDZCxxQkFDSSw4REFBQ2M7c0JBQUk7Ozs7OztJQUliOztJQUVBLHFCQUNJLDhEQUFDQTtrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQThCOzs7Ozs7c0NBQzVDLDhEQUFDckIsc0VBQW1CQTs0QkFDaEJRLHVCQUF1QkE7NEJBQ3ZCQywwQkFBMEJBOzs7Ozs7Ozs7Ozs7OEJBSWxDLDhEQUFDVztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUE4Qjs7Ozs7O3NDQUM1Qyw4REFBQ3RCLCtEQUFXQTs0QkFBQ0ksVUFBVUE7NEJBQVVxQixvQkFBb0JoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekU7R0FqRXdCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1tmaWxlbmFtZV0vcGFnZS5qcz8yOTI4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHtjbGVhclRyYW5zY3JpcHRpb25JdGVtc30gZnJvbSBcIkAvbGlicy9hd3NUcmFuY3JpcHRpb25IZWxwZXJzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVzdWx0VmlkZW8gZnJvbSBcIkAvQ29tcG9uZW50cy9SZXN1bHRWaWRlb1wiO1xyXG5pbXBvcnQgVHJhbnNjcmlwdGlvbkVkaXRvciBmcm9tIFwiQC9Db21wb25lbnRzL1RyYW5zY2lwdGlvbkVkaXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVQYWdlKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IHBhcmFtcy5maWxlbmFtZTtcclxuICAgIGNvbnN0IFtpc1RyYW5zY3JpYmluZywgc2V0SXNUcmFuc2NyaWJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzRmV0Y2hpbmdJbmZvLCBzZXRJc0ZldGNoaW5nSW5mb10gPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthd3NUcmFuc2NyaXB0aW9uSXRlbXMsIHNldEF3c1RyYW5zY3JpcHRpb25JdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBnZXRUcmFuc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VHJhbnNjcmlwdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0SXNGZXRjaGluZ0luZm8odHJ1ZSk7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90cmFuc2NyaWJlP2ZpbGVuYW1lPScrZmlsZW5hbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNGZXRjaGluZ0luZm8oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuZGF0YT8uc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNjcmlwdGlvbiA9IHJlc3BvbnNlLmRhdGE/LnRyYW5zY3JpcHRpb247XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdJTl9QUk9HUkVTUycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1RyYW5zY3JpYmluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGdldFRyYW5zY3JpcHRpb24sMzAwMCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1RyYW5zY3JpYmluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXdzVHJhbnNjcmlwdGlvbkl0ZW1zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRyYW5zY3JpcHRpb25JdGVtcyh0cmFuc2NyaXB0aW9uLnJlc3VsdHMuaXRlbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gLCBbZmlsZW5hbWVdKTtcclxuXHJcblxyXG4gICAgaWYoaXNUcmFuc2NyaWJpbmcpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5UcmFuc2NyaWJpbmcgWW91ciBWaWRlby4uLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+SXQgbWlnaHQgdGFrZSBhIHNlY29uZCBvciB0d288L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNGZXRjaGluZ0luZm8pe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBGZXRjaGluZyBJbmZvcm1hdGlvbi4uLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTggbWItOCBzbTpnYXAtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTIgdGV4dC13aGl0ZS83MFwiPlRyYW5zY3JpcHRlZCBUZXh0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNjcmlwdGlvbkVkaXRvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdzVHJhbnNjcmlwdGlvbkl0ZW1zPXthd3NUcmFuc2NyaXB0aW9uSXRlbXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBd3NUcmFuc2NyaXB0aW9uSXRlbXM9e3NldEF3c1RyYW5zY3JpcHRpb25JdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IHRleHQtd2hpdGUvNzBcIj5DYXB0aW9ucyBhcmUgcmVhZHkgdG8gYmUgQXBwbGllZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc3VsdFZpZGVvIGZpbGVuYW1lPXtmaWxlbmFtZX0gdHJhbnNjcmlwdGlvbkl0ZW1zPXthd3NUcmFuc2NyaXB0aW9uSXRlbXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY2xlYXJUcmFuc2NyaXB0aW9uSXRlbXMiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVzdWx0VmlkZW8iLCJUcmFuc2NyaXB0aW9uRWRpdG9yIiwiRmlsZVBhZ2UiLCJwYXJhbXMiLCJmaWxlbmFtZSIsImlzVHJhbnNjcmliaW5nIiwic2V0SXNUcmFuc2NyaWJpbmciLCJpc0ZldGNoaW5nSW5mbyIsInNldElzRmV0Y2hpbmdJbmZvIiwiYXdzVHJhbnNjcmlwdGlvbkl0ZW1zIiwic2V0QXdzVHJhbnNjcmlwdGlvbkl0ZW1zIiwiZ2V0VHJhbnNjcmlwdGlvbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJ0cmFuc2NyaXB0aW9uIiwic2V0VGltZW91dCIsInJlc3VsdHMiLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaDQiLCJ0cmFuc2NyaXB0aW9uSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[filename]/page.js\n"));

/***/ })

});