webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _templateObject() {\n  var data = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  query {\\n    country{\\n      countryId\\n      countryName\\n      countryRegion\\n      countryCode\\n      countryLanguage\\n      countryStatus\\n\\t\\t  countryCreation\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// @ is an alias to /src\n\nvar CountryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      countryName: 'sample',\n      countryRegion: ' ',\n      countries: ['testname'],\n      headers: [{\n        text: 'Country Name',\n        align: 'left',\n        sortable: false,\n        value: 'countryName'\n      }, {\n        text: 'Country Name',\n        value: 'countryName'\n      }, {\n        text: 'Country Code',\n        value: 'countryCode'\n      }]\n    };\n  },\n  apollo: {\n    country: CountryQuery\n  },\n  methods: {\n    create_task: function () {\n      var _create_task = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _name$description, name, description, data, t;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _name$description = {\n                  name: this.name,\n                  description: this.description\n                }, name = _name$description.name, description = _name$description.description; // call the graphql mutation\n\n                _context.next = 3;\n                return this.$apollo.mutate({\n                  // query\n                  mutation: TaskCreate,\n                  // parameters\n                  variables: {\n                    name: name,\n                    description: description\n                  },\n                  update: function update(store, _ref) {\n                    var createTask = _ref.data.createTask;\n                    // add to all tasks list\n                    var data = store.readQuery({\n                      query: CountryQuery\n                    });\n                    data.tasks.push(createTask.task);\n                    store.writeQuery({\n                      query: CountryQuery,\n                      data: data\n                    });\n                  },\n                  optimisticResponse: {\n                    __typename: 'Mutation',\n                    createTask: {\n                      __typename: 'CreateTask',\n                      task: {\n                        __typename: 'TaskType',\n                        id: -1,\n                        isDone: false,\n                        name: name,\n                        description: description\n                      },\n                      ok: false\n                    }\n                  }\n                });\n\n              case 3:\n                data = _context.sent;\n                t = data.data.createTask.task; // console.log('Added:', t);\n\n                this.name = '';\n                this.description = '';\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function create_task() {\n        return _create_task.apply(this, arguments);\n      }\n\n      return create_task;\n    }(),\n    update_task: function () {\n      var _update_task = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(task) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.$apollo.mutate({\n                  mutation: TaskUpdate,\n                  variables: {\n                    id: task.id,\n                    IsDone: !task.isDone\n                  }\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function update_task(_x) {\n        return _update_task.apply(this, arguments);\n      }\n\n      return update_task;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ib21lLnZ1ZT83NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImNvdW50cnlOYW1lXCI+XHJcbiAgICAgIDxzcGFuPkRlc2NyaXB0aW9uOjwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiY291bnRyeVJlZ2lvblwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cImNyZWF0ZV90YXNrXCI+QWRkPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1mb3I9XCJpIGluIGNvdW50cnlcIiA6a2V5PVwiaS5jb3VudHJ5SWRcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAaW5wdXQ9XCJ1cGRhdGVfdGFzayhpKVwiPlxyXG4gICAgICAgICAgPHN0cm9uZz57eyBpLmNvdW50cnlOYW1lIH19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDx2LWNhcmQ+XHJcbiAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICBEYXRhXHJcbiAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgYXBwZW5kLWljb249XCJzZWFyY2hcIlxyXG4gICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICBzaW5nbGUtbGluZVxyXG4gICAgICAgIGhpZGUtZGV0YWlsc1xyXG4gICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICA8L3YtY2FyZC10aXRsZT5cclxuXHJcbiAgICA8di1kYXRhLXRhYmxlIFxyXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICA6aXRlbXM9XCJjb3VudHJpZXNcIlxyXG4gICAgPlxyXG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW1zPVwiY291bnRcIj5cclxuICAgICAgICAgIDx0ZD57eyBjb3VudC5pdGVtIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBjb3VudCB9fTwvdGQ+ICAgICAgIFxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLWRhdGE+XHJcbiAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwid2FybmluZ1wiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICBTb3JyeSwgbm8gZGF0YSwgbm90aGluZyB0byBkaXNwbGF5IGhlcmVcclxuICAgICAgICA8L3YtYWxlcnQ+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3YtZGF0YS10YWJsZT5cclxuICA8L3YtY2FyZD5cclxuICA8L2Rpdj5cclxuICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIEAgaXMgYW4gYWxpYXMgdG8gL3NyY1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNvbnN0IENvdW50cnlRdWVyeSA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjb3VudHJ5e1xyXG4gICAgICBjb3VudHJ5SWRcclxuICAgICAgY291bnRyeU5hbWVcclxuICAgICAgY291bnRyeVJlZ2lvblxyXG4gICAgICBjb3VudHJ5Q29kZVxyXG4gICAgICBjb3VudHJ5TGFuZ3VhZ2VcclxuICAgICAgY291bnRyeVN0YXR1c1xyXG5cdFx0ICBjb3VudHJ5Q3JlYXRpb25cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvdW50cnlOYW1lOiAnc2FtcGxlJyxcclxuICAgICAgY291bnRyeVJlZ2lvbjogJyAnLFxyXG4gICAgICBjb3VudHJpZXM6IFsndGVzdG5hbWUnXSxcclxuICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQ291bnRyeSBOYW1lJyxcclxuICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2NvdW50cnlOYW1lJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0NvdW50cnkgTmFtZScsIHZhbHVlOiAnY291bnRyeU5hbWUnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdDb3VudHJ5IENvZGUnLCB2YWx1ZTogJ2NvdW50cnlDb2RlJyB9LFxyXG4gICAgICAgIF0sIFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGFwb2xsbzoge1xyXG4gICAgY291bnRyeTogQ291bnRyeVF1ZXJ5LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgY3JlYXRlX3Rhc2soKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHtcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBjYWxsIHRoZSBncmFwaHFsIG11dGF0aW9uXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgICAgLy8gcXVlcnlcclxuICAgICAgICBtdXRhdGlvbjogVGFza0NyZWF0ZSxcclxuICAgICAgICAvLyBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyBjcmVhdGVUYXNrIH0gfSkgPT4ge1xyXG4gICAgICAgICAgLy8gYWRkIHRvIGFsbCB0YXNrcyBsaXN0XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gc3RvcmUucmVhZFF1ZXJ5KHsgcXVlcnk6IENvdW50cnlRdWVyeSB9KTtcclxuICAgICAgICAgIGRhdGEudGFza3MucHVzaChjcmVhdGVUYXNrLnRhc2spO1xyXG4gICAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7IHF1ZXJ5OiBDb3VudHJ5UXVlcnksIGRhdGEgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcclxuICAgICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXHJcbiAgICAgICAgICBjcmVhdGVUYXNrOiB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdDcmVhdGVUYXNrJyxcclxuICAgICAgICAgICAgdGFzazoge1xyXG4gICAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdUYXNrVHlwZScsXHJcbiAgICAgICAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgICAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB0ID0gZGF0YS5kYXRhLmNyZWF0ZVRhc2sudGFzaztcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0FkZGVkOicsIHQpO1xyXG4gICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHVwZGF0ZV90YXNrKHRhc2spIHtcclxuICAgICAgYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IFRhc2tVcGRhdGUsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpZDogdGFzay5pZCxcclxuICAgICAgICAgIElzRG9uZTogIXRhc2suaXNEb25lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTtBQUNBO0FBRUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUFIQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFUQTtBQUZBO0FBZEE7QUFDQTtBQVRBO0FBUUE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMENBO0FBMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQTVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFyQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"264c044c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"264c044c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=fae5bece& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"home\" },\n    [\n      _c(\"div\", [\n        _c(\"span\", [_vm._v(\"Name:\")]),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.countryName,\n              expression: \"countryName\"\n            }\n          ],\n          attrs: { type: \"text\" },\n          domProps: { value: _vm.countryName },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.countryName = $event.target.value\n            }\n          }\n        }),\n        _c(\"span\", [_vm._v(\"Description:\")]),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.countryRegion,\n              expression: \"countryRegion\"\n            }\n          ],\n          attrs: { type: \"text\" },\n          domProps: { value: _vm.countryRegion },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.countryRegion = $event.target.value\n            }\n          }\n        }),\n        _c(\"button\", { on: { click: _vm.create_task } }, [_vm._v(\"Add\")])\n      ]),\n      _vm._l(_vm.country, function(i) {\n        return _c(\"div\", { key: i.countryId }, [\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"input\", {\n                attrs: { type: \"checkbox\" },\n                on: {\n                  input: function($event) {\n                    return _vm.update_task(i)\n                  }\n                }\n              }),\n              _c(\"strong\", [_vm._v(_vm._s(i.countryName))])\n            ])\n          ])\n        ])\n      }),\n      _c(\n        \"v-card\",\n        [\n          _c(\n            \"v-card-title\",\n            [\n              _vm._v(\"\\n    Data\\n    \"),\n              _c(\"v-spacer\"),\n              _c(\"v-text-field\", {\n                attrs: {\n                  \"append-icon\": \"search\",\n                  label: \"Search\",\n                  \"single-line\": \"\",\n                  \"hide-details\": \"\"\n                }\n              })\n            ],\n            1\n          ),\n          _c(\"v-data-table\", {\n            attrs: { headers: _vm.headers, items: _vm.countries },\n            scopedSlots: _vm._u([\n              {\n                key: \"items\",\n                fn: function(count) {\n                  return [\n                    _c(\"td\", [_vm._v(_vm._s(count.item))]),\n                    _c(\"td\", [_vm._v(_vm._s(count))])\n                  ]\n                }\n              },\n              {\n                key: \"no-data\",\n                fn: function() {\n                  return [\n                    _c(\n                      \"v-alert\",\n                      {\n                        attrs: {\n                          value: true,\n                          color: \"warning\",\n                          icon: \"warning\"\n                        }\n                      },\n                      [\n                        _vm._v(\n                          \"\\n        Sorry, no data, nothing to display here\\n      \"\n                        )\n                      ]\n                    )\n                  ]\n                },\n                proxy: true\n              }\n            ])\n          })\n        ],\n        1\n      )\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMjY0YzA0NGMtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy92aWV3cy9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYWU1YmVjZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSG9tZS52dWU/MTNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmFtZTpcIildKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvdW50cnlOYW1lLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvdW50cnlOYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb3VudHJ5TmFtZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5jb3VudHJ5TmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkRlc2NyaXB0aW9uOlwiKV0pLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY291bnRyeVJlZ2lvbixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb3VudHJ5UmVnaW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb3VudHJ5UmVnaW9uIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLmNvdW50cnlSZWdpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLmNyZWF0ZV90YXNrIH0gfSwgW192bS5fdihcIkFkZFwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0uY291bnRyeSwgZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGkuY291bnRyeUlkIH0sIFtcbiAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZV90YXNrKGkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihfdm0uX3MoaS5jb3VudHJ5TmFtZSkpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICBEYXRhXFxuICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaGVhZGVyczogX3ZtLmhlYWRlcnMsIGl0ZW1zOiBfdm0uY291bnRyaWVzIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihjb3VudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhjb3VudC5pdGVtKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhjb3VudCkpXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibm8tZGF0YVwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBTb3JyeSwgbm8gZGF0YSwgbm90aGluZyB0byBkaXNwbGF5IGhlcmVcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"264c044c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&\n");

/***/ })

})