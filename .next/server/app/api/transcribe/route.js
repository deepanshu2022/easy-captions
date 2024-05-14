"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/transcribe/route";
exports.ids = ["app/api/transcribe/route"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Gadget_Gully_OneDrive_Desktop_EasyCaptions_easycaptions_src_app_api_transcribe_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/transcribe/route.js */ \"(rsc)/./src/app/api/transcribe/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/transcribe/route\",\n        pathname: \"/api/transcribe\",\n        filename: \"route\",\n        bundlePath: \"app/api/transcribe/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Gadget Gully\\\\OneDrive\\\\Desktop\\\\EasyCaptions\\\\easycaptions\\\\src\\\\app\\\\api\\\\transcribe\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Gadget_Gully_OneDrive_Desktop_EasyCaptions_easycaptions_src_app_api_transcribe_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/transcribe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFuc2NyaWJlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0cmFuc2NyaWJlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdHJhbnNjcmliZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNHYWRnZXQlMjBHdWxseSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0Vhc3lDYXB0aW9ucyU1Q2Vhc3ljYXB0aW9ucyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDR2FkZ2V0JTIwR3VsbHklNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNFYXN5Q2FwdGlvbnMlNUNlYXN5Y2FwdGlvbnMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJEO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFzeWNhcHRpb25zLz81NDFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEdhZGdldCBHdWxseVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEVhc3lDYXB0aW9uc1xcXFxlYXN5Y2FwdGlvbnNcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdHJhbnNjcmliZVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdHJhbnNjcmliZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RyYW5zY3JpYmVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RyYW5zY3JpYmUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxHYWRnZXQgR3VsbHlcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxFYXN5Q2FwdGlvbnNcXFxcZWFzeWNhcHRpb25zXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRyYW5zY3JpYmVcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3RyYW5zY3JpYmUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/transcribe/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/transcribe/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-transcribe */ \"(rsc)/./node_modules/@aws-sdk/client-transcribe/dist-es/TranscribeClient.js\");\n/* harmony import */ var _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/client-transcribe */ \"(rsc)/./node_modules/@aws-sdk/client-transcribe/dist-es/commands/StartTranscriptionJobCommand.js\");\n/* harmony import */ var _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/client-transcribe */ \"(rsc)/./node_modules/@aws-sdk/client-transcribe/dist-es/commands/GetTranscriptionJobCommand.js\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction getClient() {\n    return new _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_1__.TranscribeClient({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n        }\n    });\n}\nfunction createTranscribeCommand(filename) {\n    return new _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_2__.StartTranscriptionJobCommand({\n        TranscriptionJobName: filename,\n        OutputBucketName: process.env.BUCKET_NAME,\n        OutputKey: filename + \".transcription\",\n        IdentifyLanguage: true,\n        Media: {\n            MediaFileUri: \"s3://\" + process.env.BUCKET_NAME + \"/\" + filename\n        }\n    });\n}\nasync function creteTranscriptionJob(filename) {\n    const transcribeClient = getClient();\n    const transcriptionCommand = createTranscribeCommand(filename);\n    return transcribeClient.send(transcriptionCommand);\n}\nasync function getJob(filename) {\n    const transcribeClient = getClient();\n    let jobStatusResult = null;\n    try {\n        const transcriptionJobStatusCommand = new _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_3__.GetTranscriptionJobCommand({\n            TranscriptionJobName: filename\n        });\n        jobStatusResult = await transcribeClient.send(transcriptionJobStatusCommand);\n    } catch (err) {}\n    return jobStatusResult;\n}\nasync function streamToString(stream) {\n    const chunks = [];\n    return new Promise((resolve, reject)=>{\n        stream.on(\"data\", (chunk)=>chunks.push(Buffer.from(chunk)));\n        stream.on(\"end\", ()=>resolve(Buffer.concat(chunks).toString(\"utf8\")));\n        stream.on(\"error\", reject);\n    });\n}\nasync function getTranscriptionFile(filename) {\n    const transcriptionFile = filename + \".transcription\";\n    const s3client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n        }\n    });\n    const getObjectCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand({\n        Bucket: process.env.BUCKET_NAME,\n        Key: transcriptionFile\n    });\n    let transcptionFileResponse = null;\n    try {\n        transcptionFileResponse = await s3client.send(getObjectCommand);\n    } catch (e) {}\n    ;\n    if (transcptionFileResponse) {\n        return JSON.parse(await streamToString(transcptionFileResponse.Body));\n    }\n    return null;\n}\nasync function GET(req) {\n    const url = new URL(req.url);\n    const searchParams = new URLSearchParams(url.searchParams);\n    const filename = searchParams.get(\"filename\");\n    // find ready transcription \n    const transcription = await getTranscriptionFile(filename);\n    if (transcription) {\n        return Response.json({\n            status: \"COMPLETED\",\n            transcription\n        });\n    }\n    // check if already transcribed\n    const existingJob = await getJob(filename);\n    if (existingJob) {\n        return Response.json({\n            status: existingJob.TranscriptionJob.TranscriptionJobStatus\n        });\n    }\n    // creating new transcribe job\n    if (!existingJob) {\n        const newJob = await creteTranscriptionJob(filename);\n        return Response.json({\n            status: newJob.TranscriptionJob.TranscriptionJobStatus\n        });\n    }\n    return Response.json(null);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBR0EsK0JBQStCO0lBQy9CLE1BQU1JLGNBQWMsTUFBTXZDLE9BQU9aO0lBRWpDLElBQUdtRCxhQUFZO1FBQ1gsT0FBT0gsU0FBU0MsSUFBSSxDQUFDO1lBQ2pCQyxRQUFRQyxZQUFZQyxnQkFBZ0IsQ0FBQ0Msc0JBQXNCO1FBQy9EO0lBQ0o7SUFFQSw4QkFBOEI7SUFDOUIsSUFBSSxDQUFDRixhQUFhO1FBQ2QsTUFBTUcsU0FBUyxNQUFNOUMsc0JBQXNCUjtRQUMzQyxPQUFPZ0QsU0FBU0MsSUFBSSxDQUFDO1lBQ2pCQyxRQUFRSSxPQUFPRixnQkFBZ0IsQ0FBQ0Msc0JBQXNCO1FBQzFEO0lBQ0o7SUFFQSxPQUFPTCxTQUFTQyxJQUFJLENBQUM7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5Y2FwdGlvbnMvLi9zcmMvYXBwL2FwaS90cmFuc2NyaWJlL3JvdXRlLmpzPzZjNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0VHJhbnNjcmlwdGlvbkpvYkNvbW1hbmQsIFN0YXJ0VHJhbnNjcmlwdGlvbkpvYkNvbW1hbmQsIFRyYW5zY3JpYmVDbGllbnQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXRyYW5zY3JpYmVcIjtcclxuaW1wb3J0IHsgUzNDbGllbnQsIEdldE9iamVjdENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXMzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xpZW50KCkge1xyXG4gICAgcmV0dXJuIG5ldyBUcmFuc2NyaWJlQ2xpZW50KHtcclxuICAgICAgICByZWdpb246ICdldS1ub3J0aC0xJyxcclxuICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQsXHJcbiAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHJhbnNjcmliZUNvbW1hbmQoZmlsZW5hbWUpIHtcclxuICAgIHJldHVybiBuZXcgU3RhcnRUcmFuc2NyaXB0aW9uSm9iQ29tbWFuZCh7IFxyXG4gICAgICAgIFRyYW5zY3JpcHRpb25Kb2JOYW1lIDogZmlsZW5hbWUsXHJcbiAgICAgICAgT3V0cHV0QnVja2V0TmFtZTogcHJvY2Vzcy5lbnYuQlVDS0VUX05BTUUsXHJcbiAgICAgICAgT3V0cHV0S2V5OiBmaWxlbmFtZSArICcudHJhbnNjcmlwdGlvbicsXHJcbiAgICAgICAgSWRlbnRpZnlMYW5ndWFnZTogdHJ1ZSxcclxuICAgICAgICBNZWRpYToge1xyXG4gICAgICAgICAgICBNZWRpYUZpbGVVcmk6ICdzMzovLycgKyBwcm9jZXNzLmVudi5CVUNLRVRfTkFNRSArICcvJyArIGZpbGVuYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JldGVUcmFuc2NyaXB0aW9uSm9iKGZpbGVuYW1lKXtcclxuICAgIGNvbnN0IHRyYW5zY3JpYmVDbGllbnQgPSBnZXRDbGllbnQoKTtcclxuICAgIGNvbnN0IHRyYW5zY3JpcHRpb25Db21tYW5kID0gY3JlYXRlVHJhbnNjcmliZUNvbW1hbmQoZmlsZW5hbWUpO1xyXG4gICAgcmV0dXJuIHRyYW5zY3JpYmVDbGllbnQuc2VuZCh0cmFuc2NyaXB0aW9uQ29tbWFuZCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEpvYihmaWxlbmFtZSkge1xyXG4gICAgY29uc3QgdHJhbnNjcmliZUNsaWVudCA9IGdldENsaWVudCgpO1xyXG5cclxuICAgIGxldCBqb2JTdGF0dXNSZXN1bHQgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2NyaXB0aW9uSm9iU3RhdHVzQ29tbWFuZCA9IG5ldyBHZXRUcmFuc2NyaXB0aW9uSm9iQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIFRyYW5zY3JpcHRpb25Kb2JOYW1lOiBmaWxlbmFtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBqb2JTdGF0dXNSZXN1bHQgPSBhd2FpdCB0cmFuc2NyaWJlQ2xpZW50LnNlbmQodHJhbnNjcmlwdGlvbkpvYlN0YXR1c0NvbW1hbmQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGpvYlN0YXR1c1Jlc3VsdDtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbVRvU3RyaW5nKHN0cmVhbSl7XHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc3RyZWFtLm9uKCdkYXRhJywgY2h1bmsgPT4gY2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKSk7XHJcbiAgICAgICAgc3RyZWFtLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKEJ1ZmZlci5jb25jYXQoY2h1bmtzKS50b1N0cmluZygndXRmOCcpKSk7XHJcbiAgICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VHJhbnNjcmlwdGlvbkZpbGUgKGZpbGVuYW1lKSB7XHJcbiAgICBjb25zdCB0cmFuc2NyaXB0aW9uRmlsZSA9IGZpbGVuYW1lICsgJy50cmFuc2NyaXB0aW9uJyA7XHJcbiAgICBjb25zdCBzM2NsaWVudCA9IG5ldyBTM0NsaWVudCh7XHJcbiAgICAgICAgcmVnaW9uOiBcImV1LW5vcnRoLTFcIixcclxuICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQsXHJcbiAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRPYmplY3RDb21tYW5kID0gbmV3IEdldE9iamVjdENvbW1hbmQoe1xyXG4gICAgICAgIEJ1Y2tldCA6IHByb2Nlc3MuZW52LkJVQ0tFVF9OQU1FLFxyXG4gICAgICAgIEtleSA6IHRyYW5zY3JpcHRpb25GaWxlLCBcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCB0cmFuc2NwdGlvbkZpbGVSZXNwb25zZSA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRyYW5zY3B0aW9uRmlsZVJlc3BvbnNlID0gYXdhaXQgczNjbGllbnQuc2VuZChnZXRPYmplY3RDb21tYW5kKTtcclxuICAgIH0gY2F0Y2goZSl7fTtcclxuXHJcbiAgICBpZih0cmFuc2NwdGlvbkZpbGVSZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKCBcclxuICAgICAgICAgICAgYXdhaXQgc3RyZWFtVG9TdHJpbmcodHJhbnNjcHRpb25GaWxlUmVzcG9uc2UuQm9keSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSl7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoUGFyYW1zKTtcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gc2VhcmNoUGFyYW1zLmdldCgnZmlsZW5hbWUnKTtcclxuXHJcbiAgICAvLyBmaW5kIHJlYWR5IHRyYW5zY3JpcHRpb24gXHJcbiAgICBjb25zdCB0cmFuc2NyaXB0aW9uID0gYXdhaXQgZ2V0VHJhbnNjcmlwdGlvbkZpbGUoZmlsZW5hbWUpO1xyXG4gICAgaWYodHJhbnNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnQ09NUExFVEVEJyxcclxuICAgICAgICAgICAgdHJhbnNjcmlwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY2hlY2sgaWYgYWxyZWFkeSB0cmFuc2NyaWJlZFxyXG4gICAgY29uc3QgZXhpc3RpbmdKb2IgPSBhd2FpdCBnZXRKb2IoZmlsZW5hbWUpO1xyXG5cclxuICAgIGlmKGV4aXN0aW5nSm9iKXtcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogZXhpc3RpbmdKb2IuVHJhbnNjcmlwdGlvbkpvYi5UcmFuc2NyaXB0aW9uSm9iU3RhdHVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0aW5nIG5ldyB0cmFuc2NyaWJlIGpvYlxyXG4gICAgaWYgKCFleGlzdGluZ0pvYikge1xyXG4gICAgICAgIGNvbnN0IG5ld0pvYiA9IGF3YWl0IGNyZXRlVHJhbnNjcmlwdGlvbkpvYihmaWxlbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IG5ld0pvYi5UcmFuc2NyaXB0aW9uSm9iLlRyYW5zY3JpcHRpb25Kb2JTdGF0dXMsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKG51bGwpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJHZXRUcmFuc2NyaXB0aW9uSm9iQ29tbWFuZCIsIlN0YXJ0VHJhbnNjcmlwdGlvbkpvYkNvbW1hbmQiLCJUcmFuc2NyaWJlQ2xpZW50IiwiUzNDbGllbnQiLCJHZXRPYmplY3RDb21tYW5kIiwiZ2V0Q2xpZW50IiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInByb2Nlc3MiLCJlbnYiLCJBV1NfQUNDRVNTX0tFWV9JRCIsInNlY3JldEFjY2Vzc0tleSIsIkFXU19TRUNSRVRfQUNDRVNTX0tFWSIsImNyZWF0ZVRyYW5zY3JpYmVDb21tYW5kIiwiZmlsZW5hbWUiLCJUcmFuc2NyaXB0aW9uSm9iTmFtZSIsIk91dHB1dEJ1Y2tldE5hbWUiLCJCVUNLRVRfTkFNRSIsIk91dHB1dEtleSIsIklkZW50aWZ5TGFuZ3VhZ2UiLCJNZWRpYSIsIk1lZGlhRmlsZVVyaSIsImNyZXRlVHJhbnNjcmlwdGlvbkpvYiIsInRyYW5zY3JpYmVDbGllbnQiLCJ0cmFuc2NyaXB0aW9uQ29tbWFuZCIsInNlbmQiLCJnZXRKb2IiLCJqb2JTdGF0dXNSZXN1bHQiLCJ0cmFuc2NyaXB0aW9uSm9iU3RhdHVzQ29tbWFuZCIsImVyciIsInN0cmVhbVRvU3RyaW5nIiwic3RyZWFtIiwiY2h1bmtzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsImNodW5rIiwicHVzaCIsIkJ1ZmZlciIsImZyb20iLCJjb25jYXQiLCJ0b1N0cmluZyIsImdldFRyYW5zY3JpcHRpb25GaWxlIiwidHJhbnNjcmlwdGlvbkZpbGUiLCJzM2NsaWVudCIsImdldE9iamVjdENvbW1hbmQiLCJCdWNrZXQiLCJLZXkiLCJ0cmFuc2NwdGlvbkZpbGVSZXNwb25zZSIsImUiLCJKU09OIiwicGFyc2UiLCJCb2R5IiwiR0VUIiwicmVxIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwidHJhbnNjcmlwdGlvbiIsIlJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsImV4aXN0aW5nSm9iIiwiVHJhbnNjcmlwdGlvbkpvYiIsIlRyYW5zY3JpcHRpb25Kb2JTdGF0dXMiLCJuZXdKb2IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/transcribe/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@aws-sdk","vendor-chunks/@smithy","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CGadget%20Gully%5COneDrive%5CDesktop%5CEasyCaptions%5Ceasycaptions&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();