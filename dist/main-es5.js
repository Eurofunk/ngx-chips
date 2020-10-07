function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./demo/app.module.ts":
  /*!****************************!*\
    !*** ./demo/app.module.ts ***!
    \****************************/

  /*! exports provided: AppModule */

  /***/
  function demoAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modules */
    "./modules/index.ts");
    /* harmony import */


    var _home_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home */
    "./demo/home/home.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    _modules__WEBPACK_IMPORTED_MODULE_3__["TagInputModule"].withDefaults({
      tagInput: {
        placeholder: 'Add new tag'
      }
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_home_home__WEBPACK_IMPORTED_MODULE_4__["Home"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_3__["TagInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_home_home__WEBPACK_IMPORTED_MODULE_4__["Home"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_3__["TagInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_3__["TagInputModule"]],
          declarations: [_home_home__WEBPACK_IMPORTED_MODULE_4__["Home"]],
          bootstrap: [_home_home__WEBPACK_IMPORTED_MODULE_4__["Home"]],
          entryComponents: [_home_home__WEBPACK_IMPORTED_MODULE_4__["Home"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./demo/home/home.ts":
  /*!***************************!*\
    !*** ./demo/home/home.ts ***!
    \***************************/

  /*! exports provided: Home */

  /***/
  function demoHomeHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home", function () {
      return Home;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _modules_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modules/components/tag-input/tag-input */
    "./modules/components/tag-input/tag-input.ts");
    /* harmony import */


    var _modules_components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modules/components/dropdown/tag-input-dropdown.component */
    "./modules/components/dropdown/tag-input-dropdown.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Home_ng_template_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var item_r7 = ctx.item;
        var index_r8 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" (", index_r8, ") ", item_r7.id, ": ", item_r7.value, " ");
      }
    }

    function Home_ng_template_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var item_r9 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.display, " ");
      }
    }

    function Home_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var item_r11 = ctx.item;
        var index_r12 = ctx.index;
        var last_r13 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" (", index_r12, ") ", item_r11.id, ": ", item_r11.value, " # ", last_r13, " ");
      }
    }

    function Home_ng_template_74_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Home_ng_template_74_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var item_r14 = ctx.item;
          var index_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);

          return _r3.removeItem(item_r14, index_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " x ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" item: ", item_r14, " ");
      }
    }

    function Home_ng_template_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var item_r18 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" tag: ", item_r18.name, " ");
      }
    }

    function Home_ng_template_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var item_r19 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" dropdown: ", item_r19.value, " ");
      }
    }

    var _c0 = function _c0() {
      return ["Javascript", "Typescript"];
    };

    var _c1 = function _c1() {
      return ["@item"];
    };

    var _c2 = function _c2() {
      return ["@item$", "item"];
    };

    var _c3 = function _c3() {
      return [];
    };

    var _c4 = function _c4() {
      return [32, 188];
    };

    var _c5 = function _c5() {
      return ["item1"];
    };

    var _c6 = function _c6() {
      return ["1", "2"];
    };

    var Home = /*#__PURE__*/function () {
      function Home(http) {
        var _this = this;

        _classCallCheck(this, Home);

        this.http = http;
        this.disabled = true;
        this.items = ['Javascript', 'Typescript'];
        this.inputText = 'text';
        this.itemsAsObjects = [{
          id: 0,
          name: 'Angular',
          readonly: true
        }, {
          id: 1,
          name: 'React'
        }];
        this.autocompleteItems = ['Javascript', 'Typescript', 'Rust', 'Go'];
        this.autocompleteItemsAsObjects = [{
          value: 'Item1',
          id: 0,
          extra: 0
        }, {
          value: 'item2',
          id: 1,
          extra: 1
        }, 'item3'];
        this.dragAndDropExample = ['C#', 'Java'];
        this.dragAndDropObjects = [{
          display: 'Javascript',
          value: 'Javascript'
        }, {
          display: 'Typescript',
          value: 'Typescript'
        }];
        this.dragAndDropStrings = ['CoffeScript', 'Scala.js'];

        this.requestAutocompleteItems = function (text) {
          var url = "https://api.github.com/search/repositories?q=".concat(text);
          return _this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (item) {
              return item.full_name;
            });
          }));
        };

        this.requestAutocompleteItemsFake = function (text) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(['item1', 'item2', 'item3']);
        };

        this.options = {
          readonly: undefined,
          placeholder: '+ Tag'
        };
        this.asyncErrorMessages = {
          isNan: 'Please only add numbers'
        };
        this.validators = [this.startsWithAt, this.endsWith$];
        this.asyncValidators = [this.validateAsync];
        this.errorMessages = {
          'startsWithAt@': 'Your items need to start with \'@\'',
          'endsWith$': 'Your items need to end with \'$\''
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({
          chips: [['chip'], []]
        });
      }

      _createClass(Home, [{
        key: "onAdd",
        value: function onAdd(item) {
          console.log('tag added: value is ' + item);
        }
      }, {
        key: "onRemove",
        value: function onRemove(item) {
          console.log('tag removed: value is ' + item);
        }
      }, {
        key: "onSelect",
        value: function onSelect(item) {
          console.log('tag selected: value is ' + item);
        }
      }, {
        key: "onFocus",
        value: function onFocus(item) {
          console.log('input focused: current value is ' + item);
        }
      }, {
        key: "onTextChange",
        value: function onTextChange(text) {
          console.log('text changed: value is ' + text);
        }
      }, {
        key: "onBlur",
        value: function onBlur(item) {
          console.log('input blurred: current value is ' + item);
        }
      }, {
        key: "onTagEdited",
        value: function onTagEdited(item) {
          console.log('tag edited: current value is ' + item);
        }
      }, {
        key: "onValidationError",
        value: function onValidationError(item) {
          console.log('invalid tag ' + item);
        }
      }, {
        key: "transform",
        value: function transform(value) {
          var item = {
            display: "@".concat(value),
            value: "@".concat(value)
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(item);
        }
      }, {
        key: "startsWithAt",
        value: function startsWithAt(control) {
          if (control.value.charAt(0) !== '@') {
            return {
              'startsWithAt@': true
            };
          }

          return null;
        }
      }, {
        key: "endsWith$",
        value: function endsWith$(control) {
          if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
              'endsWith$': true
            };
          }

          return null;
        }
      }, {
        key: "validateAsync",
        value: function validateAsync(control) {
          return new Promise(function (resolve) {
            var value = control.value;
            var result = isNaN(value) ? {
              isNan: true
            } : null;
            setTimeout(function () {
              resolve(result);
            }, 400);
          });
        }
      }, {
        key: "onAdding",
        value: function onAdding(tag) {
          var confirm = window.confirm('Do you really want to add this tag?');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
            return confirm;
          }));
        }
      }, {
        key: "onRemoving",
        value: function onRemoving(tag) {
          var confirm = window.confirm('Do you really want to remove this tag?');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
            return confirm;
          }));
        }
      }, {
        key: "asyncOnAdding",
        value: function asyncOnAdding(tag) {
          var confirm = window.confirm('Do you really want to add this tag?');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
            return confirm;
          }));
        }
      }, {
        key: "insertInputTag",
        value: function insertInputTag() {
          if (this.inputText) {
            this.items.push(this.inputText);
            this.inputText = '';
          }
        }
      }]);

      return Home;
    }();

    Home.ɵfac = function Home_Factory(t) {
      return new (t || Home)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    Home.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Home,
      selectors: [["app"]],
      decls: 162,
      vars: 145,
      consts: [[1, "home-container"], [3, "ngModel", "modelAsStrings", "ngModelChange", "onSelect"], [3, "ngModel", "identifyBy", "displayBy", "ngModelChange"], [3, "ngModel", "removable"], [3, "ngModel", "editable", "ngModelChange", "onTagEdited"], [3, "ngModel", "editable", "identifyBy", "displayBy", "ngModelChange"], ["placeholder", "Insert a new item", 3, "ngModel", "maxItems", "ripple"], [3, "ngModel", "errorMessages", "validators"], [3, "autocompleteItems"], [3, "ngModel", "onAdding"], [3, "ngModel", "clearOnBlur"], [3, "focusFirstElement", "autocompleteItems"], [3, "ngModel", "onlyFromAutocomplete"], [3, "showDropdownIfEmpty", "dynamicUpdate", "focusFirstElement", "displayBy", "identifyBy", "autocompleteItems"], [3, "ngModel", "placeholder", "onTextChangeDebounce", "secondaryPlaceholder", "onlyFromAutocomplete"], [3, "autocompleteObservable", "minimumTextLength"], [3, "showDropdownIfEmpty", "autocompleteObservable"], [3, "ngModel", "placeholder", "secondaryPlaceholder", "onlyFromAutocomplete"], [3, "autocompleteObservable"], [3, "ngModel", "inputClass", "inputId", "separatorKeyCodes"], [3, "ngModel", "modelAsStrings", "onTextChange"], ["input", ""], ["item-template", ""], [2, "z-index", "1100", "background", "#fafafa"], [3, "ngModel", "displayBy", "identifyBy", "ngModelChange"], [3, "autocompleteItems", "dynamicUpdate", "zIndex", "displayBy", "identifyBy"], ["name", "items", 3, "ngModel", "onBlur", "onFocus", "onTextChange", "onValidationError"], [3, "formGroup"], ["name", "items", 3, "disable", "formControlName"], ["name", "items", 3, "theme", "ngModel"], ["name", "items", 3, "addOnPaste", "pasteSplitPattern", "theme", "ngModel"], [3, "ngModel", "theme", "modelAsStrings"], [3, "ngModel", "allowDupes", "ngModelChange"], [3, "ngModel", "ngModelChange", "keyup.enter"], [3, "ngModel", "inputText", "ngModelChange", "inputTextChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [3, "ngModel", "disable"], [3, "ngModel", "modelAsStrings", "dragZone", "editable", "ngModelChange"], [3, "ngModel", "dragZone", "editable", "ngModelChange"], [3, "ngModel", "dragZone", "modelAsStrings", "onRemoving", "onAdding"], [3, "ngModel", "errorMessages", "addOnPaste", "asyncValidators"], [3, "ngModel", "onlyFromAutocomplete", "onAdding", "ngModelChange"], [3, "autocompleteItems", "displayBy", "identifyBy"], [1, "ng2-tag__remove-button", 3, "click"]],
      template: function Home_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Simple Input with two items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tag-input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_5_listener($event) {
            return ctx.items = $event;
          })("onSelect", function Home_Template_tag_input_onSelect_5_listener($event) {
            return ctx.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Partially editable input with two items as objects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tag-input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_9_listener($event) {
            return ctx.itemsAsObjects = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Simple Input with not removable items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tag-input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Simple Input with editable items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tag-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_17_listener($event) {
            return ctx.items = $event;
          })("onTagEdited", function Home_Template_tag_input_onTagEdited_17_listener($event) {
            return ctx.onTagEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Simple Input with editable items as objects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tag-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_23_listener($event) {
            return ctx.itemsAsObjects = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Input tag that allows max 3 tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "tag-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "An input which requires all tags to start with '@' and end with '$'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tag-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "tag-input-dropdown", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "An input which will transform the value of all added tags prepending '@' to the tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tag-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tags within an autocomplete component (clear on blur events)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tag-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "tag-input-dropdown", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tags accepting only items from an autocomplete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tag-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tag-input-dropdown", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, Home_ng_template_47_Template, 1, 3, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Tags accepting only items from an autocomplete using a remote endpoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tag-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tag-input-dropdown", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, Home_ng_template_53_Template, 1, 1, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tags accepting only items from an autocomplete using an observable and showing dropdown without entering text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tag-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "tag-input-dropdown", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Tags dropdown with last provided");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tag-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tag-input-dropdown", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, Home_ng_template_64_Template, 1, 4, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "An input which allows adding items by pressing the key \"space\" of your keyboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "tag-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Tags custom template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tag-input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTextChange", function Home_Template_tag_input_onTextChange_72_listener($event) {
            return ctx.onTextChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, Home_ng_template_74_Template, 4, 1, "ng-template", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Input with custom item template and custom dropdown item template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tag-input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_80_listener($event) {
            return ctx.itemsAsObjects = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, Home_ng_template_81_Template, 1, 1, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tag-input-dropdown", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, Home_ng_template_83_Template, 1, 1, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Tags within a form element with outputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tag-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBlur", function Home_Template_tag_input_onBlur_88_listener($event) {
            return ctx.onBlur($event);
          })("onFocus", function Home_Template_tag_input_onFocus_88_listener($event) {
            return ctx.onFocus($event);
          })("onTextChange", function Home_Template_tag_input_onTextChange_88_listener($event) {
            return ctx.onTextChange($event);
          })("onValidationError", function Home_Template_tag_input_onValidationError_88_listener($event) {
            return ctx.onValidationError($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Tags within a form group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "form", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "tag-input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Tags with theme minimal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "tag-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Tags with theme dark and pasteable items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "tag-input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Tags with Bootstrap theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "tag-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Tags with user-defined Foundation theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "tag-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Tags with Bootstrap 3 (info) theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "tag-input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Simple Input that allows dupes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tag-input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_121_listener($event) {
            return ctx.items = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Input with two-way data binding for its input text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_input_ngModelChange_125_listener($event) {
            return ctx.inputText = $event;
          })("keyup.enter", function Home_Template_input_keyup_enter_125_listener() {
            return ctx.insertInputTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tag-input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_126_listener($event) {
            return ctx.items = $event;
          })("inputTextChange", function Home_Template_tag_input_inputTextChange_126_listener($event) {
            return ctx.inputText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Disabled tag input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Disable: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_input_ngModelChange_131_listener($event) {
            return ctx.disabled = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tag-input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "tag-input-dropdown", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Drag and drop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tag-input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_137_listener($event) {
            return ctx.dragAndDropExample = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Drag and drop (as string) can be moved to another tag-input (to the next)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tag-input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_141_listener($event) {
            return ctx.dragAndDropStrings = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Drag and drop (as object) can be moved to another tag-input (to the previous)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tag-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_145_listener($event) {
            return ctx.dragAndDropObjects = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Confirm adding and removing tags with Observables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "tag-input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Form using an async validator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tag-input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "tag-input-dropdown", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](157, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Autocomplete items using onAdding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tag-input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Home_Template_tag_input_ngModelChange_160_listener($event) {
            return ctx.items = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "tag-input-dropdown", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("modelAsStrings", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemsAsObjects)("identifyBy", "id")("displayBy", "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("removable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("editable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 120, ctx.itemsAsObjects), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemsAsObjects)("editable", true)("identifyBy", "id")("displayBy", "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](126, _c0))("maxItems", 3)("ripple", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](127, _c1))("errorMessages", ctx.errorMessages)("validators", ctx.validators);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](128, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](129, _c1))("onAdding", ctx.transform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](130, _c1))("clearOnBlur", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusFirstElement", true)("autocompleteItems", ctx.autocompleteItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](131, _c1))("onlyFromAutocomplete", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showDropdownIfEmpty", true)("dynamicUpdate", false)("focusFirstElement", true)("displayBy", "value")("identifyBy", "id")("autocompleteItems", ctx.autocompleteItemsAsObjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](132, _c3))("placeholder", "Enter a new repo")("onTextChangeDebounce", 500)("secondaryPlaceholder", "Search in Github")("onlyFromAutocomplete", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteObservable", ctx.requestAutocompleteItems)("minimumTextLength", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("onlyFromAutocomplete", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showDropdownIfEmpty", true)("autocompleteObservable", ctx.requestAutocompleteItemsFake);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](133, _c3))("placeholder", "Enter a new repo")("secondaryPlaceholder", "Search in Github")("onlyFromAutocomplete", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteObservable", ctx.requestAutocompleteItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](134, _c1))("inputClass", "myinput")("inputId", "myinputId")("separatorKeyCodes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](135, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](136, _c1))("modelAsStrings", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 122, ctx.itemsAsObjects), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itemsAsObjects)("displayBy", "name")("identifyBy", "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteItems", ctx.autocompleteItemsAsObjects)("dynamicUpdate", false)("zIndex", 10000)("displayBy", "value")("identifyBy", "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](137, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disable", true)("formControlName", "chips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", "minimal")("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](138, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addOnPaste", true)("pasteSplitPattern", "-")("theme", "dark")("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](139, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", "bootstrap")("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](140, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("theme", "foundation-theme")("modelAsStrings", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", "bootstrap3-info")("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](141, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("allowDupes", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("inputText", ctx.inputText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("disable", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteItems", ctx.autocompleteItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dragAndDropExample)("modelAsStrings", true)("dragZone", "zone1")("editable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dragAndDropStrings)("modelAsStrings", true)("dragZone", "zone1")("editable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dragAndDropObjects)("dragZone", "zone1")("editable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](142, _c5))("dragZone", "zone1")("modelAsStrings", true)("onRemoving", ctx.onRemoving)("onAdding", ctx.onAdding);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](143, _c5))("errorMessages", ctx.asyncErrorMessages)("addOnPaste", true)("asyncValidators", ctx.asyncValidators);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](144, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](157, 124, ctx.items), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.items)("onlyFromAutocomplete", true)("onAdding", ctx.asyncOnAdding);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocompleteItems", ctx.autocompleteItemsAsObjects)("displayBy", "value")("identifyBy", "id");
        }
      },
      directives: [_modules_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_5__["TagInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _modules_components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["TagInputDropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
      styles: ["[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid #1779ba;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #fff;\n  border-radius: 2px;\n  background: #1779ba;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus {\n  background: #115b8d;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active {\n  background: #115b8d;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #115b8d;\n  color: #fff;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, [_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%] {\n  cursor: text;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]   delete-icon[_ngcontent-%COMP%] {\n  transition: all 0.35s;\n  text-align: right;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]   delete-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n[_ngcontent-%COMP%]:ng-deep   .ng2-tag-input.foundation-theme[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]   delete-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vaG9tZS9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9kZW1vXFxob21lXFxob21lLnNjc3MiLCJkZW1vL2hvbWUvQzpcXERldmVsb3BtZW50XFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFxjb3JlXFxfbWl4aW5zLnNjc3MiLCJkZW1vL2hvbWUvaG9tZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQ3hCSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFPQSxZQUFBO0VBRUEsZ0NBQUE7QUNOSjtBRFVJO0VBQ0ksVUFBQTtBQ1JSO0FEV0k7RUFDSSxZQUFBO0FDVFI7QURvQkk7RUFDSSxZQUFBO0FDbEJSO0FEcUJJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDbkJSO0FEMEJJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUN4QlI7QUZLQTtFQzhCSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBT0EsV0FBQTtFQUNBLGtCQUFBO0VBVUEsbUJBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMvQ0o7QURpREk7RUFDSSxtQkFBQTtBQy9DUjtBRG9ESTtFQUNJLG1CQUFBO0FDbERSO0FEdURJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDckRSO0FEeURJO0VBQ0ksZUFBQTtBQ3ZEUjtBRDBESTtFQUVJLFVBQUE7QUN6RFI7QUQ0REk7RUFHSSxZQUFBO0FDNURSO0FGeEJBO0VDZ0hJLHFCQUFBO0VBRUEsaUJBQUE7QUNyRko7QUR1Rkk7RUFDSSxVQUFBO0FDckZSO0FEd0ZJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FDdEZSIiwiZmlsZSI6ImRlbW8vaG9tZS9ob21lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vbW9kdWxlcy9jb3JlL3N0eWxlcy9jb3JlL19jb3JlLnNjc3NcIjtcclxuXHJcbiRmb3VuZGF0aW9uLXByaW1hcnk6ICMxNzc5YmE7XHJcbiRmb3VuZGF0aW9uLXByaW1hcnktZGFyazogZGFya2VuKCRmb3VuZGF0aW9uLXByaW1hcnksIDEwJSk7XHJcblxyXG4kZm91bmRhdGlvbi10aGVtZTogKFxyXG4gICAgY29udGFpbmVyLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZm91bmRhdGlvbi1wcmltYXJ5XHJcbik7XHJcblxyXG4kZm91bmRhdGlvbi10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6ICRmb3VuZGF0aW9uLXByaW1hcnksXHJcbiAgICBiYWNrZ3JvdW5kLWZvY3VzZWQ6ICRmb3VuZGF0aW9uLXByaW1hcnktZGFyayxcclxuICAgIGJhY2tncm91bmQtYWN0aXZlOiAkZm91bmRhdGlvbi1wcmltYXJ5LWRhcmssXHJcbiAgICBiYWNrZ3JvdW5kLWhvdmVyOiAkZm91bmRhdGlvbi1wcmltYXJ5LWRhcmssXHJcbiAgICBjb2xvcjogI2ZmZixcclxuICAgIGNvbG9yLWhvdmVyOiAjZmZmLFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4XHJcbik7XHJcblxyXG4kZm91bmRhdGlvbi1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiAjZmZmLFxyXG4gICAgZmlsbC1mb2N1czogI2VlZSxcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM1c1xyXG4pO1xyXG5cclxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGZvdW5kYXRpb24tdGhlbWUpO1xyXG59XHJcblxyXG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZyB7XHJcbiAgICBAaW5jbHVkZSB0YWctdGhlbWUoJGZvdW5kYXRpb24tdGFnLXRoZW1lKTtcclxufVxyXG5cclxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB0YWcgZGVsZXRlLWljb24ge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZSgkZm91bmRhdGlvbi1pY29uLXRoZW1lKTtcclxufVxyXG5cclxuIiwiQG1peGluIHRhZy1pbnB1dC10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgdHJhbnNpdGlvbik7XHJcblxyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItcGFkZGluZycpO1xyXG4gICAgbWluLWhlaWdodDogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItaGVpZ2h0Jyk7XHJcblxyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20nKTtcclxuICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWZvY3VzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20taW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItbWFyZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nMi10YWdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlcnJvci1tZXNzYWdlKCR0aGVtZSkge1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtZm9udC1zaXplJyk7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWNvbG9yJyk7XHJcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1tYXJnaW4nKTtcclxufVxyXG5cclxuQG1peGluIHRhZy10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtZmFtaWx5Jyk7XHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkdGhlbWUsICdmb250LXdlaWdodCcpO1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtc2l6ZScpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG1hcC1nZXQoJHRoZW1lLCAnbGV0dGVyLXNwYWNpbmcnKTtcclxuXHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvcicpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsICd0cmFuc2l0aW9uJyk7XHJcblxyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ21hcmdpbicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdwYWRkaW5nJyk7XHJcblxyXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xyXG4gICAgbGluZS1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnbGluZS1oZWlnaHQnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZm9jdXNlZCcpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWZvY3VzZWQnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1hY3RpdmUnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1hY3RpdmUnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1ob3ZlcicpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWhvdmVyJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWFkb25seSB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHk6Zm9jdXMsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYudGFnLS1lZGl0aW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZWRpdGluZycpO1xyXG4gICAgICAgIGJvcmRlcjogbWFwLWdldCgkdGhlbWUsICdib3JkZXItZWRpdGluZycpO1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRhZy1pbnB1dC1mb3JtLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtYm9yZGVyJyk7XHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LXBhZGRpbmcnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1oZWlnaHQnKTtcclxuXHJcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtZm9udC1zaXplJyk7XHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJltkaXNhYmxlZD10cnVlXSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpY29uLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgd2lkdGg6IG1hcC1nZXQoJHRoZW1lLCAnd2lkdGgnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG4gICAgZGlzcGxheTogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5Jyk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZS1mb2N1c2VkKCR0aGVtZSkge1xyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsLWZvY3VzJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE3NzliYTtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWU6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZS5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTc3OWJhO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMTE1YjhkO1xufVxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB0YWc6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMTViOGQ7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZzpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzExNWI4ZDtcbiAgY29sb3I6ICNmZmY7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZy5yZWFkb25seSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnLnJlYWRvbmx5OmZvY3VzLCA6bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG46bmctZGVlcCAubmcyLXRhZy1pbnB1dC5mb3VuZGF0aW9uLXRoZW1lIHRhZy50YWctLWVkaXRpbmcge1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnIGRlbGV0ZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpuZy1kZWVwIC5uZzItdGFnLWlucHV0LmZvdW5kYXRpb24tdGhlbWUgdGFnIGRlbGV0ZS1pY29uIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufVxuOm5nLWRlZXAgLm5nMi10YWctaW5wdXQuZm91bmRhdGlvbi10aGVtZSB0YWcgZGVsZXRlLWljb24gc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAzNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Home, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          styleUrls: ['./home.scss'],
          templateUrl: './home.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./demo/main.ts":
  /*!**********************!*\
    !*** ./demo/main.ts ***!
    \**********************/

  /*! no exports provided */

  /***/
  function demoMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.module */
    "./demo/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"], {
      ngZoneEventCoalescing: true
    })["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./modules/components/dropdown/index.ts":
  /*!**********************************************!*\
    !*** ./modules/components/dropdown/index.ts ***!
    \**********************************************/

  /*! exports provided: TagInputDropdown */

  /***/
  function modulesComponentsDropdownIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tag-input-dropdown.component */
    "./modules/components/dropdown/tag-input-dropdown.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function () {
      return _tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["TagInputDropdown"];
    });
    /***/

  },

  /***/
  "./modules/components/dropdown/tag-input-dropdown.component.ts":
  /*!*********************************************************************!*\
    !*** ./modules/components/dropdown/tag-input-dropdown.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TagInputDropdown */

  /***/
  function modulesComponentsDropdownTagInputDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function () {
      return TagInputDropdown;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-material-dropdown */
    "./node_modules/ng2-material-dropdown/__ivy_ngcc__/fesm2015/ng2-material-dropdown.js");
    /* harmony import */


    var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../defaults */
    "./modules/defaults.ts");
    /* harmony import */


    var _tag_input_tag_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tag-input/tag-input */
    "./modules/components/tag-input/tag-input.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../core/pipes/highlight.pipe */
    "./modules/core/pipes/highlight.pipe.ts");

    function TagInputDropdown_ng2_menu_item_2_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "highlight");
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, item_r1[ctx_r4.displayBy], ctx_r4.tagInput.inputForm.value.value), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template(rf, ctx) {}

    var _c0 = function _c0(a0, a1, a2) {
      return {
        item: a0,
        index: a1,
        last: a2
      };
    };

    function TagInputDropdown_ng2_menu_item_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template, 0, 0, "ng-template", 7);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var item_r1 = ctx_r8.$implicit;
        var index_r2 = ctx_r8.index;
        var last_r3 = ctx_r8.last;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.templates.first)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, item_r1, index_r2, last_r3));
      }
    }

    function TagInputDropdown_ng2_menu_item_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-menu-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagInputDropdown_ng2_menu_item_2_span_1_Template, 2, 4, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_2_Template, 1, 6, undefined, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1)("ngSwitch", !!ctx_r0.templates.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);
      }
    }

    var TagInputDropdown = /*#__PURE__*/function () {
      function TagInputDropdown(injector) {
        var _this2 = this;

        _classCallCheck(this, TagInputDropdown);

        this.injector = injector;
        /**
         * @name offset
         */

        this.offset = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.offset;
        /**
         * @name focusFirstElement
         */

        this.focusFirstElement = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */

        this.showDropdownIfEmpty = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */

        this.minimumTextLength = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */

        this.limitItemsTo = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.limitItemsTo;
        /**
         * @name displayBy
         */

        this.displayBy = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.displayBy;
        /**
         * @name identifyBy
         */

        this.identifyBy = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */

        this.matchingFn = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.matchingFn;
        /**
         * @name appendToBody
         */

        this.appendToBody = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */

        this.keepOpen = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */

        this.dynamicUpdate = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.dynamicUpdate;
        /**
         * @name zIndex
         */

        this.zIndex = _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"].dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */

        this.items = [];
        /**
         * @name tagInput
         */

        this.tagInput = this.injector.get(_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_5__["TagInputComponent"]);
        /**
         * @name _autocompleteItems
         */

        this._autocompleteItems = [];
        /**
         *
         * @name show
         */

        this.show = function () {
          var maxItemsReached = _this2.tagInput.items.length === _this2.tagInput.maxItems;

          var value = _this2.getFormValue();

          var hasMinimumText = value.trim().length >= _this2.minimumTextLength;

          var position = _this2.calculatePosition();

          var items = _this2.getMatchingItems(value);

          var hasItems = items.length > 0;
          var isHidden = _this2.isVisible === false;
          var showDropdownIfEmpty = _this2.showDropdownIfEmpty && hasItems && !value;
          var isDisabled = _this2.tagInput.disable;
          var shouldShow = isHidden && (hasItems && hasMinimumText || showDropdownIfEmpty);
          var shouldHide = _this2.isVisible && !hasItems;

          if (_this2.autocompleteObservable && hasMinimumText) {
            return _this2.getItemsFromObservable(value);
          }

          if (!_this2.showDropdownIfEmpty && !value || maxItemsReached || isDisabled) {
            return _this2.dropdown.hide();
          }

          _this2.setItems(items);

          if (shouldShow) {
            _this2.dropdown.show(position);
          } else if (shouldHide) {
            _this2.hide();
          }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */


        this.requestAdding = function (item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var tag;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    tag = this.createTagModel(item);
                    _context.next = 3;
                    return this.tagInput.onAddingRequested(true, tag)["catch"](function () {});

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        };
        /**
         * @name resetItems
         */


        this.resetItems = function () {
          _this2.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */


        this.getItemsFromObservable = function (text) {
          _this2.setLoadingState(true);

          var subscribeFn = function subscribeFn(data) {
            // hide loading animation
            _this2.setLoadingState(false) // add items
            .populateItems(data);

            _this2.setItems(_this2.getMatchingItems(text));

            if (_this2.items.length) {
              _this2.dropdown.show(_this2.calculatePosition());
            } else {
              _this2.dropdown.hide();
            }
          };

          _this2.autocompleteObservable(text).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(subscribeFn, function () {
            return _this2.setLoadingState(false);
          });
        };
      }
      /**
       * @name autocompleteItems
       * @param items
       */


      _createClass(TagInputDropdown, [{
        key: "ngAfterViewInit",

        /**
         * @name ngAfterviewInit
         */
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.onItemClicked().subscribe(function (item) {
            _this3.requestAdding(item);
          }); // reset itemsMatching array when the dropdown is hidden

          this.onHide().subscribe(this.resetItems);
          var DEBOUNCE_TIME = 200;
          var KEEP_OPEN = this.keepOpen;
          this.tagInput.onTextChange.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
              return value.length > 0;
            }

            return true;
          })).subscribe(this.show);
        }
        /**
         * @name updatePosition
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          var position = this.tagInput.inputForm.getElementPosition();
          this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
        }
        /**
         * @name isVisible
         */

      }, {
        key: "onHide",

        /**
         * @name onHide
         */
        value: function onHide() {
          return this.dropdown.onHide;
        }
        /**
         * @name onItemClicked
         */

      }, {
        key: "onItemClicked",
        value: function onItemClicked() {
          return this.dropdown.onItemClicked;
        }
        /**
         * @name selectedItem
         */

      }, {
        key: "hide",

        /**
         * @name hide
         */
        value: function hide() {
          this.resetItems();
          this.dropdown.hide();
        }
        /**
         * @name scrollListener
         */

      }, {
        key: "scrollListener",
        value: function scrollListener() {
          if (!this.isVisible || !this.dynamicUpdate) {
            return;
          }

          this.updatePosition();
        }
        /**
         * @name onWindowBlur
         */

      }, {
        key: "onWindowBlur",
        value: function onWindowBlur() {
          this.dropdown.hide();
        }
        /**
         * @name getFormValue
         */

      }, {
        key: "getFormValue",
        value: function getFormValue() {
          var formValue = this.tagInput.formValue;
          return formValue ? formValue.toString().trim() : '';
        }
        /**
         * @name calculatePosition
         */

      }, {
        key: "calculatePosition",
        value: function calculatePosition() {
          return this.tagInput.inputForm.getElementPosition();
        }
        /**
         * @name createTagModel
         * @param item
         */

      }, {
        key: "createTagModel",
        value: function createTagModel(item) {
          var _Object$assign;

          var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
          var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
          return Object.assign(Object.assign({}, item.value), (_Object$assign = {}, _defineProperty(_Object$assign, this.tagInput.displayBy, display), _defineProperty(_Object$assign, this.tagInput.identifyBy, value), _Object$assign));
        }
        /**
         *
         * @param value {string}
         */

      }, {
        key: "getMatchingItems",
        value: function getMatchingItems(value) {
          var _this4 = this;

          if (!value && !this.showDropdownIfEmpty) {
            return [];
          }

          var dupesAllowed = this.tagInput.allowDupes;
          return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this4.tagInput.tags.some(function (tag) {
              var identifyBy = _this4.tagInput.identifyBy;
              var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
              return model === item[_this4.identifyBy];
            });
            return _this4.matchingFn(value, item) && hasValue === false;
          });
        }
        /**
         * @name setItems
         */

      }, {
        key: "setItems",
        value: function setItems(items) {
          this.items = items.slice(0, this.limitItemsTo || items.length);
        }
        /**
         * @name populateItems
         * @param data
         */

      }, {
        key: "populateItems",
        value: function populateItems(data) {
          var _this5 = this;

          this.autocompleteItems = data.map(function (item) {
            var _ref;

            return typeof item === 'string' ? (_ref = {}, _defineProperty(_ref, _this5.displayBy, item), _defineProperty(_ref, _this5.identifyBy, item), _ref) : item;
          });
          return this;
        }
        /**
         * @name setLoadingState
         * @param state
         */

      }, {
        key: "setLoadingState",
        value: function setLoadingState(state) {
          this.tagInput.isLoading = state;
          return this;
        }
      }, {
        key: "autocompleteItems",
        set: function set(items) {
          this._autocompleteItems = items;
        }
        /**
         * @name autocompleteItems
         * @desc array of items that will populate the autocomplete
         */
        ,
        get: function get() {
          var _this6 = this;

          var items = this._autocompleteItems;

          if (!items) {
            return [];
          }

          return items.map(function (item) {
            var _ref2;

            return typeof item === 'string' ? (_ref2 = {}, _defineProperty(_ref2, _this6.displayBy, item), _defineProperty(_ref2, _this6.identifyBy, item), _ref2) : item;
          });
        }
      }, {
        key: "isVisible",
        get: function get() {
          return this.dropdown.menu.dropdownState.menuState.isVisible;
        }
      }, {
        key: "selectedItem",
        get: function get() {
          return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
        }
        /**
         * @name state
         */

      }, {
        key: "state",
        get: function get() {
          return this.dropdown.menu.dropdownState;
        }
      }]);

      return TagInputDropdown;
    }();

    TagInputDropdown.ɵfac = function TagInputDropdown_Factory(t) {
      return new (t || TagInputDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
    };

    TagInputDropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TagInputDropdown,
      selectors: [["tag-input-dropdown"]],
      contentQueries: function TagInputDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function TagInputDropdown_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
        }
      },
      hostBindings: function TagInputDropdown_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TagInputDropdown_scroll_HostBindingHandler() {
            return ctx.scrollListener();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("blur", function TagInputDropdown_blur_HostBindingHandler() {
            return ctx.onWindowBlur();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        offset: "offset",
        focusFirstElement: "focusFirstElement",
        showDropdownIfEmpty: "showDropdownIfEmpty",
        autocompleteObservable: "autocompleteObservable",
        minimumTextLength: "minimumTextLength",
        limitItemsTo: "limitItemsTo",
        displayBy: "displayBy",
        identifyBy: "identifyBy",
        matchingFn: "matchingFn",
        appendToBody: "appendToBody",
        keepOpen: "keepOpen",
        dynamicUpdate: "dynamicUpdate",
        zIndex: "zIndex",
        autocompleteItems: "autocompleteItems"
      },
      decls: 3,
      vars: 6,
      consts: [[3, "dynamicUpdate"], [3, "focusFirstElement", "zIndex", "appendToBody", "offset"], [3, "value", "ngSwitch", 4, "ngFor", "ngForOf"], [3, "value", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TagInputDropdown_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-dropdown", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-dropdown-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_Template, 3, 3, "ng2-menu-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dynamicUpdate", ctx.dynamicUpdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("focusFirstElement", ctx.focusFirstElement)("zIndex", ctx.zIndex)("appendToBody", ctx.appendToBody)("offset", ctx.offset);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2MenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
      pipes: [_core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__["HighlightPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputDropdown, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'tag-input-dropdown',
          templateUrl: './tag-input-dropdown.template.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }];
      }, {
        dropdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"]]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        focusFirstElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showDropdownIfEmpty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autocompleteObservable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minimumTextLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        limitItemsTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        identifyBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matchingFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        appendToBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keepOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dynamicUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autocompleteItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollListener: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:scroll']
        }],
        onWindowBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:blur']
        }]
      });
    })();
    /***/

  },

  /***/
  "./modules/components/icon/icon.ts":
  /*!*****************************************!*\
    !*** ./modules/components/icon/icon.ts ***!
    \*****************************************/

  /*! exports provided: DeleteIconComponent */

  /***/
  function modulesComponentsIconIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function () {
      return DeleteIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeleteIconComponent = function DeleteIconComponent() {
      _classCallCheck(this, DeleteIconComponent);
    };

    DeleteIconComponent.ɵfac = function DeleteIconComponent_Factory(t) {
      return new (t || DeleteIconComponent)();
    };

    DeleteIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteIconComponent,
      selectors: [["delete-icon"]],
      decls: 3,
      vars: 0,
      consts: [["height", "16px", "viewBox", "0 0 32 32", "width", "16px"], ["d", "M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z", "fill", "#121313"]],
      template: function DeleteIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 1px #323232;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n  box-shadow: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 1px #d9534f;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #2196F3;\n}\n\n.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #f44336;\n}\n\n.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0.1em 0;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0275d8;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #d9534f;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9534f;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0.1em 0;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0;\n}\n\n.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n\ndelete-icon[_nghost-%COMP%] {\n  width: 20px;\n  height: 16px;\n  transition: all 0.15s;\n  display: inline-block;\n  text-align: right;\n}\n\ndelete-icon[_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #444;\n}\n\ndelete-icon[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  height: 34px;\n}\n\ndelete-icon[_nghost-%COMP%]:hover {\n  transform: scale(1.5) translateY(-3px);\n}\n\n.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%] {\n  text-align: right;\n}\n\n.dark[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.dark[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  height: 34px;\n}\n\n.minimal[_nghost-%COMP%], .minimal   [_nghost-%COMP%] {\n  text-align: right;\n}\n\n.minimal[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #444;\n}\n\n.minimal[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  height: 34px;\n}\n\n.bootstrap[_nghost-%COMP%], .bootstrap   [_nghost-%COMP%] {\n  text-align: right;\n}\n\n.bootstrap[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.bootstrap[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  height: 34px;\n}\n\ntag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], tag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.dark[_nghost-%COMP%]   tag[_ngcontent-%COMP%]:focus   path[_ngcontent-%COMP%], .dark   tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark[_nghost-%COMP%]   tag[_ngcontent-%COMP%]:active   path[_ngcontent-%COMP%], .dark   tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #000;\n}\n\n.minimal[_nghost-%COMP%]   tag[_ngcontent-%COMP%]:focus   path[_ngcontent-%COMP%], .minimal   tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal[_nghost-%COMP%]   tag[_ngcontent-%COMP%]:active   path[_ngcontent-%COMP%], .minimal   tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #000;\n}\n\n.bootstrap[_nghost-%COMP%]   tag[_ngcontent-%COMP%]:focus   path[_ngcontent-%COMP%], .bootstrap   tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap[_nghost-%COMP%]   tag[_ngcontent-%COMP%]:active   path[_ngcontent-%COMP%], .bootstrap   tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.bootstrap3-info[_nghost-%COMP%], .bootstrap3-info   [_nghost-%COMP%] {\n  height: inherit;\n}\n\n.bootstrap3-info[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap3-info   [_nghost-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy9pY29uL0M6XFxEZXZlbG9wbWVudFxcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcdGhlbWVzXFxfZGFyay10aGVtZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL2ljb24vaWNvbi5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL2ljb24vQzpcXERldmVsb3BtZW50XFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFx0aGVtZXNcXF9ib290c3RyYXAzLWluZm8tdGhlbWUuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy9pY29uL0M6XFxEZXZlbG9wbWVudFxcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcdGhlbWVzXFxfdGhlbWVzLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvaWNvbi9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy9pY29uL0M6XFxEZXZlbG9wbWVudFxcbmd4LWNoaXBzL21vZHVsZXNcXGNvbXBvbmVudHNcXGljb25cXGljb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QUM0QkE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0FEMUJKOztBQzZCQTtFQUNJLFdBQUE7QUQxQko7O0FDNkJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEMUJKOztBQzZCQTtFQUNJLDhDQUFBO0VBQ0Esc0JBQUE7QUQxQko7O0FDNkJBO0VBQ0ksbUNBQUE7QUQxQko7O0FFekNBO0VDUkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUVBLGdDQUFBO0FIaURKOztBRzdDSTtFQUNJLFVBQUE7QUgrQ1I7O0FHNUNJO0VBQ0ksWUFBQTtBSDhDUjs7QUczQ0k7RUFDSSxnQ0FBQTtBSDZDUjs7QUcxQ0k7RUFDSSxnQ0FBQTtBSDRDUjs7QUd6Q0k7RUFDSSxZQUFBO0FIMkNSOztBR3hDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBSDBDUjs7QUd2Q0k7RUFDSSxlQUFBO0FIeUNSOztBR3RDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FId0NSOztBRTNFQTtFQ1pJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLFlBQUE7RUFFQSxvQ0FBQTtBSG9GSjs7QUdoRkk7RUFDSSxVQUFBO0FIa0ZSOztBRy9FSTtFQUNJLFlBQUE7QUhpRlI7O0FHdEVJO0VBQ0ksWUFBQTtBSHdFUjs7QUdyRUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUh1RVI7O0FHaEVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUhrRVI7O0FFakdBO0VDaEJJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLFlBQUE7RUFFQSw2QkFBQTtBSDhHSjs7QUcxR0k7RUFDSSxVQUFBO0FINEdSOztBR3pHSTtFQUNJLFlBQUE7QUgyR1I7O0FHaEdJO0VBQ0ksWUFBQTtBSGtHUjs7QUcvRkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUhpR1I7O0FHMUZJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg0RlI7O0FFdkhBO0VDcEJJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLFlBQUE7RUFFQSxnQ0FBQTtBSHdJSjs7QUdwSUk7RUFDSSxVQUFBO0FIc0lSOztBR25JSTtFQUNJLFlBQUE7QUhxSVI7O0FHbElJO0VBQ0ksZ0NBQUE7QUhvSVI7O0FHaklJO0VBQ0ksZ0NBQUE7QUhtSVI7O0FHaElJO0VBQ0ksWUFBQTtBSGtJUjs7QUcvSEk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUhpSVI7O0FHMUhJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg0SFI7O0FFbkpBO0VDeEJJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUlBLFlBQUE7RUFHQSxZQUFBO0VBR0EsZ0RBQUE7RUFDQSxrQkFBQTtBSHdLSjs7QUd0S0k7RUFDSSxVQUFBO0FId0tSOztBR3JLSTtFQUNJLFlBQUE7QUh1S1I7O0FHaEtJO0VBQ0ksZ0NBQUE7QUhrS1I7O0FHL0pJO0VBQ0ksWUFBQTtBSGlLUjs7QUc5Skk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUhnS1I7O0FHN0pJO0VBQ0ksZUFBQTtBSCtKUjs7QUc1Skk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSDhKUjs7QUVqTEE7RUN3QkksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUg2Sko7O0FFbkxBO0VDcUJJLGNBQUE7QUhrS0o7O0FJdE5BO0VENklJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FINkVKOztBRzNFSTtFQUNJLFVBQUE7QUg2RVI7O0FHMUVJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FINEVSOztBSWpPQTtFQUNJLHNDQUFBO0FKb09KOztBSWpPQTtFRHlJSSxpQkFBQTtBSDRGSjs7QUcxRkk7RUFDSSxVQUFBO0FINEZSOztBR3pGSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBSDJGUjs7QUl4T0E7RURxSUksaUJBQUE7QUh1R0o7O0FHckdJO0VBQ0ksVUFBQTtBSHVHUjs7QUdwR0k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUhzR1I7O0FJL09BO0VEaUlJLGlCQUFBO0FIa0hKOztBR2hISTtFQUNJLFVBQUE7QUhrSFI7O0FHL0dJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FIaUhSOztBRzVHSTs7RUFDSSxVQUFBO0FIZ0hSOztBR2pISTs7RUFDSSxVQUFBO0FIcUhSOztBR3RISTs7RUFDSSxVQUFBO0FIMEhSOztBRzNISTs7RUFDSSxVQUFBO0FIK0hSOztBSXRQQTtFQUVJLGVBQUE7QUp3UEo7O0FHcElJO0VBQ0ksVUFBQTtBSHNJUiIsImZpbGUiOiJtb2R1bGVzL2NvbXBvbmVudHMvaWNvbi9pY29uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyay10aGVtZTogKFxyXG4gICAgY29udGFpbmVyLWJvcmRlci1ib3R0b206IDJweCBzb2xpZCBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpXHJcbik7XHJcblxyXG4kZGFyay10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdkYXJrJyksXHJcbiAgICBjb2xvcjogI2Y5ZjlmOSxcclxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2RhcmsnKSxcclxuICAgIGJhY2tncm91bmQtaG92ZXI6IGRhcmtlbihtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpLCAxMCUpLFxyXG4gICAgY29sb3ItZm9jdXNlZDogbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKSxcclxuICAgIGNvbG9yLWhvdmVyOiAjZjlmOWY5LFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4XHJcbik7XHJcblxyXG4kZGFyay1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2RhcmsnKSxcclxuICAgIGZpbGwtZm9jdXM6IG1hcC1nZXQoJGNvbG9yLWFycm93LWZvY3VzZWQsICdkYXJrJylcclxuKTtcclxuXHJcbi5kYXJrIHRhZzpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzMyMzIzMjtcclxufVxyXG4iLCIuZGFyayB0YWc6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzMyMzIzMjtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzU1NTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzc3O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNkOTUzNGY7XG59XG5cbi5uZzItdGFnLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbn1cbi5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjE5NkYzO1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjQ0MzM2O1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm5nMi10YWctaW5wdXQgZm9ybSB7XG4gIG1hcmdpbjogMC4xZW0gMDtcbn1cbi5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5taW5pbWFsLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubWluaW1hbC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQgLm5nMi10YWdzLWNvbnRhaW5lciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRhcmsubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ0NDtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRhcmsubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZGFyay5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDI3NWQ4O1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q5NTM0Zjtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNHB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOTUzNGY7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCBmb3JtIHtcbiAgbWFyZ2luOiAwLjFlbSAwO1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XG59XG5cbi5ib290c3RyYXAgLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2Q5NTM0Zjtcbn1cblxuOmhvc3QoZGVsZXRlLWljb24pIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QoZGVsZXRlLWljb24pIHBhdGgge1xuICBmaWxsOiAjNDQ0O1xufVxuOmhvc3QoZGVsZXRlLWljb24pIHN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGhlaWdodDogMzRweDtcbn1cblxuOmhvc3QoZGVsZXRlLWljb24pOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZVkoLTNweCk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmspIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrKSBwYXRoIHtcbiAgZmlsbDogI2ZmZjtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmspIHN2ZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGhlaWdodDogMzRweDtcbn1cblxuOmhvc3QtY29udGV4dCgubWluaW1hbCkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0LWNvbnRleHQoLm1pbmltYWwpIHBhdGgge1xuICBmaWxsOiAjNDQ0O1xufVxuOmhvc3QtY29udGV4dCgubWluaW1hbCkgc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXApIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdC1jb250ZXh0KC5ib290c3RyYXApIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufVxuOmhvc3QtY29udGV4dCguYm9vdHN0cmFwKSBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbjpob3N0LWNvbnRleHQodGFnOmZvY3VzKSBwYXRoLFxuOmhvc3QtY29udGV4dCh0YWc6YWN0aXZlKSBwYXRoIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyayB0YWc6Zm9jdXMpIHBhdGgsXG46aG9zdC1jb250ZXh0KC5kYXJrIHRhZzphY3RpdmUpIHBhdGgge1xuICBmaWxsOiAjMDAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5taW5pbWFsIHRhZzpmb2N1cykgcGF0aCxcbjpob3N0LWNvbnRleHQoLm1pbmltYWwgdGFnOmFjdGl2ZSkgcGF0aCB7XG4gIGZpbGw6ICMwMDA7XG59XG5cbjpob3N0LWNvbnRleHQoLmJvb3RzdHJhcCB0YWc6Zm9jdXMpIHBhdGgsXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAgdGFnOmFjdGl2ZSkgcGF0aCB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbjpob3N0LWNvbnRleHQoLmJvb3RzdHJhcDMtaW5mbykge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAzLWluZm8pIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufSIsIiRib290c3RyYXAzLWluZm8tdGhlbWU6IChcclxuICAgIGNvbnRhaW5lci1wYWRkaW5nOiA0cHgsXHJcbiAgICBjb250YWluZXItbWFyZ2luOiAkY29udGFpbmVyLW1hcmdpbixcclxuICAgIGNvbnRhaW5lci1ib3JkZXItYm90dG9tLWludmFsaWQ6IDFweCBzb2xpZCBtYXAtZ2V0KCRjb2xvci1lcnJvciwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgaW5wdXQtYm9yZGVyOiAxcHggc29saWQgI2NjYyxcclxuICAgIGlucHV0LXBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLFxyXG4gICAgaW5wdXQtZm9udC1zaXplOiA5NSUsXHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdCxcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4pO1xyXG5cclxuJGJvb3RzdHJhcDMtaW5mby10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGZvbnQtc2l6ZTogOTUlLFxyXG4gICAgY29sb3I6ICNmZmYsXHJcbiAgICBjb2xvci1ob3ZlcjogI2ZmZixcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbSxcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0LFxyXG4gICAgYmFja2dyb3VuZC1mb2N1c2VkOiBtYXAtZ2V0KCRjb2xvci1mb2N1c2VkLCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBiYWNrZ3JvdW5kLWFjdGl2ZTogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgYmFja2dyb3VuZC1ob3ZlcjogZGFya2VuKG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdib290c3RyYXAzLWluZm8nKSwgNSUpXHJcbik7XHJcblxyXG4kYm9vdHN0cmFwMy1pbmZvLWljb24tdGhlbWU6IChcclxuICAgIGZpbGw6IG1hcC1nZXQoJGNvbG9yLWFycm93LCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBmaWxsLWZvY3VzOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2Jvb3RzdHJhcDMtaW5mbycpXHJcbik7XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IG1hcC1nZXQoJGNvbG9yLWVycm9yLCAnYm9vdHN0cmFwJyk7XHJcbn1cclxuIiwiLy8gVEhFTUVTXHJcblxyXG5AaW1wb3J0IFwiLi4vY29yZS9fY29yZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfZGVmYXVsdC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfbWluaW1hbC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfZGFyay10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfYm9vdHN0cmFwLXRoZW1lLnNjc3NcIjtcclxuQGltcG9ydCBcIl9ib290c3RyYXAzLWluZm8tdGhlbWUuc2Nzc1wiO1xyXG5cclxuLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRkZWZhdWx0LXRoZW1lKTtcclxufVxyXG5cclxuLm1pbmltYWwubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJG1pbmltYWwtdGhlbWUpO1xyXG59XHJcblxyXG4uZGFyay5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkZGFyay10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGJvb3RzdHJhcC10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGJvb3RzdHJhcDMtaW5mby10aGVtZSk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2UoJGRlZmF1bHQtdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIEBpbmNsdWRlIGVycm9yLW1lc3NhZ2UoJGJvb3RzdHJhcC10aGVtZSk7XHJcbn1cclxuIiwiQG1peGluIHRhZy1pbnB1dC10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgdHJhbnNpdGlvbik7XHJcblxyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItcGFkZGluZycpO1xyXG4gICAgbWluLWhlaWdodDogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItaGVpZ2h0Jyk7XHJcblxyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20nKTtcclxuICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWZvY3VzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWludmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20taW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItbWFyZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5nMi10YWdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBlcnJvci1tZXNzYWdlKCR0aGVtZSkge1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtZm9udC1zaXplJyk7XHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWNvbG9yJyk7XHJcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1tYXJnaW4nKTtcclxufVxyXG5cclxuQG1peGluIHRhZy10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtZmFtaWx5Jyk7XHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkdGhlbWUsICdmb250LXdlaWdodCcpO1xyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZvbnQtc2l6ZScpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG1hcC1nZXQoJHRoZW1lLCAnbGV0dGVyLXNwYWNpbmcnKTtcclxuXHJcbiAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvcicpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbWFwLWdldCgkdGhlbWUsICdib3JkZXItcmFkaXVzJyk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsICd0cmFuc2l0aW9uJyk7XHJcblxyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ21hcmdpbicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdwYWRkaW5nJyk7XHJcblxyXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xyXG4gICAgbGluZS1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnbGluZS1oZWlnaHQnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZm9jdXNlZCcpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWZvY3VzZWQnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1hY3RpdmUnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1hY3RpdmUnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1ob3ZlcicpO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbG9yLWhvdmVyJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWFkb25seSB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHk6Zm9jdXMsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYudGFnLS1lZGl0aW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZWRpdGluZycpO1xyXG4gICAgICAgIGJvcmRlcjogbWFwLWdldCgkdGhlbWUsICdib3JkZXItZWRpdGluZycpO1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRhZy1pbnB1dC1mb3JtLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtYm9yZGVyJyk7XHJcbiAgICBwYWRkaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LXBhZGRpbmcnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1oZWlnaHQnKTtcclxuXHJcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtZm9udC1zaXplJyk7XHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJltkaXNhYmxlZD10cnVlXSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBpY29uLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgd2lkdGg6IG1hcC1nZXQoJHRoZW1lLCAnd2lkdGgnKTtcclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG4gICAgZGlzcGxheTogbWFwLWdldCgkdGhlbWUsICdkaXNwbGF5Jyk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiBtYXAtZ2V0KCR0aGVtZSwgJ2ZpbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZS1mb2N1c2VkKCR0aGVtZSkge1xyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsLWZvY3VzJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2NvcmUvc3R5bGVzL3RoZW1lcy9fdGhlbWVzLnNjc3NcIjtcclxuXHJcbjpob3N0KGRlbGV0ZS1pY29uKSB7XHJcbiAgICBAaW5jbHVkZSBpY29uLXRoZW1lKCRkZWZhdWx0LWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdChkZWxldGUtaWNvbik6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmspIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUoJGRhcmstaWNvbi10aGVtZSk7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLm1pbmltYWwpIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUoJG1pbmltYWwtaWNvbi10aGVtZSk7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmJvb3RzdHJhcCkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZSgkYm9vdHN0cmFwLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KHRhZzpmb2N1cyksXHJcbjpob3N0LWNvbnRleHQodGFnOmFjdGl2ZSkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZS1mb2N1c2VkKCRkZWZhdWx0LWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5kYXJrIHRhZzpmb2N1cyksXHJcbjpob3N0LWNvbnRleHQoLmRhcmsgdGFnOmFjdGl2ZSkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZS1mb2N1c2VkKCRkYXJrLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5taW5pbWFsIHRhZzpmb2N1cyksXHJcbjpob3N0LWNvbnRleHQoLm1pbmltYWwgdGFnOmFjdGl2ZSkge1xyXG4gICAgQGluY2x1ZGUgaWNvbi10aGVtZS1mb2N1c2VkKCRtaW5pbWFsLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAgdGFnOmZvY3VzKSxcclxuOmhvc3QtY29udGV4dCguYm9vdHN0cmFwIHRhZzphY3RpdmUpIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUtZm9jdXNlZCgkYm9vdHN0cmFwLWljb24tdGhlbWUpO1xyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5ib290c3RyYXAzLWluZm8pIHtcclxuICAgIEBpbmNsdWRlIGljb24tdGhlbWUtZm9jdXNlZCgkYm9vdHN0cmFwMy1pbmZvLWljb24tdGhlbWUpO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'delete-icon',
          templateUrl: './icon.html',
          styleUrls: ['./icon.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./modules/components/icon/index.ts":
  /*!******************************************!*\
    !*** ./modules/components/icon/index.ts ***!
    \******************************************/

  /*! exports provided: DeleteIconComponent */

  /***/
  function modulesComponentsIconIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./icon */
    "./modules/components/icon/icon.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function () {
      return _icon__WEBPACK_IMPORTED_MODULE_0__["DeleteIconComponent"];
    });
    /***/

  },

  /***/
  "./modules/components/index.ts":
  /*!*************************************!*\
    !*** ./modules/components/index.ts ***!
    \*************************************/

  /*! exports provided: TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent */

  /***/
  function modulesComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dropdown_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dropdown/index */
    "./modules/components/dropdown/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function () {
      return _dropdown_index__WEBPACK_IMPORTED_MODULE_0__["TagInputDropdown"];
    });
    /* harmony import */


    var _icon_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./icon/index */
    "./modules/components/icon/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function () {
      return _icon_index__WEBPACK_IMPORTED_MODULE_1__["DeleteIconComponent"];
    });
    /* harmony import */


    var _tag_input_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tag-input-form/index */
    "./modules/components/tag-input-form/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputForm", function () {
      return _tag_input_form_index__WEBPACK_IMPORTED_MODULE_2__["TagInputForm"];
    });
    /* harmony import */


    var _tag_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tag/index */
    "./modules/components/tag/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagRipple", function () {
      return _tag_index__WEBPACK_IMPORTED_MODULE_3__["TagRipple"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return _tag_index__WEBPACK_IMPORTED_MODULE_3__["TagComponent"];
    });
    /* harmony import */


    var _tag_input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tag-input/index */
    "./modules/components/tag-input/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
      return _tag_input_index__WEBPACK_IMPORTED_MODULE_4__["TagInputComponent"];
    });
    /***/

  },

  /***/
  "./modules/components/tag-input-form/index.ts":
  /*!****************************************************!*\
    !*** ./modules/components/tag-input-form/index.ts ***!
    \****************************************************/

  /*! exports provided: TagInputForm */

  /***/
  function modulesComponentsTagInputFormIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tag_input_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tag-input-form.component */
    "./modules/components/tag-input-form/tag-input-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputForm", function () {
      return _tag_input_form_component__WEBPACK_IMPORTED_MODULE_0__["TagInputForm"];
    });
    /***/

  },

  /***/
  "./modules/components/tag-input-form/tag-input-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./modules/components/tag-input-form/tag-input-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TagInputForm */

  /***/
  function modulesComponentsTagInputFormTagInputFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputForm", function () {
      return TagInputForm;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["input"];

    var TagInputForm = /*#__PURE__*/function () {
      function TagInputForm() {
        _classCallCheck(this, TagInputForm);

        /**
         * @name onSubmit
         */
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onBlur
         */

        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onFocus
         */

        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onKeyup
         */

        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onKeydown
         */

        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name inputTextChange
         */

        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name validators
         */

        this.validators = [];
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */

        this.asyncValidators = [];
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */

        this.tabindex = '';
        /**
         * @name disabled
         */

        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
          value: '',
          disabled: this.disabled
        });
      }
      /**
       * @name inputText
       */


      _createClass(TagInputForm, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.item.setValidators(this.validators);
          this.item.setAsyncValidators(this.asyncValidators); // creating form

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            item: this.item
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
              this.form.controls['item'].disable();
            } else {
              this.form.controls['item'].enable();
            }
          }
        }
        /**
         * @name value
         */

      }, {
        key: "isInputFocused",

        /**
         * @name isInputFocused
         */
        value: function isInputFocused() {
          var doc = typeof document !== 'undefined' ? document : undefined;
          return doc ? doc.activeElement === this.input.nativeElement : false;
        }
        /**
         * @name getErrorMessages
         * @param messages
         */

      }, {
        key: "getErrorMessages",
        value: function getErrorMessages(messages) {
          var _this7 = this;

          return Object.keys(messages).filter(function (err) {
            return _this7.value.hasError(err);
          }).map(function (err) {
            return messages[err];
          });
        }
        /**
         * @name hasErrors
         */

      }, {
        key: "hasErrors",
        value: function hasErrors() {
          var _this$form = this.form,
              dirty = _this$form.dirty,
              value = _this$form.value,
              valid = _this$form.valid;
          return dirty && value.item && !valid;
        }
        /**
         * @name focus
         */

      }, {
        key: "focus",
        value: function focus() {
          this.input.nativeElement.focus();
        }
        /**
         * @name blur
         */

      }, {
        key: "blur",
        value: function blur() {
          this.input.nativeElement.blur();
        }
        /**
         * @name getElementPosition
         */

      }, {
        key: "getElementPosition",
        value: function getElementPosition() {
          return this.input.nativeElement.getBoundingClientRect();
        }
        /**
         * - removes input from the component
         * @name destroy
         */

      }, {
        key: "destroy",
        value: function destroy() {
          var input = this.input.nativeElement;
          input.parentElement.removeChild(input);
        }
        /**
         * @name onKeyDown
         * @param $event
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown($event) {
          this.inputText = this.value.value;

          if ($event.key === 'Enter') {
            this.submit($event);
          } else {
            return this.onKeydown.emit($event);
          }
        }
        /**
         * @name onKeyUp
         * @param $event
         */

      }, {
        key: "onKeyUp",
        value: function onKeyUp($event) {
          this.inputText = this.value.value;
          return this.onKeyup.emit($event);
        }
        /**
         * @name submit
         */

      }, {
        key: "submit",
        value: function submit($event) {
          $event.preventDefault();
          this.onSubmit.emit($event);
        }
      }, {
        key: "inputText",
        get: function get() {
          return this.item.value;
        }
        /**
         * @name inputText
         * @param text {string}
         */
        ,
        set: function set(text) {
          this.item.setValue(text);
          this.inputTextChange.emit(text);
        }
      }, {
        key: "value",
        get: function get() {
          return this.form.get('item');
        }
      }]);

      return TagInputForm;
    }();

    TagInputForm.ɵfac = function TagInputForm_Factory(t) {
      return new (t || TagInputForm)();
    };

    TagInputForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagInputForm,
      selectors: [["tag-input-form"]],
      viewQuery: function TagInputForm_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      inputs: {
        placeholder: "placeholder",
        validators: "validators",
        asyncValidators: "asyncValidators",
        inputId: "inputId",
        inputClass: "inputClass",
        tabindex: "tabindex",
        disabled: "disabled",
        inputText: "inputText"
      },
      outputs: {
        onSubmit: "onSubmit",
        onBlur: "onBlur",
        onFocus: "onFocus",
        onKeyup: "onKeyup",
        onKeydown: "onKeydown",
        inputTextChange: "inputTextChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 8,
      consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "autocomplete", "off", "minlength", "1", "formControlName", "item", 1, "ng2-tag-input__text-input", 3, "tabindex", "ngClass", "focus", "blur", "keydown", "keyup"], ["input", ""]],
      template: function TagInputForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TagInputForm_Template_form_ngSubmit_0_listener($event) {
            return ctx.submit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TagInputForm_Template_input_focus_1_listener($event) {
            return ctx.onFocus.emit($event);
          })("blur", function TagInputForm_Template_input_blur_1_listener($event) {
            return ctx.onBlur.emit($event);
          })("keydown", function TagInputForm_Template_input_keydown_1_listener($event) {
            return ctx.onKeyDown($event);
          })("keyup", function TagInputForm_Template_input_keyup_1_listener($event) {
            return ctx.onKeyUp($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabindex ? ctx.tabindex : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.placeholder)("tabindex", ctx.tabindex)("disabled", ctx.disabled ? ctx.disabled : null);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 1px #323232;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n  box-shadow: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 1px #d9534f;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #2196F3;\n}\n\n.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #f44336;\n}\n\n.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0.1em 0;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0275d8;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #d9534f;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9534f;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0.1em 0;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0;\n}\n\n.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n\n.ng2-tag-input__text-input[_ngcontent-%COMP%] {\n  display: inline;\n  vertical-align: middle;\n  border: none;\n  padding: 0 0.5rem;\n  height: 38px;\n  font-size: 1em;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n.ng2-tag-input__text-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.ng2-tag-input__text-input[disabled=true][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX2RhcmstdGhlbWUuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS90YWctaW5wdXQtZm9ybS5zdHlsZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL0M6XFxEZXZlbG9wbWVudFxcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcdGhlbWVzXFxfYm9vdHN0cmFwMy1pbmZvLXRoZW1lLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0LWZvcm0vQzpcXERldmVsb3BtZW50XFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFx0aGVtZXNcXF90aGVtZXMuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQtZm9ybS9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb21wb25lbnRzXFx0YWctaW5wdXQtZm9ybVxcdGFnLWlucHV0LWZvcm0uc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSw2QkFBQTtBQ2xCSjs7QUM0QkE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBRDFCSjs7QUM2QkE7RUFDSSxXQUFBO0FEMUJKOztBQzZCQTtFQUNJLFdBQUE7QUQxQko7O0FDNkJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEMUJKOztBQzZCQTtFQUNJLDhDQUFBO0VBQ0Esc0JBQUE7QUQxQko7O0FDNkJBO0VBQ0ksbUNBQUE7QUQxQko7O0FFekNBO0VDUkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUVBLGdDQUFBO0FIaURKOztBRzdDSTtFQUNJLFVBQUE7QUgrQ1I7O0FHNUNJO0VBQ0ksWUFBQTtBSDhDUjs7QUczQ0k7RUFDSSxnQ0FBQTtBSDZDUjs7QUcxQ0k7RUFDSSxnQ0FBQTtBSDRDUjs7QUd6Q0k7RUFDSSxZQUFBO0FIMkNSOztBR3hDSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBSDBDUjs7QUd2Q0k7RUFDSSxlQUFBO0FIeUNSOztBR3RDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FId0NSOztBRTNFQTtFQ1pJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLFlBQUE7RUFFQSxvQ0FBQTtBSG9GSjs7QUdoRkk7RUFDSSxVQUFBO0FIa0ZSOztBRy9FSTtFQUNJLFlBQUE7QUhpRlI7O0FHdEVJO0VBQ0ksWUFBQTtBSHdFUjs7QUdyRUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUh1RVI7O0FHaEVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUhrRVI7O0FFakdBO0VDaEJJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLFlBQUE7RUFFQSw2QkFBQTtBSDhHSjs7QUcxR0k7RUFDSSxVQUFBO0FINEdSOztBR3pHSTtFQUNJLFlBQUE7QUgyR1I7O0FHaEdJO0VBQ0ksWUFBQTtBSGtHUjs7QUcvRkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUhpR1I7O0FHMUZJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg0RlI7O0FFdkhBO0VDcEJJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLFlBQUE7RUFFQSxnQ0FBQTtBSHdJSjs7QUdwSUk7RUFDSSxVQUFBO0FIc0lSOztBR25JSTtFQUNJLFlBQUE7QUhxSVI7O0FHbElJO0VBQ0ksZ0NBQUE7QUhvSVI7O0FHaklJO0VBQ0ksZ0NBQUE7QUhtSVI7O0FHaElJO0VBQ0ksWUFBQTtBSGtJUjs7QUcvSEk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUhpSVI7O0FHMUhJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUg0SFI7O0FFbkpBO0VDeEJJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUlBLFlBQUE7RUFHQSxZQUFBO0VBR0EsZ0RBQUE7RUFDQSxrQkFBQTtBSHdLSjs7QUd0S0k7RUFDSSxVQUFBO0FId0tSOztBR3JLSTtFQUNJLFlBQUE7QUh1S1I7O0FHaEtJO0VBQ0ksZ0NBQUE7QUhrS1I7O0FHL0pJO0VBQ0ksWUFBQTtBSGlLUjs7QUc5Skk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUhnS1I7O0FHN0pJO0VBQ0ksZUFBQTtBSCtKUjs7QUc1Skk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSDhKUjs7QUVqTEE7RUN3QkksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUg2Sko7O0FFbkxBO0VDcUJJLGNBQUE7QUhrS0o7O0FJdE5BO0VEd0hJLGVBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsbURBQUE7QUhnR0o7O0FHOUZJO0VBQ0ksVUFBQTtBSGdHUjs7QUc3Rkk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUgrRlIiLCJmaWxlIjoibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC1mb3JtL3RhZy1pbnB1dC1mb3JtLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyay10aGVtZTogKFxyXG4gICAgY29udGFpbmVyLWJvcmRlci1ib3R0b206IDJweCBzb2xpZCBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpXHJcbik7XHJcblxyXG4kZGFyay10YWctdGhlbWU6IChcclxuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdkYXJrJyksXHJcbiAgICBjb2xvcjogI2Y5ZjlmOSxcclxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2RhcmsnKSxcclxuICAgIGJhY2tncm91bmQtaG92ZXI6IGRhcmtlbihtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpLCAxMCUpLFxyXG4gICAgY29sb3ItZm9jdXNlZDogbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKSxcclxuICAgIGNvbG9yLWhvdmVyOiAjZjlmOWY5LFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4XHJcbik7XHJcblxyXG4kZGFyay1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2RhcmsnKSxcclxuICAgIGZpbGwtZm9jdXM6IG1hcC1nZXQoJGNvbG9yLWFycm93LWZvY3VzZWQsICdkYXJrJylcclxuKTtcclxuXHJcbi5kYXJrIHRhZzpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzMyMzIzMjtcclxufVxyXG4iLCIuZGFyayB0YWc6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzMyMzIzMjtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzU1NTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzc3O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4ICNkOTUzNGY7XG59XG5cbi5uZzItdGFnLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbn1cbi5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjE5NkYzO1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjQ0MzM2O1xufVxuLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm5nMi10YWctaW5wdXQgZm9ybSB7XG4gIG1hcmdpbjogMC4xZW0gMDtcbn1cbi5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5taW5pbWFsLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubWluaW1hbC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQgLm5nMi10YWdzLWNvbnRhaW5lciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRhcmsubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ0NDtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRhcmsubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZGFyay5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDI3NWQ4O1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q5NTM0Zjtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNHB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOTUzNGY7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCBmb3JtIHtcbiAgbWFyZ2luOiAwLjFlbSAwO1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XG59XG5cbi5ib290c3RyYXAgLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2Q5NTM0Zjtcbn1cblxuLm5nMi10YWctaW5wdXRfX3RleHQtaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4ubmcyLXRhZy1pbnB1dF9fdGV4dC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubmcyLXRhZy1pbnB1dF9fdGV4dC1pbnB1dFtkaXNhYmxlZD10cnVlXSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iLCIkYm9vdHN0cmFwMy1pbmZvLXRoZW1lOiAoXHJcbiAgICBjb250YWluZXItcGFkZGluZzogNHB4LFxyXG4gICAgY29udGFpbmVyLW1hcmdpbjogJGNvbnRhaW5lci1tYXJnaW4sXHJcbiAgICBjb250YWluZXItYm9yZGVyLWJvdHRvbS1pbnZhbGlkOiAxcHggc29saWQgbWFwLWdldCgkY29sb3ItZXJyb3IsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGlucHV0LWJvcmRlcjogMXB4IHNvbGlkICNjY2MsXHJcbiAgICBpbnB1dC1wYWRkaW5nOiAkaW5wdXQtcGFkZGluZyxcclxuICAgIGlucHV0LWZvbnQtc2l6ZTogOTUlLFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQsXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuKTtcclxuXHJcbiRib290c3RyYXAzLWluZm8tdGFnLXRoZW1lOiAoXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBmb250LXNpemU6IDk1JSxcclxuICAgIGNvbG9yOiAjZmZmLFxyXG4gICAgY29sb3ItaG92ZXI6ICNmZmYsXHJcbiAgICBmb250LXdlaWdodDogNDAwLFxyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW0sXHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdCxcclxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgYmFja2dyb3VuZC1hY3RpdmU6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGJhY2tncm91bmQtaG92ZXI6IGRhcmtlbihtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnYm9vdHN0cmFwMy1pbmZvJyksIDUlKVxyXG4pO1xyXG5cclxuJGJvb3RzdHJhcDMtaW5mby1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgZmlsbC1mb2N1czogbWFwLWdldCgkY29sb3ItYXJyb3csICdib290c3RyYXAzLWluZm8nKVxyXG4pO1xyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCBtYXAtZ2V0KCRjb2xvci1lcnJvciwgJ2Jvb3RzdHJhcCcpO1xyXG59XHJcbiIsIi8vIFRIRU1FU1xyXG5cclxuQGltcG9ydCBcIi4uL2NvcmUvX2NvcmUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2RlZmF1bHQtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX21pbmltYWwtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2RhcmstdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2Jvb3RzdHJhcC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfYm9vdHN0cmFwMy1pbmZvLXRoZW1lLnNjc3NcIjtcclxuXHJcbi5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkZGVmYXVsdC10aGVtZSk7XHJcbn1cclxuXHJcbi5taW5pbWFsLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRtaW5pbWFsLXRoZW1lKTtcclxufVxyXG5cclxuLmRhcmsubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGRhcmstdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRib290c3RyYXAtdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRib290c3RyYXAzLWluZm8tdGhlbWUpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBAaW5jbHVkZSBlcnJvci1tZXNzYWdlKCRkZWZhdWx0LXRoZW1lKTtcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBAaW5jbHVkZSBlcnJvci1tZXNzYWdlKCRib290c3RyYXAtdGhlbWUpO1xyXG59XHJcbiIsIkBtaXhpbiB0YWctaW5wdXQtdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsIHRyYW5zaXRpb24pO1xyXG5cclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLXBhZGRpbmcnKTtcclxuICAgIG1pbi1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWhlaWdodCcpO1xyXG5cclxuICAgIGN1cnNvcjogdGV4dDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tJyk7XHJcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLXJhZGl1cycpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1mb2N1c2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLW1hcmdpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZzItdGFncy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSgkdGhlbWUpIHtcclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWZvbnQtc2l6ZScpO1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1jb2xvcicpO1xyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtbWFyZ2luJyk7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWctdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC13ZWlnaHQnKTtcclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdmb250LXNpemUnKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2xldHRlci1zcGFjaW5nJyk7XHJcblxyXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3InKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLXJhZGl1cycpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG5cclxuICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdtYXJnaW4nKTtcclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAncGFkZGluZycpO1xyXG5cclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmUtaGVpZ2h0Jyk7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWZvY3VzZWQnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1mb2N1c2VkJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtYWN0aXZlJyk7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItYWN0aXZlJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtaG92ZXInKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1ob3ZlcicpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHkge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlYWRvbmx5OmZvY3VzLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRhZy0tZWRpdGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWVkaXRpbmcnKTtcclxuICAgICAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLWVkaXRpbmcnKTtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWctaW5wdXQtZm9ybS10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgYm9yZGVyOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWJvcmRlcicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1wYWRkaW5nJyk7XHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtaGVpZ2h0Jyk7XHJcblxyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWZvbnQtc2l6ZScpO1xyXG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1mYW1pbHknKTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICZbZGlzYWJsZWQ9dHJ1ZV0ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZSgkdGhlbWUpIHtcclxuICAgIHdpZHRoOiBtYXAtZ2V0KCR0aGVtZSwgJ3dpZHRoJyk7XHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaGVpZ2h0Jyk7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgJ3RyYW5zaXRpb24nKTtcclxuICAgIGRpc3BsYXk6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheScpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGljb24tdGhlbWUtZm9jdXNlZCgkdGhlbWUpIHtcclxuICAgIHBhdGgge1xyXG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbC1mb2N1cycpO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9jb3JlL3N0eWxlcy90aGVtZXMvX3RoZW1lcy5zY3NzXCI7XHJcblxyXG4ubmcyLXRhZy1pbnB1dF9fdGV4dC1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtZm9ybS10aGVtZSgkZGVmYXVsdC10aGVtZSk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagInputForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tag-input-form',
          styleUrls: ['./tag-input-form.style.scss'],
          templateUrl: './tag-input-form.template.html'
        }]
      }], null, {
        onSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputTextChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        validators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        asyncValidators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input']
        }],
        inputText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./modules/components/tag-input/animations.ts":
  /*!****************************************************!*\
    !*** ./modules/components/tag-input/animations.ts ***!
    \****************************************************/

  /*! exports provided: animations */

  /***/
  function modulesComponentsTagInputAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animations", function () {
      return animations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @name animations
     */


    var animations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      offset: 0,
      transform: 'translate(0px, 20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0.3,
      offset: 0.3,
      transform: 'translate(0px, -10px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0.5,
      offset: 0.5,
      transform: 'translate(0px, 0px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0.75,
      offset: 0.75,
      transform: 'translate(0px, 5px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      offset: 1,
      transform: 'translate(0px, 0px)'
    })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(-15px)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(100%)',
      offset: 1.0
    })]))])])];
    /***/
  },

  /***/
  "./modules/components/tag-input/index.ts":
  /*!***********************************************!*\
    !*** ./modules/components/tag-input/index.ts ***!
    \***********************************************/

  /*! exports provided: TagInputComponent */

  /***/
  function modulesComponentsTagInputIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tag_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tag-input */
    "./modules/components/tag-input/tag-input.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
      return _tag_input__WEBPACK_IMPORTED_MODULE_0__["TagInputComponent"];
    });
    /***/

  },

  /***/
  "./modules/components/tag-input/tag-input.ts":
  /*!***************************************************!*\
    !*** ./modules/components/tag-input/tag-input.ts ***!
    \***************************************************/

  /*! exports provided: TagInputComponent */

  /***/
  function modulesComponentsTagInputTagInputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
      return TagInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../core/accessor */
    "./modules/core/accessor.ts");
    /* harmony import */


    var _core_helpers_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/helpers/listen */
    "./modules/core/helpers/listen.ts");
    /* harmony import */


    var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core/constants */
    "./modules/core/constants/index.ts");
    /* harmony import */


    var _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../core/providers/drag-provider */
    "./modules/core/providers/drag-provider.ts");
    /* harmony import */


    var _tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../tag-input-form/tag-input-form.component */
    "./modules/components/tag-input-form/tag-input-form.component.ts");
    /* harmony import */


    var _tag_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../tag/tag.component */
    "./modules/components/tag/tag.component.ts");
    /* harmony import */


    var _animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./animations */
    "./modules/components/tag-input/animations.ts");
    /* harmony import */


    var _defaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../defaults */
    "./modules/defaults.ts");
    /* harmony import */


    var _dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../dropdown/tag-input-dropdown.component */
    "./modules/components/dropdown/tag-input-dropdown.component.ts"); // angular
    // ng2-tag-input


    function TagInputComponent_tag_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tag", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function TagInputComponent_tag_2_Template_tag_onSelect_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var item_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.selectItem(item_r3);
        })("onRemove", function TagInputComponent_tag_2_Template_tag_onRemove_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.onRemoveRequested(item_r3, i_r4);
        })("onKeyDown", function TagInputComponent_tag_2_Template_tag_onKeyDown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.handleKeydown($event);
        })("onTagEdited", function TagInputComponent_tag_2_Template_tag_onTagEdited_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.updateEditedTag($event);
        })("onBlur", function TagInputComponent_tag_2_Template_tag_onBlur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r10.onTagBlurred($event, i_r4);
        })("dragstart", function TagInputComponent_tag_2_Template_tag_dragstart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.dragZone ? ctx_r11.onDragStarted($event, item_r3, i_r4) : undefined;
        })("drop", function TagInputComponent_tag_2_Template_tag_drop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.dragZone ? ctx_r12.onTagDropped($event, i_r4) : undefined;
        })("dragenter", function TagInputComponent_tag_2_Template_tag_dragenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.dragZone ? ctx_r13.onDragOver($event) : undefined;
        })("dragover", function TagInputComponent_tag_2_Template_tag_dragover_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.dragZone ? ctx_r14.onDragOver($event, i_r4) : undefined;
        })("dragleave", function TagInputComponent_tag_2_Template_tag_dragleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.dragZone ? ctx_r15.dragProvider.onDragEnd() : undefined;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("draggable", ctx_r0.editable);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("canAddTag", ctx_r0.isTagValid)("disabled", ctx_r0.disable)("@animation", ctx_r0.animationMetadata)("hasRipple", ctx_r0.ripple)("index", i_r4)("removable", ctx_r0.removable)("editable", ctx_r0.editable)("displayBy", ctx_r0.displayBy)("identifyBy", ctx_r0.identifyBy)("template", !!ctx_r0.hasCustomTemplate() ? ctx_r0.templates.first : undefined)("draggable", ctx_r0.dragZone)("model", item_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0);
      }
    }

    function TagInputComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
      }
    }

    function TagInputComponent_div_6_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r17);
      }
    }

    function TagInputComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagInputComponent_div_6_p_1_Template, 3, 1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.theme);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.errors);
      }
    }

    var _c0 = ["*"]; // angular universal hacks

    /* tslint:disable-next-line */

    var DragEvent = window.DragEvent;
    var CUSTOM_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return TagInputComponent;
      }),
      multi: true
    };

    var TagInputComponent = /*#__PURE__*/function (_core_accessor__WEBPA) {
      _inherits(TagInputComponent, _core_accessor__WEBPA);

      var _super = _createSuper(TagInputComponent);

      function TagInputComponent(renderer, dragProvider) {
        var _this8$listeners;

        var _this8;

        _classCallCheck(this, TagInputComponent);

        _this8 = _super.call(this);
        _this8.renderer = renderer;
        _this8.dragProvider = dragProvider;
        /**
         * @name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */

        _this8.separatorKeys = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.separatorKeys;
        /**
         * @name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */

        _this8.separatorKeyCodes = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.separatorKeyCodes;
        /**
         * @name placeholder
         * @desc the placeholder of the input text
         */

        _this8.placeholder = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.placeholder;
        /**
         * @name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */

        _this8.secondaryPlaceholder = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.secondaryPlaceholder;
        /**
         * @name maxItems
         * @desc maximum number of items that can be added
         */

        _this8.maxItems = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.maxItems;
        /**
         * @name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */

        _this8.validators = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.validators;
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */

        _this8.asyncValidators = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.asyncValidators;
        /**
        * - if set to true, it will only possible to add items from the autocomplete
        * @name onlyFromAutocomplete
        */

        _this8.onlyFromAutocomplete = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onlyFromAutocomplete;
        /**
         * @name errorMessages
         */

        _this8.errorMessages = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.errorMessages;
        /**
         * @name theme
         */

        _this8.theme = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.theme;
        /**
         * @name onTextChangeDebounce
         */

        _this8.onTextChangeDebounce = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * @name id
         */

        _this8.inputId = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.inputId;
        /**
         * - custom class assigned to the input
         */

        _this8.inputClass = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.inputClass;
        /**
         * - option to clear text input when the form is blurred
         * @name clearOnBlur
         */

        _this8.clearOnBlur = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.clearOnBlur;
        /**
         * - hideForm
         * @name clearOnBlur
         */

        _this8.hideForm = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.hideForm;
        /**
         * @name addOnBlur
         */

        _this8.addOnBlur = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.addOnBlur;
        /**
         * @name addOnPaste
         */

        _this8.addOnPaste = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * @name pasteSplitPattern
         */

        _this8.pasteSplitPattern = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.pasteSplitPattern;
        /**
         * @name blinkIfDupe
         */

        _this8.blinkIfDupe = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.blinkIfDupe;
        /**
         * @name removable
         */

        _this8.removable = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.removable;
        /**
         * @name editable
         */

        _this8.editable = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.editable;
        /**
         * @name allowDupes
         */

        _this8.allowDupes = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.allowDupes;
        /**
         * @description if set to true, the newly added tags will be added as strings, and not objects
         * @name modelAsStrings
         */

        _this8.modelAsStrings = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.modelAsStrings;
        /**
         * @name trimTags
         */

        _this8.trimTags = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.trimTags;
        /**
         * @name ripple
         */

        _this8.ripple = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.ripple;
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */

        _this8.tabindex = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.tabIndex;
        /**
         * @name disable
         */

        _this8.disable = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.disable;
        /**
         * @name dragZone
         */

        _this8.dragZone = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.dragZone;
        /**
         * @name onRemoving
         */

        _this8.onRemoving = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onRemoving;
        /**
         * @name onAdding
         */

        _this8.onAdding = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.onAdding;
        /**
         * @name animationDuration
         */

        _this8.animationDuration = _defaults__WEBPACK_IMPORTED_MODULE_11__["defaults"].tagInput.animationDuration;
        /**
         * @name onAdd
         * @desc event emitted when adding a new item
         */

        _this8.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         * @desc event emitted when removing an existing item
         */

        _this8.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onSelect
         * @desc event emitted when selecting an item
         */

        _this8.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is focused
         */

        _this8.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is blurred
         */

        _this8.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTextChange
         * @desc event emitted when the input value changes
         */

        _this8.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when text is pasted in the form
         * @name onPaste
         */

        _this8.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag entered is not valid
         * @name onValidationError
         */

        _this8.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag is edited
         * @name onTagEdited
         */

        _this8.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name isLoading
         */

        _this8.isLoading = false;
        /**
         * @name listeners
         * @desc array of events that get fired using @fireEvents
         */

        _this8.listeners = (_this8$listeners = {}, _defineProperty(_this8$listeners, _core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYDOWN"], []), _defineProperty(_this8$listeners, _core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYUP"], []), _this8$listeners);
        /**
         * @description emitter for the 2-way data binding inputText value
         * @name inputTextChange
         */

        _this8.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description private variable to bind get/set
         * @name inputTextValue
         */

        _this8.inputTextValue = '';
        _this8.errors = [];
        /**
         * @name appendTag
         * @param tag {TagModel}
         */

        _this8.appendTag = function (tag) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this8.items.length;
          var items = _this8.items;
          var model = _this8.modelAsStrings ? tag[_this8.identifyBy] : tag;
          _this8.items = [].concat(_toConsumableArray(items.slice(0, index)), [model], _toConsumableArray(items.slice(index, items.length)));
        };
        /**
         * @name createTag
         * @param model
         */


        _this8.createTag = function (model) {
          var _Object$assign2;

          var trim = function trim(val, key) {
            return typeof val === 'string' ? val.trim() : val[key];
          };

          return Object.assign(Object.assign({}, typeof model !== 'string' ? model : {}), (_Object$assign2 = {}, _defineProperty(_Object$assign2, _this8.displayBy, _this8.trimTags ? trim(model, _this8.displayBy) : model), _defineProperty(_Object$assign2, _this8.identifyBy, _this8.trimTags ? trim(model, _this8.identifyBy) : model), _Object$assign2));
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */


        _this8.isTagValid = function (tag) {
          var fromAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var selectedItem = _this8.dropdown ? _this8.dropdown.selectedItem : undefined;

          var value = _this8.getItemDisplay(tag).trim();

          if (selectedItem && !fromAutocomplete || !value) {
            return false;
          }

          var dupe = _this8.findDupe(tag, fromAutocomplete); // if so, give a visual cue and return false


          if (!_this8.allowDupes && dupe && _this8.blinkIfDupe) {
            var model = _this8.tags.find(function (item) {
              return _this8.getItemValue(item.model) === _this8.getItemValue(dupe);
            });

            if (model) {
              model.blink();
            }
          }

          var isFromAutocomplete = fromAutocomplete && _this8.onlyFromAutocomplete;
          var assertions = [// 1. there must be no dupe OR dupes are allowed
          !dupe || _this8.allowDupes, // 2. check max items has not been reached
          !_this8.maxItemsReached, // 3. check item comes from autocomplete or onlyFromAutocomplete is false
          isFromAutocomplete || !_this8.onlyFromAutocomplete];
          return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * @name onPasteCallback
         * @param data
         */


        _this8.onPasteCallback = function (data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_assertThisInitialized(_this8), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this9 = this;

            var getText, text, requests, resetInput;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    getText = function getText() {
                      var isIE = Boolean(window.clipboardData);
                      var clipboardData = isIE ? window.clipboardData : data.clipboardData;
                      var type = isIE ? 'Text' : 'text/plain';
                      return clipboardData === null ? '' : clipboardData.getData(type) || '';
                    };

                    text = getText();
                    requests = text.split(this.pasteSplitPattern).map(function (item) {
                      var tag = _this9.createTag(item);

                      _this9.setInputValue(tag[_this9.displayBy]);

                      return _this9.onAddingRequested(false, tag);
                    });

                    resetInput = function resetInput() {
                      return setTimeout(function () {
                        return _this9.setInputValue('');
                      }, 50);
                    };

                    Promise.all(requests).then(function () {
                      _this9.onPaste.emit(text);

                      resetInput();
                    })["catch"](resetInput);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        return _this8;
      }
      /**
       * @name inputText
       */


      _createClass(TagInputComponent, [{
        key: "ngAfterViewInit",

        /**
         * @name ngAfterViewInit
         */
        value: function ngAfterViewInit() {
          var _this10 = this;

          // set up listeners
          this.setUpKeypressListeners();
          this.setupSeparatorKeysListener();
          this.setUpInputKeydownListeners();

          if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
          } // if clear on blur is set to true, subscribe to the event and clear the text's form


          if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
          } // if addOnPaste is set to true, register the handler and add items


          if (this.addOnPaste) {
            this.setUpOnPasteListener();
          }

          var statusChanges$ = this.inputForm.form.statusChanges;
          statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) {
            return status !== 'PENDING';
          })).subscribe(function () {
            _this10.errors = _this10.inputForm.getErrorMessages(_this10.errorMessages);
          });
          this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) {
            return status === 'PENDING' || _this10.isLoading;
          })); // if hideForm is set to true, remove the input

          if (this.hideForm) {
            this.inputForm.destroy();
          }
        }
        /**
         * @name ngOnInit
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // if the number of items specified in the model is > of the value of maxItems
          // degrade gracefully and let the max number of items to be the number of items in the model
          // though, warn the user.
          var hasReachedMaxItems = this.maxItems !== undefined && this.items && this.items.length > this.maxItems;

          if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(_core_constants__WEBPACK_IMPORTED_MODULE_6__["MAX_ITEMS_WARNING"]);
          } // Setting editable to false to fix problem with tags in IE still being editable when
          // onlyFromAutocomplete is true


          this.editable = this.onlyFromAutocomplete ? false : this.editable;
          this.setAnimationMetadata();
        }
        /**
         * @name onRemoveRequested
         * @param tag
         * @param index
         */

      }, {
        key: "onRemoveRequested",
        value: function onRemoveRequested(tag, index) {
          var _this11 = this;

          return new Promise(function (resolve) {
            var subscribeFn = function subscribeFn(model) {
              _this11.removeItem(model, index);

              resolve(tag);
            };

            _this11.onRemoving ? _this11.onRemoving(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(subscribeFn) : subscribeFn(tag);
          });
        }
        /**
         * @name onAddingRequested
         * @param fromAutocomplete {boolean}
         * @param tag {TagModel}
         * @param index? {number}
         * @param giveupFocus? {boolean}
         */

      }, {
        key: "onAddingRequested",
        value: function onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            var subscribeFn = function subscribeFn(model) {
              return _this12.addItem(fromAutocomplete, model, index, giveupFocus).then(resolve)["catch"](reject);
            };

            return _this12.onAdding ? _this12.onAdding(tag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(subscribeFn, reject) : subscribeFn(tag);
          });
        }
        /**
         * @name selectItem
         * @desc selects item passed as parameter as the selected tag
         * @param item
         * @param emit
         */

      }, {
        key: "selectItem",
        value: function selectItem(item) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var isReadonly = item && typeof item !== 'string' && item.readonly;

          if (isReadonly || this.selectedTag === item) {
            return;
          }

          this.selectedTag = item;

          if (emit) {
            this.onSelect.emit(item);
          }
        }
        /**
         * @name fireEvents
         * @desc goes through the list of the events for a given eventName, and fires each of them
         * @param eventName
         * @param $event
         */

      }, {
        key: "fireEvents",
        value: function fireEvents(eventName, $event) {
          var _this13 = this;

          this.listeners[eventName].forEach(function (listener) {
            return listener.call(_this13, $event);
          });
        }
        /**
         * @name handleKeydown
         * @desc handles action when the user hits a keyboard key
         * @param data
         */

      }, {
        key: "handleKeydown",
        value: function handleKeydown(data) {
          var event = data.event;
          var key = event.keyCode || event.which;
          var shiftKey = event.shiftKey || false;

          switch (_core_constants__WEBPACK_IMPORTED_MODULE_6__["KEY_PRESS_ACTIONS"][key]) {
            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].DELETE:
              if (this.selectedTag && this.removable) {
                var index = this.items.indexOf(this.selectedTag);
                this.onRemoveRequested(this.selectedTag, index);
              }

              break;

            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].SWITCH_PREV:
              this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["PREV"]);
              break;

            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].SWITCH_NEXT:
              this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"]);
              break;

            case _core_constants__WEBPACK_IMPORTED_MODULE_6__["ACTIONS_KEYS"].TAB:
              if (shiftKey) {
                if (this.isFirstTag(data.model)) {
                  return;
                }

                this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["PREV"]);
              } else {
                if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                  return;
                }

                this.moveToTag(data.model, _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"]);
              }

              break;

            default:
              return;
          } // prevent default behaviour


          event.preventDefault();
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.onAddingRequested(false, this.formValue);

                  case 3:
                    _context3.next = 8;
                    break;

                  case 5:
                    _context3.prev = 5;
                    _context3.t0 = _context3["catch"](0);
                    return _context3.abrupt("return");

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 5]]);
          }));
        }
        /**
         * @name setInputValue
         * @param value
         */

      }, {
        key: "setInputValue",
        value: function setInputValue(value) {
          var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var control = this.getControl(); // update form value with the transformed item

          control.setValue(value, {
            emitEvent: emitEvent
          });
        }
        /**
         * @name getControl
         */

      }, {
        key: "getControl",
        value: function getControl() {
          return this.inputForm.value;
        }
        /**
         * @name focus
         * @param applyFocus
         * @param displayAutocomplete
         */

      }, {
        key: "focus",
        value: function focus() {
          var applyFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var displayAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (this.dragProvider.getState('dragging')) {
            return;
          }

          this.selectItem(undefined, false);

          if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
          }
        }
        /**
         * @name blur
         */

      }, {
        key: "blur",
        value: function blur() {
          this.onTouched();
          this.onBlur.emit(this.formValue);
        }
        /**
         * @name hasErrors
         */

      }, {
        key: "hasErrors",
        value: function hasErrors() {
          return !!this.inputForm && this.inputForm.hasErrors();
        }
        /**
         * @name isInputFocused
         */

      }, {
        key: "isInputFocused",
        value: function isInputFocused() {
          return !!this.inputForm && this.inputForm.isInputFocused();
        }
        /**
         * - this is the one way I found to tell if the template has been passed and it is not
         * the template for the menu item
         * @name hasCustomTemplate
         */

      }, {
        key: "hasCustomTemplate",
        value: function hasCustomTemplate() {
          var template = this.templates ? this.templates.first : undefined;
          var menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : undefined;
          return Boolean(template && template !== menuTemplate);
        }
        /**
         * @name maxItemsReached
         */

      }, {
        key: "onDragStarted",

        /**3
         * @name onDragStarted
         * @param event
         * @param index
         */
        value: function onDragStarted(event, tag, index) {
          event.stopPropagation();
          var item = {
            zone: this.dragZone,
            tag: tag,
            index: index
          };
          this.dragProvider.setSender(this);
          this.dragProvider.setDraggedItem(event, item);
          this.dragProvider.setState({
            dragging: true,
            index: index
          });
        }
        /**
         * @name onDragOver
         * @param event
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(event, index) {
          this.dragProvider.setState({
            dropping: true
          });
          this.dragProvider.setReceiver(this);
          event.preventDefault();
        }
        /**
         * @name onTagDropped
         * @param event
         * @param index
         */

      }, {
        key: "onTagDropped",
        value: function onTagDropped(event, index) {
          var item = this.dragProvider.getDraggedItem(event);

          if (!item || item.zone !== this.dragZone) {
            return;
          }

          this.dragProvider.onTagDropped(item.tag, item.index, index);
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * @name isDropping
         */

      }, {
        key: "isDropping",
        value: function isDropping() {
          var isReceiver = this.dragProvider.receiver === this;
          var isDropping = this.dragProvider.getState('dropping');
          return Boolean(isReceiver && isDropping);
        }
        /**
         * @name onTagBlurred
         * @param changedElement {TagModel}
         * @param index {number}
         */

      }, {
        key: "onTagBlurred",
        value: function onTagBlurred(changedElement, index) {
          this.items[index] = changedElement;
          this.blur();
        }
        /**
         * @name trackBy
         * @param items
         */

      }, {
        key: "trackBy",
        value: function trackBy(index, item) {
          return item[this.identifyBy];
        }
        /**
         * @name updateEditedTag
         * @param tag
         */

      }, {
        key: "updateEditedTag",
        value: function updateEditedTag(_ref3) {
          var tag = _ref3.tag,
              index = _ref3.index;
          this.onTagEdited.emit(tag);
        }
        /**
         * @name moveToTag
         * @param item
         * @param direction
         */

      }, {
        key: "moveToTag",
        value: function moveToTag(item, direction) {
          var isLast = this.isLastTag(item);
          var isFirst = this.isFirstTag(item);
          var stopSwitch = direction === _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"] && isLast || direction === _core_constants__WEBPACK_IMPORTED_MODULE_6__["PREV"] && isFirst;

          if (stopSwitch) {
            this.focus(true);
            return;
          }

          var offset = direction === _core_constants__WEBPACK_IMPORTED_MODULE_6__["NEXT"] ? 1 : -1;
          var index = this.getTagIndex(item) + offset;
          var tag = this.getTagAtIndex(index);
          return tag.select.call(tag);
        }
        /**
         * @name isFirstTag
         * @param item {TagModel}
         */

      }, {
        key: "isFirstTag",
        value: function isFirstTag(item) {
          return this.tags.first.model === item;
        }
        /**
         * @name isLastTag
         * @param item {TagModel}
         */

      }, {
        key: "isLastTag",
        value: function isLastTag(item) {
          return this.tags.last.model === item;
        }
        /**
         * @name getTagIndex
         * @param item
         */

      }, {
        key: "getTagIndex",
        value: function getTagIndex(item) {
          var tags = this.tags.toArray();
          return tags.findIndex(function (tag) {
            return tag.model === item;
          });
        }
        /**
         * @name getTagAtIndex
         * @param index
         */

      }, {
        key: "getTagAtIndex",
        value: function getTagAtIndex(index) {
          var tags = this.tags.toArray();
          return tags[index];
        }
        /**
         * @name removeItem
         * @desc removes an item from the array of the model
         * @param tag {TagModel}
         * @param index {number}
         */

      }, {
        key: "removeItem",
        value: function removeItem(tag, index) {
          this.items = this.getItemsWithout(index); // if the removed tag was selected, set it as undefined

          if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
          } // focus input


          this.focus(true, false); // emit remove event

          this.onRemove.emit(tag);
        }
        /**
         * @name addItem
         * @desc adds the current text model to the items array
         * @param fromAutocomplete {boolean}
         * @param item {TagModel}
         * @param index? {number}
         * @param giveupFocus? {boolean}
         */

      }, {
        key: "addItem",
        value: function addItem() {
          var _this14 = this;

          var fromAutocomplete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var item = arguments.length > 1 ? arguments[1] : undefined;
          var index = arguments.length > 2 ? arguments[2] : undefined;
          var giveupFocus = arguments.length > 3 ? arguments[3] : undefined;
          var display = this.getItemDisplay(item);
          var tag = this.createTag(item);

          if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
          }

          return new Promise(function (resolve, reject) {
            /**
             * @name reset
             */
            var reset = function reset() {
              // reset control and focus input
              _this14.setInputValue('');

              if (giveupFocus) {
                _this14.focus(false, false);
              } else {
                // focus input
                _this14.focus(true, false);
              }

              resolve(display);
            };

            var appendItem = function appendItem() {
              _this14.appendTag(tag, index); // emit event


              _this14.onAdd.emit(tag);

              if (!_this14.dropdown) {
                return;
              }

              _this14.dropdown.hide();

              if (_this14.dropdown.showDropdownIfEmpty) {
                _this14.dropdown.show();
              }
            };

            var status = _this14.inputForm.form.status;

            var isTagValid = _this14.isTagValid(tag, fromAutocomplete);

            var onValidationError = function onValidationError() {
              _this14.onValidationError.emit(tag);

              return reject();
            };

            if (status === 'VALID' && isTagValid) {
              appendItem();
              return reset();
            }

            if (status === 'INVALID' || !isTagValid) {
              reset();
              return onValidationError();
            }

            if (status === 'PENDING') {
              var statusUpdate$ = _this14.inputForm.form.statusChanges;
              return statusUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (statusUpdate) {
                return statusUpdate !== 'PENDING';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (statusUpdate) {
                if (statusUpdate === 'VALID' && isTagValid) {
                  appendItem();
                  return reset();
                } else {
                  reset();
                  return onValidationError();
                }
              });
            }
          });
        }
        /**
         * @name setupSeparatorKeysListener
         */

      }, {
        key: "setupSeparatorKeysListener",
        value: function setupSeparatorKeysListener() {
          var _this15 = this;

          var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;

          var listener = function listener($event) {
            var hasKeyCode = _this15.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this15.separatorKeys.indexOf($event.key) >= 0; // the keyCode of keydown event is 229 when IME is processing the key event.

            var isIMEProcessing = $event.keyCode === 229;

            if (hasKeyCode || hasKey && !isIMEProcessing) {
              $event.preventDefault();

              _this15.onAddingRequested(false, _this15.formValue)["catch"](function () {});
            }
          };

          _core_helpers_listen__WEBPACK_IMPORTED_MODULE_5__["listen"].call(this, _core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYDOWN"], listener, useSeparatorKeys);
        }
        /**
         * @name setUpKeypressListeners
         */

      }, {
        key: "setUpKeypressListeners",
        value: function setUpKeypressListeners() {
          var _this16 = this;

          var listener = function listener($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;

            if (isCorrectKey && !_this16.formValue && _this16.items.length) {
              _this16.tags.last.select.call(_this16.tags.last);
            }
          }; // setting up the keypress listeners


          _core_helpers_listen__WEBPACK_IMPORTED_MODULE_5__["listen"].call(this, _core_constants__WEBPACK_IMPORTED_MODULE_6__["KEYDOWN"], listener);
        }
        /**
         * @name setUpKeydownListeners
         */

      }, {
        key: "setUpInputKeydownListeners",
        value: function setUpInputKeydownListeners() {
          var _this17 = this;

          this.inputForm.onKeydown.subscribe(function (event) {
            if (event.key === 'Backspace' && _this17.formValue.trim() === '') {
              event.preventDefault();
            }
          });
        }
        /**
         * @name setUpOnPasteListener
         */

      }, {
        key: "setUpOnPasteListener",
        value: function setUpOnPasteListener() {
          var _this18 = this;

          var input = this.inputForm.input.nativeElement; // attach listener to input

          this.renderer.listen(input, 'paste', function (event) {
            _this18.onPasteCallback(event);

            event.preventDefault();
            return true;
          });
        }
        /**
         * @name setUpTextChangeSubscriber
         */

      }, {
        key: "setUpTextChangeSubscriber",
        value: function setUpTextChangeSubscriber() {
          var _this19 = this;

          this.inputForm.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.onTextChangeDebounce)).subscribe(function (value) {
            _this19.onTextChange.emit(value.item);
          });
        }
        /**
         * @name setUpOnBlurSubscriber
         */

      }, {
        key: "setUpOnBlurSubscriber",
        value: function setUpOnBlurSubscriber() {
          var _this20 = this;

          var filterFn = function filterFn() {
            var isVisible = _this20.dropdown && _this20.dropdown.isVisible;
            return !isVisible && !!_this20.formValue;
          };

          this.inputForm.onBlur.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(filterFn)).subscribe(function () {
            var reset = function reset() {
              return _this20.setInputValue('');
            };

            if (_this20.addOnBlur) {
              return _this20.onAddingRequested(false, _this20.formValue, undefined, true).then(reset)["catch"](reset);
            }

            reset();
          });
        }
        /**
         * @name findDupe
         * @param tag
         * @param isFromAutocomplete
         */

      }, {
        key: "findDupe",
        value: function findDupe(tag, isFromAutocomplete) {
          var _this21 = this;

          var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
          var id = tag[identifyBy];
          return this.items.find(function (item) {
            return _this21.getItemValue(item) === id;
          });
        }
        /**
         * @name setAnimationMetadata
         */

      }, {
        key: "setAnimationMetadata",
        value: function setAnimationMetadata() {
          this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
          };
        }
      }, {
        key: "inputText",
        get: function get() {
          return this.inputTextValue;
        }
        /**
         * @name inputText
         * @param text
         */
        ,
        set: function set(text) {
          this.inputTextValue = text;
          this.inputTextChange.emit(text);
        }
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */

      }, {
        key: "tabindexAttr",
        get: function get() {
          return this.tabindex !== '' ? '-1' : '';
        }
      }, {
        key: "maxItemsReached",
        get: function get() {
          return this.maxItems !== undefined && this.items.length >= this.maxItems;
        }
        /**
         * @name formValue
         */

      }, {
        key: "formValue",
        get: function get() {
          var form = this.inputForm.value;
          return form ? form.value : '';
        }
      }]);

      return TagInputComponent;
    }(_core_accessor__WEBPACK_IMPORTED_MODULE_4__["TagInputAccessor"]);

    TagInputComponent.ɵfac = function TagInputComponent_Factory(t) {
      return new (t || TagInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_7__["DragProvider"]));
    };

    TagInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TagInputComponent,
      selectors: [["tag-input"]],
      contentQueries: function TagInputComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["TagInputDropdown"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function TagInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_8__["TagInputForm"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_tag_tag_component__WEBPACK_IMPORTED_MODULE_9__["TagComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputForm = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tags = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TagInputComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.tabindexAttr);
        }
      },
      inputs: {
        separatorKeys: "separatorKeys",
        separatorKeyCodes: "separatorKeyCodes",
        placeholder: "placeholder",
        secondaryPlaceholder: "secondaryPlaceholder",
        maxItems: "maxItems",
        validators: "validators",
        asyncValidators: "asyncValidators",
        onlyFromAutocomplete: "onlyFromAutocomplete",
        errorMessages: "errorMessages",
        theme: "theme",
        onTextChangeDebounce: "onTextChangeDebounce",
        inputId: "inputId",
        inputClass: "inputClass",
        clearOnBlur: "clearOnBlur",
        hideForm: "hideForm",
        addOnBlur: "addOnBlur",
        addOnPaste: "addOnPaste",
        pasteSplitPattern: "pasteSplitPattern",
        blinkIfDupe: "blinkIfDupe",
        removable: "removable",
        editable: "editable",
        allowDupes: "allowDupes",
        modelAsStrings: "modelAsStrings",
        trimTags: "trimTags",
        inputText: "inputText",
        ripple: "ripple",
        tabindex: "tabindex",
        disable: "disable",
        dragZone: "dragZone",
        onRemoving: "onRemoving",
        onAdding: "onAdding",
        animationDuration: "animationDuration"
      },
      outputs: {
        onAdd: "onAdd",
        onRemove: "onRemove",
        onSelect: "onSelect",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onTextChange: "onTextChange",
        onPaste: "onPaste",
        onValidationError: "onValidationError",
        onTagEdited: "onTagEdited",
        inputTextChange: "inputTextChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CUSTOM_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 8,
      vars: 27,
      consts: [[1, "ng2-tag-input", 3, "ngClass", "click", "drop", "dragenter", "dragover", "dragend"], [1, "ng2-tags-container"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "inputText", "disabled", "validators", "asyncValidators", "hidden", "placeholder", "inputClass", "inputId", "tabindex", "onSubmit", "onBlur", "click", "onKeydown", "onKeyup", "inputTextChange"], ["class", "progress-bar", 4, "ngIf"], ["class", "error-messages", 3, "ngClass", 4, "ngIf"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave"], [1, "progress-bar"], [1, "error-messages", 3, "ngClass"], ["class", "error-message", 4, "ngFor", "ngForOf"], [1, "error-message"]],
      template: function TagInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagInputComponent_Template_div_click_0_listener() {
            return ctx.focus(true, false);
          })("drop", function TagInputComponent_Template_div_drop_0_listener($event) {
            return ctx.dragZone ? ctx.onTagDropped($event, undefined) : undefined;
          })("dragenter", function TagInputComponent_Template_div_dragenter_0_listener($event) {
            return ctx.dragZone ? ctx.onDragOver($event) : undefined;
          })("dragover", function TagInputComponent_Template_div_dragover_0_listener($event) {
            return ctx.dragZone ? ctx.onDragOver($event) : undefined;
          })("dragend", function TagInputComponent_Template_div_dragend_0_listener() {
            return ctx.dragZone ? ctx.dragProvider.onDragEnd() : undefined;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputComponent_tag_2_Template, 1, 14, "tag", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tag-input-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSubmit", function TagInputComponent_Template_tag_input_form_onSubmit_3_listener() {
            return ctx.onFormSubmit();
          })("onBlur", function TagInputComponent_Template_tag_input_form_onBlur_3_listener() {
            return ctx.blur();
          })("click", function TagInputComponent_Template_tag_input_form_click_3_listener() {
            return ctx.dropdown ? ctx.dropdown.show() : undefined;
          })("onKeydown", function TagInputComponent_Template_tag_input_form_onKeydown_3_listener($event) {
            return ctx.fireEvents("keydown", $event);
          })("onKeyup", function TagInputComponent_Template_tag_input_form_onKeyup_3_listener($event) {
            return ctx.fireEvents("keyup", $event);
          })("inputTextChange", function TagInputComponent_Template_tag_input_form_inputTextChange_3_listener($event) {
            return ctx.inputText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TagInputComponent_div_4_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TagInputComponent_div_6_Template, 2, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-tag-input--dropping", ctx.isDropping())("ng2-tag-input--disabled", ctx.disable)("ng2-tag-input--loading", ctx.isLoading)("ng2-tag-input--invalid", ctx.hasErrors())("ng2-tag-input--focused", ctx.isInputFocused());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.theme);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputText", ctx.inputText)("disabled", ctx.disable)("validators", ctx.validators)("asyncValidators", ctx.asyncValidators)("hidden", ctx.maxItemsReached)("placeholder", ctx.items.length ? ctx.placeholder : ctx.secondaryPlaceholder)("inputClass", ctx.inputClass)("inputId", ctx.inputId)("tabindex", ctx.tabindex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 25, ctx.isProgressBarVisible$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasErrors());
        }
      },
      styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 1px #323232;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #777;\n}\n\n.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n  box-shadow: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 1px #d9534f;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #2196F3;\n}\n\n.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #f44336;\n}\n\n.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0.1em 0;\n}\n\n.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0275d8;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #d9534f;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d9534f;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0.1em 0;\n}\n\n.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0;\n}\n\n.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n\n.progress-bar[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]:before {\n  height: 2px;\n  width: 100%;\n  margin: 0;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n}\n\n.progress-bar[_ngcontent-%COMP%]:before {\n  background-color: #82c4f8;\n  content: \"\";\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\ntag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  letter-spacing: 0.05rem;\n  color: #444;\n  border-radius: 16px;\n  transition: all 0.3s;\n  margin: 0.1rem 0.3rem 0.1rem 0;\n  padding: 0.08rem 0.45rem;\n  height: 32px;\n  line-height: 34px;\n  background: #efefef;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\ntag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus {\n  background: #2196F3;\n  color: #fff;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n\ntag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active {\n  background: #0d8aee;\n  color: #fff;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n\ntag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #e2e2e2;\n  color: initial;\n  box-shadow: 0 2px 3px 1px #d4d1d1;\n}\n\ntag.readonly[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\ntag.readonly[_ngcontent-%COMP%]:focus, tag[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\ntag.tag--editing[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  cursor: text;\n}\n\n.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 0;\n  background: #f9f9f9;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus {\n  background: #d0d0d0;\n  color: initial;\n}\n\n.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active {\n  background: #d0d0d0;\n  color: initial;\n}\n\n.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #ececec;\n}\n\n.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.minimal[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%] {\n  cursor: text;\n}\n\n.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 3px;\n  background: #444;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus {\n  background: #efefef;\n  color: #444;\n}\n\n.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #2b2b2b;\n  color: #f9f9f9;\n}\n\n.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.dark[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%] {\n  cursor: text;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 0.25rem;\n  background: #0275d8;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus {\n  background: #025aa5;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active {\n  background: #025aa5;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #0267bf;\n  color: #f9f9f9;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%] {\n  cursor: text;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 95%;\n  color: #fff;\n  border-radius: 0.25em;\n  background: #5bc0de;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  padding: 0.25em 0.6em;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus {\n  background: #28a1c5;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active {\n  background: #28a1c5;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #46b8da;\n  color: #fff;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.bootstrap3-info[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%] {\n  cursor: text;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQvQzpcXERldmVsb3BtZW50XFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFx0aGVtZXNcXF9kYXJrLXRoZW1lLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dC5zdHlsZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX2Jvb3RzdHJhcDMtaW5mby10aGVtZS5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXHRoZW1lc1xcX3RoZW1lcy5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb3JlXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsIm1vZHVsZXMvY29tcG9uZW50cy90YWctaW5wdXQvQzpcXERldmVsb3BtZW50XFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29yZVxcc3R5bGVzXFxjb21wb25lbnRzXFxfcHJvZ3Jlc3MtYmFyLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L0M6XFxEZXZlbG9wbWVudFxcbmd4LWNoaXBzL21vZHVsZXNcXGNvcmVcXHN0eWxlc1xcY29tcG9uZW50c1xcX3RhZy5zY3NzIiwibW9kdWxlcy9jb21wb25lbnRzL3RhZy1pbnB1dC9DOlxcRGV2ZWxvcG1lbnRcXG5neC1jaGlwcy9tb2R1bGVzXFxjb21wb25lbnRzXFx0YWctaW5wdXRcXHRhZy1pbnB1dC5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLDZCQUFBO0FDbEJKOztBQzRCQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FEMUJKOztBQzZCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEMUJKOztBQzZCQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FEMUJKOztBQzZCQTtFQUNJLFdBQUE7QUQxQko7O0FDNkJBO0VBQ0ksV0FBQTtBRDFCSjs7QUM2QkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUQxQko7O0FDNkJBO0VBQ0ksOENBQUE7RUFDQSxzQkFBQTtBRDFCSjs7QUM2QkE7RUFDSSxtQ0FBQTtBRDFCSjs7QUV6Q0E7RUNSSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBRUEsZ0NBQUE7QUhpREo7O0FHN0NJO0VBQ0ksVUFBQTtBSCtDUjs7QUc1Q0k7RUFDSSxZQUFBO0FIOENSOztBRzNDSTtFQUNJLGdDQUFBO0FINkNSOztBRzFDSTtFQUNJLGdDQUFBO0FINENSOztBR3pDSTtFQUNJLFlBQUE7QUgyQ1I7O0FHeENJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FIMENSOztBR3ZDSTtFQUNJLGVBQUE7QUh5Q1I7O0FHdENJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUh3Q1I7O0FFM0VBO0VDWkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBT0EsWUFBQTtFQUVBLG9DQUFBO0FIb0ZKOztBR2hGSTtFQUNJLFVBQUE7QUhrRlI7O0FHL0VJO0VBQ0ksWUFBQTtBSGlGUjs7QUd0RUk7RUFDSSxZQUFBO0FId0VSOztBR3JFSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBSHVFUjs7QUdoRUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSGtFUjs7QUVqR0E7RUNoQkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBT0EsWUFBQTtFQUVBLDZCQUFBO0FIOEdKOztBRzFHSTtFQUNJLFVBQUE7QUg0R1I7O0FHekdJO0VBQ0ksWUFBQTtBSDJHUjs7QUdoR0k7RUFDSSxZQUFBO0FIa0dSOztBRy9GSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBSGlHUjs7QUcxRkk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSDRGUjs7QUV2SEE7RUNwQkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBT0EsWUFBQTtFQUVBLGdDQUFBO0FId0lKOztBR3BJSTtFQUNJLFVBQUE7QUhzSVI7O0FHbklJO0VBQ0ksWUFBQTtBSHFJUjs7QUdsSUk7RUFDSSxnQ0FBQTtBSG9JUjs7QUdqSUk7RUFDSSxnQ0FBQTtBSG1JUjs7QUdoSUk7RUFDSSxZQUFBO0FIa0lSOztBRy9ISTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBSGlJUjs7QUcxSEk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBSDRIUjs7QUVuSkE7RUN4QkksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBSUEsWUFBQTtFQUdBLFlBQUE7RUFHQSxnREFBQTtFQUNBLGtCQUFBO0FId0tKOztBR3RLSTtFQUNJLFVBQUE7QUh3S1I7O0FHcktJO0VBQ0ksWUFBQTtBSHVLUjs7QUdoS0k7RUFDSSxnQ0FBQTtBSGtLUjs7QUcvSkk7RUFDSSxZQUFBO0FIaUtSOztBRzlKSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBSGdLUjs7QUc3Skk7RUFDSSxlQUFBO0FIK0pSOztBRzVKSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FIOEpSOztBRWpMQTtFQ3dCSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBSDZKSjs7QUVuTEE7RUNxQkksY0FBQTtBSGtLSjs7QUl4TkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUoyTko7O0FJeE5BO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FKMk5KOztBSXhOQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDRFQUFBO0VBQ0Esb0VBQUE7QUoyTko7O0FJeE5BO0VBQ0k7SUFBSyxjQUFBO0lBQWdCLGtCQUFBO0VKNk52QjtFSTVORTtJQUFNLGdCQUFBO0lBQWtCLGVBQUE7RUpnTzFCO0VJL05FO0lBQU8saUJBQUE7SUFBbUIsZUFBQTtFSm1PNUI7QUFDRjs7QUlqT0E7RUFDSTtJQUFLLGNBQUE7SUFBZ0Isa0JBQUE7RUpxT3ZCO0VJcE9FO0lBQU0sZ0JBQUE7SUFBa0IsZUFBQTtFSndPMUI7RUl2T0U7SUFBTyxpQkFBQTtJQUFtQixlQUFBO0VKMk81QjtBQUNGOztBS3pRQTtFRjJESSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBRUEsOEJBQUE7RUFDQSx3QkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FIME1KOztBR3hNSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FIME1SOztBR3ZNSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FIeU1SOztBR3RNSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FId01SOztBR3JNSTtFQUNJLGVBQUE7QUh1TVI7O0FHcE1JO0VBRUksVUFBQTtBSHFNUjs7QUdsTUk7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBSG9NUjs7QUtyVEE7RUZ1REksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQVFBLGdCQUFBO0VBVUEsbUJBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUhpUEo7O0FHL09JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FIaVBSOztBRzdPSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSCtPUjs7QUczT0k7RUFDSSxtQkFBQTtBSDZPUjs7QUd4T0k7RUFDSSxlQUFBO0FIME9SOztBR3ZPSTtFQUVJLFVBQUE7QUh3T1I7O0FHck9JO0VBR0ksWUFBQTtBSHFPUjs7QUtsVkE7RUZtREksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQU9BLGNBQUE7RUFDQSxrQkFBQTtFQVVBLGdCQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FIbVJKOztBR2pSSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBSG1SUjs7QUd6UUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUgyUVI7O0FHdlFJO0VBQ0ksZUFBQTtBSHlRUjs7QUd0UUk7RUFFSSxVQUFBO0FIdVFSOztBR3BRSTtFQUdJLFlBQUE7QUhvUVI7O0FLN1dBO0VGK0NJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFPQSxjQUFBO0VBQ0Esc0JBQUE7RUFVQSxtQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBSGtUSjs7QUdoVEk7RUFDSSxtQkFBQTtBSGtUUjs7QUc3U0k7RUFDSSxtQkFBQTtBSCtTUjs7QUcxU0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUg0U1I7O0FHeFNJO0VBQ0ksZUFBQTtBSDBTUjs7QUd2U0k7RUFFSSxVQUFBO0FId1NSOztBR3JTSTtFQUdJLFlBQUE7QUhxU1I7O0FLMVlBO0VGMkNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUdBLFdBQUE7RUFDQSxxQkFBQTtFQVVBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VFbEVBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBTHdaSjs7QUd2Vkk7RUFDSSxtQkFBQTtBSHlWUjs7QUdwVkk7RUFDSSxtQkFBQTtBSHNWUjs7QUdqVkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUhtVlI7O0FHL1VJO0VBQ0ksZUFBQTtBSGlWUjs7QUc5VUk7RUFFSSxVQUFBO0FIK1VSOztBRzVVSTtFQUdJLFlBQUE7QUg0VVI7O0FNOWJBO0VBQ0UsY0FBQTtBTmljRiIsImZpbGUiOiJtb2R1bGVzL2NvbXBvbmVudHMvdGFnLWlucHV0L3RhZy1pbnB1dC5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGRhcmstdGhlbWU6IChcclxuICAgIGNvbnRhaW5lci1ib3JkZXItYm90dG9tOiAycHggc29saWQgbWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKVxyXG4pO1xyXG5cclxuJGRhcmstdGFnLXRoZW1lOiAoXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnZGFyaycpLFxyXG4gICAgY29sb3I6ICNmOWY5ZjksXHJcbiAgICBiYWNrZ3JvdW5kLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdkYXJrJyksXHJcbiAgICBiYWNrZ3JvdW5kLWhvdmVyOiBkYXJrZW4obWFwLWdldCgkY29sb3ItcHJpbWFyeSwgJ2RhcmsnKSwgMTAlKSxcclxuICAgIGNvbG9yLWZvY3VzZWQ6IG1hcC1nZXQoJGNvbG9yLXByaW1hcnksICdkYXJrJyksXHJcbiAgICBjb2xvci1ob3ZlcjogI2Y5ZjlmOSxcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweFxyXG4pO1xyXG5cclxuJGRhcmstaWNvbi10aGVtZTogKFxyXG4gICAgZmlsbDogbWFwLWdldCgkY29sb3ItYXJyb3csICdkYXJrJyksXHJcbiAgICBmaWxsLWZvY3VzOiBtYXAtZ2V0KCRjb2xvci1hcnJvdy1mb2N1c2VkLCAnZGFyaycpXHJcbik7XHJcblxyXG4uZGFyayB0YWc6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMzMjMyMzI7XHJcbn1cclxuIiwiLmRhcmsgdGFnOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMzMjMyMzI7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM1NTU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzc3NztcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjZDk1MzRmO1xufVxuXG4ubmcyLXRhZy1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG59XG4ubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxOTZGMztcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0NDMzNjtcbn1cbi5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5uZzItdGFnLWlucHV0IGZvcm0ge1xuICBtYXJnaW46IDAuMWVtIDA7XG59XG4ubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWluaW1hbC5uZzItdGFnLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHRleHQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLm1pbmltYWwubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5taW5pbWFsLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ubWluaW1hbC5uZzItdGFnLWlucHV0IC5uZzItdGFncy1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kYXJrLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NDQ7XG59XG4uZGFyay5uZzItdGFnLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5kYXJrLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGFyay5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGFyay5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmRhcmsubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWRyb3BwaW5nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLmJvb3RzdHJhcC5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyNzVkODtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkOTUzNGY7XG59XG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tbG9hZGluZyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5ib290c3RyYXAubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0taW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDk1MzRmO1xufVxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xuICBib3JkZXI6IG5vbmU7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQgZm9ybSB7XG4gIG1hcmdpbjogMC4xZW0gMDtcbn1cbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dCAubmcyLXRhZ3MtY29udGFpbmVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBtYXJnaW46IDAuNWVtIDAgMCAwO1xufVxuXG4uYm9vdHN0cmFwIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNkOTUzNGY7XG59XG5cbi5wcm9ncmVzcy1iYXIsIC5wcm9ncmVzcy1iYXI6YmVmb3JlIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLnByb2dyZXNzLWJhcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjNGY4O1xuICBjb250ZW50OiBcIlwiO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1bm5pbmctcHJvZ3Jlc3Mge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJ1bm5pbmctcHJvZ3Jlc3Mge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG50YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW46IDAuMXJlbSAwLjNyZW0gMC4xcmVtIDA7XG4gIHBhZGRpbmc6IDAuMDhyZW0gMC40NXJlbTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudGFnOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMyMTk2RjM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMXB4ICNkNGQxZDE7XG59XG50YWc6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwZDhhZWU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMXB4ICNkNGQxZDE7XG59XG50YWc6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gIGNvbG9yOiBpbml0aWFsO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMXB4ICNkNGQxZDE7XG59XG50YWcucmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG50YWcucmVhZG9ubHk6Zm9jdXMsIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG50YWcudGFnLS1lZGl0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4ubWluaW1hbCB0YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5taW5pbWFsIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZDBkMGQwO1xuICBjb2xvcjogaW5pdGlhbDtcbn1cbi5taW5pbWFsIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2QwZDBkMDtcbiAgY29sb3I6IGluaXRpYWw7XG59XG4ubWluaW1hbCB0YWc6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG59XG4ubWluaW1hbCB0YWcucmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubWluaW1hbCB0YWcucmVhZG9ubHk6Zm9jdXMsIC5taW5pbWFsIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubWluaW1hbCB0YWcudGFnLS1lZGl0aW5nIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uZGFyayB0YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXJrIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBjb2xvcjogIzQ0NDtcbn1cbi5kYXJrIHRhZzpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgY29sb3I6ICNmOWY5Zjk7XG59XG4uZGFyayB0YWcucmVhZG9ubHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uZGFyayB0YWcucmVhZG9ubHk6Zm9jdXMsIC5kYXJrIHRhZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uZGFyayB0YWcudGFnLS1lZGl0aW5nIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uYm9vdHN0cmFwIHRhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQ6ICMwMjc1ZDg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib290c3RyYXAgdGFnOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwMjVhYTU7XG59XG4uYm9vdHN0cmFwIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAyNWFhNTtcbn1cbi5ib290c3RyYXAgdGFnOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDI2N2JmO1xuICBjb2xvcjogI2Y5ZjlmOTtcbn1cbi5ib290c3RyYXAgdGFnLnJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJvb3RzdHJhcCB0YWcucmVhZG9ubHk6Zm9jdXMsIC5ib290c3RyYXAgdGFnOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAgdGFnLnRhZy0tZWRpdGluZyB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmJvb3RzdHJhcDMtaW5mbyB0YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogIzViYzBkZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC42ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMyOGExYzU7XG59XG4uYm9vdHN0cmFwMy1pbmZvIHRhZzpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI4YTFjNTtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnOm5vdCg6Zm9jdXMpOm5vdCgudGFnLS1lZGl0aW5nKTpub3QoOmFjdGl2ZSk6bm90KC5yZWFkb25seSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDZiOGRhO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnLnJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJvb3RzdHJhcDMtaW5mbyB0YWcucmVhZG9ubHk6Zm9jdXMsIC5ib290c3RyYXAzLWluZm8gdGFnOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5ib290c3RyYXAzLWluZm8gdGFnLnRhZy0tZWRpdGluZyB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iLCIkYm9vdHN0cmFwMy1pbmZvLXRoZW1lOiAoXHJcbiAgICBjb250YWluZXItcGFkZGluZzogNHB4LFxyXG4gICAgY29udGFpbmVyLW1hcmdpbjogJGNvbnRhaW5lci1tYXJnaW4sXHJcbiAgICBjb250YWluZXItYm9yZGVyLWJvdHRvbS1pbnZhbGlkOiAxcHggc29saWQgbWFwLWdldCgkY29sb3ItZXJyb3IsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGlucHV0LWJvcmRlcjogMXB4IHNvbGlkICNjY2MsXHJcbiAgICBpbnB1dC1wYWRkaW5nOiAkaW5wdXQtcGFkZGluZyxcclxuICAgIGlucHV0LWZvbnQtc2l6ZTogOTUlLFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQsXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHhcclxuKTtcclxuXHJcbiRib290c3RyYXAzLWluZm8tdGFnLXRoZW1lOiAoXHJcbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnYm9vdHN0cmFwMy1pbmZvJyksXHJcbiAgICBmb250LXNpemU6IDk1JSxcclxuICAgIGNvbG9yOiAjZmZmLFxyXG4gICAgY29sb3ItaG92ZXI6ICNmZmYsXHJcbiAgICBmb250LXdlaWdodDogNDAwLFxyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW0sXHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdCxcclxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogbWFwLWdldCgkY29sb3ItZm9jdXNlZCwgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgYmFja2dyb3VuZC1hY3RpdmU6IG1hcC1nZXQoJGNvbG9yLWZvY3VzZWQsICdib290c3RyYXAzLWluZm8nKSxcclxuICAgIGJhY2tncm91bmQtaG92ZXI6IGRhcmtlbihtYXAtZ2V0KCRjb2xvci1wcmltYXJ5LCAnYm9vdHN0cmFwMy1pbmZvJyksIDUlKVxyXG4pO1xyXG5cclxuJGJvb3RzdHJhcDMtaW5mby1pY29uLXRoZW1lOiAoXHJcbiAgICBmaWxsOiBtYXAtZ2V0KCRjb2xvci1hcnJvdywgJ2Jvb3RzdHJhcDMtaW5mbycpLFxyXG4gICAgZmlsbC1mb2N1czogbWFwLWdldCgkY29sb3ItYXJyb3csICdib290c3RyYXAzLWluZm8nKVxyXG4pO1xyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZvIC5mb3JtLWNvbnRyb2wgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gLmZvcm0tY29udHJvbCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mbyAuZm9ybS1jb250cm9sIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ubmcyLXRhZy1pbnB1dC5ib290c3RyYXAzLWluZm8gaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJvb3RzdHJhcDMtaW5mby5uZzItdGFnLWlucHV0Lm5nMi10YWctaW5wdXQtLWZvY3VzZWQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dC5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCBtYXAtZ2V0KCRjb2xvci1lcnJvciwgJ2Jvb3RzdHJhcCcpO1xyXG59XHJcbiIsIi8vIFRIRU1FU1xyXG5cclxuQGltcG9ydCBcIi4uL2NvcmUvX2NvcmUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2RlZmF1bHQtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX21pbmltYWwtdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2RhcmstdGhlbWUuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiX2Jvb3RzdHJhcC10aGVtZS5zY3NzXCI7XHJcbkBpbXBvcnQgXCJfYm9vdHN0cmFwMy1pbmZvLXRoZW1lLnNjc3NcIjtcclxuXHJcbi5uZzItdGFnLWlucHV0IHtcclxuICAgIEBpbmNsdWRlIHRhZy1pbnB1dC10aGVtZSgkZGVmYXVsdC10aGVtZSk7XHJcbn1cclxuXHJcbi5taW5pbWFsLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRtaW5pbWFsLXRoZW1lKTtcclxufVxyXG5cclxuLmRhcmsubmcyLXRhZy1pbnB1dCB7XHJcbiAgICBAaW5jbHVkZSB0YWctaW5wdXQtdGhlbWUoJGRhcmstdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRib290c3RyYXAtdGhlbWUpO1xyXG59XHJcblxyXG4uYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXQge1xyXG4gICAgQGluY2x1ZGUgdGFnLWlucHV0LXRoZW1lKCRib290c3RyYXAzLWluZm8tdGhlbWUpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBAaW5jbHVkZSBlcnJvci1tZXNzYWdlKCRkZWZhdWx0LXRoZW1lKTtcclxufVxyXG5cclxuLmJvb3RzdHJhcCAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBAaW5jbHVkZSBlcnJvci1tZXNzYWdlKCRib290c3RyYXAtdGhlbWUpO1xyXG59XHJcbiIsIkBtaXhpbiB0YWctaW5wdXQtdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFwLWdldCgkdGhlbWUsIHRyYW5zaXRpb24pO1xyXG5cclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLXBhZGRpbmcnKTtcclxuICAgIG1pbi1oZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWhlaWdodCcpO1xyXG5cclxuICAgIGN1cnNvcjogdGV4dDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tJyk7XHJcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLXJhZGl1cycpO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1kcm9wcGluZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgICYubmcyLXRhZy1pbnB1dC0tZm9jdXNlZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1mb2N1c2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1ib3JkZXItYm90dG9tLWludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWxvYWRpbmcge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5nMi10YWctaW5wdXQtLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLW1hcmdpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZzItdGFncy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZXJyb3ItbWVzc2FnZSgkdGhlbWUpIHtcclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWZvbnQtc2l6ZScpO1xyXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1jb2xvcicpO1xyXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtbWFyZ2luJyk7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWctdGhlbWUoJHRoZW1lKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC13ZWlnaHQnKTtcclxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdmb250LXNpemUnKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBtYXAtZ2V0KCR0aGVtZSwgJ2xldHRlci1zcGFjaW5nJyk7XHJcblxyXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3InKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLXJhZGl1cycpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xyXG5cclxuICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdtYXJnaW4nKTtcclxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAncGFkZGluZycpO1xyXG5cclxuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdoZWlnaHQnKTtcclxuICAgIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmUtaGVpZ2h0Jyk7XHJcblxyXG4gICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOm5vdCgucmVhZG9ubHkpOm5vdCgudGFnLS1lZGl0aW5nKTpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWZvY3VzZWQnKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1mb2N1c2VkJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtYWN0aXZlJyk7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItYWN0aXZlJyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbWFwLWdldCgkdGhlbWUsICdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtaG92ZXInKTtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1ob3ZlcicpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xyXG4gICAgfVxyXG5cclxuICAgICYucmVhZG9ubHkge1xyXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlYWRvbmx5OmZvY3VzLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRhZy0tZWRpdGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsICdiYWNrZ3JvdW5kLWVkaXRpbmcnKTtcclxuICAgICAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLWVkaXRpbmcnKTtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWctaW5wdXQtZm9ybS10aGVtZSgkdGhlbWUpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgYm9yZGVyOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWJvcmRlcicpO1xyXG4gICAgcGFkZGluZzogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1wYWRkaW5nJyk7XHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtaGVpZ2h0Jyk7XHJcblxyXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWZvbnQtc2l6ZScpO1xyXG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1mYW1pbHknKTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICZbZGlzYWJsZWQ9dHJ1ZV0ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaWNvbi10aGVtZSgkdGhlbWUpIHtcclxuICAgIHdpZHRoOiBtYXAtZ2V0KCR0aGVtZSwgJ3dpZHRoJyk7XHJcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRoZW1lLCAnaGVpZ2h0Jyk7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXAtZ2V0KCR0aGVtZSwgJ3RyYW5zaXRpb24nKTtcclxuICAgIGRpc3BsYXk6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheScpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogbWFwLWdldCgkdGhlbWUsICdmaWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGljb24tdGhlbWUtZm9jdXNlZCgkdGhlbWUpIHtcclxuICAgIHBhdGgge1xyXG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbC1mb2N1cycpO1xyXG4gICAgfVxyXG59XHJcbiIsIi5wcm9ncmVzcy1iYXIsIC5wcm9ncmVzcy1iYXI6YmVmb3JlIHtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkY29sb3ItZm9jdXNlZCwgJ2RlZmF1bHQnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4obWFwX2dldCgkY29sb3ItZm9jdXNlZCwgJ2RlZmF1bHQnKSwgMjAlKTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcnVubmluZy1wcm9ncmVzcyB7XHJcbiAgICAwJSB7IG1hcmdpbi1sZWZ0OiAwOyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cclxuICAgIDUwJSB7IG1hcmdpbi1sZWZ0OiAyNSU7IG1hcmdpbi1yaWdodDogMDsgfVxyXG4gICAgMTAwJSB7IG1hcmdpbi1sZWZ0OiAxMDAlOyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcclxuICAgIDAlIHsgbWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi1yaWdodDogMTAwJTsgfVxyXG4gICAgNTAlIHsgbWFyZ2luLWxlZnQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbiAgICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxyXG59XHJcbiIsInRhZyB7XHJcbiAgICBAaW5jbHVkZSB0YWctdGhlbWUoJGRlZmF1bHQtdGFnLXRoZW1lKTtcclxufVxyXG5cclxuLm1pbmltYWwgdGFnIHtcclxuICAgIEBpbmNsdWRlIHRhZy10aGVtZSgkbWluaW1hbC10YWctdGhlbWUpO1xyXG59XHJcblxyXG4uZGFyayB0YWcge1xyXG4gICAgQGluY2x1ZGUgdGFnLXRoZW1lKCRkYXJrLXRhZy10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAgdGFnIHtcclxuICAgIEBpbmNsdWRlIHRhZy10aGVtZSgkYm9vdHN0cmFwLXRhZy10aGVtZSk7XHJcbn1cclxuXHJcbi5ib290c3RyYXAzLWluZm8gdGFnIHtcclxuICAgIEBpbmNsdWRlIHRhZy10aGVtZSgkYm9vdHN0cmFwMy1pbmZvLXRhZy10aGVtZSk7XHJcblxyXG4gICAgcGFkZGluZzogLjI1ZW0gLjZlbTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9jb3JlL3N0eWxlcy90aGVtZXMvX3RoZW1lcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9jb3JlL3N0eWxlcy9jb21wb25lbnRzL19jb21wb25lbnRzLnNjc3NcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"],
      data: {
        animation: _animations__WEBPACK_IMPORTED_MODULE_10__["animations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'tag-input',
          providers: [CUSTOM_ACCESSOR],
          styleUrls: ['./tag-input.style.scss'],
          templateUrl: './tag-input.template.html',
          animations: _animations__WEBPACK_IMPORTED_MODULE_10__["animations"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_7__["DragProvider"]
        }];
      }, {
        separatorKeys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        secondaryPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        validators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        asyncValidators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onlyFromAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorMessages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onTextChangeDebounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clearOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        addOnPaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pasteSplitPattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        blinkIfDupe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowDupes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modelAsStrings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trimTags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabindex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dragZone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onRemoving: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onAdding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onTextChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onPaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onValidationError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onTagEdited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dropdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["TagInputDropdown"]]
        }],
        templates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
            descendants: false
          }]
        }],
        inputForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_8__["TagInputForm"]]
        }],
        tags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_tag_tag_component__WEBPACK_IMPORTED_MODULE_9__["TagComponent"]]
        }],
        inputTextChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tabindexAttr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.tabindex']
        }]
      });
    })();
    /***/

  },

  /***/
  "./modules/components/tag/index.ts":
  /*!*****************************************!*\
    !*** ./modules/components/tag/index.ts ***!
    \*****************************************/

  /*! exports provided: TagRipple, TagComponent */

  /***/
  function modulesComponentsTagIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tag_ripple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tag-ripple.component */
    "./modules/components/tag/tag-ripple.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagRipple", function () {
      return _tag_ripple_component__WEBPACK_IMPORTED_MODULE_0__["TagRipple"];
    });
    /* harmony import */


    var _tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tag.component */
    "./modules/components/tag/tag.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return _tag_component__WEBPACK_IMPORTED_MODULE_1__["TagComponent"];
    });
    /***/

  },

  /***/
  "./modules/components/tag/tag-ripple.component.ts":
  /*!********************************************************!*\
    !*** ./modules/components/tag/tag-ripple.component.ts ***!
    \********************************************************/

  /*! exports provided: TagRipple */

  /***/
  function modulesComponentsTagTagRippleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagRipple", function () {
      return TagRipple;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var TagRipple = function TagRipple() {
      _classCallCheck(this, TagRipple);

      this.state = 'none';
    };

    TagRipple.ɵfac = function TagRipple_Factory(t) {
      return new (t || TagRipple)();
    };

    TagRipple.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagRipple,
      selectors: [["tag-ripple"]],
      inputs: {
        state: "state"
      },
      decls: 1,
      vars: 1,
      consts: [[1, "tag-ripple"]],
      template: function TagRipple_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@ink", ctx.state);
        }
      },
      styles: ["[_nghost-%COMP%] {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple[_ngcontent-%COMP%] {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ink', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: 0,
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => clicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          offset: 0,
          width: '30%',
          borderRadius: '100%'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          offset: 0.5,
          width: '50%'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0.5,
          offset: 1,
          width: '100%',
          borderRadius: '16px'
        })]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tag-ripple',
          styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
          template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('ink', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: 0,
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => clicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            offset: 0,
            width: '30%',
            borderRadius: '100%'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            offset: 0.5,
            width: '50%'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.5,
            offset: 1,
            width: '100%',
            borderRadius: '16px'
          })]))])])]
        }]
      }], null, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./modules/components/tag/tag.component.ts":
  /*!*************************************************!*\
    !*** ./modules/components/tag/tag.component.ts ***!
    \*************************************************/

  /*! exports provided: TagComponent */

  /***/
  function modulesComponentsTagTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return TagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tag/tag-ripple.component */
    "./modules/components/tag/tag-ripple.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../icon/icon */
    "./modules/components/icon/icon.ts");

    function TagComponent_div_1_ng_template_1_Template(rf, ctx) {}

    var _c0 = function _c0(a0, a1) {
      return {
        item: a0,
        index: a1
      };
    };

    function TagComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", ctx_r0.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.model, ctx_r0.index))("ngTemplateOutlet", ctx_r0.template);
      }
    }

    function TagComponent_div_2_delete_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "delete-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_div_2_delete_icon_3_Template_delete_icon_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.remove($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TagComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TagComponent_div_2_Template_div_keydown_enter_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.disableEditMode($event);
        })("keydown.escape", function TagComponent_div_2_Template_div_keydown_escape_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.disableEditMode($event);
        })("click", function TagComponent_div_2_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.editing ? $event.stopPropagation() : undefined;
        })("blur", function TagComponent_div_2_Template_div_blur_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onBlurred($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagComponent_div_2_delete_icon_3_Template, 1, 0, "delete-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", ctx_r1.editing)("title", ctx_r1.getDisplayValue(ctx_r1.model));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getDisplayValue(ctx_r1.model), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDeleteIconVisible());
      }
    }

    function TagComponent_tag_ripple_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag-ripple", 9);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r2.rippleState);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0 - 1);
      }
    } // mocking navigator


    var navigator = typeof window !== 'undefined' ? window.navigator : {
      userAgent: 'Chrome',
      vendor: 'Google Inc'
    };
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    var TagComponent = /*#__PURE__*/function () {
      function TagComponent(element, renderer, cdRef) {
        _classCallCheck(this, TagComponent);

        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * @name disabled
         */

        this.disabled = false;
        /**
         * @name onSelect
         */

        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onRemove
         */

        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onBlur
         */

        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onKeyDown
         */

        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name onTagEdited
         */

        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @name editing
         */

        this.editing = false;
        /**
         * @name rippleState
         */

        this.rippleState = 'none';
      }
      /**
       * @name readonly {boolean}
       */


      _createClass(TagComponent, [{
        key: "select",

        /**
         * @name select
         */
        value: function select($event) {
          if (this.readonly || this.disabled) {
            return;
          }

          if ($event) {
            $event.stopPropagation();
          }

          this.focus();
          this.onSelect.emit(this.model);
        }
        /**
         * @name remove
         */

      }, {
        key: "remove",
        value: function remove($event) {
          $event.stopPropagation();
          this.onRemove.emit(this);
        }
        /**
         * @name focus
         */

      }, {
        key: "focus",
        value: function focus() {
          this.element.nativeElement.focus();
        }
      }, {
        key: "move",
        value: function move() {
          this.moving = true;
        }
        /**
         * @name keydown
         * @param event
         */

      }, {
        key: "keydown",
        value: function keydown(event) {
          if (this.editing) {
            if (event.keyCode === 13) {
              return this.disableEditMode(event);
            }
          } else {
            this.onKeyDown.emit({
              event: event,
              model: this.model
            });
          }
        }
        /**
         * @name blink
         */

      }, {
        key: "blink",
        value: function blink() {
          var classList = this.element.nativeElement.classList;
          classList.add('blink');
          setTimeout(function () {
            return classList.remove('blink');
          }, 50);
        }
        /**
         * @name toggleEditMode
         */

      }, {
        key: "toggleEditMode",
        value: function toggleEditMode() {
          if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
          }
        }
        /**
         * @name onBlurred
         * @param event
         */

      }, {
        key: "onBlurred",
        value: function onBlurred(event) {
          // Checks if it is editable first before handeling the onBlurred event in order to prevent
          // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
          if (!this.editable) {
            return;
          }

          this.disableEditMode();
          var value = event.target.innerText;
          var result = typeof this.model === 'string' ? value : Object.assign(Object.assign({}, this.model), _defineProperty({}, this.displayBy, value));
          this.onBlur.emit(result);
        }
        /**
         * @name getDisplayValue
         * @param item
         */

      }, {
        key: "getDisplayValue",
        value: function getDisplayValue(item) {
          return typeof item === 'string' ? item : item[this.displayBy];
        }
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * @name isRippleVisible
         */

      }, {
        key: "disableEditMode",

        /**
         * @name disableEditMode
         * @param $event
         */
        value: function disableEditMode($event) {
          var classList = this.element.nativeElement.classList;
          var input = this.getContentEditableText();
          this.editing = false;
          classList.remove('tag--editing');

          if (!input) {
            this.setContentEditableText(this.model);
            return;
          }

          this.storeNewValue(input);
          this.cdRef.detectChanges();

          if ($event) {
            $event.preventDefault();
          }
        }
        /**
         * @name isDeleteIconVisible
         */

      }, {
        key: "isDeleteIconVisible",
        value: function isDeleteIconVisible() {
          return !this.readonly && !this.disabled && this.removable && !this.editing;
        }
        /**
         * @name getContentEditableText
         */

      }, {
        key: "getContentEditableText",
        value: function getContentEditableText() {
          var input = this.getContentEditable();
          return input ? input.innerText.trim() : '';
        }
        /**
         * @name setContentEditableText
         * @param model
         */

      }, {
        key: "setContentEditableText",
        value: function setContentEditableText(model) {
          var input = this.getContentEditable();
          var value = this.getDisplayValue(model);
          input.innerText = value;
        }
        /**
         * @name
         */

      }, {
        key: "activateEditMode",
        value: function activateEditMode() {
          var classList = this.element.nativeElement.classList;
          classList.add('tag--editing');
          this.editing = true;
        }
        /**
         * @name storeNewValue
         * @param input
         */

      }, {
        key: "storeNewValue",
        value: function storeNewValue(input) {
          var _this22 = this,
              _ref4;

          var exists = function exists(tag) {
            return typeof tag === 'string' ? tag === input : tag[_this22.displayBy] === input;
          };

          var hasId = function hasId() {
            return _this22.model[_this22.identifyBy] !== _this22.model[_this22.displayBy];
          }; // if the value changed, replace the value in the model


          if (exists(this.model)) {
            return;
          }

          var model = typeof this.model === 'string' ? input : (_ref4 = {
            index: this.index
          }, _defineProperty(_ref4, this.identifyBy, hasId() ? this.model[this.identifyBy] : input), _defineProperty(_ref4, this.displayBy, input), _ref4);

          if (this.canAddTag(model)) {
            this.onTagEdited.emit({
              tag: model,
              index: this.index
            });
          } else {
            this.setContentEditableText(this.model);
          }
        }
        /**
         * @name getContentEditable
         */

      }, {
        key: "getContentEditable",
        value: function getContentEditable() {
          return this.element.nativeElement.querySelector('[contenteditable]');
        }
      }, {
        key: "readonly",
        get: function get() {
          return typeof this.model !== 'string' && this.model.readonly === true;
        }
      }, {
        key: "isRippleVisible",
        get: function get() {
          return !this.readonly && !this.editing && isChrome && this.hasRipple;
        }
      }]);

      return TagComponent;
    }();

    TagComponent.ɵfac = function TagComponent_Factory(t) {
      return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagComponent,
      selectors: [["tag"]],
      viewQuery: function TagComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_1__["TagRipple"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function TagComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TagComponent_keydown_HostBindingHandler($event) {
            return ctx.keydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("moving", ctx.moving);
        }
      },
      inputs: {
        model: "model",
        removable: "removable",
        editable: "editable",
        template: "template",
        displayBy: "displayBy",
        identifyBy: "identifyBy",
        index: "index",
        hasRipple: "hasRipple",
        disabled: "disabled",
        canAddTag: "canAddTag"
      },
      outputs: {
        onSelect: "onSelect",
        onRemove: "onRemove",
        onBlur: "onBlur",
        onKeyDown: "onKeyDown",
        onTagEdited: "onTagEdited"
      },
      decls: 4,
      vars: 8,
      consts: [[3, "ngSwitch", "click", "dblclick", "mousedown", "mouseup"], [4, "ngSwitchCase"], ["class", "tag-wrapper", 4, "ngSwitchCase"], [3, "state", 4, "ngIf"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], [1, "tag-wrapper"], ["spellcheck", "false", 1, "tag__text", "inline", 3, "keydown.enter", "keydown.escape", "click", "blur"], ["aria-label", "Remove tag", "role", "button", 3, "click", 4, "ngIf"], ["aria-label", "Remove tag", "role", "button", 3, "click"], [3, "state"]],
      template: function TagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_Template_div_click_0_listener($event) {
            return ctx.select($event);
          })("dblclick", function TagComponent_Template_div_dblclick_0_listener() {
            return ctx.toggleEditMode();
          })("mousedown", function TagComponent_Template_div_mousedown_0_listener() {
            return ctx.rippleState = "clicked";
          })("mouseup", function TagComponent_Template_div_mouseup_0_listener() {
            return ctx.rippleState = "none";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagComponent_div_1_Template, 2, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TagComponent_div_2_Template, 4, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagComponent_tag_ripple_3_Template, 1, 2, "tag-ripple", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!ctx.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0 - 1)("aria-label", ctx.getDisplayValue(ctx.model));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRippleVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _icon_icon__WEBPACK_IMPORTED_MODULE_3__["DeleteIconComponent"], _tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_1__["TagRipple"]],
      styles: ["[_nghost-%COMP%], [_nghost-%COMP%]    > div[_ngcontent-%COMP%], [_nghost-%COMP%]    > div[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  overflow: hidden;\n  transition: opacity 1s;\n  z-index: 1;\n}\n\n[_nghost-%COMP%] {\n  max-width: 400px;\n}\n\n.blink[_nghost-%COMP%] {\n  -webkit-animation: blink 0.3s normal forwards ease-in-out;\n  animation: blink 0.3s normal forwards ease-in-out;\n}\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0.3;\n  }\n}\n\n@keyframes blink {\n  0% {\n    opacity: 0.3;\n  }\n}\n\n[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n[_nghost-%COMP%]   [contenteditable=true][_ngcontent-%COMP%] {\n  outline: 0;\n}\n\n.tag-wrapper[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n}\n\n.tag__text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tcG9uZW50cy90YWcvQzpcXERldmVsb3BtZW50XFxuZ3gtY2hpcHMvbW9kdWxlc1xcY29tcG9uZW50c1xcdGFnXFx0YWctY29tcG9uZW50LnN0eWxlLnNjc3MiLCJtb2R1bGVzL2NvbXBvbmVudHMvdGFnL3RhZy1jb21wb25lbnQuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseURBQUE7RUFDQSxpREFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxZQUFBO0VDQ047QUFDRjs7QURKQTtFQUNJO0lBQ0ksWUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJtb2R1bGVzL2NvbXBvbmVudHMvdGFnL3RhZy1jb21wb25lbnQuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxyXG46aG9zdCA+IGRpdixcclxuOmhvc3QgPiBkaXY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuOmhvc3QuYmxpbmsge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuM3Mgbm9ybWFsIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBibGluayAwLjNzIG5vcm1hbCBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCAuZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuOmhvc3QgW2NvbnRlbnRlZGl0YWJsZT0ndHJ1ZSddIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi50YWctd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhZ19fdGV4dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiIsIjpob3N0LFxuOmhvc3QgPiBkaXYsXG46aG9zdCA+IGRpdjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gIHotaW5kZXg6IDE7XG59XG5cbjpob3N0IHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuOmhvc3QuYmxpbmsge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC4zcyBub3JtYWwgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogYmxpbmsgMC4zcyBub3JtYWwgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG46aG9zdCAuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG46aG9zdCBbY29udGVudGVkaXRhYmxlPXRydWVdIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLnRhZy13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhZ19fdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tag',
          templateUrl: './tag.template.html',
          styleUrls: ['./tag-component.style.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        displayBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        identifyBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hasRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        canAddTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onTagEdited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        moving: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.moving']
        }],
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_1__["TagRipple"]]
        }],
        keydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./modules/core/accessor.ts":
  /*!**********************************!*\
    !*** ./modules/core/accessor.ts ***!
    \**********************************/

  /*! exports provided: TagModelClass, isObject, TagInputAccessor */

  /***/
  function modulesCoreAccessorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagModelClass", function () {
      return TagModelClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isObject", function () {
      return isObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputAccessor", function () {
      return TagInputAccessor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_options_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./providers/options-provider */
    "./modules/core/providers/options-provider.ts");

    var TagModelClass = function TagModelClass() {
      _classCallCheck(this, TagModelClass);
    };

    function isObject(obj) {
      return obj === Object(obj);
    }

    var TagInputAccessor = /*#__PURE__*/function () {
      function TagInputAccessor() {
        _classCallCheck(this, TagInputAccessor);

        this._items = [];
        /**
         * @name displayBy
         */

        this.displayBy = _providers_options_provider__WEBPACK_IMPORTED_MODULE_1__["OptionsProvider"].defaults.tagInput.displayBy;
        /**
         * @name identifyBy
         */

        this.identifyBy = _providers_options_provider__WEBPACK_IMPORTED_MODULE_1__["OptionsProvider"].defaults.tagInput.identifyBy;
      }

      _createClass(TagInputAccessor, [{
        key: "onTouched",
        value: function onTouched() {
          this._onTouchedCallback();
        }
      }, {
        key: "writeValue",
        value: function writeValue(items) {
          this._items = items || [];
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouchedCallback = fn;
        }
        /**
         * @name getItemValue
         * @param item
         * @param fromDropdown
         */

      }, {
        key: "getItemValue",
        value: function getItemValue(item) {
          var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
          return isObject(item) ? item[property] : item;
        }
        /**
         * @name getItemDisplay
         * @param item
         * @param fromDropdown
         */

      }, {
        key: "getItemDisplay",
        value: function getItemDisplay(item) {
          var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
          return isObject(item) ? item[property] : item;
        }
        /**
         * @name getItemsWithout
         * @param index
         */

      }, {
        key: "getItemsWithout",
        value: function getItemsWithout(index) {
          return this.items.filter(function (item, position) {
            return position !== index;
          });
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        },
        set: function set(items) {
          this._items = items;

          this._onChangeCallback(this._items);
        }
      }]);

      return TagInputAccessor;
    }();

    TagInputAccessor.ɵfac = function TagInputAccessor_Factory(t) {
      return new (t || TagInputAccessor)();
    };

    TagInputAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TagInputAccessor,
      inputs: {
        displayBy: "displayBy",
        identifyBy: "identifyBy"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagInputAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], null, {
        displayBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        identifyBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./modules/core/constants/index.ts":
  /*!*****************************************!*\
    !*** ./modules/core/constants/index.ts ***!
    \*****************************************/

  /*! exports provided: PLACEHOLDER, SECONDARY_PLACEHOLDER, KEYDOWN, KEYUP, FOCUS, MAX_ITEMS_WARNING, ACTIONS_KEYS, KEY_PRESS_ACTIONS, DRAG_AND_DROP_KEY, NEXT, PREV */

  /***/
  function modulesCoreConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLACEHOLDER", function () {
      return PLACEHOLDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SECONDARY_PLACEHOLDER", function () {
      return SECONDARY_PLACEHOLDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEYDOWN", function () {
      return KEYDOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEYUP", function () {
      return KEYUP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS", function () {
      return FOCUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAX_ITEMS_WARNING", function () {
      return MAX_ITEMS_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTIONS_KEYS", function () {
      return ACTIONS_KEYS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KEY_PRESS_ACTIONS", function () {
      return KEY_PRESS_ACTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRAG_AND_DROP_KEY", function () {
      return DRAG_AND_DROP_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEXT", function () {
      return NEXT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PREV", function () {
      return PREV;
    });
    /*
    ** constants and default values for <tag-input>
     */


    var PLACEHOLDER = '+ Tag';
    var SECONDARY_PLACEHOLDER = 'Enter a new tag';
    var KEYDOWN = 'keydown';
    var KEYUP = 'keyup';
    var FOCUS = 'focus';
    var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
    var ACTIONS_KEYS = {
      DELETE: 'DELETE',
      SWITCH_PREV: 'SWITCH_PREV',
      SWITCH_NEXT: 'SWITCH_NEXT',
      TAB: 'TAB'
    };
    var KEY_PRESS_ACTIONS = {
      8: ACTIONS_KEYS.DELETE,
      46: ACTIONS_KEYS.DELETE,
      37: ACTIONS_KEYS.SWITCH_PREV,
      39: ACTIONS_KEYS.SWITCH_NEXT,
      9: ACTIONS_KEYS.TAB
    };
    var DRAG_AND_DROP_KEY = 'Text';
    var NEXT = 'NEXT';
    var PREV = 'PREV';
    /***/
  },

  /***/
  "./modules/core/helpers/listen.ts":
  /*!****************************************!*\
    !*** ./modules/core/helpers/listen.ts ***!
    \****************************************/

  /*! exports provided: listen */

  /***/
  function modulesCoreHelpersListenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listen", function () {
      return listen;
    });
    /**
     * @name listen
     * @param listenerType
     * @param action
     * @param condition
     */


    function listen(listenerType, action) {
      var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // if the event provided does not exist, throw an error
      if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
      } // if a condition is present and is false, exit early


      if (!condition) {
        return;
      } // fire listener


      this.listeners[listenerType].push(action);
    }
    /***/

  },

  /***/
  "./modules/core/pipes/highlight.pipe.ts":
  /*!**********************************************!*\
    !*** ./modules/core/pipes/highlight.pipe.ts ***!
    \**********************************************/

  /*! exports provided: HighlightPipe */

  /***/
  function modulesCorePipesHighlightPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightPipe", function () {
      return HighlightPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var escape = function escape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var HighlightPipe = /*#__PURE__*/function () {
      function HighlightPipe() {
        _classCallCheck(this, HighlightPipe);
      }

      _createClass(HighlightPipe, [{
        key: "transform",

        /**
         * @name transform
         * @param value {string}
         * @param arg {string}
         */
        value: function transform(value, arg) {
          if (!arg.trim()) {
            return value;
          }

          try {
            var regex = new RegExp("(".concat(escape(arg), ")"), 'i');
            return value.replace(regex, '<b>$1</b>');
          } catch (e) {
            return value;
          }
        }
      }]);

      return HighlightPipe;
    }();

    HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
      return new (t || HighlightPipe)();
    };

    HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "highlight",
      type: HighlightPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'highlight'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./modules/core/providers/drag-provider.ts":
  /*!*************************************************!*\
    !*** ./modules/core/providers/drag-provider.ts ***!
    \*************************************************/

  /*! exports provided: DragProvider */

  /***/
  function modulesCoreProvidersDragProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragProvider", function () {
      return DragProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/constants */
    "./modules/core/constants/index.ts");

    var DragProvider = /*#__PURE__*/function () {
      function DragProvider() {
        _classCallCheck(this, DragProvider);

        this.state = {
          dragging: false,
          dropping: false,
          index: undefined
        };
      }
      /**
       * @name setDraggedItem
       * @param event
       * @param tag
       */


      _createClass(DragProvider, [{
        key: "setDraggedItem",
        value: function setDraggedItem(event, tag) {
          if (event && event.dataTransfer) {
            event.dataTransfer.setData(_core_constants__WEBPACK_IMPORTED_MODULE_1__["DRAG_AND_DROP_KEY"], JSON.stringify(tag));
          }
        }
        /**
         * @name getDraggedItem
         * @param event
         */

      }, {
        key: "getDraggedItem",
        value: function getDraggedItem(event) {
          if (event && event.dataTransfer) {
            var data = event.dataTransfer.getData(_core_constants__WEBPACK_IMPORTED_MODULE_1__["DRAG_AND_DROP_KEY"]);

            try {
              return JSON.parse(data);
            } catch (_a) {
              return;
            }
          }
        }
        /**
         * @name setSender
         * @param sender
         */

      }, {
        key: "setSender",
        value: function setSender(sender) {
          this.sender = sender;
        }
        /**
         * @name setReceiver
         * @param receiver
         */

      }, {
        key: "setReceiver",
        value: function setReceiver(receiver) {
          this.receiver = receiver;
        }
        /**
         * @name onTagDropped
         * @param tag
         * @param indexDragged
         * @param indexDropped
         */

      }, {
        key: "onTagDropped",
        value: function onTagDropped(tag, indexDragged, indexDropped) {
          this.onDragEnd();
          this.sender.onRemoveRequested(tag, indexDragged);
          this.receiver.onAddingRequested(false, tag, indexDropped);
        }
        /**
         * @name setState
         * @param state
         */

      }, {
        key: "setState",
        value: function setState(state) {
          this.state = Object.assign(Object.assign({}, this.state), state);
        }
        /**
         * @name getState
         * @param key
         */

      }, {
        key: "getState",
        value: function getState(key) {
          return key ? this.state[key] : this.state;
        }
        /**
         * @name onDragEnd
         */

      }, {
        key: "onDragEnd",
        value: function onDragEnd() {
          this.setState({
            dragging: false,
            dropping: false,
            index: undefined
          });
        }
      }]);

      return DragProvider;
    }();

    DragProvider.ɵfac = function DragProvider_Factory(t) {
      return new (t || DragProvider)();
    };

    DragProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DragProvider,
      factory: DragProvider.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./modules/core/providers/options-provider.ts":
  /*!****************************************************!*\
    !*** ./modules/core/providers/options-provider.ts ***!
    \****************************************************/

  /*! exports provided: OptionsProvider */

  /***/
  function modulesCoreProvidersOptionsProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsProvider", function () {
      return OptionsProvider;
    });
    /* harmony import */


    var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../defaults */
    "./modules/defaults.ts");

    var OptionsProvider = /*#__PURE__*/function () {
      function OptionsProvider() {
        _classCallCheck(this, OptionsProvider);
      }

      _createClass(OptionsProvider, [{
        key: "setOptions",
        value: function setOptions(options) {
          OptionsProvider.defaults.tagInput = Object.assign(Object.assign({}, _defaults__WEBPACK_IMPORTED_MODULE_0__["defaults"].tagInput), options.tagInput);
          OptionsProvider.defaults.dropdown = Object.assign(Object.assign({}, _defaults__WEBPACK_IMPORTED_MODULE_0__["defaults"].dropdown), options.dropdown);
        }
      }]);

      return OptionsProvider;
    }();

    OptionsProvider.defaults = _defaults__WEBPACK_IMPORTED_MODULE_0__["defaults"];
    /***/
  },

  /***/
  "./modules/defaults.ts":
  /*!*****************************!*\
    !*** ./modules/defaults.ts ***!
    \*****************************/

  /*! exports provided: defaults */

  /***/
  function modulesDefaultsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaults", function () {
      return defaults;
    });
    /* harmony import */


    var _core_constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core/constants/index */
    "./modules/core/constants/index.ts");

    var defaults = {
      tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: _core_constants_index__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER"],
        secondaryPlaceholder: _core_constants_index__WEBPACK_IMPORTED_MODULE_0__["SECONDARY_PLACEHOLDER"],
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
          enter: '250ms',
          leave: '150ms'
        }
      },
      dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
      }
    };
    /**
     * @name matchingFn
     * @param this
     * @param value
     * @param target
     */

    function matchingFn(value, target) {
      var targetValue = target[this.displayBy].toString();
      return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    }
    /***/

  },

  /***/
  "./modules/index.ts":
  /*!**************************!*\
    !*** ./modules/index.ts ***!
    \**************************/

  /*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent */

  /***/
  function modulesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tag_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tag-input.module */
    "./modules/tag-input.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputModule", function () {
      return _tag_input_module__WEBPACK_IMPORTED_MODULE_0__["TagInputModule"];
    });
    /* harmony import */


    var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/index */
    "./modules/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function () {
      return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagInputDropdown"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function () {
      return _components_index__WEBPACK_IMPORTED_MODULE_1__["DeleteIconComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputForm", function () {
      return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagInputForm"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagRipple", function () {
      return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagRipple"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagInputComponent", function () {
      return _components_index__WEBPACK_IMPORTED_MODULE_1__["TagInputComponent"];
    });
    /***/

  },

  /***/
  "./modules/tag-input.module.ts":
  /*!*************************************!*\
    !*** ./modules/tag-input.module.ts ***!
    \*************************************/

  /*! exports provided: TagInputModule */

  /***/
  function modulesTagInputModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagInputModule", function () {
      return TagInputModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-material-dropdown */
    "./node_modules/ng2-material-dropdown/__ivy_ngcc__/fesm2015/ng2-material-dropdown.js");
    /* harmony import */


    var _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/pipes/highlight.pipe */
    "./modules/core/pipes/highlight.pipe.ts");
    /* harmony import */


    var _core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/providers/drag-provider */
    "./modules/core/providers/drag-provider.ts");
    /* harmony import */


    var _core_providers_options_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/providers/options-provider */
    "./modules/core/providers/options-provider.ts");
    /* harmony import */


    var _components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/tag-input/tag-input */
    "./modules/components/tag-input/tag-input.ts");
    /* harmony import */


    var _components_icon_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/icon/icon */
    "./modules/components/icon/icon.ts");
    /* harmony import */


    var _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/tag-input-form/tag-input-form.component */
    "./modules/components/tag-input-form/tag-input-form.component.ts");
    /* harmony import */


    var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/tag/tag.component */
    "./modules/components/tag/tag.component.ts");
    /* harmony import */


    var _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dropdown/tag-input-dropdown.component */
    "./modules/components/dropdown/tag-input-dropdown.component.ts");
    /* harmony import */


    var _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/tag/tag-ripple.component */
    "./modules/components/tag/tag-ripple.component.ts");

    var optionsProvider = new _core_providers_options_provider__WEBPACK_IMPORTED_MODULE_6__["OptionsProvider"]();

    var TagInputModule = /*#__PURE__*/function () {
      function TagInputModule() {
        _classCallCheck(this, TagInputModule);
      }

      _createClass(TagInputModule, null, [{
        key: "withDefaults",

        /**
         * @name withDefaults
         * @param options {Options}
         */
        value: function withDefaults(options) {
          optionsProvider.setOptions(options);
        }
      }]);

      return TagInputModule;
    }();

    TagInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TagInputModule
    });
    TagInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TagInputModule_Factory(t) {
        return new (t || TagInputModule)();
      },
      providers: [_core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_5__["DragProvider"], {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"],
        useValue: false
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TagInputModule, {
        declarations: [_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], _components_icon_icon__WEBPACK_IMPORTED_MODULE_8__["DeleteIconComponent"], _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_9__["TagInputForm"], _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"], _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["TagInputDropdown"], _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_12__["TagRipple"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownModule"]],
        exports: [_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], _components_icon_icon__WEBPACK_IMPORTED_MODULE_8__["DeleteIconComponent"], _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_9__["TagInputForm"], _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"], _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["TagInputDropdown"], _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_12__["TagRipple"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownModule"]],
          declarations: [_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], _components_icon_icon__WEBPACK_IMPORTED_MODULE_8__["DeleteIconComponent"], _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_9__["TagInputForm"], _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"], _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["TagInputDropdown"], _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_12__["TagRipple"]],
          exports: [_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], _components_icon_icon__WEBPACK_IMPORTED_MODULE_8__["DeleteIconComponent"], _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_9__["TagInputForm"], _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"], _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["TagInputDropdown"], _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_12__["TagRipple"]],
          providers: [_core_providers_drag_provider__WEBPACK_IMPORTED_MODULE_5__["DragProvider"], {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"],
            useValue: false
          }]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2MenuItem"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownButton"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2DropdownMenu"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_3__["Ng2Dropdown"], _components_tag_input_tag_input__WEBPACK_IMPORTED_MODULE_7__["TagInputComponent"], _components_icon_icon__WEBPACK_IMPORTED_MODULE_8__["DeleteIconComponent"], _components_tag_input_form_tag_input_form_component__WEBPACK_IMPORTED_MODULE_9__["TagInputForm"], _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_10__["TagComponent"], _components_dropdown_tag_input_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["TagInputDropdown"], _components_tag_tag_ripple_component__WEBPACK_IMPORTED_MODULE_12__["TagRipple"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], _core_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"]]);
    /***/

  },

  /***/
  0:
  /*!****************************!*\
    !*** multi ./demo/main.ts ***!
    \****************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Development\ngx-chips\demo\main.ts */
    "./demo/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map