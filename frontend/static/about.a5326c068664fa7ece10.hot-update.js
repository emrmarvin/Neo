webpackHotUpdate("about",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/About.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/About.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      dialog: false,\n      headers: [{\n        text: 'Dessert (100g serving)',\n        align: 'left',\n        sortable: false,\n        value: 'name'\n      }, {\n        text: 'Calories',\n        value: 'calories'\n      }, {\n        text: 'Fat (g)',\n        value: 'fat'\n      }, {\n        text: 'Carbs (g)',\n        value: 'carbs'\n      }, {\n        text: 'Protein (g)',\n        value: 'protein'\n      }, {\n        text: 'Actions',\n        value: 'name',\n        sortable: false\n      }],\n      desserts: [],\n      editedIndex: -1,\n      editedItem: {\n        name: '',\n        calories: 0,\n        fat: 0,\n        carbs: 0,\n        protein: 0\n      },\n      defaultItem: {\n        name: '',\n        calories: 0,\n        fat: 0,\n        carbs: 0,\n        protein: 0\n      }\n    };\n  },\n  computed: {\n    formTitle: function formTitle() {\n      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';\n    }\n  },\n  watch: {\n    dialog: function dialog(val) {\n      val || this.close();\n    }\n  },\n  created: function created() {\n    this.initialize();\n  },\n  methods: {\n    initialize: function initialize() {\n      this.desserts = [{\n        name: 'Frozen Yogurt',\n        calories: 159,\n        fat: 6.0,\n        carbs: 24,\n        protein: 4.0\n      }, {\n        name: 'Ice cream sandwich',\n        calories: 237,\n        fat: 9.0,\n        carbs: 37,\n        protein: 4.3\n      }, {\n        name: 'Eclair',\n        calories: 262,\n        fat: 16.0,\n        carbs: 23,\n        protein: 6.0\n      }, {\n        name: 'Cupcake',\n        calories: 305,\n        fat: 3.7,\n        carbs: 67,\n        protein: 4.3\n      }, {\n        name: 'Gingerbread',\n        calories: 356,\n        fat: 16.0,\n        carbs: 49,\n        protein: 3.9\n      }, {\n        name: 'Jelly bean',\n        calories: 375,\n        fat: 0.0,\n        carbs: 94,\n        protein: 0.0\n      }, {\n        name: 'Lollipop',\n        calories: 392,\n        fat: 0.2,\n        carbs: 98,\n        protein: 0\n      }, {\n        name: 'Honeycomb',\n        calories: 408,\n        fat: 3.2,\n        carbs: 87,\n        protein: 6.5\n      }, {\n        name: 'Donut',\n        calories: 452,\n        fat: 25.0,\n        carbs: 51,\n        protein: 4.9\n      }, {\n        name: 'KitKat',\n        calories: 518,\n        fat: 26.0,\n        carbs: 65,\n        protein: 7\n      }];\n    },\n    editItem: function editItem(item) {\n      this.editedIndex = this.desserts.indexOf(item);\n      this.editedItem = Object.assign({}, item);\n      this.dialog = true;\n    },\n    deleteItem: function deleteItem(item) {\n      var index = this.desserts.indexOf(item);\n      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1);\n    },\n    close: function close() {\n      var _this = this;\n\n      this.dialog = false;\n      setTimeout(function () {\n        _this.editedItem = Object.assign({}, _this.defaultItem);\n        _this.editedIndex = -1;\n      }, 300);\n    },\n    save: function save() {\n      if (this.editedIndex > -1) {\n        Object.assign(this.desserts[this.editedIndex], this.editedItem);\n      } else {\n        this.desserts.push(this.editedItem);\n      }\n\n      this.close();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQWJvdXQudnVlP2MzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8di10b29sYmFyIGZsYXQgY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICA8di10b29sYmFyLXRpdGxlPk15IENSVUQ8L3YtdG9vbGJhci10aXRsZT5cclxuICAgICAgPHYtZGl2aWRlclxyXG4gICAgICAgIGNsYXNzPVwibXgtMlwiXHJcbiAgICAgICAgaW5zZXRcclxuICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICA+PC92LWRpdmlkZXI+XHJcbiAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uIH1cIj5cclxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIGNsYXNzPVwibWItMlwiIHYtb249XCJvblwiPk5ldyBJdGVtPC92LWJ0bj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGQ+PHYtdGV4dC1maWVsZCB2LW1vZGVsPVwiZWRpdGVkSXRlbS5uYW1lXCIgbGFiZWw9XCJEZXNzZXJ0IG5hbWVcIj48L3YtdGV4dC1maWVsZD48L3RkPlxyXG4gICAgICAgIDx0ZD48di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmNhbG9yaWVzXCIgbGFiZWw9XCJEZXNzZXJ0IG5hbWVcIj48L3YtdGV4dC1maWVsZD48L3RkPlxyXG4gICAgICAgIDx0ZD48di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmZhdFwiIGxhYmVsPVwiRGVzc2VydCBuYW1lXCI+PC92LXRleHQtZmllbGQ+PC90ZD5cclxuICAgICAgICA8dGQ+PHYtdGV4dC1maWVsZCB2LW1vZGVsPVwiZWRpdGVkSXRlbS5jYXJic1wiIGxhYmVsPVwiRGVzc2VydCBuYW1lXCI+PC92LXRleHQtZmllbGQ+PC90ZD5cclxuICAgICAgICA8dGQ+PHYtdGV4dC1maWVsZCB2LW1vZGVsPVwiZWRpdGVkSXRlbS5wcm90ZWluXCIgbGFiZWw9XCJEZXNzZXJ0IG5hbWVcIj48L3YtdGV4dC1maWVsZD48L3RkPlxyXG4gICAgICAgIDx0ZD48di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLm5hbWVcIiBsYWJlbD1cIkRlc3NlcnQgbmFtZVwiPjwvdi10ZXh0LWZpZWxkPjwvdGQ+XHJcblxyXG4gICAgICA8L3YtZGlhbG9nPlxyXG4gICAgPC92LXRvb2xiYXI+XHJcbiAgICA8di1kYXRhLXRhYmxlXHJcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgIDppdGVtcz1cImRlc3NlcnRzXCJcclxuICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICA+XHJcblxyXG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW1zPVwicHJvcHNcIj5cclxuICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5uYW1lIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5jYWxvcmllcyB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uZmF0IH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5jYXJicyB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0ucHJvdGVpbiB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwianVzdGlmeS1jZW50ZXIgbGF5b3V0IHB4LTBcIj5cclxuICAgICAgICAgIDx2LWljb25cclxuICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBlZGl0XHJcbiAgICAgICAgICA8L3YtaWNvbj5cclxuICAgICAgICAgIDx2LWljb25cclxuICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgPC92LWljb24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1kYXRhPlxyXG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJpbml0aWFsaXplXCI+UmVzZXQ8L3YtYnRuPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC92LWRhdGEtdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnRGVzc2VydCAoMTAwZyBzZXJ2aW5nKScsXHJcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsdWU6ICduYW1lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnQ2Fsb3JpZXMnLCB2YWx1ZTogJ2NhbG9yaWVzJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0ZhdCAoZyknLCB2YWx1ZTogJ2ZhdCcgfSxcclxuICAgICAgICB7IHRleHQ6ICdDYXJicyAoZyknLCB2YWx1ZTogJ2NhcmJzJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1Byb3RlaW4gKGcpJywgdmFsdWU6ICdwcm90ZWluJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0FjdGlvbnMnLCB2YWx1ZTogJ25hbWUnLCBzb3J0YWJsZTogZmFsc2UgfVxyXG4gICAgICBdLFxyXG4gICAgICBkZXNzZXJ0czogW10sXHJcbiAgICAgIGVkaXRlZEluZGV4OiAtMSxcclxuICAgICAgZWRpdGVkSXRlbToge1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGNhbG9yaWVzOiAwLFxyXG4gICAgICAgIGZhdDogMCxcclxuICAgICAgICBjYXJiczogMCxcclxuICAgICAgICBwcm90ZWluOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRJdGVtOiB7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgY2Fsb3JpZXM6IDAsXHJcbiAgICAgICAgZmF0OiAwLFxyXG4gICAgICAgIGNhcmJzOiAwLFxyXG4gICAgICAgIHByb3RlaW46IDBcclxuICAgICAgfVxyXG4gICAgfSksXHJcblxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgZm9ybVRpdGxlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAnTmV3IEl0ZW0nIDogJ0VkaXQgSXRlbSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBkaWFsb2cgKHZhbCkge1xyXG4gICAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVkICgpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplKClcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgICB0aGlzLmRlc3NlcnRzID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRnJvemVuIFlvZ3VydCcsXHJcbiAgICAgICAgICAgIGNhbG9yaWVzOiAxNTksXHJcbiAgICAgICAgICAgIGZhdDogNi4wLFxyXG4gICAgICAgICAgICBjYXJiczogMjQsXHJcbiAgICAgICAgICAgIHByb3RlaW46IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsXHJcbiAgICAgICAgICAgIGNhbG9yaWVzOiAyMzcsXHJcbiAgICAgICAgICAgIGZhdDogOS4wLFxyXG4gICAgICAgICAgICBjYXJiczogMzcsXHJcbiAgICAgICAgICAgIHByb3RlaW46IDQuM1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VjbGFpcicsXHJcbiAgICAgICAgICAgIGNhbG9yaWVzOiAyNjIsXHJcbiAgICAgICAgICAgIGZhdDogMTYuMCxcclxuICAgICAgICAgICAgY2FyYnM6IDIzLFxyXG4gICAgICAgICAgICBwcm90ZWluOiA2LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDdXBjYWtlJyxcclxuICAgICAgICAgICAgY2Fsb3JpZXM6IDMwNSxcclxuICAgICAgICAgICAgZmF0OiAzLjcsXHJcbiAgICAgICAgICAgIGNhcmJzOiA2NyxcclxuICAgICAgICAgICAgcHJvdGVpbjogNC4zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR2luZ2VyYnJlYWQnLFxyXG4gICAgICAgICAgICBjYWxvcmllczogMzU2LFxyXG4gICAgICAgICAgICBmYXQ6IDE2LjAsXHJcbiAgICAgICAgICAgIGNhcmJzOiA0OSxcclxuICAgICAgICAgICAgcHJvdGVpbjogMy45XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnSmVsbHkgYmVhbicsXHJcbiAgICAgICAgICAgIGNhbG9yaWVzOiAzNzUsXHJcbiAgICAgICAgICAgIGZhdDogMC4wLFxyXG4gICAgICAgICAgICBjYXJiczogOTQsXHJcbiAgICAgICAgICAgIHByb3RlaW46IDAuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0xvbGxpcG9wJyxcclxuICAgICAgICAgICAgY2Fsb3JpZXM6IDM5MixcclxuICAgICAgICAgICAgZmF0OiAwLjIsXHJcbiAgICAgICAgICAgIGNhcmJzOiA5OCxcclxuICAgICAgICAgICAgcHJvdGVpbjogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXHJcbiAgICAgICAgICAgIGNhbG9yaWVzOiA0MDgsXHJcbiAgICAgICAgICAgIGZhdDogMy4yLFxyXG4gICAgICAgICAgICBjYXJiczogODcsXHJcbiAgICAgICAgICAgIHByb3RlaW46IDYuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0RvbnV0JyxcclxuICAgICAgICAgICAgY2Fsb3JpZXM6IDQ1MixcclxuICAgICAgICAgICAgZmF0OiAyNS4wLFxyXG4gICAgICAgICAgICBjYXJiczogNTEsXHJcbiAgICAgICAgICAgIHByb3RlaW46IDQuOVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0tpdEthdCcsXHJcbiAgICAgICAgICAgIGNhbG9yaWVzOiA1MTgsXHJcbiAgICAgICAgICAgIGZhdDogMjYuMCxcclxuICAgICAgICAgICAgY2FyYnM6IDY1LFxyXG4gICAgICAgICAgICBwcm90ZWluOiA3XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5kZXNzZXJ0cy5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVzc2VydHMuaW5kZXhPZihpdGVtKVxyXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpICYmIHRoaXMuZGVzc2VydHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pXHJcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzYXZlICgpIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGVzc2VydHNbdGhpcy5lZGl0ZWRJbmRleF0sIHRoaXMuZWRpdGVkSXRlbSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZXNzZXJ0cy5wdXNoKHRoaXMuZWRpdGVkSXRlbSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXhCQTtBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF0R0E7QUFsREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/About.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"aaa03766-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/About.vue?vue&type=template&id=039c5b43&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aaa03766-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/About.vue?vue&type=template&id=039c5b43& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"v-toolbar\",\n        { attrs: { flat: \"\", color: \"white\" } },\n        [\n          _c(\"v-toolbar-title\", [_vm._v(\"My CRUD\")]),\n          _c(\"v-divider\", {\n            staticClass: \"mx-2\",\n            attrs: { inset: \"\", vertical: \"\" }\n          }),\n          _c(\"v-spacer\"),\n          _c(\n            \"v-dialog\",\n            {\n              attrs: { \"max-width\": \"500px\" },\n              scopedSlots: _vm._u([\n                {\n                  key: \"activator\",\n                  fn: function(ref) {\n                    var on = ref.on\n                    return [\n                      _c(\n                        \"v-btn\",\n                        _vm._g(\n                          {\n                            staticClass: \"mb-2\",\n                            attrs: { color: \"primary\", dark: \"\" }\n                          },\n                          on\n                        ),\n                        [_vm._v(\"New Item\")]\n                      )\n                    ]\n                  }\n                }\n              ]),\n              model: {\n                value: _vm.dialog,\n                callback: function($$v) {\n                  _vm.dialog = $$v\n                },\n                expression: \"dialog\"\n              }\n            },\n            [\n              _c(\n                \"td\",\n                [\n                  _c(\"v-text-field\", {\n                    attrs: { label: \"Dessert name\" },\n                    model: {\n                      value: _vm.editedItem.name,\n                      callback: function($$v) {\n                        _vm.$set(_vm.editedItem, \"name\", $$v)\n                      },\n                      expression: \"editedItem.name\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"td\",\n                [\n                  _c(\"v-text-field\", {\n                    attrs: { label: \"Dessert name\" },\n                    model: {\n                      value: _vm.editedItem.calories,\n                      callback: function($$v) {\n                        _vm.$set(_vm.editedItem, \"calories\", $$v)\n                      },\n                      expression: \"editedItem.calories\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"td\",\n                [\n                  _c(\"v-text-field\", {\n                    attrs: { label: \"Dessert name\" },\n                    model: {\n                      value: _vm.editedItem.fat,\n                      callback: function($$v) {\n                        _vm.$set(_vm.editedItem, \"fat\", $$v)\n                      },\n                      expression: \"editedItem.fat\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"td\",\n                [\n                  _c(\"v-text-field\", {\n                    attrs: { label: \"Dessert name\" },\n                    model: {\n                      value: _vm.editedItem.carbs,\n                      callback: function($$v) {\n                        _vm.$set(_vm.editedItem, \"carbs\", $$v)\n                      },\n                      expression: \"editedItem.carbs\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"td\",\n                [\n                  _c(\"v-text-field\", {\n                    attrs: { label: \"Dessert name\" },\n                    model: {\n                      value: _vm.editedItem.protein,\n                      callback: function($$v) {\n                        _vm.$set(_vm.editedItem, \"protein\", $$v)\n                      },\n                      expression: \"editedItem.protein\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"td\",\n                [\n                  _c(\"v-text-field\", {\n                    attrs: { label: \"Dessert name\" },\n                    model: {\n                      value: _vm.editedItem.name,\n                      callback: function($$v) {\n                        _vm.$set(_vm.editedItem, \"name\", $$v)\n                      },\n                      expression: \"editedItem.name\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]\n          )\n        ],\n        1\n      ),\n      _c(\"v-data-table\", {\n        staticClass: \"elevation-1\",\n        attrs: { headers: _vm.headers, items: _vm.desserts },\n        scopedSlots: _vm._u([\n          {\n            key: \"items\",\n            fn: function(props) {\n              return [\n                _c(\"td\", [_vm._v(_vm._s(props.item.name))]),\n                _c(\"td\", { staticClass: \"text-xs-right\" }, [\n                  _vm._v(_vm._s(props.item.calories))\n                ]),\n                _c(\"td\", { staticClass: \"text-xs-right\" }, [\n                  _vm._v(_vm._s(props.item.fat))\n                ]),\n                _c(\"td\", { staticClass: \"text-xs-right\" }, [\n                  _vm._v(_vm._s(props.item.carbs))\n                ]),\n                _c(\"td\", { staticClass: \"text-xs-right\" }, [\n                  _vm._v(_vm._s(props.item.protein))\n                ]),\n                _c(\n                  \"td\",\n                  { staticClass: \"justify-center layout px-0\" },\n                  [\n                    _c(\n                      \"v-icon\",\n                      {\n                        staticClass: \"mr-2\",\n                        attrs: { small: \"\" },\n                        on: {\n                          click: function($event) {\n                            return _vm.editItem(props.item)\n                          }\n                        }\n                      },\n                      [_vm._v(\"\\n          edit\\n        \")]\n                    ),\n                    _c(\n                      \"v-icon\",\n                      {\n                        attrs: { small: \"\" },\n                        on: {\n                          click: function($event) {\n                            return _vm.deleteItem(props.item)\n                          }\n                        }\n                      },\n                      [_vm._v(\"\\n          delete\\n        \")]\n                    )\n                  ],\n                  1\n                )\n              ]\n            }\n          },\n          {\n            key: \"no-data\",\n            fn: function() {\n              return [\n                _c(\n                  \"v-btn\",\n                  {\n                    attrs: { color: \"primary\" },\n                    on: { click: _vm.initialize }\n                  },\n                  [_vm._v(\"Reset\")]\n                )\n              ]\n            },\n            proxy: true\n          }\n        ])\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYWFhMDM3NjYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy92aWV3cy9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM5YzViNDMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0Fib3V0LnZ1ZT83MjQ5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJNeSBDUlVEXCIpXSksXG4gICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaW5zZXQ6IFwiXCIsIHZlcnRpY2FsOiBcIlwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXcgSXRlbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uY2Fsb3JpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwiY2Fsb3JpZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLmNhbG9yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uZmF0LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lZGl0ZWRJdGVtLCBcImZhdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uZmF0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uY2FyYnMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwiY2FyYnNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLmNhcmJzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0ucHJvdGVpbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJwcm90ZWluXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5wcm90ZWluXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgYXR0cnM6IHsgaGVhZGVyczogX3ZtLmhlYWRlcnMsIGl0ZW1zOiBfdm0uZGVzc2VydHMgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uY2Fsb3JpZXMpKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmZhdCkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uY2FyYnMpKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnByb3RlaW4pKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqdXN0aWZ5LWNlbnRlciBsYXlvdXQgcHgtMFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgZWRpdFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgZGVsZXRlXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwibm8tZGF0YVwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5pbml0aWFsaXplIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzZXRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"aaa03766-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/About.vue?vue&type=template&id=039c5b43&\n");

/***/ })

})