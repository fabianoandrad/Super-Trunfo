"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/comparison.js":
/*!*****************************!*\
  !*** ./pages/comparison.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Comparison; }
/* harmony export */ });
/* harmony import */ var C_Projetos_Super_Trunfo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projetos\\Super_Trunfo\\pages\\comparison.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Projetos_Super_Trunfo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Comparison() {
  _s();

  var player1 = 0;
  var player2 = 0;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    type: "Valor do poder",
    play1: 0,
    play2: 0,
    result: ""
  }),
      values = _useState[0],
      setValues = _useState[1];

  function comparison(value, f) {
    if (player1 === 0) {
      player1 = value;
      console.log("player 1");
      console.log(player1);
      console.log(f);
    } else {
      player2 = value;
      console.log("player 2");
      console.log(player2);

      if (player1 > player2) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          type: f,
          play1: player1,
          play2: player2,
          result: "Jogador 1 Venceu!"
        }));
        console.log("Jogador 1 Venceu!");
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          type: f,
          play1: player1,
          play2: player2,
          result: "Jogador 2 Venceu!"
        }));
        console.log("Jogador 2 Venceu!");
      }

      zeraGame();
    }
  }

  function zeraGame() {
    player1 = 0;
    player2 = 0;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: [values.type, " = "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: values.play1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: [values.type, " = "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: values.play2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: values.result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(10, "Força");
              },
              children: "For\xE7a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(6, "Agilidade");
              },
              children: "Agilidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(8, "Inteligencia");
              },
              children: "Inteligencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(4, "Foco");
              },
              children: "Foco"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/homemdeferro.jpg?alt=media&token=4846d4a7-cac6-4e78-b631-78c9f03152af",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(6, "Força");
              },
              children: "For\xE7a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(9, "Agilidade");
              },
              children: "Agilidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(3, "Inteligencia");
              },
              children: "Inteligencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(7, "Foco");
              },
              children: "Foco"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/captonamerica.jpg?alt=media&token=6c955544-03ae-4466-9bab-ca39ff7c400c",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(12, "Força");
          },
          children: "For\xE7a"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(5, "Agilidade");
          },
          children: "Agilidade"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(7, "Inteligencia");
          },
          children: "Inteligencia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(1, "Foco");
          },
          children: "Foco"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/hulk.jpg?alt=media&token=b5fbe565-62ba-4508-969d-948024616a9d",
            alt: "",
            width: "324px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(8, "Força");
          },
          children: "For\xE7a"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(4, "Agilidade");
          },
          children: "Agilidade"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(9, "Inteligencia");
          },
          children: "Inteligencia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
          outline: true,
          color: "info",
          onClick: function onClick() {
            return comparison(2, "Foco");
          },
          children: "Foco"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/thor.jpg?alt=media&token=727f0cb4-3919-45fc-af4c-ec658899bcc0",
            alt: "",
            width: "324px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Comparison, "2Powm5xNOKtzKlsHjIqMHxptBUM=");

_c = Comparison;

var _c;

$RefreshReg$(_c, "Comparison");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2NlMjYzNDM4ZTk4ZTE3N2MwZTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7OztBQUVlLFNBQVNLLFVBQVQsR0FBc0I7QUFBQTs7QUFFakMsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFFQSxrQkFBNEJQLCtDQUFRLENBQUM7QUFDakNRLElBQUFBLElBQUksRUFBRSxnQkFEMkI7QUFFakNDLElBQUFBLEtBQUssRUFBRSxDQUYwQjtBQUdqQ0MsSUFBQUEsS0FBSyxFQUFFLENBSDBCO0FBSWpDQyxJQUFBQSxNQUFNLEVBQUU7QUFKeUIsR0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQU9BLFdBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxDQUEzQixFQUE4QjtBQUUxQixRQUFJVixPQUFPLEtBQUssQ0FBaEIsRUFBbUI7QUFDZkEsTUFBQUEsT0FBTyxHQUFHUyxLQUFWO0FBRUFFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlaLE9BQVo7QUFDQVcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFFSCxLQVBELE1BT087QUFDSFQsTUFBQUEsT0FBTyxHQUFHUSxLQUFWO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLE9BQVo7O0FBRUEsVUFBSUQsT0FBTyxHQUFHQyxPQUFkLEVBQXVCO0FBQ25CTSxRQUFBQSxTQUFTLGlDQUNGRCxNQURFO0FBRUxKLFVBQUFBLElBQUksRUFBRVEsQ0FGRDtBQUdMUCxVQUFBQSxLQUFLLEVBQUVILE9BSEY7QUFJTEksVUFBQUEsS0FBSyxFQUFFSCxPQUpGO0FB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O0FBQUEsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsZUFBSyxFQUFDLE1BQXRCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUEsVUFBVSxDQUFDLENBQUQsRUFBSSxXQUFKLENBQWhCO0FBQUEsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsZUFBSyxFQUFDLE1BQXRCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUEsVUFBVSxDQUFDLENBQUQsRUFBSSxjQUFKLENBQWhCO0FBQUEsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSSw4REFBQyw4Q0FBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsZUFBSyxFQUFDLE1BQXRCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUEsVUFBVSxDQUFDLENBQUQsRUFBSSxNQUFKLENBQWhCO0FBQUEsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSTtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLDJJQUFUO0FBQXFKLGVBQUcsRUFBQyxFQUF6SjtBQUE0SixpQkFBSyxFQUFDO0FBQWxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBLGtCQURKO0FBZ0ZIOztHQXhJdUJUOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wYXJpc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGFyaXNvbigpIHtcclxuXHJcbiAgICBsZXQgcGxheWVyMSA9IDBcclxuICAgIGxldCBwbGF5ZXIyID0gMFxyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdHlwZTogXCJWYWxvciBkbyBwb2RlclwiLFxyXG4gICAgICAgIHBsYXkxOiAwLFxyXG4gICAgICAgIHBsYXkyOiAwLFxyXG4gICAgICAgIHJlc3VsdDogXCJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmlzb24odmFsdWUsIGYpIHtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllcjEgPT09IDApIHtcclxuICAgICAgICAgICAgcGxheWVyMSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgMVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXIyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIDJcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyMilcclxuXHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxID4gcGxheWVyMikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcclxuICAgICAgICAgICAgICAgICAgICBwbGF5MTogcGxheWVyMSxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5MjogcGxheWVyMixcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiSm9nYWRvciAxIFZlbmNldSFcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2dhZG9yIDEgVmVuY2V1IVwiKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheTE6IHBsYXllcjEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheTI6IHBsYXllcjIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBcIkpvZ2Fkb3IgMiBWZW5jZXUhXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvZ2Fkb3IgMiBWZW5jZXUhXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgemVyYUdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gemVyYUdhbWUoKSB7XHJcbiAgICAgICAgcGxheWVyMSA9IDBcclxuICAgICAgICBwbGF5ZXIyID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZXMudHlwZX0gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzLnBsYXkxfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzLnR5cGV9ID0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlcy5wbGF5Mn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57dmFsdWVzLnJlc3VsdH08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigxMCwgXCJGb3LDp2FcIil9PkZvcsOnYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oNiwgXCJBZ2lsaWRhZGVcIil9PkFnaWxpZGFkZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oOCwgXCJJbnRlbGlnZW5jaWFcIil9PkludGVsaWdlbmNpYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oNCwgXCJGb2NvXCIpfT5Gb2NvPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9hcHBkZWxpdmVyeS0xY2Q4My5hcHBzcG90LmNvbS9vL2hvbWVtZGVmZXJyby5qcGc/YWx0PW1lZGlhJnRva2VuPTQ4NDZkNGE3LWNhYzYtNGU3OC1iNjMxLTc4YzlmMDMxNTJhZlwiIGFsdD1cIlwiIHdpZHRoPVwiMzI0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig2LCBcIkZvcsOnYVwiKX0+Rm9yw6dhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig5LCBcIkFnaWxpZGFkZVwiKX0+QWdpbGlkYWRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigzLCBcIkludGVsaWdlbmNpYVwiKX0+SW50ZWxpZ2VuY2lhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig3LCBcIkZvY29cIil9PkZvY288L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2FwcGRlbGl2ZXJ5LTFjZDgzLmFwcHNwb3QuY29tL28vY2FwdG9uYW1lcmljYS5qcGc/YWx0PW1lZGlhJnRva2VuPTZjOTU1NTQ0LTAzYWUtNDQ2Ni05YmFiLWNhMzlmZjdjNDAwY1wiIGFsdD1cIlwiIHdpZHRoPVwiMzI0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigxMiwgXCJGb3LDp2FcIil9PkZvcsOnYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oNSwgXCJBZ2lsaWRhZGVcIil9PkFnaWxpZGFkZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oNywgXCJJbnRlbGlnZW5jaWFcIil9PkludGVsaWdlbmNpYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oMSwgXCJGb2NvXCIpfT5Gb2NvPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9hcHBkZWxpdmVyeS0xY2Q4My5hcHBzcG90LmNvbS9vL2h1bGsuanBnP2FsdD1tZWRpYSZ0b2tlbj1iNWZiZTU2NS02MmJhLTQ1MDgtOTY5ZC05NDgwMjQ2MTZhOWRcIiBhbHQ9XCJcIiB3aWR0aD1cIjMyNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDgsIFwiRm9yw6dhXCIpfT5Gb3LDp2E8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDQsIFwiQWdpbGlkYWRlXCIpfT5BZ2lsaWRhZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDksIFwiSW50ZWxpZ2VuY2lhXCIpfT5JbnRlbGlnZW5jaWE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDIsIFwiRm9jb1wiKX0+Rm9jbzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvYXBwZGVsaXZlcnktMWNkODMuYXBwc3BvdC5jb20vby90aG9yLmpwZz9hbHQ9bWVkaWEmdG9rZW49NzI3ZjBjYjQtMzkxOS00NWZjLWFmNGMtZWM2NTg4OTliY2MwXCIgYWx0PVwiXCIgd2lkdGg9XCIzMjRweFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDb21wYXJpc29uIiwicGxheWVyMSIsInBsYXllcjIiLCJ0eXBlIiwicGxheTEiLCJwbGF5MiIsInJlc3VsdCIsInZhbHVlcyIsInNldFZhbHVlcyIsImNvbXBhcmlzb24iLCJ2YWx1ZSIsImYiLCJjb25zb2xlIiwibG9nIiwiemVyYUdhbWUiXSwic291cmNlUm9vdCI6IiJ9