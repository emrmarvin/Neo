webpackHotUpdate("app",{

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ \"./src/views/Home.vue\");\n\n // import Auth from '@okta/okta-vue';\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // Vue.use(Auth, {\n//   issuer: 'https://dev-279632.okta.com/oauth2/default',\n//   client_id: '0oannn51zQdFqD0pG356',\n//   redirect_uri: 'http://localhost:8000/implicit/callback',\n//   scope: 'openid profile email'\n// });\n\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: 'history',\n  base: \"/\",\n  routes: [{\n    path: '/',\n    name: 'home',\n    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    meta: {\n      requiresAuth: true\n    }\n  }, {\n    path: '/about/',\n    name: 'about',\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: function component() {\n      return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ./views/About.vue */ \"./src/views/About.vue\"));\n    }\n  }]\n}); // const onAuthRequired = async (from, to, next) => {\n//   if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {\n//     // Navigate to custom login page\n//     next({ path: '/login' })\n//   } else {\n//     next()\n//   }\n// };\n// router.beforeEach(onAuthRequired);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci5qcz80MWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG4vLyBpbXBvcnQgQXV0aCBmcm9tICdAb2t0YS9va3RhLXZ1ZSc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJztcblxuXG5WdWUudXNlKFJvdXRlcik7XG4vLyBWdWUudXNlKEF1dGgsIHtcbi8vICAgaXNzdWVyOiAnaHR0cHM6Ly9kZXYtMjc5NjMyLm9rdGEuY29tL29hdXRoMi9kZWZhdWx0Jyxcbi8vICAgY2xpZW50X2lkOiAnMG9hbm5uNTF6UWRGcUQwcEczNTYnLFxuLy8gICByZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvaW1wbGljaXQvY2FsbGJhY2snLFxuLy8gICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsJ1xuLy8gfSk7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoe1xuICBtb2RlOiAnaGlzdG9yeScsXG4gIGJhc2U6IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxuICByb3V0ZXM6IFtcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICBuYW1lOiAnaG9tZScsXG4gICAgICBjb21wb25lbnQ6IEhvbWUsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHJlcXVpcmVzQXV0aDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hYm91dC8nLFxuICAgICAgbmFtZTogJ2Fib3V0JyxcbiAgICAgIC8vIHJvdXRlIGxldmVsIGNvZGUtc3BsaXR0aW5nXG4gICAgICAvLyB0aGlzIGdlbmVyYXRlcyBhIHNlcGFyYXRlIGNodW5rIChhYm91dC5baGFzaF0uanMpIGZvciB0aGlzIHJvdXRlXG4gICAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxuICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhYm91dFwiICovICcuL3ZpZXdzL0Fib3V0LnZ1ZScpLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgcGF0aDogJy9pbXBsaWNpdC9jYWxsYmFjaycsIGNvbXBvbmVudDogQXV0aC5oYW5kbGVDYWxsYmFjaygpXG4gICAgLy8gfSAgICBcbiAgXSxcbn0pO1xuXG4vLyBjb25zdCBvbkF1dGhSZXF1aXJlZCA9IGFzeW5jIChmcm9tLCB0bywgbmV4dCkgPT4ge1xuLy8gICBpZiAoZnJvbS5tYXRjaGVkLnNvbWUocmVjb3JkID0+IHJlY29yZC5tZXRhLnJlcXVpcmVzQXV0aCkgJiYgIShhd2FpdCBWdWUucHJvdG90eXBlLiRhdXRoLmlzQXV0aGVudGljYXRlZCgpKSkge1xuLy8gICAgIC8vIE5hdmlnYXRlIHRvIGN1c3RvbSBsb2dpbiBwYWdlXG4vLyAgICAgbmV4dCh7IHBhdGg6ICcvbG9naW4nIH0pXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbmV4dCgpXG4vLyAgIH1cbi8vIH07XG5cbi8vIHJvdXRlci5iZWZvcmVFYWNoKG9uQXV0aFJlcXVpcmVkKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBWkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

})