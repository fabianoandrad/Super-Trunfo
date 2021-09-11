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
      player2 = value; // setValues({
      //     ...values,
      //     p2: "Jogador 2"
      // })

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
          children: [values.p1, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [values.type, " = "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: values.play1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [values.p2, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [values.type, " = "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: values.play2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
          children: values.result
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
              lineNumber: 96,
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
              lineNumber: 97,
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
              lineNumber: 98,
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
              lineNumber: 99,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/homemdeferro.jpg?alt=media&token=4846d4a7-cac6-4e78-b631-78c9f03152af",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
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
              lineNumber: 108,
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
              lineNumber: 109,
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
              lineNumber: 110,
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
              lineNumber: 111,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/captonamerica.jpg?alt=media&token=6c955544-03ae-4466-9bab-ca39ff7c400c",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
              lineNumber: 124,
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
              lineNumber: 125,
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
              lineNumber: 126,
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
              lineNumber: 127,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/hulk.jpg?alt=media&token=b5fbe565-62ba-4508-969d-948024616a9d",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
              lineNumber: 137,
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
              lineNumber: 138,
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
              lineNumber: 139,
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
              lineNumber: 140,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/thor.jpg?alt=media&token=727f0cb4-3919-45fc-af4c-ec658899bcc0",
                alt: "",
                width: "324px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2QxZjQ0YWNiYTc4OGRhZDI3ZDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7OztBQUVlLFNBQVNNLFVBQVQsR0FBc0I7QUFBQTs7QUFFakMsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFFQSxrQkFBNEJSLCtDQUFRLENBQUM7QUFDakNTLElBQUFBLEVBQUUsRUFBRSxFQUQ2QjtBQUVqQ0MsSUFBQUEsRUFBRSxFQUFFLEVBRjZCO0FBR2pDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBSDJCO0FBSWpDQyxJQUFBQSxLQUFLLEVBQUUsQ0FKMEI7QUFLakNDLElBQUFBLEtBQUssRUFBRSxDQUwwQjtBQU1qQ0MsSUFBQUEsTUFBTSxFQUFFO0FBTnlCLEdBQUQsQ0FBcEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFTQSxXQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsQ0FBM0IsRUFBOEI7QUFFMUIsUUFBSVosT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2ZBLE1BQUFBLE9BQU8sR0FBR1csS0FBVjtBQUNBRixNQUFBQSxTQUFTLGlDQUNGRCxNQURFO0FBRUxOLFFBQUFBLEVBQUUsRUFBRTtBQUZDLFNBQVQ7QUFLQVcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsT0FBWjtBQUNBYSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUVILEtBWEQsTUFXTztBQUNIWCxNQUFBQSxPQUFPLEdBQUdVLEtBQVYsQ0FERyxDQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixPQUFaOztBQUVB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LFVBQVUsQ0FBQyxDQUFELEVBQUksTUFBSixDQUFoQjtBQUFBLGVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKLGVBS0k7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUMsMklBQVQ7QUFBcUosbUJBQUcsRUFBQyxFQUF6SjtBQUE0SixxQkFBSyxFQUFDO0FBQWxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0NSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBNEZIOztHQTlKdUJYOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wYXJpc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBSb3csIENvbCwgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBhcmlzb24oKSB7XHJcblxyXG4gICAgbGV0IHBsYXllcjEgPSAwXHJcbiAgICBsZXQgcGxheWVyMiA9IDBcclxuXHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHAxOiBcIlwiLFxyXG4gICAgICAgIHAyOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwiVmFsb3IgZG8gcG9kZXJcIixcclxuICAgICAgICBwbGF5MTogMCxcclxuICAgICAgICBwbGF5MjogMCxcclxuICAgICAgICByZXN1bHQ6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb21wYXJpc29uKHZhbHVlLCBmKSB7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIxID09PSAwKSB7XHJcbiAgICAgICAgICAgIHBsYXllcjEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHAxOiBcIkpvZ2Fkb3IgMVwiLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgMVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXIyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC8vICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIC8vICAgICBwMjogXCJKb2dhZG9yIDJcIlxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciAyXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjIpXHJcblxyXG4gICAgICAgICAgICBpZiAocGxheWVyMSA+IHBsYXllcjIpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGYsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheTE6IHBsYXllcjEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheTI6IHBsYXllcjIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBcIkpvZ2Fkb3IgMSBWZW5jZXUhXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9nYWRvciAxIFZlbmNldSFcIilcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXkxOiBwbGF5ZXIxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXkyOiBwbGF5ZXIyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogXCJKb2dhZG9yIDIgVmVuY2V1IVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2dhZG9yIDIgVmVuY2V1IVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHplcmFHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHplcmFHYW1lKCkge1xyXG4gICAgICAgIHBsYXllcjEgPSAwXHJcbiAgICAgICAgcGxheWVyMiA9IDBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZXMucDF9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZXMudHlwZX0gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzLnBsYXkxfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzLnAyfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzLnR5cGV9ID0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlcy5wbGF5Mn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8aDEgPnt2YWx1ZXMucmVzdWx0fTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIG9uQ2xpY2s9eygpID0+IGNvbXBhcmlzb24oMTAsIFwiRm9yw6dhXCIpfT5Gb3LDp2E8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDYsIFwiQWdpbGlkYWRlXCIpfT5BZ2lsaWRhZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDgsIFwiSW50ZWxpZ2VuY2lhXCIpfT5JbnRlbGlnZW5jaWE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDQsIFwiRm9jb1wiKX0+Rm9jbzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvYXBwZGVsaXZlcnktMWNkODMuYXBwc3BvdC5jb20vby9ob21lbWRlZmVycm8uanBnP2FsdD1tZWRpYSZ0b2tlbj00ODQ2ZDRhNy1jYWM2LTRlNzgtYjYzMS03OGM5ZjAzMTUyYWZcIiBhbHQ9XCJcIiB3aWR0aD1cIjMyNHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDYsIFwiRm9yw6dhXCIpfT5Gb3LDp2E8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDksIFwiQWdpbGlkYWRlXCIpfT5BZ2lsaWRhZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDMsIFwiSW50ZWxpZ2VuY2lhXCIpfT5JbnRlbGlnZW5jaWE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDcsIFwiRm9jb1wiKX0+Rm9jbzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvYXBwZGVsaXZlcnktMWNkODMuYXBwc3BvdC5jb20vby9jYXB0b25hbWVyaWNhLmpwZz9hbHQ9bWVkaWEmdG9rZW49NmM5NTU1NDQtMDNhZS00NDY2LTliYWItY2EzOWZmN2M0MDBjXCIgYWx0PVwiXCIgd2lkdGg9XCIzMjRweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDEyLCBcIkZvcsOnYVwiKX0+Rm9yw6dhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig1LCBcIkFnaWxpZGFkZVwiKX0+QWdpbGlkYWRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbig3LCBcIkludGVsaWdlbmNpYVwiKX0+SW50ZWxpZ2VuY2lhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgb25DbGljaz17KCkgPT4gY29tcGFyaXNvbigxLCBcIkZvY29cIil9PkZvY288L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL2FwcGRlbGl2ZXJ5LTFjZDgzLmFwcHNwb3QuY29tL28vaHVsay5qcGc/YWx0PW1lZGlhJnRva2VuPWI1ZmJlNTY1LTYyYmEtNDUwOC05NjlkLTk0ODAyNDYxNmE5ZFwiIGFsdD1cIlwiIHdpZHRoPVwiMzI0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDgsIFwiRm9yw6dhXCIpfT5Gb3LDp2E8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDQsIFwiQWdpbGlkYWRlXCIpfT5BZ2lsaWRhZGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDksIFwiSW50ZWxpZ2VuY2lhXCIpfT5JbnRlbGlnZW5jaWE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBjb2xvcj1cImluZm9cIiBvbkNsaWNrPXsoKSA9PiBjb21wYXJpc29uKDIsIFwiRm9jb1wiKX0+Rm9jbzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvYXBwZGVsaXZlcnktMWNkODMuYXBwc3BvdC5jb20vby90aG9yLmpwZz9hbHQ9bWVkaWEmdG9rZW49NzI3ZjBjYjQtMzkxOS00NWZjLWFmNGMtZWM2NTg4OTliY2MwXCIgYWx0PVwiXCIgd2lkdGg9XCIzMjRweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJBbGVydCIsIkNvbXBhcmlzb24iLCJwbGF5ZXIxIiwicGxheWVyMiIsInAxIiwicDIiLCJ0eXBlIiwicGxheTEiLCJwbGF5MiIsInJlc3VsdCIsInZhbHVlcyIsInNldFZhbHVlcyIsImNvbXBhcmlzb24iLCJ2YWx1ZSIsImYiLCJjb25zb2xlIiwibG9nIiwiemVyYUdhbWUiXSwic291cmNlUm9vdCI6IiJ9