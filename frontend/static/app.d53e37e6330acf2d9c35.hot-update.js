webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _templateObject3() {\n  var data = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  updateTask(id: $id, IsDone: $IsDone) {\\n    task {\\n      id\\n      isDone\\n      name\\n      description\\n    }\\n    ok\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation createTask($name:String, $description: String) {\\n      createTask(name: $name, description: $description) {\\n        task {\\n          id\\n          isDone\\n          name\\n          description\\n        }\\n        ok\\n    }\\n }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  query {\\n    tasks {\\n      id\\n      isDone\\n      name\\n      description\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// @ is an alias to /src\n\nvar TaskQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nvar TaskCreate = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());\nvar TaskUpdate = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      name: '',\n      description: '',\n      tasks: ''\n    };\n  },\n  apollo: {\n    tasks: TaskQuery\n  },\n  methods: {\n    create_task: function () {\n      var _create_task = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var name, description, data, t;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                name = this.name;\n                description = this.description; // call the graphql mutation\n\n                _context.next = 4;\n                return this.$apollo.mutate({\n                  // query\n                  mutation: TaskCreate,\n                  //parameters\n                  variables: {\n                    name: name,\n                    description: description\n                  },\n                  update: function update(store, _ref) {\n                    var createTask = _ref.data.createTask;\n                    //add to all tasks list\n                    var data = store.readQuery({\n                      query: TaskQuery\n                    });\n                    data.tasks.push(createTask.task);\n                    store.writeQuery({\n                      query: TaskQuery,\n                      data: data\n                    });\n                  }\n                });\n\n              case 4:\n                data = _context.sent;\n                t = data.data.createTask.task;\n                console.log('Added:', t);\n                this.name = '';\n                this.description = '';\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function create_task() {\n        return _create_task.apply(this, arguments);\n      }\n\n      return create_task;\n    }(),\n    update_task: function () {\n      var _update_task = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(i) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.$apollo;\n\n              case 2:\n                mutate({\n                  mutation: TaskUpdate,\n                  variables: {\n                    id: i.id,\n                    IsDone: !i.isDone\n                  }\n                });\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function update_task(_x) {\n        return _update_task.apply(this, arguments);\n      }\n\n      return update_task;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ib21lLnZ1ZT83NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImhvbWVcIj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIj5cbiAgICAgIDxzcGFuPkRlc2NyaXB0aW9uOjwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiY3JlYXRlX3Rhc2tcIj5BZGQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZm9yPVwiaSBpbiAgIHRhc2tzXCIgOmtleT1cImkuaWRcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAaW5wdXQ9XCJ1cGRhdGVfdGFzayhpKVwiIDpjaGVja2VkPVwiaS5pc0RvbmVcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IGkubmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICAgIDxzdHJvbmc+e3sgaS5kZXNjcmlwdGlvbiB9fTwvc3Ryb25nPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gQCBpcyBhbiBhbGlhcyB0byAvc3JjXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgVGFza1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIGlzRG9uZVxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRhc2tDcmVhdGUgPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVRhc2soJG5hbWU6U3RyaW5nLCAkZGVzY3JpcHRpb246IFN0cmluZykge1xuICAgICAgY3JlYXRlVGFzayhuYW1lOiAkbmFtZSwgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbikge1xuICAgICAgICB0YXNrIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGlzRG9uZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICAgIG9rXG4gICAgfVxuIH1cbmA7XG5cbmNvbnN0IFRhc2tVcGRhdGUgPSBncWxgXG4gIHVwZGF0ZVRhc2soaWQ6ICRpZCwgSXNEb25lOiAkSXNEb25lKSB7XG4gICAgdGFzayB7XG4gICAgICBpZFxuICAgICAgaXNEb25lXG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgICBva1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTonJyxcbiAgICAgIGRlc2NyaXB0aW9uOicnLFxuICAgICAgdGFza3M6ICcnLFxuICAgIH1cbiAgfSxcbiAgYXBvbGxvOiB7XG4gICAgdGFza3M6IFRhc2tRdWVyeSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGNyZWF0ZV90YXNrKCkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZVxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uXG5cbiAgICAgIC8vIGNhbGwgdGhlIGdyYXBocWwgbXV0YXRpb25cbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XG4gICAgICAgIC8vIHF1ZXJ5XG4gICAgICAgIG11dGF0aW9uOiBUYXNrQ3JlYXRlLFxuICAgICAgICAvL3BhcmFtZXRlcnNcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyBjcmVhdGVUYXNrIH0gfSkgPT4ge1xuICAgICAgICAgIC8vYWRkIHRvIGFsbCB0YXNrcyBsaXN0XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBUYXNrUXVlcnkgfSlcbiAgICAgICAgICBkYXRhLnRhc2tzLnB1c2goY3JlYXRlVGFzay50YXNrKVxuICAgICAgICAgIHN0b3JlLndyaXRlUXVlcnkoeyBxdWVyeTogVGFza1F1ZXJ5LCBkYXRhfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICB2YXIgdCA9IGRhdGEuZGF0YS5jcmVhdGVUYXNrLnRhc2tcbiAgICAgIGNvbnNvbGUubG9nKCdBZGRlZDonLCB0KVxuICAgICAgdGhpcy5uYW1lID0gJydcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnJ1xuICAgIH0sXG4gICAgYXN5bmMgdXBkYXRlX3Rhc2soaSkge1xuICAgICAgYXdhaXQgdGhpcy4kYXBvbGxvLG11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uOiBUYXNrVXBkYXRlLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogaS5pZCxcbiAgICAgICAgICBJc0RvbmU6ICFpLmlzRG9uZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUVBO0FBV0E7QUFjQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWJBO0FBQ0E7QUFQQTtBQU1BO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMEJBO0FBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQTVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\n");

/***/ })

})