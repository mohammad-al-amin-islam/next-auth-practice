webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-form.module.css */ "./components/auth/auth-form.module.css");
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "D:\\Udemy NextJS\\auth-project\\components\\auth\\auth-form.js",
    _s = $RefreshSig$();






function createAccount(_x, _x2) {
  return _createAccount.apply(this, arguments);
}

function _createAccount() {
  _createAccount = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    var data, res, resData;
    return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  }

  function handleSubmiForm(_x3) {
    return _handleSubmiForm.apply(this, arguments);
  }

  function _handleSubmiForm() {
    _handleSubmiForm = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var email, password, result, _result;

      return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              email = emailRef.current.value;
              password = passwordRef.current.value;

              if (!isLogin) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_6__["signIn"])("credentials", {
                redirect: false,
                email: email,
                password: password
              });

            case 6:
              result = _context.sent;
              console.log(result);

              if (!result.error) {
                router.replace("/profile");
              }

            case 9:
              if (isLogin) {
                _context.next = 20;
                break;
              }

              _context.prev = 10;
              _context.next = 13;
              return createAccount(email, password);

            case 13:
              _result = _context.sent;
              console.log(_result);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](10);
              console.log(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10, 17]]);
    }));
    return _handleSubmiForm.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.auth,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: isLogin ? "Login" : "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: handleSubmiForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: emailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: passwordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "button",
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "CGUC7Ex4SgUuuVMQ4BF90/fE6Xk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50IiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNEYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJlbWFpbFJlZiIsInVzZVJlZiIsInBhc3N3b3JkUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwiaGFuZGxlU3VibWlGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNpZ25JbiIsInJlZGlyZWN0IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVwbGFjZSIsImNsYXNzZXMiLCJhdXRoIiwiY29udHJvbCIsImFjdGlvbnMiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7U0FHZUEsYTs7Ozs7b1JBQWYsa0JBQTZCQyxLQUE3QixFQUFvQ0MsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGdCQURSLEdBQ2U7QUFDWEYsbUJBQUssRUFBRUEsS0FESTtBQUVYQyxzQkFBUSxFQUFFQTtBQUZDLGFBRGY7QUFBQTtBQUFBLG1CQU1vQkUsS0FBSyxDQUFDLGtCQUFELEVBQXFCO0FBQzFDQyxvQkFBTSxFQUFFLE1BRGtDO0FBRTFDQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZixDQUZvQztBQUcxQ00scUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURUO0FBSGlDLGFBQXJCLENBTnpC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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsWUFBRSxFQUFDLFVBQTFCO0FBQXFDLGtCQUFRLE1BQTdDO0FBQThDLGFBQUcsRUFBRW5CO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFTRTtBQUFLLGlCQUFTLEVBQUVpQiw0REFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQVN4QixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRXFCLDREQUFPLENBQUNJLE1BRnJCO0FBR0UsaUJBQU8sRUFBRWxCLHFCQUhYO0FBQUEsb0JBS0dQLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQWpFUUYsUTtVQUlRUSxxRDs7O0tBSlJSLFE7QUFtRU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguMmJhN2QyNzQ5YzZkZGZmYmE2MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWNjb3VudChlbWFpbCwgcGFzc3dvcmQpIHtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc0RhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWlGb3JtKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBcclxuICAgIGlmIChpc0xvZ2luKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcclxuICAgICAgICByZWRpcmVjdDogZmFsc2UsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9wcm9maWxlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTG9naW4pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVBY2NvdW50KGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aH0+XHJcbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaUZvcm19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZCByZWY9e2VtYWlsUmVmfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiByZXF1aXJlZCByZWY9e3Bhc3N3b3JkUmVmfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbj57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiQ3JlYXRlIEFjY291bnRcIn08L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=