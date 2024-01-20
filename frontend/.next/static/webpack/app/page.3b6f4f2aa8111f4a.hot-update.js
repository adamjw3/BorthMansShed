"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Split.tsx":
/*!******************************!*\
  !*** ./components/Split.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Split = (param)=>{\n    let { children, splitMode, delay = 0 } = param;\n    _s();\n    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(target.current, {\n            visibility: \"visible\"\n        });\n        const init = ()=>{\n            split();\n        };\n        const animate = (text)=>{\n            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(text, {\n                delay: delay,\n                y: \"105%\",\n                duration: 0.5,\n                stagger: 0.05,\n                ease: \"power2.in\",\n                force3D: true,\n                scrollTrigger: {\n                    trigger: trigger.current,\n                    scrub: false\n                }\n            });\n        };\n        const splitChars = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"chars\"\n            });\n            console.log(\"text\", text);\n            console.log(\" text.chars\", text.chars);\n            text.chars.map((char)=>{\n                const wrapEl = document.createElement(\"span\");\n                wrapEl.classList.add(\"inline-block\", \"relative\", \"overflow-hidden\");\n                char.parentNode.insertBefore(wrapEl, char.nextSibling);\n                wrapEl.appendChild(char.cloneNode(true));\n                char.remove();\n            });\n            animate(\".char\");\n        };\n        const splitLines = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"lines\"\n            });\n            animate(text.lines);\n        };\n        const splitWords = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"words\"\n            });\n            animate(text.words);\n        };\n        const split = ()=>{\n            if (splitMode === \"chars\") {\n                splitChars();\n            } else if (splitMode === \"lines\") {\n                splitLines();\n            } else if (splitMode === \"words\") {\n                splitWords();\n            }\n        };\n        init();\n    }, []); // Empty dependency array ensures that the effect runs once after the initial render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: trigger,\n        className: \"inline-block w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            ref: target,\n            className: \"inline-block overflow-hidden overflow-clip kerning-none  w-full\",\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/adamwright/Documents/Development/borth-mens-shed/components/Split.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adamwright/Documents/Development/borth-mens-shed/components/Split.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Split, \"Psxrtf0qr/UghjXYa08MqgFXBCw=\");\n_c = Split;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Split);\nvar _c;\n$RefreshReg$(_c, \"Split\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3BsaXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUN1QjtBQUNoQjtBQVFuQyxNQUFNTSxRQUFRO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsQ0FBQyxFQUFjOztJQUMzRCxNQUFNQyxVQUFVUiw2Q0FBTUEsQ0FBaUI7SUFDdkMsTUFBTVMsU0FBU1QsNkNBQU1BLENBQWlCO0lBRXRDRCxnREFBU0EsQ0FBQztRQUNSRSxzQ0FBSUEsQ0FBQ1MsY0FBYyxDQUFDUiw2REFBYUE7UUFDakNELHNDQUFJQSxDQUFDVSxHQUFHLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtZQUFFQyxZQUFZO1FBQVU7UUFDakQsTUFBTUMsT0FBTztZQUNYQztRQUNGO1FBRUEsTUFBTUMsVUFBVSxDQUFDQztZQUNmaEIsc0NBQUlBLENBQUNpQixJQUFJLENBQUNELE1BQU07Z0JBQ2RWLE9BQU9BO2dCQUNQWSxHQUFHO2dCQUNIQyxVQUFVO2dCQUNWQyxTQUFTO2dCQUNUQyxNQUFNO2dCQUNOQyxTQUFTO2dCQUNUQyxlQUFlO29CQUNiaEIsU0FBU0EsUUFBUUksT0FBTztvQkFDeEJhLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsTUFBTUMsYUFBYTtZQUNqQixNQUFNVCxPQUFPLElBQUlkLGtEQUFTQSxDQUFDTSxPQUFPRyxPQUFPLEVBQUc7Z0JBQUVlLE9BQU87WUFBUTtZQUU3REMsUUFBUUMsR0FBRyxDQUFDLFFBQVFaO1lBQ3BCVyxRQUFRQyxHQUFHLENBQUMsZUFBZVosS0FBS2EsS0FBSztZQUVyQ2IsS0FBS2EsS0FBSyxDQUFFQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2YsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO2dCQUN0Q0YsT0FBT0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLFlBQVk7Z0JBQ2pETCxLQUFNTSxVQUFVLENBQUVDLFlBQVksQ0FBQ04sUUFBUUQsS0FBS1EsV0FBVztnQkFDdkRQLE9BQU9RLFdBQVcsQ0FBQ1QsS0FBS1UsU0FBUyxDQUFDO2dCQUNsQ1YsS0FBS1csTUFBTTtZQUNiO1lBRUEzQixRQUFRO1FBQ1Y7UUFFQSxNQUFNNEIsYUFBYTtZQUNqQixNQUFNM0IsT0FBTyxJQUFJZCxrREFBU0EsQ0FBQ00sT0FBT0csT0FBTyxFQUFHO2dCQUFFZSxPQUFPO1lBQVE7WUFDN0RYLFFBQVFDLEtBQUs0QixLQUFLO1FBQ3BCO1FBRUEsTUFBTUMsYUFBYTtZQUNqQixNQUFNN0IsT0FBTyxJQUFJZCxrREFBU0EsQ0FBQ00sT0FBT0csT0FBTyxFQUFHO2dCQUFFZSxPQUFPO1lBQVE7WUFDN0RYLFFBQVFDLEtBQUs4QixLQUFLO1FBQ3BCO1FBRUEsTUFBTWhDLFFBQVE7WUFDWixJQUFJVCxjQUFjLFNBQVM7Z0JBQ3pCb0I7WUFDRixPQUFPLElBQUlwQixjQUFjLFNBQVM7Z0JBQ2hDc0M7WUFDRixPQUFPLElBQUl0QyxjQUFjLFNBQVM7Z0JBQ2hDd0M7WUFDRjtRQUNGO1FBRUFoQztJQUNGLEdBQUcsRUFBRSxHQUFHLG9GQUFvRjtJQUU1RixxQkFDRSw4REFBQ2tDO1FBQUtDLEtBQUt6QztRQUFTMEMsV0FBVTtrQkFDNUIsNEVBQUNGO1lBQUtDLEtBQUt4QztZQUFReUMsV0FBVTtzQkFDMUI3Qzs7Ozs7Ozs7Ozs7QUFJVDtHQXpFTUQ7S0FBQUE7QUEyRU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGxpdC50c3g/NWUxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBTcGxpdFR5cGUgZnJvbSBcInNwbGl0LXR5cGVcIjtcblxuaW50ZXJmYWNlIFNwbGl0UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBzcGxpdE1vZGU6IFN0cmluZztcbiAgZGVsYXk6IG51bWJlcjtcbn1cblxuY29uc3QgU3BsaXQgPSAoeyBjaGlsZHJlbiwgc3BsaXRNb2RlLCBkZWxheSA9IDAgfTogU3BsaXRQcm9wcykgPT4ge1xuICBjb25zdCB0cmlnZ2VyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgdGFyZ2V0ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gICAgZ3NhcC5zZXQodGFyZ2V0LmN1cnJlbnQsIHsgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIgfSk7XG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgIHNwbGl0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFuaW1hdGUgPSAodGV4dCkgPT4ge1xuICAgICAgZ3NhcC5mcm9tKHRleHQsIHtcbiAgICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICB5OiBcIjEwNSVcIixcbiAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgc3RhZ2dlcjogMC4wNSxcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5cIixcbiAgICAgICAgZm9yY2UzRDogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXIuY3VycmVudCxcbiAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRDaGFycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJjaGFyc1wiIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInRleHRcIiwgdGV4dCk7XG4gICAgICBjb25zb2xlLmxvZyhcIiB0ZXh0LmNoYXJzXCIsIHRleHQuY2hhcnMpO1xuXG4gICAgICB0ZXh0LmNoYXJzIS5tYXAoKGNoYXIpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKFwiaW5saW5lLWJsb2NrXCIsIFwicmVsYXRpdmVcIiwgXCJvdmVyZmxvdy1oaWRkZW5cIik7XG4gICAgICAgIGNoYXIhLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZSh3cmFwRWwsIGNoYXIubmV4dFNpYmxpbmcpO1xuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQoY2hhci5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBjaGFyLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGFuaW1hdGUoXCIuY2hhclwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRMaW5lcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJsaW5lc1wiIH0pO1xuICAgICAgYW5pbWF0ZSh0ZXh0LmxpbmVzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRXb3JkcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJ3b3Jkc1wiIH0pO1xuICAgICAgYW5pbWF0ZSh0ZXh0LndvcmRzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXQgPSAoKSA9PiB7XG4gICAgICBpZiAoc3BsaXRNb2RlID09PSBcImNoYXJzXCIpIHtcbiAgICAgICAgc3BsaXRDaGFycygpO1xuICAgICAgfSBlbHNlIGlmIChzcGxpdE1vZGUgPT09IFwibGluZXNcIikge1xuICAgICAgICBzcGxpdExpbmVzKCk7XG4gICAgICB9IGVsc2UgaWYgKHNwbGl0TW9kZSA9PT0gXCJ3b3Jkc1wiKSB7XG4gICAgICAgIHNwbGl0V29yZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgZW5zdXJlcyB0aGF0IHRoZSBlZmZlY3QgcnVucyBvbmNlIGFmdGVyIHRoZSBpbml0aWFsIHJlbmRlclxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4gcmVmPXt0cmlnZ2VyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsXCI+XG4gICAgICA8c3BhbiByZWY9e3RhcmdldH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1jbGlwIGtlcm5pbmctbm9uZSAgdy1mdWxsXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiU3BsaXRUeXBlIiwiU3BsaXQiLCJjaGlsZHJlbiIsInNwbGl0TW9kZSIsImRlbGF5IiwidHJpZ2dlciIsInRhcmdldCIsInJlZ2lzdGVyUGx1Z2luIiwic2V0IiwiY3VycmVudCIsInZpc2liaWxpdHkiLCJpbml0Iiwic3BsaXQiLCJhbmltYXRlIiwidGV4dCIsImZyb20iLCJ5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSIsImZvcmNlM0QiLCJzY3JvbGxUcmlnZ2VyIiwic2NydWIiLCJzcGxpdENoYXJzIiwidHlwZXMiLCJjb25zb2xlIiwibG9nIiwiY2hhcnMiLCJtYXAiLCJjaGFyIiwid3JhcEVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJyZW1vdmUiLCJzcGxpdExpbmVzIiwibGluZXMiLCJzcGxpdFdvcmRzIiwid29yZHMiLCJzcGFuIiwicmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Split.tsx\n"));

/***/ })

});