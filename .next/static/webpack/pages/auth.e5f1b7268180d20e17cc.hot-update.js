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
  var _s2 = $RefreshSig$();

  _createAccount = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s2( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    var data, router, res, resData;
    return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _s2();

            data = {
              email: email,
              password: password
            };
            router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
            _context2.next = 5;
            return fetch("/api/auth/signup", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            });

          case 5:
            res = _context2.sent;
            _context2.next = 8;
            return res.json();

          case 8:
            resData = _context2.sent;

            if (res.ok) {
              _context2.next = 11;
              break;
            }

            throw new Error(resData.message || "Something went wrong");

          case 11:
            return _context2.abrupt("return", resData);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }), "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
                router.replace('/');
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
      lineNumber: 67,
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
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: emailRef
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
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: passwordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "button",
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVBY2NvdW50IiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNEYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJlbWFpbFJlZiIsInVzZVJlZiIsInBhc3N3b3JkUmVmIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwiaGFuZGxlU3VibWlGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNpZ25JbiIsInJlZGlyZWN0IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVwbGFjZSIsImNsYXNzZXMiLCJhdXRoIiwiY29udHJvbCIsImFjdGlvbnMiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7U0FDZUEsYTs7Ozs7Ozt3UkFBZixrQkFBNkJDLEtBQTdCLEVBQW9DQyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDUUMsZ0JBRFIsR0FDZTtBQUNYRixtQkFBSyxFQUFFQSxLQURJO0FBRVhDLHNCQUFRLEVBQUVBO0FBRkMsYUFEZjtBQUtRRSxrQkFMUixHQUtpQkMsNkRBQVMsRUFMMUI7QUFBQTtBQUFBLG1CQU1vQkMsS0FBSyxDQUFDLGtCQUFELEVBQXFCO0FBQzFDQyxvQkFBTSxFQUFFLE1BRGtDO0FBRTFDQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZixDQUZvQztBQUcxQ1EscUJBQU8s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QUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUUsRUFBQyxVQUExQjtBQUFxQyxrQkFBUSxNQUE3QztBQUE4QyxhQUFHLEVBQUVqQjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBSyxpQkFBUyxFQUFFZSw0REFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQVN0QixPQUFPLEdBQUcsT0FBSCxHQUFhO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRW1CLDREQUFPLENBQUNJLE1BRnJCO0FBR0UsaUJBQU8sRUFBRWxCLHFCQUhYO0FBQUEsb0JBS0dMLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQWhFUUYsUTs7S0FBQUEsUTtBQWtFTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC5lNWYxYjcyNjgxODBkMjBlMTdjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFjY291bnQoZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihyZXNEYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc0RhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xyXG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pRm9ybShldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGlmIChpc0xvZ2luKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcclxuICAgICAgICByZWRpcmVjdDogZmFsc2UsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNMb2dpbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUFjY291bnQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cclxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9PC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pRm9ybX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIHJlZj17ZW1haWxSZWZ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkIHJlZj17cGFzc3dvcmRSZWZ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cclxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNMb2dpbiA/IFwiQ3JlYXRlIG5ldyBhY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==