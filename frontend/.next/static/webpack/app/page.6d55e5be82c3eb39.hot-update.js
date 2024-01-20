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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Split = (param)=>{\n    let { children, splitMode, delay = 0 } = param;\n    _s();\n    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n        const init = ()=>{\n            split();\n        };\n        const animate = (text)=>{\n            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(text, {\n                delay: delay,\n                y: \"105%\",\n                duration: 0.5,\n                stagger: 0.05,\n                ease: \"power2.in\",\n                force3D: true,\n                scrollTrigger: {\n                    trigger: trigger.current,\n                    scrub: false\n                }\n            });\n        };\n        const splitChars = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"chars\"\n            });\n            console.log(\"text\", text);\n            console.log(\" text.chars\", text.chars);\n            text.chars.map((char)=>{\n                const wrapEl = document.createElement(\"span\");\n                wrapEl.classList.add(\"inline-block\", \"whitespace-pre\", \"overflow-hidden\", \"kerning-none\");\n                // or wrapEl.style.overflow = 'hidden'\n                char.parentNode.appendChild(wrapEl);\n                wrapEl.appendChild(char);\n            });\n            animate(text.chars);\n        };\n        const splitLines = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"lines\"\n            });\n            animate(text.lines);\n        };\n        const splitWords = ()=>{\n            const text = new split_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target.current, {\n                types: \"words\"\n            });\n            animate(text.words);\n        };\n        const split = ()=>{\n            if (splitMode === \"chars\") {\n                splitChars();\n            } else if (splitMode === \"lines\") {\n                splitLines();\n            } else if (splitMode === \"words\") {\n                splitWords();\n            }\n        };\n        init();\n    }, []); // Empty dependency array ensures that the effect runs once after the initial render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: trigger,\n        className: \"inline-block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            ref: target,\n            className: \"inline-block overflow-hidden overflow-clip kerning-none\",\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/adamwright/Documents/Development/borth-mens-shed/components/Split.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/adamwright/Documents/Development/borth-mens-shed/components/Split.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Split, \"Psxrtf0qr/UghjXYa08MqgFXBCw=\");\n_c = Split;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Split);\nvar _c;\n$RefreshReg$(_c, \"Split\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3BsaXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUN1QjtBQUNoQjtBQVFuQyxNQUFNTSxRQUFRO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsQ0FBQyxFQUFjOztJQUMzRCxNQUFNQyxVQUFVUiw2Q0FBTUEsQ0FBaUI7SUFDdkMsTUFBTVMsU0FBU1QsNkNBQU1BLENBQWlCO0lBRXRDRCxnREFBU0EsQ0FBQztRQUNSRSxzQ0FBSUEsQ0FBQ1MsY0FBYyxDQUFDUiw2REFBYUE7UUFFakMsTUFBTVMsT0FBTztZQUNYQztRQUNGO1FBRUEsTUFBTUMsVUFBVSxDQUFDQztZQUNmYixzQ0FBSUEsQ0FBQ2MsSUFBSSxDQUFDRCxNQUFNO2dCQUNkUCxPQUFPQTtnQkFDUFMsR0FBRztnQkFDSEMsVUFBVTtnQkFDVkMsU0FBUztnQkFDVEMsTUFBTTtnQkFDTkMsU0FBUztnQkFDVEMsZUFBZTtvQkFDYmIsU0FBU0EsUUFBUWMsT0FBTztvQkFDeEJDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsTUFBTUMsYUFBYTtZQUNqQixNQUFNVixPQUFPLElBQUlYLGtEQUFTQSxDQUFDTSxPQUFPYSxPQUFPLEVBQUc7Z0JBQUVHLE9BQU87WUFBUTtZQUU3REMsUUFBUUMsR0FBRyxDQUFDLFFBQVFiO1lBQ3BCWSxRQUFRQyxHQUFHLENBQUMsZUFBZWIsS0FBS2MsS0FBSztZQUVyQ2QsS0FBS2MsS0FBSyxDQUFFQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2YsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO2dCQUN0Q0YsT0FBT0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLGtCQUFrQixtQkFBbUI7Z0JBQzFFLHNDQUFzQztnQkFDdENMLEtBQU1NLFVBQVUsQ0FBRUMsV0FBVyxDQUFDTjtnQkFDOUJBLE9BQU9NLFdBQVcsQ0FBQ1A7WUFDckI7WUFFQWpCLFFBQVFDLEtBQUtjLEtBQUs7UUFDcEI7UUFFQSxNQUFNVSxhQUFhO1lBQ2pCLE1BQU14QixPQUFPLElBQUlYLGtEQUFTQSxDQUFDTSxPQUFPYSxPQUFPLEVBQUc7Z0JBQUVHLE9BQU87WUFBUTtZQUM3RFosUUFBUUMsS0FBS3lCLEtBQUs7UUFDcEI7UUFFQSxNQUFNQyxhQUFhO1lBQ2pCLE1BQU0xQixPQUFPLElBQUlYLGtEQUFTQSxDQUFDTSxPQUFPYSxPQUFPLEVBQUc7Z0JBQUVHLE9BQU87WUFBUTtZQUM3RFosUUFBUUMsS0FBSzJCLEtBQUs7UUFDcEI7UUFFQSxNQUFNN0IsUUFBUTtZQUNaLElBQUlOLGNBQWMsU0FBUztnQkFDekJrQjtZQUNGLE9BQU8sSUFBSWxCLGNBQWMsU0FBUztnQkFDaENnQztZQUNGLE9BQU8sSUFBSWhDLGNBQWMsU0FBUztnQkFDaENrQztZQUNGO1FBQ0Y7UUFFQTdCO0lBQ0YsR0FBRyxFQUFFLEdBQUcsb0ZBQW9GO0lBRTVGLHFCQUNFLDhEQUFDK0I7UUFBS0MsS0FBS25DO1FBQVNvQyxXQUFVO2tCQUM1Qiw0RUFBQ0Y7WUFBS0MsS0FBS2xDO1lBQVFtQyxXQUFVO3NCQUMxQnZDOzs7Ozs7Ozs7OztBQUlUO0dBekVNRDtLQUFBQTtBQTJFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NwbGl0LnRzeD81ZTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IFNwbGl0VHlwZSBmcm9tIFwic3BsaXQtdHlwZVwiO1xuXG5pbnRlcmZhY2UgU3BsaXRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHNwbGl0TW9kZTogU3RyaW5nO1xuICBkZWxheTogbnVtYmVyO1xufVxuXG5jb25zdCBTcGxpdCA9ICh7IGNoaWxkcmVuLCBzcGxpdE1vZGUsIGRlbGF5ID0gMCB9OiBTcGxpdFByb3BzKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB0YXJnZXQgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICBzcGxpdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbmltYXRlID0gKHRleHQpID0+IHtcbiAgICAgIGdzYXAuZnJvbSh0ZXh0LCB7XG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgeTogXCIxMDUlXCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgIHN0YWdnZXI6IDAuMDUsXG4gICAgICAgIGVhc2U6IFwicG93ZXIyLmluXCIsXG4gICAgICAgIGZvcmNlM0Q6IHRydWUsXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLmN1cnJlbnQsXG4gICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNwbGl0Q2hhcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gbmV3IFNwbGl0VHlwZSh0YXJnZXQuY3VycmVudCEsIHsgdHlwZXM6IFwiY2hhcnNcIiB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJ0ZXh0XCIsIHRleHQpO1xuICAgICAgY29uc29sZS5sb2coXCIgdGV4dC5jaGFyc1wiLCB0ZXh0LmNoYXJzKTtcblxuICAgICAgdGV4dC5jaGFycyEubWFwKChjaGFyKSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChcImlubGluZS1ibG9ja1wiLCBcIndoaXRlc3BhY2UtcHJlXCIsIFwib3ZlcmZsb3ctaGlkZGVuXCIsIFwia2VybmluZy1ub25lXCIpO1xuICAgICAgICAvLyBvciB3cmFwRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICBjaGFyIS5wYXJlbnROb2RlIS5hcHBlbmRDaGlsZCh3cmFwRWwpO1xuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQoY2hhcik7XG4gICAgICB9KTtcblxuICAgICAgYW5pbWF0ZSh0ZXh0LmNoYXJzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRMaW5lcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJsaW5lc1wiIH0pO1xuICAgICAgYW5pbWF0ZSh0ZXh0LmxpbmVzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXRXb3JkcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBuZXcgU3BsaXRUeXBlKHRhcmdldC5jdXJyZW50ISwgeyB0eXBlczogXCJ3b3Jkc1wiIH0pO1xuICAgICAgYW5pbWF0ZSh0ZXh0LndvcmRzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BsaXQgPSAoKSA9PiB7XG4gICAgICBpZiAoc3BsaXRNb2RlID09PSBcImNoYXJzXCIpIHtcbiAgICAgICAgc3BsaXRDaGFycygpO1xuICAgICAgfSBlbHNlIGlmIChzcGxpdE1vZGUgPT09IFwibGluZXNcIikge1xuICAgICAgICBzcGxpdExpbmVzKCk7XG4gICAgICB9IGVsc2UgaWYgKHNwbGl0TW9kZSA9PT0gXCJ3b3Jkc1wiKSB7XG4gICAgICAgIHNwbGl0V29yZHMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgZW5zdXJlcyB0aGF0IHRoZSBlZmZlY3QgcnVucyBvbmNlIGFmdGVyIHRoZSBpbml0aWFsIHJlbmRlclxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4gcmVmPXt0cmlnZ2VyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cbiAgICAgIDxzcGFuIHJlZj17dGFyZ2V0fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWNsaXAga2VybmluZy1ub25lXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiU3BsaXRUeXBlIiwiU3BsaXQiLCJjaGlsZHJlbiIsInNwbGl0TW9kZSIsImRlbGF5IiwidHJpZ2dlciIsInRhcmdldCIsInJlZ2lzdGVyUGx1Z2luIiwiaW5pdCIsInNwbGl0IiwiYW5pbWF0ZSIsInRleHQiLCJmcm9tIiwieSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2UiLCJmb3JjZTNEIiwic2Nyb2xsVHJpZ2dlciIsImN1cnJlbnQiLCJzY3J1YiIsInNwbGl0Q2hhcnMiLCJ0eXBlcyIsImNvbnNvbGUiLCJsb2ciLCJjaGFycyIsIm1hcCIsImNoYXIiLCJ3cmFwRWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJzcGxpdExpbmVzIiwibGluZXMiLCJzcGxpdFdvcmRzIiwid29yZHMiLCJzcGFuIiwicmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Split.tsx\n"));

/***/ })

});