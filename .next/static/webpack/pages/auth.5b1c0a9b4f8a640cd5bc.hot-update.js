webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.css */ "./components/auth/auth-form.module.css");
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\auth-project\\components\\auth\\auth-form.js",
    _s = $RefreshSig$();





function createAccount(_x, _x2) {
  return _createAccount.apply(this, arguments);
}

function _createAccount() {
  _createAccount = Object(D_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    var data, res, resData;
    return D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              email: email,
              password: password
            };
            _context2.next = 3;
            return fetch("/api/auth/signup", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            });

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            resData = _context2.sent;

            if (res.ok) {
              _context2.next = 9;
              break;
            }

            throw new Error(resData.message || "Something went wrong");

          case 9:
            return _context2.abrupt("return", resData);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createAccount.apply(this, arguments);
}

function AuthForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLogin = _useState[0],
      setIsLogin = _useState[1];

  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  }

  function handleSubmiForm(_x3) {
    return _handleSubmiForm.apply(this, arguments);
  }

  function _handleSubmiForm() {
    _handleSubmiForm = Object(D_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var email, password, result, _result;

      return D_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              email = emailRef.current.value;
              password = passwordRef.current.value;

              if (!isLogin) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_5__["signIn"])('credintials', {
                redirect: false,
                email: email,
                password: password
              });

            case 6:
              result = _context.sent;
              console.log(result);

            case 8:
              if (isLogin) {
                _context.next = 19;
                break;
              }

              _context.prev = 9;
              _context.next = 12;
              return createAccount(email, password);

            case 12:
              _result = _context.sent;
              console.log(_result);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](9);
              console.log(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 16]]);
    }));
    return _handleSubmiForm.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.auth,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: isLogin ? "Login" : "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: handleSubmiForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: emailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: passwordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "button",
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "6fCgByItV87rON1yeL5+jsb6DGI=");

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c;

$RefreshReg$(_c, "AuthForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50IiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNEYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJlbWFpbFJlZiIsInVzZVJlZiIsInBhc3N3b3JkUmVmIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwiaGFuZGxlU3VibWlGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNpZ25JbiIsInJlZGlyZWN0IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJhdXRoIiwiY29udHJvbCIsImFjdGlvbnMiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztTQUNlQSxhOzs7OzswUEFBZixrQkFBNkJDLEtBQTdCLEVBQW9DQyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsZ0JBRFIsR0FDZTtBQUNYRixtQkFBSyxFQUFFQSxLQURJO0FBRVhDLHNCQUFRLEVBQUVBO0FBRkMsYUFEZjtBQUFBO0FBQUEsbUJBS29CRSxLQUFLLENBQUMsa0JBQUQsRUFBcUI7QUFDMUNDLG9CQUFNLEVBQUUsTUFEa0M7QUFFMUNDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmLENBRm9DO0FBRzFDTSxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQ7QUFIaUMsYUFBckIsQ0FMekI7O0FBQUE7QUFLUUMsZUFMUjtBQUFBO0FBQUEsbUJBWXdCQSxHQUFHLENBQUNDLElBQUosRUFaeEI7O0FBQUE7QUFZUUMsbUJBWlI7O0FBQUEsZ0JBY09GLEdBQUcsQ0FBQ0csRUFkWDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFlVSxJQUFJQyxLQUFKLENBQVVGLE9BQU8sQ0FBQ0csT0FBUixJQUFtQixzQkFBN0IsQ0FmVjs7QUFBQTtBQUFBLDhDQWtCU0gsT0FsQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXFCQSxTQUFTSSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsSUFBRCxDQURwQjtBQUFBLE1BQ1hDLE9BRFc7QUFBQSxNQUNGQyxVQURFOztBQUVsQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxvREFBTSxFQUExQjs7QUFFQSxXQUFTRSxxQkFBVCxHQUFpQztBQUMvQkosY0FBVSxDQUFDLFVBQUNLLFNBQUQ7QUFBQSxhQUFlLENBQUNBLFNBQWhCO0FBQUEsS0FBRCxDQUFWO0FBQ0Q7O0FBUGlCLFdBU0hDLGVBVEc7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFBBU2xCLGlCQUErQkMsS0FBL0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxtQkFBSyxDQUFDQyxjQUFOO0FBRU0xQixtQkFIUixHQUdnQm1CLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkMsS0FIakM7QUFLUTNCLHNCQUxSLEdBS21Cb0IsV0FBVyxDQUFDTSxPQUFaLENBQW9CQyxLQUx2Qzs7QUFBQSxtQkFPTVgsT0FQTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQVF3QlksK0RBQU0sQ0FBQyxhQUFELEVBQWU7QUFDdkNDLHdCQUFRLEVBQUMsS0FEOEI7QUFFdkM5QixxQkFBSyxFQUFDQSxLQUZpQztBQUd2Q0Msd0JBQVEsRUFBQ0E7QUFIOEIsZUFBZixDQVI5Qjs7QUFBQTtBQVFTOEIsb0JBUlQ7QUFjSUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQWRKO0FBQUEsa0JBaUJPZCxPQWpCUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBbUIyQmxCLGFBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLENBbkJ4Qzs7QUFBQTtBQW1CWThCLHFCQW5CWjtBQW9CTUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBcEJOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBc0JNQyxxQkFBTyxDQUFDQyxHQUFSOztBQXRCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVRrQjtBQUFBO0FBQUE7O0FBb0NsQixzQkFDRTtBQUFTLGFBQVMsRUFBRUMsNERBQU8sQ0FBQ0MsSUFBNUI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLbEIsT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGNBQVEsRUFBRU8sZUFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVVLDREQUFPLENBQUNFLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLFlBQUUsRUFBQyxPQUF2QjtBQUErQixrQkFBUSxNQUF2QztBQUF3QyxhQUFHLEVBQUVqQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFFZSw0REFBTyxDQUFDRSxPQUF4QjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFFLEVBQUMsVUFBMUI7QUFBcUMsa0JBQVEsTUFBN0M7QUFBOEMsYUFBRyxFQUFFZjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBSyxpQkFBUyxFQUFFYSw0REFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQVNwQixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRWlCLDREQUFPLENBQUNJLE1BRnJCO0FBR0UsaUJBQU8sRUFBRWhCLHFCQUhYO0FBQUEsb0JBS0dMLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQTdEUUYsUTs7S0FBQUEsUTtBQStETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC41YjFjMGE5YjRmOGE2NDBjZDViYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge3NpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIlxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVBY2NvdW50KGVtYWlsLCBwYXNzd29yZCkge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgfTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzRGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWlGb3JtKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgaWYgKGlzTG9naW4pIHtcclxuICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oJ2NyZWRpbnRpYWxzJyx7XHJcbiAgICAgICAgcmVkaXJlY3Q6ZmFsc2UsXHJcbiAgICAgICAgZW1haWw6ZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKCFpc0xvZ2luKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlQWNjb3VudChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxyXG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWlGb3JtfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgcmVmPXtlbWFpbFJlZn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQgcmVmPXtwYXNzd29yZFJlZn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgIDxidXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9