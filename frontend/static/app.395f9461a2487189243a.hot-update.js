webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _templateObject2() {\n  var data = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation createTask($name:String, $description: String) {\\n      createTask(name: $name, description: $description) {\\n        task {\\n          id\\n          isDone\\n          name\\n          description\\n        }\\n        ok\\n    }\\n }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  query {\\n    tasks {\\n      id\\n      isDone\\n      name\\n      description\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// @ is an alias to /src\n\nvar TaskQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nvar TaskCreate = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2()); // const TaskUpdate = gql`\n//   updateTask(id: $id, IsDone: $IsDone) {\n//     task {\n//       id\n//       isDone\n//       name\n//       description\n//     }\n//     ok\n//   }\n// `;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      name: '',\n      description: '',\n      tasks: ''\n    };\n  },\n  apollo: {\n    tasks: TaskQuery\n  },\n  methods: {\n    create_task: function () {\n      var _create_task = Object(D_OneDrive_Emerson_Playground_python_DjangoVueGql_myproject_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _name$description, name, description, data, t;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _name$description = {\n                  name: this.name,\n                  description: this.description // call the graphql mutation\n\n                }, name = _name$description.name, description = _name$description.description;\n                _context.next = 3;\n                return this.$apollo.mutate({\n                  // query\n                  mutation: TaskCreate,\n                  //parameters\n                  variables: {\n                    name: name,\n                    description: description\n                  },\n                  update: function update(store, _ref) {\n                    var createTask = _ref.data.createTask;\n                    //add to all tasks list\n                    var data = store.readQuery({\n                      query: TaskQuery\n                    });\n                    data.tasks.push(createTask.task);\n                    store.writeQuery({\n                      query: TaskQuery,\n                      data: data\n                    });\n                  }\n                });\n\n              case 3:\n                data = _context.sent;\n                t = data.data.createTask.task;\n                console.log('Added:', t);\n                this.name = '';\n                this.description = '';\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function create_task() {\n        return _create_task.apply(this, arguments);\n      }\n\n      return create_task;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ib21lLnZ1ZT83NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImhvbWVcIj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIj5cbiAgICAgIDxzcGFuPkRlc2NyaXB0aW9uOjwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiY3JlYXRlX3Rhc2tcIj5BZGQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZm9yPVwiaSBpbiAgIHRhc2tzXCIgOmtleT1cImkuaWRcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAaW5wdXQ9XCJ1cGRhdGVfdGFzayhpKVwiIDpjaGVja2VkPVwiaS5pc0RvbmVcIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IGkubmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICAgIDxzdHJvbmc+e3sgaS5kZXNjcmlwdGlvbiB9fTwvc3Ryb25nPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gQCBpcyBhbiBhbGlhcyB0byAvc3JjXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuY29uc3QgVGFza1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIGlzRG9uZVxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRhc2tDcmVhdGUgPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVRhc2soJG5hbWU6U3RyaW5nLCAkZGVzY3JpcHRpb246IFN0cmluZykge1xuICAgICAgY3JlYXRlVGFzayhuYW1lOiAkbmFtZSwgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbikge1xuICAgICAgICB0YXNrIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGlzRG9uZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICAgIG9rXG4gICAgfVxuIH1cbmA7XG5cbi8vIGNvbnN0IFRhc2tVcGRhdGUgPSBncWxgXG4vLyAgIHVwZGF0ZVRhc2soaWQ6ICRpZCwgSXNEb25lOiAkSXNEb25lKSB7XG4vLyAgICAgdGFzayB7XG4vLyAgICAgICBpZFxuLy8gICAgICAgaXNEb25lXG4vLyAgICAgICBuYW1lXG4vLyAgICAgICBkZXNjcmlwdGlvblxuLy8gICAgIH1cbi8vICAgICBva1xuLy8gICB9XG4vLyBgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTonJyxcbiAgICAgIGRlc2NyaXB0aW9uOicnLFxuICAgICAgdGFza3M6ICcnLFxuICAgIH1cbiAgfSxcbiAgYXBvbGxvOiB7XG4gICAgdGFza3M6IFRhc2tRdWVyeSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGNyZWF0ZV90YXNrKCkge1xuICAgICAgY29uc3Qge25hbWUsIGRlc2NyaXB0aW9ufSA9IHtcbiAgICAgICAgbmFtZTp0aGlzLm5hbWUsIFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgICB9XG5cbiAgICAgIC8vIGNhbGwgdGhlIGdyYXBocWwgbXV0YXRpb25cbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XG4gICAgICAgIC8vIHF1ZXJ5XG4gICAgICAgIG11dGF0aW9uOiBUYXNrQ3JlYXRlLFxuICAgICAgICAvL3BhcmFtZXRlcnNcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogKHN0b3JlLCB7IGRhdGE6IHsgY3JlYXRlVGFzayB9IH0pID0+IHtcbiAgICAgICAgICAvL2FkZCB0byBhbGwgdGFza3MgbGlzdFxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBzdG9yZS5yZWFkUXVlcnkoeyBxdWVyeTogVGFza1F1ZXJ5IH0pXG4gICAgICAgICAgZGF0YS50YXNrcy5wdXNoKGNyZWF0ZVRhc2sudGFzaylcbiAgICAgICAgICBzdG9yZS53cml0ZVF1ZXJ5KHsgcXVlcnk6IFRhc2tRdWVyeSwgZGF0YX0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgdmFyIHQgPSBkYXRhLmRhdGEuY3JlYXRlVGFzay50YXNrXG4gICAgICBjb25zb2xlLmxvZygnQWRkZWQ6JywgdClcbiAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xuICAgIH0sXG4gICAgLy8gYXN5bmMgdXBkYXRlX3Rhc2soaSkge1xuICAgIC8vICAgYXdhaXQgdGhpcy4kYXBvbGxvLG11dGF0ZSh7XG4gICAgLy8gICAgIG11dGF0aW9uOiBUYXNrVXBkYXRlLFxuICAgIC8vICAgICB2YXJpYWJsZXM6IHtcbiAgICAvLyAgICAgICBpZDogaS5pZCxcbiAgICAvLyAgICAgICBJc0RvbmU6ICFpLmlzRG9uZVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBRUE7QUFXQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFiQTtBQUNBO0FBVEE7QUFRQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\n");

/***/ })

})