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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/profile/changePassword.js");
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
  const result = Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["compare"])(password, hasedPassword);
  return result;
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

/***/ "./pages/api/profile/changePassword.js":
/*!*********************************************!*\
  !*** ./pages/api/profile/changePassword.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");




async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_0__["getSession"])({
    req: req
  });

  if (!session) {
    res.status(422).json("Not authenticated user");
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__["dbConncect"])();
  await client.connect();
  const db = client.db("nextAuth");
  const collection = db.collection("loginInfo");
  const existEmail = await collection.findOne({
    email: userEmail
  });

  if (!existEmail) {
    res.status(201).json({
      message: "Email Not found"
    });
    client.close();
    return;
  }

  const hasedPassword = existEmail.password;
  const verifyPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["checkPassword"])(oldPassword, hasedPassword);

  if (!verifyPassword) {
    res.status(403).json({
      message: "Old password given incorrect"
    });
    return;
  }

  const newHassedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__["hashPassword"])(newPassword);
  const updateResult = await collection.updateOne({
    email: userEmail
  }, {
    $set: {
      password: newHassedPassword
    }
  });
  res.status("201").json({
    message: "Password Updated",
    data: updateResult
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

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9maWxlL2NoYW5nZVBhc3N3b3JkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiJdLCJuYW1lcyI6WyJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2VkUGFzc3dvcmQiLCJoYXNoIiwiY2hlY2tQYXNzd29yZCIsInJlc3VsdCIsImNvbXBhcmUiLCJNb25nb0NsaWVudCIsIlNlcnZlckFwaVZlcnNpb24iLCJyZXF1aXJlIiwiZGJDb25uY2VjdCIsInVyaSIsImNsaWVudCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInNlcnZlckFwaSIsInYxIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwic3RhdHVzIiwianNvbiIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsIm9sZFBhc3N3b3JkIiwiYm9keSIsIm5ld1Bhc3N3b3JkIiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImV4aXN0RW1haWwiLCJmaW5kT25lIiwibWVzc2FnZSIsImNsb3NlIiwidmVyaWZ5UGFzc3dvcmQiLCJuZXdIYXNzZWRQYXNzd29yZCIsInVwZGF0ZVJlc3VsdCIsInVwZGF0ZU9uZSIsIiRzZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FB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O0FBQUVZLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0F4QixVQUFNLENBQUN5QixLQUFQO0FBQ0E7QUFDRDs7QUFFRCxRQUFNbkMsYUFBYSxHQUFHZ0MsVUFBVSxDQUFDakMsUUFBakM7QUFFQSxRQUFNcUMsY0FBYyxHQUFHLE1BQU1sQywrREFBYSxDQUFDd0IsV0FBRCxFQUFjMUIsYUFBZCxDQUExQzs7QUFFQSxNQUFJLENBQUNvQyxjQUFMLEVBQXFCO0FBQ25CbkIsT0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVksYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNEOztBQUVELFFBQU1HLGlCQUFpQixHQUFHLE1BQU12Qyw4REFBWSxDQUFDOEIsV0FBRCxDQUE1QztBQUVBLFFBQU1VLFlBQVksR0FBRyxNQUFNUCxVQUFVLENBQUNRLFNBQVgsQ0FDekI7QUFBRWQsU0FBSyxFQUFFRjtBQUFULEdBRHlCLEVBRXpCO0FBQUVpQixRQUFJLEVBQUU7QUFBRXpDLGNBQVEsRUFBRXNDO0FBQVo7QUFBUixHQUZ5QixDQUEzQjtBQUtBcEIsS0FBRyxDQUFDSSxNQUFKLENBQVcsS0FBWCxFQUFrQkMsSUFBbEIsQ0FBdUI7QUFBQ1ksV0FBTyxFQUFDLGtCQUFUO0FBQTZCTyxRQUFJLEVBQUNIO0FBQWxDLEdBQXZCO0FBQ0Q7O0FBRWN2QixzRUFBZixFOzs7Ozs7Ozs7OztBQ3BEQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9hcGkvcHJvZmlsZS9jaGFuZ2VQYXNzd29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2ZpbGUvY2hhbmdlUGFzc3dvcmQuanNcIik7XG4iLCJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgaGFzZWRQYXNzd29yZCA9IGhhc2gocGFzc3dvcmQsIDEyKTtcclxuXHJcbiAgcmV0dXJuIGhhc2VkUGFzc3dvcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkLCBoYXNlZFBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gY29tcGFyZShwYXNzd29yZCwgaGFzZWRQYXNzd29yZCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJjb25zdCB7IE1vbmdvQ2xpZW50LCBTZXJ2ZXJBcGlWZXJzaW9uIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYkNvbm5jZWN0KCkge1xyXG4gIGNvbnN0IHVyaSA9XHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYWxhbWluOjBUTGhsNEszczRoWGxzcERAY2x1c3RlcjAudDUwYnZtbS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcbiAgY29uc3QgY2xpZW50ID1uZXcgTW9uZ29DbGllbnQodXJpLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICBzZXJ2ZXJBcGk6IFNlcnZlckFwaVZlcnNpb24udjEsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IGNoZWNrUGFzc3dvcmQsIGhhc2hQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xyXG5pbXBvcnQgeyBkYkNvbm5jZWN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUEFUQ0hcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IHJlcSB9KTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKFwiTm90IGF1dGhlbnRpY2F0ZWQgdXNlclwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuICBjb25zdCBvbGRQYXNzd29yZCA9IHJlcS5ib2R5Lm9sZFBhc3N3b3JkO1xyXG4gIGNvbnN0IG5ld1Bhc3N3b3JkID0gcmVxLmJvZHkubmV3UGFzc3dvcmQ7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGRiQ29ubmNlY3QoKTtcclxuICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihcIm5leHRBdXRoXCIpO1xyXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibG9naW5JbmZvXCIpO1xyXG5cclxuICBjb25zdCBleGlzdEVtYWlsID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcclxuXHJcbiAgaWYgKCFleGlzdEVtYWlsKSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiRW1haWwgTm90IGZvdW5kXCIgfSk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhc2VkUGFzc3dvcmQgPSBleGlzdEVtYWlsLnBhc3N3b3JkO1xyXG5cclxuICBjb25zdCB2ZXJpZnlQYXNzd29yZCA9IGF3YWl0IGNoZWNrUGFzc3dvcmQob2xkUGFzc3dvcmQsIGhhc2VkUGFzc3dvcmQpO1xyXG5cclxuICBpZiAoIXZlcmlmeVBhc3N3b3JkKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6IFwiT2xkIHBhc3N3b3JkIGdpdmVuIGluY29ycmVjdFwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3SGFzc2VkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQobmV3UGFzc3dvcmQpO1xyXG5cclxuICBjb25zdCB1cGRhdGVSZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLnVwZGF0ZU9uZShcclxuICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxyXG4gICAgeyAkc2V0OiB7IHBhc3N3b3JkOiBuZXdIYXNzZWRQYXNzd29yZCB9IH1cclxuICApO1xyXG5cclxuICByZXMuc3RhdHVzKFwiMjAxXCIpLmpzb24oe21lc3NhZ2U6XCJQYXNzd29yZCBVcGRhdGVkXCIgLGRhdGE6dXBkYXRlUmVzdWx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9