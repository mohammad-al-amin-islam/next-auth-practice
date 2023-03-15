module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: hashPassword, checkPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPassword", function() { return checkPassword; });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

async function hashPassword(password) {
  const hasedPassword = Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["hash"])(password, 12);
  return hasedPassword;
}
async function checkPassword(password, hasedPassword) {
  const res = Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["compare"])(password, hasedPassword);
  return res;
}

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: dbConncect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbConncect", function() { return dbConncect; });
const {
  MongoClient,
  ServerApiVersion
} = __webpack_require__(/*! mongodb */ "mongodb");

async function dbConncect() {
  const uri = "mongodb+srv://alamin:0TLhl4K3s4hXlspD@cluster0.t50bvmm.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  });
  return client;
}

/***/ }),

/***/ "./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");



async function handler(req, res) {
  if (!req.method === "POST") {
    return;
  } //   const { data } = req.body.emai;


  const email = req.body.email;
  const password = req.body.password;

  if (!email || !email.includes("@") || !password || password.trim().length < 7) {
    res.status(422).json({
      message: "Invalid email or password"
    });
    return;
  }

  const hasedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_0__["hashPassword"])(password);
  const loginInfo = {
    email: email,
    password: hasedPassword
  };
  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__["dbConncect"])();
  await client.connect();
  const db = client.db("nextAuth");
  const collection = db.collection("loginInfo");
  const existEmail = await collection.findOne({
    email: email
  });

  if (existEmail) {
    res.status(201).json({
      message: "User exist already"
    });
    client.close();
    return;
  }

  const result = await collection.insertOne(loginInfo);
  res.status(201).json({
    message: result
  });
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2VkUGFzc3dvcmQiLCJoYXNoIiwiY2hlY2tQYXNzd29yZCIsInJlcyIsImNvbXBhcmUiLCJNb25nb0NsaWVudCIsIlNlcnZlckFwaVZlcnNpb24iLCJyZXF1aXJlIiwiZGJDb25uY2VjdCIsInVyaSIsImNsaWVudCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInNlcnZlckFwaSIsInYxIiwiaGFuZGxlciIsInJlcSIsIm1ldGhvZCIsImVtYWlsIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibG9naW5JbmZvIiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImV4aXN0RW1haWwiLCJmaW5kT25lIiwiY2xvc2UiLCJyZXN1bHQiLCJpbnNlcnRPbmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlE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QUU7QUFBWCxLQUFyQjtBQUNBZixVQUFNLENBQUNzQixLQUFQO0FBQ0E7QUFDRDs7QUFFRCxRQUFNQyxNQUFNLEdBQUcsTUFBTUosVUFBVSxDQUFDSyxTQUFYLENBQXFCUixTQUFyQixDQUFyQjtBQUNBdkIsS0FBRyxDQUFDb0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRVE7QUFBWCxHQUFyQjtBQUNEOztBQUNjbEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUM3Q0EscUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanNcIik7XG4iLCJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgaGFzZWRQYXNzd29yZCA9IGhhc2gocGFzc3dvcmQsIDEyKTtcclxuXHJcbiAgcmV0dXJuIGhhc2VkUGFzc3dvcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkLCBoYXNlZFBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzID0gY29tcGFyZShwYXNzd29yZCwgaGFzZWRQYXNzd29yZCk7XHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJjb25zdCB7IE1vbmdvQ2xpZW50LCBTZXJ2ZXJBcGlWZXJzaW9uIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYkNvbm5jZWN0KCkge1xyXG4gIGNvbnN0IHVyaSA9XHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYWxhbWluOjBUTGhsNEszczRoWGxzcERAY2x1c3RlcjAudDUwYnZtbS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcbiAgY29uc3QgY2xpZW50ID1uZXcgTW9uZ29DbGllbnQodXJpLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICBzZXJ2ZXJBcGk6IFNlcnZlckFwaVZlcnNpb24udjEsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XHJcbmltcG9ydCB7IGRiQ29ubmNlY3QgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKCFyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4vLyAgIGNvbnN0IHsgZGF0YSB9ID0gcmVxLmJvZHkuZW1haTtcclxuXHJcbiAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuICBjb25zdCBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xyXG5cclxuICBpZiAoXHJcbiAgICAhZW1haWwgfHxcclxuICAgICFlbWFpbC5pbmNsdWRlcyhcIkBcIikgfHxcclxuICAgICFwYXNzd29yZCB8fFxyXG4gICAgcGFzc3dvcmQudHJpbSgpLmxlbmd0aCA8IDdcclxuICApIHtcclxuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYXNlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcclxuICBjb25zdCBsb2dpbkluZm8gPSB7XHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBwYXNzd29yZDogaGFzZWRQYXNzd29yZCxcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBkYkNvbm5jZWN0KCk7XHJcblxyXG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwibmV4dEF1dGhcIik7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJsb2dpbkluZm9cIik7XHJcblxyXG4gIGNvbnN0IGV4aXN0RW1haWwgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoe2VtYWlsOmVtYWlsfSk7XHJcbiAgaWYoZXhpc3RFbWFpbCl7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBleGlzdCBhbHJlYWR5XCIgfSk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUobG9naW5JbmZvKTtcclxuICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IHJlc3VsdCB9KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=