webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/main-navigation.js":
/*!**********************************************!*\
  !*** ./components/layout/main-navigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_auth_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-navigation.module.css */ "./components/layout/main-navigation.module.css");
/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\auth-project\\components\\layout\\main-navigation.js",
    _s = $RefreshSig$();





function MainNavigation() {
  _s();

  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["useSession"])(),
      _useSession2 = Object(D_auth_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  console.log(session, loading);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
          children: "Next Auth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [!session && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/profile",
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(MainNavigation, "btnbnkOsPYI0mLfZro/2DT47AuA=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_2__["useSession"]];
});

_c = MainNavigation;
/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

var _c;

$RefreshReg$(_c, "MainNavigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJoZWFkZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsb0JBQ0dDLG1FQUFVLEVBRGI7QUFBQTtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1JDLE9BRFE7O0FBRXhCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWixFQUFxQkMsT0FBckI7QUFDQSxzQkFDRTtBQUFRLGFBQVMsRUFBRUcsa0VBQU8sQ0FBQ0MsTUFBM0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVELGtFQUFPLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxDQUFDTixPQUFELElBQVksQ0FBQ0MsT0FBYixpQkFDQztBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQU1HRCxPQUFPLGlCQUNOO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBV0U7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEOztHQTdCUUYsYztVQUNvQkMsMkQ7OztLQURwQkQsYztBQStCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNDk5MTkyNjdmMmE2ZDg5MzEwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21haW4tbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc29sZS5sb2coc2Vzc2lvbiwgbG9hZGluZyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5OZXh0IEF1dGg8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7IXNlc3Npb24gJiYgIWxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+TG9naW48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+UHJvZmlsZTwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxidXR0b24+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=