webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _templateObject3() {\n  var data = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation updateTask($id: String, $IsDone: Boolean) {\\n    updateTask(id: $id, IsDone: $IsDone) {\\n      task {\\n        id\\n        isDone\\n        name\\n        description\\n      }\\n      ok\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation createTask($name:String, $description: String) {\\n      createTask(name: $name, description: $description) {\\n        task {\\n          id\\n          isDone\\n          name\\n          description\\n        }\\n        ok\\n    }\\n }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  query {\\n    country{\\n      countryId\\n      countryName\\n      countryRegion\\n      countryCode\\n      countryLanguage\\n      countryStatus\\n\\t\\t  countryCreation\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// @ is an alias to /src\n\nvar CountryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nvar TaskCreate = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());\nvar TaskUpdate = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      name: ' ',\n      description: ' ',\n      tasks: [' '],\n      headers: [{\n        text: 'Task Name',\n        align: 'left',\n        sortable: false,\n        value: 'name'\n      }, {\n        text: 'Description',\n        value: 'description'\n      }, {\n        text: 'Is Done',\n        value: 'isDone'\n      }]\n    };\n  },\n  apollo: {\n    tasks: CountryQuery\n  },\n  methods: {\n    create_task: function () {\n      var _create_task = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _name$description, name, description, data, t;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _name$description = {\n                  name: this.name,\n                  description: this.description\n                }, name = _name$description.name, description = _name$description.description; // call the graphql mutation\n\n                _context.next = 3;\n                return this.$apollo.mutate({\n                  // query\n                  mutation: TaskCreate,\n                  // parameters\n                  variables: {\n                    name: name,\n                    description: description\n                  },\n                  update: function update(store, _ref) {\n                    var createTask = _ref.data.createTask;\n                    // add to all tasks list\n                    var data = store.readQuery({\n                      query: CountryQuery\n                    });\n                    data.tasks.push(createTask.task);\n                    store.writeQuery({\n                      query: CountryQuery,\n                      data: data\n                    });\n                  },\n                  optimisticResponse: {\n                    __typename: 'Mutation',\n                    createTask: {\n                      __typename: 'CreateTask',\n                      task: {\n                        __typename: 'TaskType',\n                        id: -1,\n                        isDone: false,\n                        name: name,\n                        description: description\n                      },\n                      ok: false\n                    }\n                  }\n                });\n\n              case 3:\n                data = _context.sent;\n                t = data.data.createTask.task; // console.log('Added:', t);\n\n                this.name = '';\n                this.description = '';\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function create_task() {\n        return _create_task.apply(this, arguments);\n      }\n\n      return create_task;\n    }(),\n    update_task: function () {\n      var _update_task = Object(C_Users_leonard_viva_Desktop_Project_Neo_2_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(task) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.$apollo.mutate({\n                  mutation: TaskUpdate,\n                  variables: {\n                    id: task.id,\n                    IsDone: !task.isDone\n                  }\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function update_task(_x) {\n        return _update_task.apply(this, arguments);\n      }\n\n      return update_task;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ib21lLnZ1ZT83NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+TmFtZTo8L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIj5cclxuICAgICAgPHNwYW4+RGVzY3JpcHRpb246PC9zcGFuPjxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cImNyZWF0ZV90YXNrXCI+QWRkPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1mb3I9XCJpIGluIHRhc2tzXCIgOmtleT1cImkuaWRcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAaW5wdXQ9XCJ1cGRhdGVfdGFzayhpKVwiIDpjaGVja2VkPVwiaS5pc0RvbmVcIj5cclxuICAgICAgICAgIDxzdHJvbmc+e3sgaS5uYW1lIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICA8c3Ryb25nPnt7IGkuZGVzY3JpcHRpb24gfX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPHYtY2FyZD5cclxuICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgIERhdGFcclxuICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICBhcHBlbmQtaWNvbj1cInNlYXJjaFwiXHJcbiAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgIHNpbmdsZS1saW5lXHJcbiAgICAgICAgaGlkZS1kZXRhaWxzXHJcbiAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgIDwvdi1jYXJkLXRpdGxlPlxyXG5cclxuICAgIDx2LWRhdGEtdGFibGUgXHJcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgIDppdGVtcz1cImNvdW50cnlcIlxyXG4gICAgICA6c2VhcmNoPVwic2VhcmNoXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtcz1cInRhc2tcIj5cclxuICAgICAgICAgIDx0ZD57eyB0YXNrLmNvdW50cnlOYW1lIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyB0YXNrLmNvdW50cnlDb2RlIH19PC90ZD4gICAgICAgXHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tZGF0YT5cclxuICAgICAgICA8di1hbGVydCA6dmFsdWU9XCJ0cnVlXCIgY29sb3I9XCJ3YXJuaW5nXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgIFNvcnJ5LCBubyBkYXRhLCBub3RoaW5nIHRvIGRpc3BsYXkgaGVyZVxyXG4gICAgICAgIDwvdi1hbGVydD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gIDwvdi1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gQCBpcyBhbiBhbGlhcyB0byAvc3JjXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuY29uc3QgQ291bnRyeVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGNvdW50cnl7XHJcbiAgICAgIGNvdW50cnlJZFxyXG4gICAgICBjb3VudHJ5TmFtZVxyXG4gICAgICBjb3VudHJ5UmVnaW9uXHJcbiAgICAgIGNvdW50cnlDb2RlXHJcbiAgICAgIGNvdW50cnlMYW5ndWFnZVxyXG4gICAgICBjb3VudHJ5U3RhdHVzXHJcblx0XHQgIGNvdW50cnlDcmVhdGlvblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRhc2tDcmVhdGUgPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlVGFzaygkbmFtZTpTdHJpbmcsICRkZXNjcmlwdGlvbjogU3RyaW5nKSB7XHJcbiAgICAgIGNyZWF0ZVRhc2sobmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0YXNrIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RvbmVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9rXHJcbiAgICB9XHJcbiB9XHJcbmA7XHJcblxyXG5jb25zdCBUYXNrVXBkYXRlID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVRhc2soJGlkOiBTdHJpbmcsICRJc0RvbmU6IEJvb2xlYW4pIHtcclxuICAgIHVwZGF0ZVRhc2soaWQ6ICRpZCwgSXNEb25lOiAkSXNEb25lKSB7XHJcbiAgICAgIHRhc2sge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEb25lXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgICAgb2tcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6ICcgJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcgJyxcclxuICAgICAgdGFza3M6IFsnICddLFxyXG4gICAgICBoZWFkZXJzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdUYXNrIE5hbWUnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbmFtZSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdEZXNjcmlwdGlvbicsIHZhbHVlOiAnZGVzY3JpcHRpb24nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdJcyBEb25lJywgdmFsdWU6ICdpc0RvbmUnIH0sXHJcbiAgICAgICAgXSwgXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgYXBvbGxvOiB7XHJcbiAgICB0YXNrczogQ291bnRyeVF1ZXJ5LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgY3JlYXRlX3Rhc2soKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHtcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBjYWxsIHRoZSBncmFwaHFsIG11dGF0aW9uXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgICAgLy8gcXVlcnlcclxuICAgICAgICBtdXRhdGlvbjogVGFza0NyZWF0ZSxcclxuICAgICAgICAvLyBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiAoc3RvcmUsIHsgZGF0YTogeyBjcmVhdGVUYXNrIH0gfSkgPT4ge1xyXG4gICAgICAgICAgLy8gYWRkIHRvIGFsbCB0YXNrcyBsaXN0XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gc3RvcmUucmVhZFF1ZXJ5KHsgcXVlcnk6IENvdW50cnlRdWVyeSB9KTtcclxuICAgICAgICAgIGRhdGEudGFza3MucHVzaChjcmVhdGVUYXNrLnRhc2spO1xyXG4gICAgICAgICAgc3RvcmUud3JpdGVRdWVyeSh7IHF1ZXJ5OiBDb3VudHJ5UXVlcnksIGRhdGEgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcclxuICAgICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXHJcbiAgICAgICAgICBjcmVhdGVUYXNrOiB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdDcmVhdGVUYXNrJyxcclxuICAgICAgICAgICAgdGFzazoge1xyXG4gICAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdUYXNrVHlwZScsXHJcbiAgICAgICAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgICAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB0ID0gZGF0YS5kYXRhLmNyZWF0ZVRhc2sudGFzaztcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0FkZGVkOicsIHQpO1xyXG4gICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHVwZGF0ZV90YXNrKHRhc2spIHtcclxuICAgICAgYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IFRhc2tVcGRhdGUsXHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpZDogdGFzay5pZCxcclxuICAgICAgICAgIElzRG9uZTogIXRhc2suaXNEb25lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7QUFFQTtBQWNBO0FBY0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUFIQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFUQTtBQUZBO0FBZEE7QUFDQTtBQVRBO0FBUUE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMENBO0FBMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQTVDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFyQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"264c044c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"264c044c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=fae5bece& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"home\" },\n    [\n      _c(\"div\", [\n        _c(\"span\", [_vm._v(\"Name:\")]),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.name,\n              expression: \"name\"\n            }\n          ],\n          attrs: { type: \"text\" },\n          domProps: { value: _vm.name },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.name = $event.target.value\n            }\n          }\n        }),\n        _c(\"span\", [_vm._v(\"Description:\")]),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.description,\n              expression: \"description\"\n            }\n          ],\n          attrs: { type: \"text\" },\n          domProps: { value: _vm.description },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.description = $event.target.value\n            }\n          }\n        }),\n        _c(\"button\", { on: { click: _vm.create_task } }, [_vm._v(\"Add\")])\n      ]),\n      _vm._l(_vm.tasks, function(i) {\n        return _c(\"div\", { key: i.id }, [\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"input\", {\n                attrs: { type: \"checkbox\" },\n                domProps: { checked: i.isDone },\n                on: {\n                  input: function($event) {\n                    return _vm.update_task(i)\n                  }\n                }\n              }),\n              _c(\"strong\", [_vm._v(_vm._s(i.name))]),\n              _c(\"strong\", [_vm._v(_vm._s(i.description))])\n            ])\n          ])\n        ])\n      }),\n      _c(\n        \"v-card\",\n        [\n          _c(\n            \"v-card-title\",\n            [\n              _vm._v(\"\\n    Data\\n    \"),\n              _c(\"v-spacer\"),\n              _c(\"v-text-field\", {\n                attrs: {\n                  \"append-icon\": \"search\",\n                  label: \"Search\",\n                  \"single-line\": \"\",\n                  \"hide-details\": \"\"\n                },\n                model: {\n                  value: _vm.search,\n                  callback: function($$v) {\n                    _vm.search = $$v\n                  },\n                  expression: \"search\"\n                }\n              })\n            ],\n            1\n          ),\n          _c(\"v-data-table\", {\n            attrs: {\n              headers: _vm.headers,\n              items: _vm.country,\n              search: _vm.search\n            },\n            scopedSlots: _vm._u([\n              {\n                key: \"items\",\n                fn: function(task) {\n                  return [\n                    _c(\"td\", [_vm._v(_vm._s(task.countryName))]),\n                    _c(\"td\", [_vm._v(_vm._s(task.countryCode))])\n                  ]\n                }\n              },\n              {\n                key: \"no-data\",\n                fn: function() {\n                  return [\n                    _c(\n                      \"v-alert\",\n                      {\n                        attrs: {\n                          value: true,\n                          color: \"warning\",\n                          icon: \"warning\"\n                        }\n                      },\n                      [\n                        _vm._v(\n                          \"\\n        Sorry, no data, nothing to display here\\n      \"\n                        )\n                      ]\n                    )\n                  ]\n                },\n                proxy: true\n              }\n            ])\n          })\n        ],\n        1\n      )\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMjY0YzA0NGMtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy92aWV3cy9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYWU1YmVjZSYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvSG9tZS52dWU/MTNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmFtZTpcIildKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVzY3JpcHRpb246XCIpXSksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLmNyZWF0ZV90YXNrIH0gfSwgW192bS5fdihcIkFkZFwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0udGFza3MsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpLmlkIH0sIFtcbiAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBpLmlzRG9uZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlX3Rhc2soaSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KF92bS5fcyhpLm5hbWUpKV0pLFxuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KF92bS5fcyhpLmRlc2NyaXB0aW9uKSldKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgIERhdGFcXG4gICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgaXRlbXM6IF92bS5jb3VudHJ5LFxuICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2hcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRhc2suY291bnRyeU5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRhc2suY291bnRyeUNvZGUpKV0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgU29ycnksIG5vIGRhdGEsIG5vdGhpbmcgdG8gZGlzcGxheSBoZXJlXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"264c044c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&\n");

/***/ })

})