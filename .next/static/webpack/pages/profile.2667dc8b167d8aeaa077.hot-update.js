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
  var oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  function changePassword(_x, _x2) {
    return _changePassword.apply(this, arguments);
  }

  function _changePassword() {
    _changePassword = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(newPassword, oldPassword) {
      var bodyData, response, data;
      return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              bodyData = {
                newPassword: newPassword,
                oldPassword: oldPassword
              };
              _context.next = 3;
              return fetch("/api/profile/changePassword", {
                method: "PATCH",
                body: JSON.stringify(bodyData),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _changePassword.apply(this, arguments);
  }

  function handleOnSubmit(_x3) {
    return _handleOnSubmit.apply(this, arguments);
  }

  function _handleOnSubmit() {
    _handleOnSubmit = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var newPassword, oldPassword, data;
      return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              newPassword = newPasswordRef.current.value;
              oldPassword = oldPasswordRef.current.value;
              _context2.next = 5;
              return changePassword(newPassword, oldPassword);

            case 5:
              data = _context2.sent;
              setData(data.message);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleOnSubmit.apply(this, arguments);
  }

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
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.action,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        children: "Change Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(ProfileForm, "aFaNvLh/CStKlM7HNQbOaRTJZz0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRm9ybSIsIm5ld1Bhc3N3b3JkUmVmIiwidXNlUmVmIiwib2xkUGFzc3dvcmRSZWYiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiY2hhbmdlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiYm9keURhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImhhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxFQUE3QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0Qsb0RBQU0sRUFBN0I7O0FBRnFCLGtCQUdFRSxzREFBUSxDQUFDLEVBQUQsQ0FIVjtBQUFBLE1BR2RDLElBSGM7QUFBQSxNQUdUQyxPQUhTOztBQUFBLFdBS05DLGNBTE07QUFBQTtBQUFBOztBQUFBO0FBQUEsdVJBS3JCLGlCQUE4QkMsV0FBOUIsRUFBMkNDLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxzQkFEUixHQUNtQjtBQUNmRiwyQkFBVyxFQUFYQSxXQURlO0FBRWZDLDJCQUFXLEVBQVhBO0FBRmUsZUFEbkI7QUFBQTtBQUFBLHFCQUt5QkUsS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQzFEQyxzQkFBTSxFQUFFLE9BRGtEO0FBRTFEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsUUFBZixDQUZvRDtBQUcxRE0sdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSGlELGVBQWhDLENBTDlCOztBQUFBO0FBS1FDLHNCQUxSO0FBQUE7QUFBQSxxQkFZcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVpyQjs7QUFBQTtBQVlRYixrQkFaUjtBQUFBLCtDQWNTQSxJQWRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTHFCO0FBQUE7QUFBQTs7QUFBQSxXQXNCTmMsY0F0Qk07QUFBQTtBQUFBOztBQUFBO0FBQUEsdVJBc0JyQixrQkFBOEJDLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ01iLHlCQUZSLEdBRXNCUCxjQUFjLENBQUNxQixPQUFmLENBQXVCQyxLQUY3QztBQUdRZCx5QkFIUixHQUdzQk4sY0FBYyxDQUFDbUIsT0FBZixDQUF1QkMsS0FIN0M7QUFBQTtBQUFBLHFCQU1xQmhCLGNBQWMsQ0FBQ0MsV0FBRCxFQUFjQyxXQUFkLENBTm5DOztBQUFBO0FBTVFKLGtCQU5SO0FBT0VDLHFCQUFPLENBQUNELElBQUksQ0FBQ21CLE9BQU4sQ0FBUDs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXRCcUI7QUFBQTtBQUFBOztBQWdDckIsc0JBQ0U7QUFBTSxZQUFRLEVBQUVMLGNBQWhCO0FBQWdDLGFBQVMsRUFBRU0sK0RBQU8sQ0FBQ0MsSUFBbkQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsK0RBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFVBQUUsRUFBQyxjQUExQjtBQUF5QyxXQUFHLEVBQUUxQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBRXdCLCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFeEI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBU0U7QUFBSyxlQUFTLEVBQUVzQiwrREFBTyxDQUFDRyxNQUF4QjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBL0NRNUIsVzs7S0FBQUEsVztBQWlETUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4yNjY3ZGM4YjE2N2Q4YWVhYTA3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVGb3JtKCkge1xyXG4gIGNvbnN0IG5ld1Bhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb2xkUGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZChuZXdQYXNzd29yZCwgb2xkUGFzc3dvcmQpIHtcclxuICAgIGNvbnN0IGJvZHlEYXRhID0ge1xyXG4gICAgICBuZXdQYXNzd29yZCxcclxuICAgICAgb2xkUGFzc3dvcmRcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2ZpbGUvY2hhbmdlUGFzc3dvcmRcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gbmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IG9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNoYW5nZVBhc3N3b3JkKG5ld1Bhc3N3b3JkLCBvbGRQYXNzd29yZCk7XHJcbiAgICBzZXREYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3LXBhc3N3b3JkXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJuZXctcGFzc3dvcmRcIiByZWY9e25ld1Bhc3N3b3JkUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbGQtcGFzc3dvcmRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cIm9sZC1wYXNzd29yZFwiIHJlZj17b2xkUGFzc3dvcmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxyXG4gICAgICAgIDxidXR0b24+Q2hhbmdlIFBhc3N3b3JkPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9