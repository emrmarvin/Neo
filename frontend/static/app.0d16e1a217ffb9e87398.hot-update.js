webpackHotUpdate("app",{

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home.vue */ \"./src/views/Home.vue\");\n/* harmony import */ var _views_Country_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Country.vue */ \"./src/views/Country.vue\");\n\n // import Auth from '@okta/okta-vue';\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // Vue.use(Auth, {\n//   issuer: 'https://dev-279632.okta.com/oauth2/default',\n//   client_id: '0oannn51zQdFqD0pG356',\n//   redirect_uri: 'http://localhost:8000/implicit/callback',\n//   scope: 'openid profile email'\n// });\n\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: 'history',\n  base: \"/\",\n  routes: [{\n    path: '/',\n    name: 'home',\n    component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"] // meta: {\n    //   requiresAuth: true\n    // }\n\n  }, {\n    path: '/about/',\n    name: 'about',\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: function component() {\n      return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ./views/About.vue */ \"./src/views/About.vue\"));\n    }\n  }, {\n    path: '/country/',\n    name: 'country',\n    component: function component() {\n      return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ./views/Country.vue */ \"./src/views/Country.vue\"));\n    } // meta: {\n    //   requiresAuth: true\n    // }\n\n  }, {\n    path: '/dashboard/',\n    name: 'Dashboard',\n    component: function component() {\n      return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ./views/Dashboard.vue */ \"./src/views/Dashboard.vue\"));\n    } // meta: {\n    //   requiresAuth: true\n    // }\n\n  }]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci5qcz80MWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcclxuLy8gaW1wb3J0IEF1dGggZnJvbSAnQG9rdGEvb2t0YS12dWUnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJztcclxuaW1wb3J0IENvdW50cnkgZnJvbSAnLi92aWV3cy9Db3VudHJ5LnZ1ZSc7XHJcblxyXG5cclxuVnVlLnVzZShSb3V0ZXIpO1xyXG4vLyBWdWUudXNlKEF1dGgsIHtcclxuLy8gICBpc3N1ZXI6ICdodHRwczovL2Rldi0yNzk2MzIub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQnLFxyXG4vLyAgIGNsaWVudF9pZDogJzBvYW5ubjUxelFkRnFEMHBHMzU2JyxcclxuLy8gICByZWRpcmVjdF91cmk6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvaW1wbGljaXQvY2FsbGJhY2snLFxyXG4vLyAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUgZW1haWwnXHJcbi8vIH0pO1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcih7XHJcbiAgbW9kZTogJ2hpc3RvcnknLFxyXG4gIGJhc2U6IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxyXG4gIHJvdXRlczogW1xyXG4gICAge1xyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgY29tcG9uZW50OiBIb21lLFxyXG4gICAgICAvLyBtZXRhOiB7XHJcbiAgICAgIC8vICAgcmVxdWlyZXNBdXRoOiB0cnVlXHJcbiAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6ICcvYWJvdXQvJyxcclxuICAgICAgbmFtZTogJ2Fib3V0JyxcclxuICAgICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgICAgLy8gdGhpcyBnZW5lcmF0ZXMgYSBzZXBhcmF0ZSBjaHVuayAoYWJvdXQuW2hhc2hdLmpzKSBmb3IgdGhpcyByb3V0ZVxyXG4gICAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4vdmlld3MvQWJvdXQudnVlJyksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL2NvdW50cnkvJyxcclxuICAgICAgbmFtZTogJ2NvdW50cnknLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4vdmlld3MvQ291bnRyeS52dWUnKSxcclxuICAgICAgLy8gbWV0YToge1xyXG4gICAgICAvLyAgIHJlcXVpcmVzQXV0aDogdHJ1ZVxyXG4gICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL2Rhc2hib2FyZC8nLFxyXG4gICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcclxuICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhYm91dFwiICovICcuL3ZpZXdzL0Rhc2hib2FyZC52dWUnKSxcclxuICAgICAgLy8gbWV0YToge1xyXG4gICAgICAvLyAgIHJlcXVpcmVzQXV0aDogdHJ1ZVxyXG4gICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBwYXRoOiAnL2ltcGxpY2l0L2NhbGxiYWNrJywgY29tcG9uZW50OiBBdXRoLmhhbmRsZUNhbGxiYWNrKClcclxuICAgIC8vIH0gICAgXHJcbiAgXSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBUEE7QUE1QkE7QUEwQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ })

})