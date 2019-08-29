webpackHotUpdate("app",{

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ \"./src/views/Home.vue\");\n/* harmony import */ var _okta_okta_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @okta/okta-vue */ \"./node_modules/@okta/okta-vue/dist/okta-vue.js\");\n/* harmony import */ var _okta_okta_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_vue__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_okta_okta_vue__WEBPACK_IMPORTED_MODULE_3___default.a, {\n  issuer: 'https://dev-279632.okta.com/oauth2/default',\n  client_id: '0oannn51zQdFqD0pG356',\n  redirect_uri: 'http://localhost:8000/implicit/callback',\n  scope: 'openid profile email'\n});\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: 'history',\n  base: \"/\",\n  routes: [{\n    path: '/',\n    name: 'home',\n    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/about/',\n    name: 'about',\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: function component() {\n      return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ./views/About.vue */ \"./src/views/About.vue\"));\n    }\n  }, {\n    path: '/implicit/callback',\n    component: _okta_okta_vue__WEBPACK_IMPORTED_MODULE_3___default.a.handleCallback()\n  }]\n}); // const onAuthRequired = async (from, to, next) => {\n//   if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {\n//     // Navigate to custom login page\n//     next({ path: '/login' })\n//   } else {\n//     next()\n//   }\n// };\n// router.beforeEach(onAuthRequired);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci5qcz80MWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJztcbmltcG9ydCBBdXRoIGZyb20gJ0Bva3RhL29rdGEtdnVlJztcblxuVnVlLnVzZShSb3V0ZXIpO1xuVnVlLnVzZShBdXRoLCB7XG4gIGlzc3VlcjogJ2h0dHBzOi8vZGV2LTI3OTYzMi5va3RhLmNvbS9vYXV0aDIvZGVmYXVsdCcsXG4gIGNsaWVudF9pZDogJzBvYW5ubjUxelFkRnFEMHBHMzU2JyxcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ltcGxpY2l0L2NhbGxiYWNrJyxcbiAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZSBlbWFpbCdcbn0pO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKHtcbiAgbW9kZTogJ2hpc3RvcnknLFxuICBiYXNlOiBwcm9jZXNzLmVudi5CQVNFX1VSTCxcbiAgcm91dGVzOiBbXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgY29tcG9uZW50OiBIb21lXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2Fib3V0LycsXG4gICAgICBuYW1lOiAnYWJvdXQnLFxuICAgICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcbiAgICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKGFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcbiAgICAgIC8vIHdoaWNoIGlzIGxhenktbG9hZGVkIHdoZW4gdGhlIHJvdXRlIGlzIHZpc2l0ZWQuXG4gICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4vdmlld3MvQWJvdXQudnVlJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2ltcGxpY2l0L2NhbGxiYWNrJywgY29tcG9uZW50OiBBdXRoLmhhbmRsZUNhbGxiYWNrKClcbiAgICB9ICAgIFxuICBdLFxufSk7XG5cbi8vIGNvbnN0IG9uQXV0aFJlcXVpcmVkID0gYXN5bmMgKGZyb20sIHRvLCBuZXh0KSA9PiB7XG4vLyAgIGlmIChmcm9tLm1hdGNoZWQuc29tZShyZWNvcmQgPT4gcmVjb3JkLm1ldGEucmVxdWlyZXNBdXRoKSAmJiAhKGF3YWl0IFZ1ZS5wcm90b3R5cGUuJGF1dGguaXNBdXRoZW50aWNhdGVkKCkpKSB7XG4vLyAgICAgLy8gTmF2aWdhdGUgdG8gY3VzdG9tIGxvZ2luIHBhZ2Vcbi8vICAgICBuZXh0KHsgcGF0aDogJy9sb2dpbicgfSlcbi8vICAgfSBlbHNlIHtcbi8vICAgICBuZXh0KClcbi8vICAgfVxuLy8gfTtcblxuLy8gcm91dGVyLmJlZm9yZUVhY2gob25BdXRoUmVxdWlyZWQpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFEQTtBQWpCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

})