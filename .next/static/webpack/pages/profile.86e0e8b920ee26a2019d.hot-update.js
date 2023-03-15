webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_auth_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form.module.css */ "./components/profile/profile-form.module.css");
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\auth-project\\components\\profile\\profile-form.js",
    _s = $RefreshSig$();




function ProfileForm() {
  _s();

  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["useSession"])(),
      _useSession2 = Object(D_auth_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1]; // if(loading){
  //   return <p>Loading...</p>
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "new-password",
        children: "New Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        id: "new-password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        id: "old-password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.action,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Change Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(ProfileForm, "pYorvChOcUocGciw/RFBWz6DGgE=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_2__["useSession"]];
});

_c = ProfileForm;
/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);

var _c;

$RefreshReg$(_c, "ProfileForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRm9ybSIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsImNsYXNzZXMiLCJmb3JtIiwiY29udHJvbCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsb0JBQ0tDLG1FQUFVLEVBRGY7QUFBQTtBQUFBLE1BQ2RDLE9BRGM7QUFBQSxNQUNOQyxPQURNLG9CQUVyQjtBQUNBO0FBQ0E7OztBQUNBLHNCQUNFO0FBQU0sYUFBUyxFQUFFQywrREFBTyxDQUFDQyxJQUF6QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFFRiwrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVNFO0FBQUssZUFBUyxFQUFFRiwrREFBTyxDQUFDRyxNQUF4QjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBcEJRUCxXO1VBQ21CQywyRDs7O0tBRG5CRCxXO0FBc0JNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjg2ZTBlOGI5MjBlZTI2YTIwMTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgW3Nlc3Npb24sbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcbiAgLy8gaWYobG9hZGluZyl7XHJcbiAgLy8gICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cclxuICAvLyB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25ldy1wYXNzd29yZCc+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSduZXctcGFzc3dvcmQnIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nb2xkLXBhc3N3b3JkJz5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J29sZC1wYXNzd29yZCcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XHJcbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=