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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Split = (param)=>{\n    let { children, splitMode, delay = 0 } = param;\n    _s();\n    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.set(target.current, {\n            visibility: \"visible\"\n        });\n        const init = ()=>{\n            split();\n        };\n        const animate = (text)=>{\n            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(text, {\n                delay: delay,\n                y: \"105%\",\n                duration: 0.5,\n                stagger: 0.05,\n                ease: \"power2.in\",\n                force3D: true,\n                scrollTrigger: {\n                    trigger: trigger.current,\n                    scrub: false\n                }\n            });\n        };\n        const splitChars = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"chars\"\n            });\n            console.log(\"text\", text);\n            console.log(\" text.chars\", text.chars);\n            text.chars.map((char)=>{\n                const wrapEl = document.createElement(\"span\");\n                const cloned = char.cloneNode(true);\n                wrapEl.classList.add(\"inline-block\", \"relative\", \"overflow-hidden\");\n                cloned.parentNode.append(wrapEl);\n                wrapEl.append(cloned);\n            });\n        //animate(text.chars);\n        };\n        const splitLines = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"lines\"\n            });\n            animate(text.lines);\n        };\n        const splitWords = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"words\"\n            });\n            animate(text.words);\n        };\n        const split = ()=>{\n            if (splitMode === \"chars\") {\n                splitChars();\n            } else if (splitMode === \"lines\") {\n                splitLines();\n            } else if (splitMode === \"words\") {\n                splitWords();\n            }\n        };\n        init();\n    }, []); // Empty dependency array ensures that the effect runs once after the initial render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: trigger,\n        className: \"inline-block w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            ref: target,\n            className: \"inline-block overflow-hidden overflow-clip kerning-none  w-full\",\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/adamwright/Documents/Development/borth-mens-shed/components/Split.tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adamwright/Documents/Development/borth-mens-shed/components/Split.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Split, \"Psxrtf0qr/UghjXYa08MqgFXBCw=\");\n_c = Split;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Split);\nvar _c;\n$RefreshReg$(_c, \"Split\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3BsaXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUN1QjtBQUNoQjtBQVFuQyxNQUFNTSxRQUFRO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsQ0FBQyxFQUFjOztJQUMzRCxNQUFNQyxVQUFVUiw2Q0FBTUEsQ0FBaUI7SUFDdkMsTUFBTVMsU0FBU1QsNkNBQU1BLENBQWlCO0lBRXRDRCxnREFBU0EsQ0FBQztRQUNSRSxzQ0FBSUEsQ0FBQ1MsY0FBYyxDQUFDUiw2REFBYUE7UUFDakNELHNDQUFJQSxDQUFDVSxHQUFHLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtZQUFFQyxZQUFZO1FBQVU7UUFDakQsTUFBTUMsT0FBTztZQUNYQztRQUNGO1FBRUEsTUFBTUMsVUFBVSxDQUFDQztZQUNmaEIsc0NBQUlBLENBQUNpQixJQUFJLENBQUNELE1BQU07Z0JBQ2RWLE9BQU9BO2dCQUNQWSxHQUFHO2dCQUNIQyxVQUFVO2dCQUNWQyxTQUFTO2dCQUNUQyxNQUFNO2dCQUNOQyxTQUFTO2dCQUNUQyxlQUFlO29CQUNiaEIsU0FBU0EsUUFBUUksT0FBTztvQkFDeEJhLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsTUFBTUMsYUFBYTtZQUNqQixNQUFNVCxPQUFPLElBQUlkLGtEQUFTQSxDQUFDTSxPQUFPRyxPQUFPLEVBQUc7Z0JBQUVlLE9BQU87WUFBUTtZQUU3REMsUUFBUUMsR0FBRyxDQUFDLFFBQVFaO1lBQ3BCVyxRQUFRQyxHQUFHLENBQUMsZUFBZVosS0FBS2EsS0FBSztZQUVyQ2IsS0FBS2EsS0FBSyxDQUFFQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2YsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO2dCQUN0QyxNQUFNQyxTQUFTSixLQUFLSyxTQUFTLENBQUM7Z0JBQzlCSixPQUFPSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsWUFBWTtnQkFFakRILE9BQVFJLFVBQVUsQ0FBRUMsTUFBTSxDQUFDUjtnQkFDM0JBLE9BQU9RLE1BQU0sQ0FBQ0w7WUFDaEI7UUFFQSxzQkFBc0I7UUFDeEI7UUFFQSxNQUFNTSxhQUFhO1lBQ2pCLE1BQU16QixPQUFPLElBQUlkLGtEQUFTQSxDQUFDTSxPQUFPRyxPQUFPLEVBQUc7Z0JBQUVlLE9BQU87WUFBUTtZQUM3RFgsUUFBUUMsS0FBSzBCLEtBQUs7UUFDcEI7UUFFQSxNQUFNQyxhQUFhO1lBQ2pCLE1BQU0zQixPQUFPLElBQUlkLGtEQUFTQSxDQUFDTSxPQUFPRyxPQUFPLEVBQUc7Z0JBQUVlLE9BQU87WUFBUTtZQUM3RFgsUUFBUUMsS0FBSzRCLEtBQUs7UUFDcEI7UUFFQSxNQUFNOUIsUUFBUTtZQUNaLElBQUlULGNBQWMsU0FBUztnQkFDekJvQjtZQUNGLE9BQU8sSUFBSXBCLGNBQWMsU0FBUztnQkFDaENvQztZQUNGLE9BQU8sSUFBSXBDLGNBQWMsU0FBUztnQkFDaENzQztZQUNGO1FBQ0Y7UUFFQTlCO0lBQ0YsR0FBRyxFQUFFLEdBQUcsb0ZBQW9GO0lBRTVGLHFCQUNFLDhEQUFDZ0M7UUFBS0MsS0FBS3ZDO1FBQVN3QyxXQUFVO2tCQUM1Qiw0RUFBQ0Y7WUFBS0MsS0FBS3RDO1lBQVF1QyxXQUFVO3NCQUMxQjNDOzs7Ozs7Ozs7OztBQUlUO0dBMUVNRDtLQUFBQTtBQTRFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NwbGl0LnRzeD81ZTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IFNwbGl0VHlwZSBmcm9tIFwic3BsaXQtdHlwZVwiO1xuXG5pbnRlcmZhY2UgU3BsaXRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHNwbGl0TW9kZTogU3RyaW5nO1xuICBkZWxheTogbnVtYmVyO1xufVxuXG5jb25zdCBTcGxpdCA9ICh7IGNoaWxkcmVuLCBzcGxpdE1vZGUsIGRlbGF5ID0gMCB9OiBTcGxpdFByb3BzKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB0YXJnZXQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICBnc2FwLnNldCh0YXJnZXQuY3VycmVudCwgeyB2aXNpYmlsaXR5OiBcInZpc2libGVcIiB9KTtcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgc3BsaXQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYW5pbWF0ZSA9ICh0ZXh0KSA9PiB7XG4gICAgICBnc2FwLmZyb20odGV4dCwge1xuICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgIHk6IFwiMTA1JVwiLFxuICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICBzdGFnZ2VyOiAwLjA1LFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pblwiLFxuICAgICAgICBmb3JjZTNEOiB0cnVlLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlci5jdXJyZW50LFxuICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzcGxpdENoYXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IG5ldyBTcGxpdFR5cGUodGFyZ2V0LmN1cnJlbnQhLCB7IHR5cGVzOiBcImNoYXJzXCIgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidGV4dFwiLCB0ZXh0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiIHRleHQuY2hhcnNcIiwgdGV4dC5jaGFycyk7XG5cbiAgICAgIHRleHQuY2hhcnMhLm1hcCgoY2hhcikgPT4ge1xuICAgICAgICBjb25zdCB3cmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gY2hhci5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKFwiaW5saW5lLWJsb2NrXCIsIFwicmVsYXRpdmVcIiwgXCJvdmVyZmxvdy1oaWRkZW5cIik7XG5cbiAgICAgICAgY2xvbmVkIS5wYXJlbnROb2RlIS5hcHBlbmQod3JhcEVsKTtcbiAgICAgICAgd3JhcEVsLmFwcGVuZChjbG9uZWQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vYW5pbWF0ZSh0ZXh0LmNoYXJzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRMaW5lcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJsaW5lc1wiIH0pO1xuICAgICAgYW5pbWF0ZSh0ZXh0LmxpbmVzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRXb3JkcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJ3b3Jkc1wiIH0pO1xuICAgICAgYW5pbWF0ZSh0ZXh0LndvcmRzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXQgPSAoKSA9PiB7XG4gICAgICBpZiAoc3BsaXRNb2RlID09PSBcImNoYXJzXCIpIHtcbiAgICAgICAgc3BsaXRDaGFycygpO1xuICAgICAgfSBlbHNlIGlmIChzcGxpdE1vZGUgPT09IFwibGluZXNcIikge1xuICAgICAgICBzcGxpdExpbmVzKCk7XG4gICAgICB9IGVsc2UgaWYgKHNwbGl0TW9kZSA9PT0gXCJ3b3Jkc1wiKSB7XG4gICAgICAgIHNwbGl0V29yZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgZW5zdXJlcyB0aGF0IHRoZSBlZmZlY3QgcnVucyBvbmNlIGFmdGVyIHRoZSBpbml0aWFsIHJlbmRlclxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4gcmVmPXt0cmlnZ2VyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsXCI+XG4gICAgICA8c3BhbiByZWY9e3RhcmdldH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1jbGlwIGtlcm5pbmctbm9uZSAgdy1mdWxsXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiU3BsaXRUeXBlIiwiU3BsaXQiLCJjaGlsZHJlbiIsInNwbGl0TW9kZSIsImRlbGF5IiwidHJpZ2dlciIsInRhcmdldCIsInJlZ2lzdGVyUGx1Z2luIiwic2V0IiwiY3VycmVudCIsInZpc2liaWxpdHkiLCJpbml0Iiwic3BsaXQiLCJhbmltYXRlIiwidGV4dCIsImZyb20iLCJ5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSIsImZvcmNlM0QiLCJzY3JvbGxUcmlnZ2VyIiwic2NydWIiLCJzcGxpdENoYXJzIiwidHlwZXMiLCJjb25zb2xlIiwibG9nIiwiY2hhcnMiLCJtYXAiLCJjaGFyIiwid3JhcEVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xvbmVkIiwiY2xvbmVOb2RlIiwiY2xhc3NMaXN0IiwiYWRkIiwicGFyZW50Tm9kZSIsImFwcGVuZCIsInNwbGl0TGluZXMiLCJsaW5lcyIsInNwbGl0V29yZHMiLCJ3b3JkcyIsInNwYW4iLCJyZWYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Split.tsx\n"));

/***/ })

});