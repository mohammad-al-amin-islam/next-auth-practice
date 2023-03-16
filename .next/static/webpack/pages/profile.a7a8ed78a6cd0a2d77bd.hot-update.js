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
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form.module.css */ "./components/profile/profile-form.module.css");
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Udemy NextJS\\auth-project\\components\\profile\\profile-form.js",
    _s = $RefreshSig$();





function ProfileForm() {
  _s();

  var newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); // const [data,setData] = useState({})
  // async function changePassword(newPassword, oldPassword) {
  //   const bodyData = {
  //     newPassword,
  //     oldPassword
  //   }
  //   const response = await fetch("/api/profile/changePassword", {
  //     method: "PATCH",
  //     body: JSON.stringify(bodyData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   return data;
  // }
  // async function handleOnSubmit(event) {
  //   event.preventDefault();
  //   const newPassword = newPasswordRef.current.value;
  //   const oldPassword = oldPasswordRef.current.value;
  //   const data = await changePassword(newPassword, oldPassword);
  //   setData(data.message);
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleOnSubmit,
    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "new-password",
        children: "New Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        id: "new-password",
        ref: newPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        id: "old-password",
        ref: oldPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.action,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Change Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(ProfileForm, "G4Kd/zfiV0z3H4c+ZOYyoV2Jw00=");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRm9ybSIsIm5ld1Bhc3N3b3JkUmVmIiwidXNlUmVmIiwib2xkUGFzc3dvcmRSZWYiLCJoYW5kbGVPblN1Ym1pdCIsImNsYXNzZXMiLCJmb3JtIiwiY29udHJvbCIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxFQUE3QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0Qsb0RBQU0sRUFBN0IsQ0FGcUIsQ0FHckI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUUsY0FBaEI7QUFBZ0MsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxJQUFuRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRU47QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVJLCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFSjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFVRTtBQUFLLGVBQVMsRUFBRUUsK0RBQU8sQ0FBQ0csTUFBeEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0FoRFFSLFc7O0tBQUFBLFc7QUFrRE1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYTdhOGVkNzhhNmNkMGEyZDc3YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2ZpbGUtZm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlRm9ybSgpIHtcclxuICBjb25zdCBuZXdQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9sZFBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgLy8gY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmQobmV3UGFzc3dvcmQsIG9sZFBhc3N3b3JkKSB7XHJcbiAgLy8gICBjb25zdCBib2R5RGF0YSA9IHtcclxuICAvLyAgICAgbmV3UGFzc3dvcmQsXHJcbiAgLy8gICAgIG9sZFBhc3N3b3JkXHJcbiAgLy8gICB9XHJcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wcm9maWxlL2NoYW5nZVBhc3N3b3JkXCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlEYXRhKSxcclxuICAvLyAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAvLyAgIHJldHVybiBkYXRhO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZXZlbnQpIHtcclxuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICBjb25zdCBuZXdQYXNzd29yZCA9IG5ld1Bhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgLy8gICBjb25zdCBvbGRQYXNzd29yZCA9IG9sZFBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG5cclxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjaGFuZ2VQYXNzd29yZChuZXdQYXNzd29yZCwgb2xkUGFzc3dvcmQpO1xyXG4gIC8vICAgc2V0RGF0YShkYXRhLm1lc3NhZ2UpO1xyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ldy1wYXNzd29yZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwibmV3LXBhc3N3b3JkXCIgcmVmPXtuZXdQYXNzd29yZFJlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2xkLXBhc3N3b3JkXCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJvbGQtcGFzc3dvcmRcIiByZWY9e29sZFBhc3N3b3JkUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxwPntkYXRhfTwvcD4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XHJcbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=