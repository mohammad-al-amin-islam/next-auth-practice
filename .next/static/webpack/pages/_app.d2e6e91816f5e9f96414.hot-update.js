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
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 37
        }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/profile",
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 23
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
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

_s(MainNavigation, "pYorvChOcUocGciw/RFBWz6DGgE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJoZWFkZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsb0JBQ0VDLG1FQUFVLEVBRFo7QUFBQTtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1RDLE9BRFM7O0FBRXhCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWixFQUFvQkMsT0FBcEI7QUFDQSxzQkFDRTtBQUFRLGFBQVMsRUFBRUcsa0VBQU8sQ0FBQ0MsTUFBM0I7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVELGtFQUFPLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUEsNkJBQ0U7QUFBQSxtQkFFSSxDQUFDTixPQUFELElBQVksQ0FBQ0MsT0FBYixpQkFBd0I7QUFBQSxpQ0FDeEIscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEd0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGNUIsRUFNR0QsT0FBTyxpQkFBSTtBQUFBLGlDQUNWLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOZCxlQVNFO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0EzQlFGLGM7VUFDbUJDLDJEOzs7S0FEbkJELGM7QUE2Qk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDJlNmU5MTgxNmY1ZTlmOTY0MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbWFpbi1uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTWFpbk5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3QgW3Nlc3Npb24sbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc29sZS5sb2coc2Vzc2lvbixsb2FkaW5nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299Pk5leHQgQXV0aDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgIXNlc3Npb24gJiYgIWxvYWRpbmcgJiYgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvYXV0aCc+TG9naW48L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge3Nlc3Npb24gJiYgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvcHJvZmlsZSc+UHJvZmlsZTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+fVxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9