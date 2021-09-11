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
    p1: "",
    p2: "",
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
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        p1: "Jogador 1"
      }));
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
      className: "text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: values.p1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [values.type, " = "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: values.play1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [values.type, " = "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: values.play2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
          children: values.result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "m-5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(10, "Força");
              },
              children: "For\xE7a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(6, "Agilidade");
              },
              children: "Agilidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(8, "Inteligencia");
              },
              children: "Inteligencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(4, "Foco");
              },
              children: "Foco"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/homemdeferro.jpg?alt=media&token=4846d4a7-cac6-4e78-b631-78c9f03152af",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "m-5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(6, "Força");
              },
              children: "For\xE7a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(9, "Agilidade");
              },
              children: "Agilidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(3, "Inteligencia");
              },
              children: "Inteligencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(7, "Foco");
              },
              children: "Foco"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/captonamerica.jpg?alt=media&token=6c955544-03ae-4466-9bab-ca39ff7c400c",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(12, "Força");
              },
              children: "For\xE7a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(5, "Agilidade");
              },
              children: "Agilidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(7, "Inteligencia");
              },
              children: "Inteligencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(1, "Foco");
              },
              children: "Foco"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/hulk.jpg?alt=media&token=b5fbe565-62ba-4508-969d-948024616a9d",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(8, "Força");
              },
              children: "For\xE7a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(4, "Agilidade");
              },
              children: "Agilidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(9, "Inteligencia");
              },
              children: "Inteligencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
              outline: true,
              color: "info",
              onClick: function onClick() {
                return comparison(2, "Foco");
              },
              children: "Foco"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/thor.jpg?alt=media&token=727f0cb4-3919-45fc-af4c-ec658899bcc0",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(Comparison, "AoPQNU0Dis9/koC6HC8FCoXbqxg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEwMWMyZmU0NTZhN2U5OGY5MzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7OztBQUVlLFNBQVNNLFVBQVQsR0FBc0I7QUFBQTs7QUFFakMsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFFQSxrQkFBNEJSLCtDQUFRLENBQUM7QUFDakNTLElBQUFBLEVBQUUsRUFBRSxFQUQ2QjtBQUVqQ0MsSUFBQUEsRUFBRSxFQUFFLEVBRjZCO0FBR2pDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBSDJCO0FBSWpDQyxJQUFBQSxLQUFLLEVBQUUsQ0FKMEI7QUFLakNDLElBQUFBLEtBQUssRUFBRSxDQUwwQjtBQU1qQ0MsSUFBQUEsTUFBTSxFQUFFO0FBTnlCLEdBQUQsQ0FBcEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFTQSxXQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsQ0FBM0IsRUFBOEI7QUFFMUIsUUFBSVosT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2ZBLE1BQUFBLE9BQU8sR0FBR1csS0FBVjtBQUNBRixNQUFBQSxTQUFTLGlDQUNGRCxNQURFO0FBRUxOLFFBQUFBLEVBQUUsRUFBRTtBQUZDLFNBQVQ7QUFLQVcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsT0FBWjtBQUNBYSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUVILEtBWEQsTUFXTztBQUNIWCxNQUFBQSxPQUFPLEdBQUdVLEtBQVY7QUFDQUUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWIsT0FBWjs7QUFFQSxVQUFJRCxPQUFPLEdBQUdDLE9BQWQsRUFB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QUFBSyxtQkFBRyxFQUFDLDJJQUFUO0FBQXFKLG1CQUFHLEVBQUMsRUFBeko7QUFBNEoscUJBQUssRUFBQztBQUFsSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQTJGSDs7R0F6SnVCWDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgUm93LCBDb2wsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wYXJpc29uKCkge1xyXG5cclxuICAgIGxldCBwbGF5ZXIxID0gMFxyXG4gICAgbGV0IHBsYXllcjIgPSAwXHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwMTogXCJcIixcclxuICAgICAgICBwMjogXCJcIixcclxuICAgICAgICB0eXBlOiBcIlZhbG9yIGRvIHBvZGVyXCIsXHJcbiAgICAgICAgcGxheTE6IDAsXHJcbiAgICAgICAgcGxheTI6IDAsXHJcbiAgICAgICAgcmVzdWx0OiBcIlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyaXNvbih2YWx1ZSwgZikge1xyXG5cclxuICAgICAgICBpZiAocGxheWVyMSA9PT0gMCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIxID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBwMTogXCJKb2dhZG9yIDFcIlxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgMVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXIyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIDJcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyMilcclxuXHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxID4gcGxheWVyMikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZixcclxuICAgICAgICAgICAgICAgICAgICBwbGF5MTogcGxheWVyMSxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5MjogcGxheWVyMixcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiSm9nYWRvciAxIFZlbmNldSFcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2dhZG9yIDEgVmVuY2V1IVwiKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheTE6IHBsYXllcjEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheTI6IHBsYXllcjIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBcIkpvZ2Fkb3IgMiBWZW5jZXUhXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvZ2Fkb3IgMiBWZW5jZXUhXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgemVyYUdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gemVyYUdhbWUoKSB7XHJcbiAgICAgICAgcGxheWVyMSA9IDBcclxuICAgICAgICBwbGF5ZXIyID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlcy5wMX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzLnR5cGV9ID0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlcy5wbGF5MX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlcy50eXBlfSA9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZXMucGxheTJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGgxID57dmFsdWVzLnJlc3VsdH08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDEwLCBcIkZvcsOnYVwiKX0+Rm9yw6dhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig2LCBcIkFnaWxpZGFkZVwiKX0+QWdpbGlkYWRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig4LCBcIkludGVsaWdlbmNpYVwiKX0+SW50ZWxpZ2VuY2lhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig0LCBcIkZvY29cIil9PkZvY288L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2FwcGRlbGl2ZXJ5LTFjZDgzLmFwcHNwb3QuY29tL28vaG9tZW1kZWZlcnJvLmpwZz9hbHQ9bWVkaWEmdG9rZW49NDg0NmQ0YTctY2FjNi00ZTc4LWI2MzEtNzhjOWYwMzE1MmFmXCIgYWx0PVwiXCIgd2lkdGg9XCIzMjRweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig2LCBcIkZvcsOnYVwiKX0+Rm9yw6dhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig5LCBcIkFnaWxpZGFkZVwiKX0+QWdpbGlkYWRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigzLCBcIkludGVsaWdlbmNpYVwiKX0+SW50ZWxpZ2VuY2lhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig3LCBcIkZvY29cIil9PkZvY288L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2FwcGRlbGl2ZXJ5LTFjZDgzLmFwcHNwb3QuY29tL28vY2FwdG9uYW1lcmljYS5qcGc/YWx0PW1lZGlhJnRva2VuPTZjOTU1NTQ0LTAzYWUtNDQ2Ni05YmFiLWNhMzlmZjdjNDAwY1wiIGFsdD1cIlwiIHdpZHRoPVwiMzI0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigxMiwgXCJGb3LDp2FcIil9PkZvcsOnYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oNSwgXCJBZ2lsaWRhZGVcIil9PkFnaWxpZGFkZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oNywgXCJJbnRlbGlnZW5jaWFcIil9PkludGVsaWdlbmNpYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oMSwgXCJGb2NvXCIpfT5Gb2NvPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9hcHBkZWxpdmVyeS0xY2Q4My5hcHBzcG90LmNvbS9vL2h1bGsuanBnP2FsdD1tZWRpYSZ0b2tlbj1iNWZiZTU2NS02MmJhLTQ1MDgtOTY5ZC05NDgwMjQ2MTZhOWRcIiBhbHQ9XCJcIiB3aWR0aD1cIjMyNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig4LCBcIkZvcsOnYVwiKX0+Rm9yw6dhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig0LCBcIkFnaWxpZGFkZVwiKX0+QWdpbGlkYWRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig5LCBcIkludGVsaWdlbmNpYVwiKX0+SW50ZWxpZ2VuY2lhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigyLCBcIkZvY29cIil9PkZvY288L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2FwcGRlbGl2ZXJ5LTFjZDgzLmFwcHNwb3QuY29tL28vdGhvci5qcGc/YWx0PW1lZGlhJnRva2VuPTcyN2YwY2I0LTM5MTktNDVmYy1hZjRjLWVjNjU4ODk5YmNjMFwiIGFsdD1cIlwiIHdpZHRoPVwiMzI0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQWxlcnQiLCJDb21wYXJpc29uIiwicGxheWVyMSIsInBsYXllcjIiLCJwMSIsInAyIiwidHlwZSIsInBsYXkxIiwicGxheTIiLCJyZXN1bHQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJjb21wYXJpc29uIiwidmFsdWUiLCJmIiwiY29uc29sZSIsImxvZyIsInplcmFHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==