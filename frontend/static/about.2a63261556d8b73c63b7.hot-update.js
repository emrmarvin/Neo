webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Certificate_Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Certificate_Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_leonard_viva_Desktop_Project_Neo_Davao_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_leonard_viva_Desktop_Project_Neo_Davao_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"./node_modules/node-libs-browser/mock/empty.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! async */ \"./node_modules/async/lib/async.js\");\n/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(async__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assert */ \"./node_modules/assert/assert.js\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n\n\n\n\nfunction _templateObject() {\n  var data = Object(C_Users_leonard_viva_Desktop_Project_Neo_Davao_frontend_node_modules_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\nmutation createCertificates(\\n   $certsInfoTitle: String, \\n   $certsInfoType: String, \\n   $certsInfoCategory: String, \\n   $certsInfoExpireDate: DateTime, \\n   $certsInfoLink: String, \\n   $certsInfoScore: Int, \\n   $certsInfoLanguage: String,\\n   $certsInfoDocuNo: String,\\n   $certsInfoPublishDate: DateTime,\\n   $certsInfoStatus: Boolean, \\n   $certsInfoSeries: String\\n){\\n   createCertificates(\\n      certsInfoTitle:$certsInfoTitle,\\n      certsInfoType:$certsInfoType,\\n      certsInfoCategory:$certsInfoCategory,\\n      certsInfoExpireDate:$certsInfoExpireDate,\\n      certsInfoLink:$certsInfoLink,\\n      certsInfoScore:$certsInfoScore,\\n      certsInfoLanguage:$certsInfoLanguage,\\n      certsInfoDocuNo:$certsInfoDocuNo,\\n      certsInfoPublishDate:$certsInfoPublishDate,\\n      certsInfoStatus:$certsInfoStatus,\\n      certsInfoSeries:$certsInfoSeries\\n   ){\\n      certificates{\\n         certsInfoId\\n         certsInfoTitle\\n         certsInfoType\\n         certsInfoCategory\\n         certsInfoExpireDate\\n         certsInfoLink\\n         certsInfoScore\\n         certsInfoLanguage\\n         certsInfoDocuNo\\n         certsInfoPublishDate\\n         certsInfoStatus\\n         certsInfoSeries\\n      }\\n   }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvar CreateCertificates = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      valid: true,\n\n      /** Title **/\n      titleRules: [function (v) {\n        return !!v || 'Certificate Title is required';\n      }, function (v) {\n        return v && v.length >= 5 || 'Certificate Title must be more than 5 characters';\n      }],\n\n      /** Link **/\n      linkRules: [function (v) {\n        return !!v || 'Certificate Link / URL is required';\n      }, function (v) {\n        return v && v.length >= 10 || 'Certificate Link / URL must be more than 10 characters';\n      }],\n\n      /** Datepicker Expiration **/\n      date1: new Date().toISOString().substr(0, 10),\n      expire: false,\n      modal1: false,\n      menu1: false,\n\n      /** Datepicker Publish **/\n      date2: new Date().toISOString().substr(0, 10),\n      publish: false,\n      modal2: false,\n      menu2: false,\n\n      /** Status **/\n      Title: \"\",\n      Type: \"\",\n      Category: \"\",\n      Link: \"\",\n      Series: \"\",\n      Score: 0,\n      Language: \"\",\n      DocumentNum: \"\",\n      Status: true,\n      direction: 'top',\n      fab1: false,\n      fab2: false,\n      fling: false,\n      hover: false,\n      tabs: null,\n      top: false,\n      right: true,\n      bottom: true,\n      left: false,\n      transition: 'slide-y-reverse-transition',\n      autoUpdate: true,\n      friends: ['Sandra Adams', 'Britta Holt'],\n      isUpdating: false,\n      name: 'Midnight Crew',\n      dialog3: false\n    };\n  },\n  computed: {\n    activeFab: function activeFab() {\n      switch (this.tabs) {\n        case 'one':\n          return {\n            class: 'purple',\n            icon: 'account_circle'\n          };\n\n        case 'two':\n          return {\n            class: 'red',\n            icon: 'edit'\n          };\n\n        case 'three':\n          return {\n            class: 'green',\n            icon: 'keyboard_arrow_up'\n          };\n\n        default:\n          return {};\n      }\n    }\n  },\n  watch: {\n    top: function top(val) {\n      this.bottom = !val;\n    },\n    right: function right(val) {\n      this.left = !val;\n    },\n    bottom: function bottom(val) {\n      this.top = !val;\n    },\n    left: function left(val) {\n      this.right = !val;\n    }\n  },\n  methods: {\n    validate: function validate() {\n      if (this.$refs.form.validate()) {\n        this.snackbar = true;\n      }\n    },\n    reset: function reset() {\n      this.$refs.form.reset();\n    },\n    save: function () {\n      var _save = Object(C_Users_leonard_viva_Desktop_Project_Neo_Davao_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _this = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setTimeout(function () {\n                  _this.create_certificate();\n                }, 3000);\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function save() {\n        return _save.apply(this, arguments);\n      }\n\n      return save;\n    }(),\n    create_certificate: function () {\n      var _create_certificate = Object(C_Users_leonard_viva_Desktop_Project_Neo_Davao_frontend_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var _certsInfoTitle$certs, certsInfoTitle, certsInfoType, certsInfoCategory, certsInfoExpireDate, certsInfoLink, certsInfoScore, certsInfoLanguage, certsInfoDocuNo, certsInfoPublishDate, certsInfoStatus, certsInfoSeries, data;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _certsInfoTitle$certs = {\n                  certsInfoTitle: this.Title,\n                  certsInfoType: this.Type,\n                  certsInfoCategory: this.Category,\n                  certsInfoExpireDate: datetime.datetime.date1(),\n                  certsInfoLink: this.Link,\n                  certsInfoScore: parseInt(this.Score),\n                  certsInfoLanguage: this.Language,\n                  certsInfoDocuNo: this.DocumentNum,\n                  certsInfoPublishDate: datetime.datetime.date2(),\n                  certsInfoStatus: this.Status,\n                  certsInfoSeries: this.Series\n                }, certsInfoTitle = _certsInfoTitle$certs.certsInfoTitle, certsInfoType = _certsInfoTitle$certs.certsInfoType, certsInfoCategory = _certsInfoTitle$certs.certsInfoCategory, certsInfoExpireDate = _certsInfoTitle$certs.certsInfoExpireDate, certsInfoLink = _certsInfoTitle$certs.certsInfoLink, certsInfoScore = _certsInfoTitle$certs.certsInfoScore, certsInfoLanguage = _certsInfoTitle$certs.certsInfoLanguage, certsInfoDocuNo = _certsInfoTitle$certs.certsInfoDocuNo, certsInfoPublishDate = _certsInfoTitle$certs.certsInfoPublishDate, certsInfoStatus = _certsInfoTitle$certs.certsInfoStatus, certsInfoSeries = _certsInfoTitle$certs.certsInfoSeries; // call the graphql mutation\n\n                _context2.next = 3;\n                return this.$apollo.mutate({\n                  // Query here\n                  mutation: CreateCertificates,\n                  // Parameters here\n                  variables: {\n                    certsInfoTitle: certsInfoTitle,\n                    certsInfoType: certsInfoType,\n                    certsInfoCategory: certsInfoCategory,\n                    certsInfoExpireDate: certsInfoExpireDate,\n                    certsInfoLink: certsInfoLink,\n                    certsInfoScore: certsInfoScore,\n                    certsInfoLanguage: certsInfoLanguage,\n                    certsInfoDocuNo: certsInfoDocuNo,\n                    certsInfoPublishDate: certsInfoPublishDate,\n                    certsInfoStatus: certsInfoStatus,\n                    certsInfoSeries: certsInfoSeries\n                  }\n                });\n\n              case 3:\n                data = _context2.sent;\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function create_certificate() {\n        return _create_certificate.apply(this, arguments);\n      }\n\n      return create_certificate;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0NlcnRpZmljYXRlX0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DZXJ0aWZpY2F0ZV9Gb3JtLnZ1ZT8xY2U1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2VydGlmaWNhdGVfZm9ybVwiPlxyXG48dGVtcGxhdGU+XHJcblxyXG4gPHYtZGlhbG9nXHJcbiAgICAgICAgdi1tb2RlbD1cImRpYWxvZzNcIlxyXG4gICAgICAgIG1heC13aWR0aD1cIjEyMDBcIlxyXG4gICAgICA+IFxyXG4gICA8di1jYXJkXHJcbiAgICAgIG1heC13aWR0aD1cIjEyMDBcIlxyXG4gICAgICBjbGFzcz1cIm14LWF1dG9cIlxyXG4gICA+XHJcblxyXG4gICAgICA8di1jYXJkXHJcbiAgICAgICAgIGNsYXNzPVwibXgtYXV0b1wiXHJcbiAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlXCJcclxuICAgICAgPlxyXG4gICAgICAgICA8IS0tIFRPT0xCQVIgLS0+XHJcbiAgICAgICAgIDx2LXRvb2xiYXJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5IGFjY2VudC03XCJcclxuICAgICAgICAgICAgY2FyZHNcclxuICAgICAgICAgICAgZGFya1xyXG4gICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPCEtLSBDZXJ0aWZpY2F0ZSBJbmZvcm1hdGlvbiAtLT5cclxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cInRpdGxlIGZvbnQtd2VpZ2h0LXJlZ3VsYXJcIj5DZXJ0aWZpY2F0ZSBJbmZvcm1hdGlvbjwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICA8L3YtdG9vbGJhcj5cclxuXHJcbiAgICAgICAgIDwhLS0gRk9STSAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDx2LWZvcm1cclxuICAgICAgICAgICAgcmVmPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWxpZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicGEtMyBwdC00XCJcclxuICAgICAgICAgICAgbGF6eS12YWxpZGF0aW9uXHJcblxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIDwhLS0gQ09OVEFJTkVSIC0tPlxyXG4gICAgICAgICAgICA8di1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cclxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtMTIgbWQxMj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLSBDZXJ0aWZpY2F0ZSBUaXRsZSB0eHRib3ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNvdW50ZXI9XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJ0aXRsZVJ1bGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJ0aWZpY2F0ZSBUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIENlcnRpY2F0ZSBmb3IgUXVhbGl0eSBNYW5hZ2VtZW50IFN5c3RlbSBOQlIgSVNPIDkwMDE6MjAxNSBTb3JvY2FiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtMTIgbWQxMj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLSBDZXJ0aWZpY2F0ZSBMaW5rIGRhdGUgY21ib3ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIkxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cImxpbmtSdWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VydGlmaWNhdGUgTGluayAvIFVSTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIGh0dHA6Ly9tdG5kb2MubXQubmEuZW1lcnNvbnByb2Nlc3MuY29tL2dyb3Vwcy9kYXRhL2RvY3VtZW50cy9xdWFsaXR5X2NlcnRpZmljYXRpb25zL0VtZXJzb25pc28xNDQ0NDEucGRmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kNj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLSBDZXJ0aWZpY2F0ZSBUeXBlIHR4dGJveCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb3VudGVyPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJ0aWZpY2F0ZSBUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeC4gSVNPLCBQRUQsIE5hdGlvbmFsIEJvYXJkLCBSZWdpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNiBtZDY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ2VydGlmaWNhdGUgQ2F0ZWdvcnkgdHh0Ym94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb3VudGVyPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJ0aWZpY2F0ZSBDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIElTTyAxNDAwMSwgUEVEIEgsIEFEMjAwMCwgU0NDUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNiBtZDY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ2VydGlmaWNhdGUgUHJvZHVjdCBTZXJpZXMgdHh0Ym94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VydGlmaWNhdGUgUHJvZHVjdCBTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBHIFNlcmllcywgQ0JBIGFuZCBDQkIgU2VyaWVzLCBFTSBTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tIENlcnRpZmljYXRlIEV4cGlyZSBkYXRlIGRhdGVwaWNrZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx2LWRpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJleHBpcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9kYWwxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwiZGF0ZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbC13aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI5MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24gfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VydGlmaWNhdGUgRXhwaXJhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyIHYtbW9kZWw9XCJkYXRlMVwiIHNjcm9sbGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtb2RhbDEgPSBmYWxzZVwiPkNhbmNlbDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIiRyZWZzLmV4cGlyZS5zYXZlKGRhdGUxKVwiPk9LPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3YtZGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tIENlcnRpZmljYXRlIFNjb3JlIHR4dGJveCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiU2NvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNlcnRpZmljYXRlIFNjb3JlIChQZXJjZW50YWdlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNiBtZDY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ2VydGlmaWNhdGUgTGFuZ3VhZ2UgZGF0ZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2VydGlmaWNhdGUgTGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBFbmdsaXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kNj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLSBDZXJ0aWZpY2F0ZSBEb2N1bWVudCBOby4gdHh0Ym94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJEb2N1bWVudE51bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb3VudGVyPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJ0aWZpY2F0ZSBEb2N1bWVudCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBEMTQzOTAwQUQxMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tIENlcnRpZmljYXRlIFB1Ymxpc2ggZGF0ZSBkYXRlcGlja2VyIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8di1kaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwicHVibGlzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RhbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsLXdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjkwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDZXJ0aWZpY2F0ZSBQdWJsaXNoIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJldmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGF0ZS1waWNrZXIgdi1tb2RlbD1cImRhdGUyXCIgc2Nyb2xsYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIm1vZGFsMiA9IGZhbHNlXCI+Q2FuY2VsPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiJHJlZnMucHVibGlzaC5zYXZlKGRhdGUyKVwiPk9LPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L3YtZGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQzPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tIENlcnRpZmljYXRlIFN0YXR1cyBjaGtib3ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx2LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIidDZXJ0aWZpY2FydGUgU3RhdHVzOiBBY3RpdmUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZS12YWx1ZT1cIkFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLXZhbHVlPVwiRGVhY3RpdmF0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kMz5cclxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kMj5cclxuICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS0gVmFsaWRhdGUgYnRuIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8di1idG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIXZhbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIFNVQk1JVFxyXG4gICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQyIHRleHQtY3MtY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tIFJlc2V0IGJ0biAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJlc2V0IEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kMj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLSBTYXZlIGJ0biAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcblxyXG4gICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxyXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgPC92LWZvcm0+XHJcblxyXG4gICAgICA8L3YtY2FyZD5cclxuXHJcbiAgIDwvdi1jYXJkPlxyXG5cclxuIDwvdi1kaWFsb2c+XHJcbjx2LWJ0biBAY2xpY2s9XCJkaWFsb2czID0gdHJ1ZVwiPkNhbGw8L3YtYnRuPlxyXG48L3RlbXBsYXRlPlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgIGltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcblxyXG4gICBpbXBvcnQge1xyXG4gICAgICBjb25zdGFudHMsXHJcbiAgICAgIHRydW5jYXRlLFxyXG4gICAgICB0cnVuY2F0ZVN5bmMsXHJcbiAgICAgIHVud2F0Y2hGaWxlXHJcbiAgIH0gZnJvbSBcImZzXCI7XHJcblxyXG4gICBpbXBvcnQge1xyXG4gICAgICBhbnksIGNvbXBvc2UsIHJldHJ5XHJcbiAgIH0gZnJvbSAnYXN5bmMnO1xyXG5cclxuICAgaW1wb3J0IHtcclxuICAgICAgZmFpbFxyXG4gICB9IGZyb20gJ2Fzc2VydCc7XHJcblxyXG4gICBpbXBvcnQge1xyXG4gICAgICBjb25uZWN0XHJcbiAgIH0gZnJvbSAndGxzJztcclxuXHJcbiAgIGltcG9ydCB7XHJcbiAgICAgIGxvZ1xyXG4gICB9IGZyb20gJ3V0aWwnO1xyXG4gICBpbXBvcnQge2J1c30gZnJvbSAnLi4vbWFpbic7ICAgIFxyXG5cclxuICAgY29uc3QgQ3JlYXRlQ2VydGlmaWNhdGVzID0gZ3FsIGBcclxuICAgbXV0YXRpb24gY3JlYXRlQ2VydGlmaWNhdGVzKFxyXG4gICAgICAkY2VydHNJbmZvVGl0bGU6IFN0cmluZywgXHJcbiAgICAgICRjZXJ0c0luZm9UeXBlOiBTdHJpbmcsIFxyXG4gICAgICAkY2VydHNJbmZvQ2F0ZWdvcnk6IFN0cmluZywgXHJcbiAgICAgICRjZXJ0c0luZm9FeHBpcmVEYXRlOiBEYXRlVGltZSwgXHJcbiAgICAgICRjZXJ0c0luZm9MaW5rOiBTdHJpbmcsIFxyXG4gICAgICAkY2VydHNJbmZvU2NvcmU6IEludCwgXHJcbiAgICAgICRjZXJ0c0luZm9MYW5ndWFnZTogU3RyaW5nLFxyXG4gICAgICAkY2VydHNJbmZvRG9jdU5vOiBTdHJpbmcsXHJcbiAgICAgICRjZXJ0c0luZm9QdWJsaXNoRGF0ZTogRGF0ZVRpbWUsXHJcbiAgICAgICRjZXJ0c0luZm9TdGF0dXM6IEJvb2xlYW4sIFxyXG4gICAgICAkY2VydHNJbmZvU2VyaWVzOiBTdHJpbmdcclxuICAgKXtcclxuICAgICAgY3JlYXRlQ2VydGlmaWNhdGVzKFxyXG4gICAgICAgICBjZXJ0c0luZm9UaXRsZTokY2VydHNJbmZvVGl0bGUsXHJcbiAgICAgICAgIGNlcnRzSW5mb1R5cGU6JGNlcnRzSW5mb1R5cGUsXHJcbiAgICAgICAgIGNlcnRzSW5mb0NhdGVnb3J5OiRjZXJ0c0luZm9DYXRlZ29yeSxcclxuICAgICAgICAgY2VydHNJbmZvRXhwaXJlRGF0ZTokY2VydHNJbmZvRXhwaXJlRGF0ZSxcclxuICAgICAgICAgY2VydHNJbmZvTGluazokY2VydHNJbmZvTGluayxcclxuICAgICAgICAgY2VydHNJbmZvU2NvcmU6JGNlcnRzSW5mb1Njb3JlLFxyXG4gICAgICAgICBjZXJ0c0luZm9MYW5ndWFnZTokY2VydHNJbmZvTGFuZ3VhZ2UsXHJcbiAgICAgICAgIGNlcnRzSW5mb0RvY3VObzokY2VydHNJbmZvRG9jdU5vLFxyXG4gICAgICAgICBjZXJ0c0luZm9QdWJsaXNoRGF0ZTokY2VydHNJbmZvUHVibGlzaERhdGUsXHJcbiAgICAgICAgIGNlcnRzSW5mb1N0YXR1czokY2VydHNJbmZvU3RhdHVzLFxyXG4gICAgICAgICBjZXJ0c0luZm9TZXJpZXM6JGNlcnRzSW5mb1Nlcmllc1xyXG4gICAgICApe1xyXG4gICAgICAgICBjZXJ0aWZpY2F0ZXN7XHJcbiAgICAgICAgICAgIGNlcnRzSW5mb0lkXHJcbiAgICAgICAgICAgIGNlcnRzSW5mb1RpdGxlXHJcbiAgICAgICAgICAgIGNlcnRzSW5mb1R5cGVcclxuICAgICAgICAgICAgY2VydHNJbmZvQ2F0ZWdvcnlcclxuICAgICAgICAgICAgY2VydHNJbmZvRXhwaXJlRGF0ZVxyXG4gICAgICAgICAgICBjZXJ0c0luZm9MaW5rXHJcbiAgICAgICAgICAgIGNlcnRzSW5mb1Njb3JlXHJcbiAgICAgICAgICAgIGNlcnRzSW5mb0xhbmd1YWdlXHJcbiAgICAgICAgICAgIGNlcnRzSW5mb0RvY3VOb1xyXG4gICAgICAgICAgICBjZXJ0c0luZm9QdWJsaXNoRGF0ZVxyXG4gICAgICAgICAgICBjZXJ0c0luZm9TdGF0dXNcclxuICAgICAgICAgICAgY2VydHNJbmZvU2VyaWVzXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGBcclxuICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICAgICB2YWxpZDp0cnVlLFxyXG4gICAgICAgICAvKiogVGl0bGUgKiovXHJcbiAgICAgICAgIHRpdGxlUnVsZXM6IFtcclxuICAgICAgICAgICAgdiA9PiAhIXYgfHwgJ0NlcnRpZmljYXRlIFRpdGxlIGlzIHJlcXVpcmVkJyxcclxuICAgICAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+PSA1KSB8fCAnQ2VydGlmaWNhdGUgVGl0bGUgbXVzdCBiZSBtb3JlIHRoYW4gNSBjaGFyYWN0ZXJzJ1xyXG4gICAgICAgICBdLFxyXG4gICAgICAgICAvKiogTGluayAqKi9cclxuICAgICAgICAgbGlua1J1bGVzOiBbXHJcbiAgICAgICAgICAgIHYgPT4gISF2IHx8ICdDZXJ0aWZpY2F0ZSBMaW5rIC8gVVJMIGlzIHJlcXVpcmVkJyxcclxuICAgICAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+PSAxMCkgfHwgJ0NlcnRpZmljYXRlIExpbmsgLyBVUkwgbXVzdCBiZSBtb3JlIHRoYW4gMTAgY2hhcmFjdGVycydcclxuICAgICAgICAgXSxcclxuICAgICAgICAgLyoqIERhdGVwaWNrZXIgRXhwaXJhdGlvbiAqKi9cclxuICAgICAgICAgZGF0ZTE6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApLFxyXG4gICAgICAgICBleHBpcmU6IGZhbHNlLFxyXG4gICAgICAgICBtb2RhbDE6IGZhbHNlLFxyXG4gICAgICAgICBtZW51MTogZmFsc2UsXHJcbiAgICAgICAgIC8qKiBEYXRlcGlja2VyIFB1Ymxpc2ggKiovXHJcbiAgICAgICAgIGRhdGUyOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSxcclxuICAgICAgICAgcHVibGlzaDogZmFsc2UsXHJcbiAgICAgICAgIG1vZGFsMjogZmFsc2UsXHJcbiAgICAgICAgIG1lbnUyOiBmYWxzZSxcclxuICAgICAgICAgLyoqIFN0YXR1cyAqKi9cclxuXHJcbiAgICAgICAgIFRpdGxlOiBcIlwiLFxyXG4gICAgICAgICBUeXBlOiBcIlwiLFxyXG4gICAgICAgICBDYXRlZ29yeTogXCJcIixcclxuICAgICAgICAgTGluazogXCJcIixcclxuICAgICAgICAgU2VyaWVzOiBcIlwiLFxyXG4gICAgICAgICBTY29yZTogMCxcclxuICAgICAgICAgTGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgIERvY3VtZW50TnVtOiBcIlwiLFxyXG4gICAgICAgICBTdGF0dXM6IHRydWUsXHJcbiAgICAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgIGZhYjE6IGZhbHNlLFxyXG4gICAgICAgICBmYWIyOiBmYWxzZSxcclxuICAgICAgICAgZmxpbmc6IGZhbHNlLFxyXG4gICAgICAgICBob3ZlcjogZmFsc2UsXHJcbiAgICAgICAgIHRhYnM6IG51bGwsXHJcbiAgICAgICAgIHRvcDogZmFsc2UsXHJcbiAgICAgICAgIHJpZ2h0OiB0cnVlLFxyXG4gICAgICAgICBib3R0b206IHRydWUsXHJcbiAgICAgICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICB0cmFuc2l0aW9uOiAnc2xpZGUteS1yZXZlcnNlLXRyYW5zaXRpb24nLFxyXG4gICAgICAgICBhdXRvVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICBmcmllbmRzOiBbJ1NhbmRyYSBBZGFtcycsICdCcml0dGEgSG9sdCddLFxyXG4gICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgbmFtZTogJ01pZG5pZ2h0IENyZXcnLFxyXG4gICAgICAgICBkaWFsb2czOmZhbHNlLFxyXG4gICAgICB9KSwgXHJcbiAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGFjdGl2ZUZhYiAoKSB7XHJcbiAgICAgICAgIHN3aXRjaCAodGhpcy50YWJzKSB7XHJcbiAgICAgICAgIGNhc2UgJ29uZSc6IHJldHVybiB7IGNsYXNzOiAncHVycGxlJywgaWNvbjogJ2FjY291bnRfY2lyY2xlJyB9XHJcbiAgICAgICAgIGNhc2UgJ3R3byc6IHJldHVybiB7IGNsYXNzOiAncmVkJywgaWNvbjogJ2VkaXQnIH1cclxuICAgICAgICAgY2FzZSAndGhyZWUnOiByZXR1cm4geyBjbGFzczogJ2dyZWVuJywgaWNvbjogJ2tleWJvYXJkX2Fycm93X3VwJyB9XHJcbiAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB7fVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgIH0sXHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgIHRvcCAodmFsKSB7XHJcbiAgICAgICAgIHRoaXMuYm90dG9tID0gIXZhbFxyXG4gICAgICB9LFxyXG4gICAgICByaWdodCAodmFsKSB7XHJcbiAgICAgICAgIHRoaXMubGVmdCA9ICF2YWxcclxuICAgICAgfSxcclxuICAgICAgYm90dG9tICh2YWwpIHtcclxuICAgICAgICAgdGhpcy50b3AgPSAhdmFsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxlZnQgKHZhbCkge1xyXG4gICAgICAgICB0aGlzLnJpZ2h0ID0gIXZhbFxyXG4gICAgICB9LFxyXG4gICB9LFxyXG4gIFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgIHZhbGlkYXRlICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXIgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIHJlc2V0ICgpIHtcclxuICAgICAgICAgdGhpcy4kcmVmcy5mb3JtLnJlc2V0KClcclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIGFzeW5jIHNhdmUgKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVfY2VydGlmaWNhdGUoKVxyXG4gICAgICAgICAgICAgICB9LDMwMDApXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICBhc3luYyBjcmVhdGVfY2VydGlmaWNhdGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvVGl0bGUsXHJcbiAgICAgICAgICAgICAgIGNlcnRzSW5mb1R5cGUsXHJcbiAgICAgICAgICAgICAgIGNlcnRzSW5mb0NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9FeHBpcmVEYXRlLFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9MaW5rLFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9TY29yZSxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvTGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgIGNlcnRzSW5mb0RvY3VObyxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvUHVibGlzaERhdGUsXHJcbiAgICAgICAgICAgICAgIGNlcnRzSW5mb1N0YXR1cyxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvU2VyaWVzXHJcbiAgICAgICAgICAgIH0gPSB7XHJcbiAgICAgICAgICAgICAgIGNlcnRzSW5mb1RpdGxlIDogdGhpcy5UaXRsZSxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvVHlwZSA6IHRoaXMuVHlwZSxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvQ2F0ZWdvcnkgOiB0aGlzLkNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9FeHBpcmVEYXRlIDogZGF0ZXRpbWUuZGF0ZXRpbWUuZGF0ZTEoKSxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvTGluayA6IHRoaXMuTGluayxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvU2NvcmUgOiBwYXJzZUludCh0aGlzLlNjb3JlKSxcclxuICAgICAgICAgICAgICAgY2VydHNJbmZvTGFuZ3VhZ2UgOiB0aGlzLkxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9Eb2N1Tm8gOiB0aGlzLkRvY3VtZW50TnVtLFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9QdWJsaXNoRGF0ZSA6IGRhdGV0aW1lLmRhdGV0aW1lLmRhdGUyKCksXHJcbiAgICAgICAgICAgICAgIGNlcnRzSW5mb1N0YXR1cyA6IHRoaXMuU3RhdHVzLFxyXG4gICAgICAgICAgICAgICBjZXJ0c0luZm9TZXJpZXMgOiB0aGlzLlNlcmllc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gY2FsbCB0aGUgZ3JhcGhxbCBtdXRhdGlvblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuJGFwb2xsby5tdXRhdGUoe1xyXG4gICAgICAgICAgICAgICAvLyBRdWVyeSBoZXJlXHJcbiAgICAgICAgICAgICAgIG11dGF0aW9uOiBDcmVhdGVDZXJ0aWZpY2F0ZXMsXHJcbiAgICAgICAgICAgICAgIC8vIFBhcmFtZXRlcnMgaGVyZVxyXG4gICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgY2VydHNJbmZvVGl0bGU6IGNlcnRzSW5mb1RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBjZXJ0c0luZm9UeXBlOiBjZXJ0c0luZm9UeXBlLFxyXG4gICAgICAgICAgICAgICAgICBjZXJ0c0luZm9DYXRlZ29yeTogY2VydHNJbmZvQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgIGNlcnRzSW5mb0V4cGlyZURhdGU6IGNlcnRzSW5mb0V4cGlyZURhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNlcnRzSW5mb0xpbms6IGNlcnRzSW5mb0xpbmssXHJcbiAgICAgICAgICAgICAgICAgIGNlcnRzSW5mb1Njb3JlOiBjZXJ0c0luZm9TY29yZSxcclxuICAgICAgICAgICAgICAgICAgY2VydHNJbmZvTGFuZ3VhZ2U6IGNlcnRzSW5mb0xhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgICBjZXJ0c0luZm9Eb2N1Tm86IGNlcnRzSW5mb0RvY3VObyxcclxuICAgICAgICAgICAgICAgICAgY2VydHNJbmZvUHVibGlzaERhdGU6IGNlcnRzSW5mb1B1Ymxpc2hEYXRlLFxyXG4gICAgICAgICAgICAgICAgICBjZXJ0c0luZm9TdGF0dXM6IGNlcnRzSW5mb1N0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgY2VydHNJbmZvU2VyaWVzOiBjZXJ0c0luZm9TZXJpZXNcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9LFxyXG4gICB9XHJcblxyXG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1RQTtBQUVBO0FBT0E7QUFJQTtBQUlBO0FBSUE7QUFHQTtBQUVBO0FBNENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhEQTtBQUFBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFpQkE7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUEvQkE7QUFBQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUpBO0FBQ0E7QUE5Q0E7QUE2Q0E7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE1RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Certificate_Form.vue?vue&type=script&lang=js&\n");

/***/ })

})