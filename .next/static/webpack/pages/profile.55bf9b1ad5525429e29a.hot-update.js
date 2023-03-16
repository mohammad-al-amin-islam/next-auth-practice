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
  var oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // const [data,setData] = useState({})
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

  function handleOnSubmit(_x) {
    return _handleOnSubmit.apply(this, arguments);
  }

  function _handleOnSubmit() {
    _handleOnSubmit = Object(D_Udemy_NextJS_auth_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var newPassword, oldPassword, data;
      return D_Udemy_NextJS_auth_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              newPassword = newPasswordRef.current.value;
              oldPassword = oldPasswordRef.current.value;
              _context.next = 5;
              return changePassword(newPassword, oldPassword);

            case 5:
              data = _context.sent;
              setData(data.message);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRm9ybSIsIm5ld1Bhc3N3b3JkUmVmIiwidXNlUmVmIiwib2xkUGFzc3dvcmRSZWYiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdQYXNzd29yZCIsImN1cnJlbnQiLCJ2YWx1ZSIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlUGFzc3dvcmQiLCJkYXRhIiwic2V0RGF0YSIsIm1lc3NhZ2UiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxFQUE3QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0Qsb0RBQU0sRUFBN0IsQ0FGcUIsQ0FHckI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBcEJxQixXQXNCTkUsY0F0Qk07QUFBQTtBQUFBOztBQUFBO0FBQUEsdVJBc0JyQixpQkFBOEJDLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ01DLHlCQUZSLEdBRXNCTixjQUFjLENBQUNPLE9BQWYsQ0FBdUJDLEtBRjdDO0FBR1FDLHlCQUhSLEdBR3NCUCxjQUFjLENBQUNLLE9BQWYsQ0FBdUJDLEtBSDdDO0FBQUE7QUFBQSxxQkFNcUJFLGNBQWMsQ0FBQ0osV0FBRCxFQUFjRyxXQUFkLENBTm5DOztBQUFBO0FBTVFFLGtCQU5SO0FBT0VDLHFCQUFPLENBQUNELElBQUksQ0FBQ0UsT0FBTixDQUFQOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdEJxQjtBQUFBO0FBQUE7O0FBZ0NyQixzQkFDRTtBQUFNLFlBQVEsRUFBRVYsY0FBaEI7QUFBZ0MsYUFBUyxFQUFFVywrREFBTyxDQUFDQyxJQUFuRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRWhCO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFFYywrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRWQ7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBVUU7QUFBSyxlQUFTLEVBQUVZLCtEQUFPLENBQUNHLE1BQXhCO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBaERRbEIsVzs7S0FBQUEsVztBQWtETUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41NWJmOWIxYWQ1NTI1NDI5ZTI5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVGb3JtKCkge1xyXG4gIGNvbnN0IG5ld1Bhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb2xkUGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZChuZXdQYXNzd29yZCwgb2xkUGFzc3dvcmQpIHtcclxuICAvLyAgIGNvbnN0IGJvZHlEYXRhID0ge1xyXG4gIC8vICAgICBuZXdQYXNzd29yZCxcclxuICAvLyAgICAgb2xkUGFzc3dvcmRcclxuICAvLyAgIH1cclxuICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2ZpbGUvY2hhbmdlUGFzc3dvcmRcIiwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIC8vICAgcmV0dXJuIGRhdGE7XHJcbiAgLy8gfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gbmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IG9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNoYW5nZVBhc3N3b3JkKG5ld1Bhc3N3b3JkLCBvbGRQYXNzd29yZCk7XHJcbiAgICBzZXREYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3LXBhc3N3b3JkXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJuZXctcGFzc3dvcmRcIiByZWY9e25ld1Bhc3N3b3JkUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbGQtcGFzc3dvcmRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cIm9sZC1wYXNzd29yZFwiIHJlZj17b2xkUGFzc3dvcmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPHA+e2RhdGF9PC9wPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cclxuICAgICAgICA8YnV0dG9uPkNoYW5nZSBQYXNzd29yZDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==