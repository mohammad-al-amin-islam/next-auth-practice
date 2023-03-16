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
      var bodyData, res, data;
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
              res = _context.sent;
              _context.next = 6;
              return res.json();

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
              console.log(data);

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
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "password",
        id: "new-password",
        ref: newPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "password",
        id: "old-password",
        ref: oldPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.action,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        children: "Change Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlRm9ybSIsIm5ld1Bhc3N3b3JkUmVmIiwidXNlUmVmIiwib2xkUGFzc3dvcmRSZWYiLCJjaGFuZ2VQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJib2R5RGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsImRhdGEiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQ3JCLE1BQU1DLGNBQWMsR0FBR0Msb0RBQU0sRUFBN0I7QUFDQSxNQUFNQyxjQUFjLEdBQUdELG9EQUFNLEVBQTdCLENBRnFCLENBSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQnFCLFdBb0JORSxjQXBCTTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1UkFvQnJCLGlCQUE4QkMsV0FBOUIsRUFBMkNDLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxzQkFEUixHQUNtQjtBQUNmRiwyQkFBVyxFQUFYQSxXQURlO0FBRWZDLDJCQUFXLEVBQVhBO0FBRmUsZUFEbkI7QUFBQTtBQUFBLHFCQUtvQkUsS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQ3JEQyxzQkFBTSxFQUFFLE9BRDZDO0FBRXJEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsUUFBZixDQUYrQztBQUdyRE0sdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSDRDLGVBQWhDLENBTHpCOztBQUFBO0FBS1FDLGlCQUxSO0FBQUE7QUFBQSxxQkFZcUJBLEdBQUcsQ0FBQ0MsSUFBSixFQVpyQjs7QUFBQTtBQVlRQyxrQkFaUjtBQUFBLCtDQWNTQSxJQWRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcEJxQjtBQUFBO0FBQUE7O0FBQUEsV0FxQ05DLGNBckNNO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVSQXFDckIsa0JBQThCQyxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsbUJBQUssQ0FBQ0MsY0FBTjtBQUNNZCx5QkFGUixHQUVzQkosY0FBYyxDQUFDbUIsT0FBZixDQUF1QkMsS0FGN0M7QUFHUWYseUJBSFIsR0FHc0JILGNBQWMsQ0FBQ2lCLE9BQWYsQ0FBdUJDLEtBSDdDO0FBQUE7QUFBQSxxQkFNcUJqQixjQUFjLENBQUNDLFdBQUQsRUFBY0MsV0FBZCxDQU5uQzs7QUFBQTtBQU1RVSxrQkFOUjtBQU9FTSxxQkFBTyxDQUFDQyxHQUFSLENBQVlQLElBQVo7O0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyQ3FCO0FBQUE7QUFBQTs7QUErQ3JCLHNCQUNFO0FBQU0sWUFBUSxFQUFFQyxjQUFoQjtBQUFnQyxhQUFTLEVBQUVPLCtEQUFPLENBQUNDLElBQW5EO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELCtEQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFFLEVBQUMsY0FBMUI7QUFBeUMsV0FBRyxFQUFFekI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUV1QiwrREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsVUFBRSxFQUFDLGNBQTFCO0FBQXlDLFdBQUcsRUFBRXZCO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVNFO0FBQUssZUFBUyxFQUFFcUIsK0RBQU8sQ0FBQ0csTUFBeEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQTlEUTNCLFc7O0tBQUFBLFc7QUFnRU1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNTI5ZjliYjc2ZDllMzk2NTc4ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVGb3JtKCkge1xyXG4gIGNvbnN0IG5ld1Bhc3N3b3JkUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb2xkUGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3QgIGNoYW5nUGFzc3dvcmQgPShuZXdQYXNzd29yZCxvbGRQYXNzd29yZCk9PiB7XHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBmZXRjaChcIi9hcGkvcHJvZmlsZS9jaGFuZ2VQYXNzd29yZFwiLCB7XHJcbiAgLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5ld1Bhc3N3b3JkLCBvbGRQYXNzd29yZCB9KSxcclxuICAvLyAgICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgfSwgW10pO1xyXG4gIC8vIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmQobmV3UGFzc3dvcmQsIG9sZFBhc3N3b3JkKSB7XHJcbiAgICBjb25zdCBib2R5RGF0YSA9IHtcclxuICAgICAgbmV3UGFzc3dvcmQsXHJcbiAgICAgIG9sZFBhc3N3b3JkXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvZmlsZS9jaGFuZ2VQYXNzd29yZFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5RGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gbmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IG9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNoYW5nZVBhc3N3b3JkKG5ld1Bhc3N3b3JkLCBvbGRQYXNzd29yZCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXctcGFzc3dvcmRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cIm5ldy1wYXNzd29yZFwiIHJlZj17bmV3UGFzc3dvcmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZC1wYXNzd29yZFwiPk9sZCBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwib2xkLXBhc3N3b3JkXCIgcmVmPXtvbGRQYXNzd29yZFJlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XHJcbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=