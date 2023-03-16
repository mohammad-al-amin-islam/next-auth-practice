webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-form.module.css */ "./components/profile/profile-form.module.css");
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\Udemy NextJS\\auth-project\\components\\profile\\profile-form.js",
    _s = $RefreshSig$();





function ProfileForm() {
  _s();

  var newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // const  changPassword =(newPassword,oldPassword)=> {
  //   useEffect(() => {
  //     fetch("/api/profile/changePassword", {
  //       method: "POST",
  //       body: JSON.stringify({ newPassword, oldPassword }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         return data;
  //       });
  //   }, []);
  // }

  function changePassword(_x, _x2) {
    return _changePassword.apply(this, arguments);
  }

  function _changePassword() {
    _changePassword = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(newPassword, oldPassword) {
      var res, data;
      return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/profile/changePassword", {
                method: "POST",
                body: JSON.stringify({
                  newPassword: newPassword,
                  oldPassword: oldPassword
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _changePassword.apply(this, arguments);
  }

  var handleOnSubmit = function handleOnSubmit(event) {
    event.preventDefault();
    var newPassword = newPasswordRef.current.value;
    var oldPassword = oldPasswordRef.current.value;
    var data = changPassword(newPassword, oldPassword);
    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    onSubmit: handleOnSubmit,
    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "new-password",
        children: "New Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "password",
        id: "new-password",
        ref: newPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "password",
        id: "old-password",
        ref: oldPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.action,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        children: "Change Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRm9ybSIsIm5ld1Bhc3N3b3JkUmVmIiwidXNlUmVmIiwib2xkUGFzc3dvcmRSZWYiLCJjaGFuZ2VQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJkYXRhIiwiaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY2hhbmdQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxFQUE3QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0Qsb0RBQU0sRUFBN0IsQ0FGcUIsQ0FJckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxCcUIsV0FvQk5FLGNBcEJNO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVSQW9CckIsaUJBQThCQyxXQUE5QixFQUEyQ0MsV0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDb0JDLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUNyREMsc0JBQU0sRUFBRSxNQUQ2QztBQUVyREMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRU4sNkJBQVcsRUFBWEEsV0FBRjtBQUFlQyw2QkFBVyxFQUFYQTtBQUFmLGlCQUFmLENBRitDO0FBR3JETSx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFINEMsZUFBaEMsQ0FEekI7O0FBQUE7QUFDUUMsaUJBRFI7QUFBQTtBQUFBLHFCQVFxQkEsR0FBRyxDQUFDQyxJQUFKLEVBUnJCOztBQUFBO0FBUVFDLGtCQVJSO0FBQUEsK0NBVVNBLElBVlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwQnFCO0FBQUE7QUFBQTs7QUFpQ3JCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQSxTQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNYixXQUFXLEdBQUdKLGNBQWMsQ0FBQ2tCLE9BQWYsQ0FBdUJDLEtBQTNDO0FBQ0EsUUFBTWQsV0FBVyxHQUFHSCxjQUFjLENBQUNnQixPQUFmLENBQXVCQyxLQUEzQztBQUNBLFFBQU1MLElBQUksR0FBR00sYUFBYSxDQUFDaEIsV0FBRCxFQUFjQyxXQUFkLENBQTFCO0FBQ0FnQixXQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBTSxZQUFRLEVBQUVDLGNBQWhCO0FBQWdDLGFBQVMsRUFBRVEsK0RBQU8sQ0FBQ0MsSUFBbkQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsK0RBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFVBQUUsRUFBQyxjQUExQjtBQUF5QyxXQUFHLEVBQUV6QjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBRXVCLCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFdkI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBU0U7QUFBSyxlQUFTLEVBQUVxQiwrREFBTyxDQUFDRyxNQUF4QjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBeERRM0IsVzs7S0FBQUEsVztBQTBETUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5hNjNiMGE1YjI3YTMyMGUxMjljYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9maWxlLWZvcm0ubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgbmV3UGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbGRQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdCAgY2hhbmdQYXNzd29yZCA9KG5ld1Bhc3N3b3JkLG9sZFBhc3N3b3JkKT0+IHtcclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGZldGNoKFwiL2FwaS9wcm9maWxlL2NoYW5nZVBhc3N3b3JkXCIsIHtcclxuICAvLyAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmV3UGFzc3dvcmQsIG9sZFBhc3N3b3JkIH0pLFxyXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gIC8vICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9LCBbXSk7XHJcbiAgLy8gfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZChuZXdQYXNzd29yZCwgb2xkUGFzc3dvcmQpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9wcm9maWxlL2NoYW5nZVBhc3N3b3JkXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuZXdQYXNzd29yZCwgb2xkUGFzc3dvcmQgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3UGFzc3dvcmQgPSBuZXdQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3Qgb2xkUGFzc3dvcmQgPSBvbGRQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZGF0YSA9IGNoYW5nUGFzc3dvcmQobmV3UGFzc3dvcmQsIG9sZFBhc3N3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXctcGFzc3dvcmRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cIm5ldy1wYXNzd29yZFwiIHJlZj17bmV3UGFzc3dvcmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZC1wYXNzd29yZFwiPk9sZCBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwib2xkLXBhc3N3b3JkXCIgcmVmPXtvbGRQYXNzd29yZFJlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XHJcbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=