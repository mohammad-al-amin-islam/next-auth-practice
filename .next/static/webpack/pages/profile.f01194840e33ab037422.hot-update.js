webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form */ "./components/profile/profile-form.js");
/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.module.css */ "./components/profile/user-profile.module.css");
/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\auth-project\\components\\profile\\user-profile.js",
    _s = $RefreshSig$();






function UserProfile() {
  _s();

  // Redirect away if NOT auth
  // const [session,loading] = useSession();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLoading = _useState[0],
      setIsLogin = _useState[1]; // const [session, setSession] = useState();


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])().then(function (session) {
      if (!session) {
        window.location.href = "/auth";
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profile,
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profile,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Your User Profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profile_form__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(UserProfile, "99hN5FLV7fMElSXAzfHY19Hp+lU=");

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2dpbiIsInVzZUVmZmVjdCIsImdldFNlc3Npb24iLCJ0aGVuIiwic2Vzc2lvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNsYXNzZXMiLCJwcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQjtBQUNBO0FBRnFCLGtCQUdXQyxzREFBUSxDQUFDLElBQUQsQ0FIbkI7QUFBQSxNQUdkQyxTQUhjO0FBQUEsTUFHSEMsVUFIRyxpQkFJckI7OztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsdUVBQVUsR0FBR0MsSUFBYixDQUFrQixVQUFDQyxPQUFELEVBQWE7QUFDN0IsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkMsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixPQUF2QjtBQUNELE9BRkQsTUFFTztBQUNMUCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsTUFBSUQsU0FBSixFQUFlO0FBQ2Isd0JBQU87QUFBRyxlQUFTLEVBQUVTLCtEQUFPLENBQUNDLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFTLGFBQVMsRUFBRUQsK0RBQU8sQ0FBQ0MsT0FBNUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBekJRWixXOztLQUFBQSxXO0FBMkJNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmYwMTE5NDg0MGUzM2FiMDM3NDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSBcIi4vcHJvZmlsZS1mb3JtXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXItcHJvZmlsZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSgpIHtcclxuICAvLyBSZWRpcmVjdCBhd2F5IGlmIE5PVCBhdXRoXHJcbiAgLy8gY29uc3QgW3Nlc3Npb24sbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAvLyBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hdXRoXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNMb2dpbihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5cclxuICAgICAgPGgxPllvdXIgVXNlciBQcm9maWxlPC9oMT5cclxuICAgICAgPFByb2ZpbGVGb3JtIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=