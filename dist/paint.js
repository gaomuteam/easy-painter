(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("paint", [], factory);
	else if(typeof exports === 'object')
		exports["paint"] = factory();
	else
		root["paint"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/index.less":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--4-oneOf-3-3!./src/index.less ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * Created Date: 2017-10-16 09:27:09\n * Author: inu1255\n * E-Mail: 929909260@qq.com\n */\n.input-style {\n  width: 100%;\n  height: 38px;\n  padding: 6px 12px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 3px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.input-style:focus {\n  border-color: #1F90E6;\n  -webkit-box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.textarea-style {\n  line-height: 1.42857143;\n  width: 100%;\n  padding: 6px 12px;\n  border-radius: 3px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.textarea-style:focus {\n  border-color: #1F90E6;\n  -webkit-box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.select-style {\n  width: 100%;\n  height: 33px;\n  padding: 5px 12px;\n  background-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 3px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.select-style:focus {\n  border-color: #1F90E6;\n  -webkit-box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.hide {\n  opacity: 0;\n  pointer-events: none;\n}\n.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n.painter-menu {\n  position: absolute;\n  background: #eee;\n  border: 1px solid #ccc;\n  max-width: 50%;\n}\n.painter-menu > .painter-menu__btn {\n  float: left;\n  margin: 5px 7px;\n  padding: 2px 5px;\n  color: #fff;\n  background: #1DA57A;\n  cursor: pointer;\n}\n.painter-menu > .painter-menu__btn:hover {\n  background: #048c61;\n}\n.painter-menu > .painter-menu__btn.selected {\n  background: #048c61;\n}\n.painter-menu > .painter-menu__btn:active,\n.painter-menu > .painter-menu__btn.active {\n  background: #007348;\n  -webkit-box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.painter-menu > .painter-menu__btn:disabled {\n  background: #36be93;\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.painter-menu > .painter-menu__move {\n  margin: 5px 7px;\n  width: 24px;\n  height: 24px;\n  float: right;\n  border: 1px solid #ccc;\n  cursor: move;\n}\n.painter-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.painter-canvas > * {\n  pointer-events: none;\n}\n.painter-canvas.eraser > * {\n  pointer-events: visiblestroke;\n}\n.painter-canvas.disable {\n  pointer-events: none;\n}\n.painter-canvas.disable > * {\n  pointer-events: none;\n}\n.painter-canvas__item {\n  position: absolute;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pens */ "./src/pens/index.js");
/* harmony import */ var _libs_Drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/Drag */ "./src/libs/Drag.js");


var body = document.body || document.documentElement;

function Menu(drawer) {
  var menu = document.createElement("div");
  menu.className = "painter-menu";
  var offset = drawer.offset();
  menu.style.top = offset.top + "px";
  menu.style.left = offset.left + "px";
  document.body.appendChild(menu);

  this.addButton = function (html, cb) {
    if (html && cb) {
      var btn = document.createElement("div");
      btn.className = "painter-menu__btn";
      btn.innerText = html;
      btn.addEventListener("click", cb);
      menu.appendChild(btn);
      return btn;
    }
  };

  this.addPens = function (keys) {
    var _this = this;

    keys = keys || _pens__WEBPACK_IMPORTED_MODULE_0__["default"].keys();
    keys.forEach(function (item) {
      if (!item) return;

      if (!item.html) {
        item = {
          html: item,
          key: item
        };
      }

      var btn = document.createElement("div");
      btn.className = "painter-menu__btn painter-menu__pen";
      btn.innerHTML = item.html.replace(/pen$/i, "");
      btn.addEventListener("click", function () {
        btn.className += " active";
        drawer.setPen(item.key);

        if (_this.addPens.prev) {
          _this.addPens.prev.className = _this.addPens.prev.className.replace(" active", "");
        }

        _this.addPens.prev = btn;
      });
      menu.appendChild(btn);

      if (!_this.addPens.prev) {
        _this.addPens.prev = btn;
        btn.className += " active";
      }
    });
    return this;
  };

  this.moveable = function () {
    var btn = document.createElement("div");
    btn.className = "painter-menu__move";
    var drag = new _libs_Drag__WEBPACK_IMPORTED_MODULE_1__["default"](btn, menu).moveTo(offset).start();
    drag.addEventListener("begin", function () {
      drawer.disable();
    });
    drag.addEventListener("end", function () {
      drawer.enable();
    });
    menu.appendChild(btn);
    return this;
  };

  this.undo = function () {
    this.addButton("撤销", function () {
      drawer.undo();
    });
    this.addButton("重做", function () {
      drawer.redo();
    });
    return this;
  };

  this.scale = function () {
    var scale = 1;
    this.addButton("放大", function () {
      scale *= 1.1;
      drawer.scale(scale);
    });
    this.addButton("缩小", function () {
      scale /= 1.1;
      drawer.scale(scale);
    });
    return this;
  };

  this.color = function (colors) {
    var _this2 = this;

    colors = colors || [["red", "红色"], ["yellow", "黄色"], ["blue", "蓝色"]];
    colors.forEach(function (item) {
      var btn = _this2.addButton(item[1], function () {
        drawer.setColor(item[0]);
        btn.className += " active";

        if (_this2.color.prev) {
          _this2.color.prev.className = _this2.color.prev.className.replace(" active", "");
        }

        _this2.color.prev = btn;
      });

      btn.style.color = item[0];

      if (!_this2.color.prev) {
        _this2.color.prev = btn;
        btn.className += " active";
      }
    });
    return this;
  };

  this.clear = function () {
    this.addButton("清空", function () {
      drawer.parse([]);
    });
    return this;
  };

  this.restore = function (s) {
    this.restore.count++;
    this.addButton("恢复" + this.restore.count, function () {
      drawer.parse(s);
    });
    return this;
  };

  this.restore.count = 0;

  this.save = function () {
    var _this3 = this;

    this.addButton("保存", function () {
      _this3.restore(drawer.stringify());

      drawer.parse([]);
    });
    return this;
  };

  this.disable = function () {
    document.body.removeChild(menu);
    return this;
  };

  this.enable = function () {
    document.body.appendChild(menu);
    return this;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/drawer-canvas.js":
/*!******************************!*\
  !*** ./src/drawer-canvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.js */ "./src/drawer.js");
/* harmony import */ var _pens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pens */ "./src/pens/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var styles = ["fillStyle", "filter", "font", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled", "imageSmoothingQuality", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline"];

CanvasRenderingContext2D.prototype.getStyle = function () {
  var _this = this;

  var style = {};
  styles.forEach(function (k) {
    if (_this[k] != _this.initStyle[k]) style[k] = _this[k];
  });
  return style;
};

CanvasRenderingContext2D.prototype.setStyle = function (style) {
  var _this2 = this;

  if (_typeof(style) != "object") return this;
  styles.forEach(function (k) {
    if (style[k] != null) _this2[k] = style[k];else if (_this2.initStyle[k]) _this2[k] = _this2.initStyle[k];
  });
  return this;
};

var DrawerCanvas =
/*#__PURE__*/
function (_Drawer) {
  _inherits(DrawerCanvas, _Drawer);

  function DrawerCanvas() {
    _classCallCheck(this, DrawerCanvas);

    return _possibleConstructorReturn(this, _getPrototypeOf(DrawerCanvas).apply(this, arguments));
  }

  _createClass(DrawerCanvas, [{
    key: "defaultConfig",
    value: function defaultConfig() {
      return Object.assign({
        background: "",
        initStyle: {
          fillStyle: "red",
          strokeStyle: "red"
        }
      }, _get(_getPrototypeOf(DrawerCanvas.prototype), "defaultConfig", this).call(this));
    }
  }, {
    key: "init",
    value: function init() {
      var ctx = this.ctx = this.canvas.getContext("2d"); // 读取配置

      ctx.initStyle = {};
      ctx.setStyle(this.config.initStyle);
      ctx.initStyle = ctx.getStyle();
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      var canvas = document.createElement('canvas');
      canvas.className = "painter-canvas";
      return canvas;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.ctx.getStyle();
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      this.resize();
      var canvas = this.canvas,
          ctx = this.ctx,
          config = this.config; // 清除画布

      ctx.clearRect(0, 0, config.width, config.height);
      this.dispatchEvent('beforeupdate', ctx); // 画背景

      if (config.background) ctx.drawImage(config.background, 0, 0, config.width, config.height); // 画历史数据

      config.history.forEach(function (item) {
        _this3.paintItem(ctx, item, config);
      }); // 画当前画笔数据

      if (typeof config.penData != "undefined") {
        ctx.save();
        config.penClass.render(this.warpData(config.penData, canvas), this);
        ctx.restore();
      }

      this.dispatchEvent('update', ctx);
    }
  }, {
    key: "resize",
    value: function resize() {
      if (_get(_getPrototypeOf(DrawerCanvas.prototype), "resize", this).call(this)) {
        var canvas = this.canvas,
            config = this.config;
        canvas.width = config.width;
        canvas.height = config.height;
        this.ctx.setStyle({});
      }
    } // add function

  }, {
    key: "paintItem",
    value: function paintItem(ctx, item) {
      if (_typeof(item) != "object") return;
      var pen = _pens__WEBPACK_IMPORTED_MODULE_1__["default"].get(item.key);

      if (pen) {
        ctx.save();
        ctx.setStyle(item.style);
        pen.render(this.warpData(item.data), this);
        ctx.restore();
      }
    }
  }, {
    key: "getCtx",
    value: function getCtx() {
      return this.ctx;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.ctx.fillStyle = color;
      this.ctx.strokeStyle = color;
    }
  }, {
    key: "toDataURL",
    value: function toDataURL() {
      return this.canvas.toDataURL();
    }
  }]);

  return DrawerCanvas;
}(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DrawerCanvas);

/***/ }),

/***/ "./src/drawer-svg.js":
/*!***************************!*\
  !*** ./src/drawer-svg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.js */ "./src/drawer.js");
/* harmony import */ var _pens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pens */ "./src/pens/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DrawerSvg =
/*#__PURE__*/
function (_Drawer) {
  _inherits(DrawerSvg, _Drawer);

  function DrawerSvg() {
    _classCallCheck(this, DrawerSvg);

    return _possibleConstructorReturn(this, _getPrototypeOf(DrawerSvg).apply(this, arguments));
  }

  _createClass(DrawerSvg, [{
    key: "createCanvas",
    value: function createCanvas() {
      var div = document.createElement('div');
      div.innerHTML = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"painter-canvas\"></svg>";
      var canvas = div.childNodes[0];
      return canvas;
    }
  }, {
    key: "init",
    value: function init() {
      this.current_indx = 0;
      this.penStyle = {
        fill: "rgba(0,0,0,0)",
        stroke: "red",
        "font-size": '30px',
        "stroke-width": 2,
        "letter-spacing": '0px'
      };
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var s = "";

      for (var k in this.penStyle) {
        var v = this.penStyle[k];
        s += k + ":" + v + ";";
      }

      return s;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.penStyle.stroke = color;
    }
  }, {
    key: "setStyle",
    value: function setStyle(s) {
      var _this = this;

      if (_typeof(s) === "object") {
        Object.assign(this.penStyle, s);
      } else if (typeof s === "string") {
        s.split(";").forEach(function (item) {
          var ss = item.split(":");

          if (ss.length > 1) {
            _this.penStyle[ss[0].trim()] = ss[1].trim();
          }
        });
      }
    }
  }, {
    key: "append",
    value: function append(canvas, html) {
      if (!html) return;
      var svg;

      try {
        svg = document.createElementNS('http://www.w3.org/2000/svg', /<(\w+)/.exec(html)[1]);
        html.replace(/\s+(\w+)=['"]([^'"]+)['"]/g, function (x0, key, value) {
          svg.setAttribute(key, value);
        });
        html.replace(/>([\s\S]+)</, function (x0, text) {
          svg.innerHTML = text;
        });

        if (this.currentDom) {
          canvas.insertBefore(svg, this.currentDom);
        } else {
          canvas.appendChild(svg);
        }
      } catch (error) {
        console.log(error);
      }

      return svg;
    }
  }, {
    key: "update",
    value: function update(force) {
      this.resize();
      var canvas = this.canvas,
          config = this.config; // 清除画布

      this.dispatchEvent('beforeupdate');

      if (force) {
        this.current_indx = 0;

        while (canvas.hasChildNodes()) {
          canvas.removeChild(canvas.firstChild);
        }

        this.currentDom = false;
      } // 画当前画笔数据


      if (typeof config.penData != "undefined") {
        var html = config.penClass.renderSvg(this.warpData(config.penData), this);

        if (this.currentDom) {
          canvas.removeChild(this.currentDom);
          this.currentDom = false;
        }

        this.currentDom = this.append(canvas, html);
      } else if (this.currentDom) {
        canvas.removeChild(this.currentDom);
        this.currentDom = false;
      } // 画历史数据


      for (; this.current_indx < config.history.length; this.current_indx++) {
        var item = config.history[this.current_indx];
        this.append(canvas, this.paintItem(item, this.current_indx));
      }

      this.dispatchEvent('update');
    }
  }, {
    key: "resize",
    value: function resize() {
      var modify = false;
      var canvas = this.canvas,
          config = this.config,
          dom = this.dom; // 处理画板 width

      var width = dom.scrollWidth || dom.offsetWidth;
      var canvas_width = Number((canvas.style.width + '').replace("px", ""));

      if (width != canvas_width) {
        modify = true;
        config.width = width;
        canvas.style.width = width + "px";
      } // 处理画板 width


      var height = dom.scrollHeight || dom.offsetHeight;
      var canvas_height = Number((canvas.style.height + '').replace("px", ""));

      if (height != canvas_height) {
        modify = true;
        config.height = height;
        canvas.style.height = height + "px";
      }

      return modify;
    } // add function

  }, {
    key: "paintItem",
    value: function paintItem(item, i) {
      if (_typeof(item) != "object") return;
      var pen = _pens__WEBPACK_IMPORTED_MODULE_1__["default"].get(item.key);
      var s = "";

      if (pen && pen.renderSvg) {
        var style = this.getStyle();
        this.setStyle(item.style);
        s = pen.renderSvg(this.warpData(item.data), this);
        this.setStyle(style);
      }

      return s;
    }
  }, {
    key: "toSvg",
    value: function toSvg() {
      var svg = this.canvas.cloneNode();
      svg.innerHTML = this.canvas.innerHTML;

      for (var i = svg.childNodes.length - 1; i >= 0; i--) {
        var item = svg.childNodes[i];

        if (item.style.display === "none") {
          svg.removeChild(item);
        }
      }

      svg.removeAttribute("class");
      svg.removeAttribute("style");
      return svg.outerHTML;
    }
  }]);

  return DrawerSvg;
}(_drawer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DrawerSvg);

/***/ }),

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/Event.js */ "./src/libs/Event.js");
/* harmony import */ var _pens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pens */ "./src/pens/index.js");
/* harmony import */ var _libs_Offset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/Offset.js */ "./src/libs/Offset.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var defaultPen = _pens__WEBPACK_IMPORTED_MODULE_1__["default"].get();

if (!Object.assign) {
  Object.assign = function (a, b) {
    for (var k in b) {
      var v = b[k];
      a[k] = v;
    }

    return a;
  };
}

var Drawer =
/*#__PURE__*/
function () {
  function Drawer(dom, config) {
    var _this = this;

    _classCallCheck(this, Drawer);

    _libs_Event_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
    var canvas = this.canvas = this.createCanvas();
    var parent = this.dom = dom;

    if (dom instanceof HTMLImageElement) {
      parent = document.createElement("div");
      Object.assign(parent.style, dom.style);
      dom.parentElement.insertBefore(parent, dom);
      dom.parentElement.removeChild(dom);
      parent.appendChild(dom);
    }

    config = this.config = Object.assign(this.defaultConfig(), config);
    this.init(); // 画笔实例

    var pen; // 鼠标按下位置

    var beginPoint = false; // 鼠标out位置

    this.outPoint = false;

    this.setData = function (data) {
      if (typeof data == "undefined") return;
      _this.config.penData = data;

      _this.update();
    };

    function getPen() {
      return pen;
    }

    var mousedown = function mousedown(event) {
      var e = _this.normalizeEvent(event, config);

      var ppap = getPen();
      if (!beginPoint) beginPoint = {
        x: e.offsetX,
        y: e.offsetY
      };

      if (typeof ppap.begin == "function") {
        ppap.begin(beginPoint.x, beginPoint.y);
      }

      event.preventDefault();
      event.stopPropagation();
    };

    var mousemove = function mousemove(event) {
      var e = _this.normalizeEvent(event, config);

      var ppap = getPen(); // 在画图状态下，当鼠标按下时move事件也可以设置begin坐标

      if (!beginPoint && event.which == 1 && config.penClass.moveBegin) beginPoint = {
        x: e.offsetX,
        y: e.offsetY,
        moveBegin: true
      };
      if (!beginPoint) return;

      if (typeof ppap.move == "function") {
        ppap.move(beginPoint.x, beginPoint.y, e.offsetX, e.offsetY);
      }

      event.preventDefault && event.preventDefault();
      event.stopPropagation();
    };

    var end = this.end = function (endPoint, callBy) {
      if (callBy == "setPen") {
        var ppap = getPen();

        if (typeof ppap.close == "function") {
          ppap.close();
        }
      }

      if (!beginPoint) return;
      var ppap = getPen();

      if (typeof ppap.end == "function") {
        ppap.end(beginPoint.x, beginPoint.y, endPoint.x, endPoint.y, callBy);
      }

      beginPoint = false;
    };

    var mouseup = function mouseup(event) {
      var e = _this.normalizeEvent(event, config);

      end({
        x: e.offsetX,
        y: e.offsetY
      });
      event.preventDefault();
      event.stopPropagation();
    };

    var mouseover = function mouseover(event) {
      if (config.penClass.outEnd) {// 在out时已经end了
      } else if (_this.outPoint && event.which != 1) {
        end(_this.outPoint, "mouseover");
      }

      _this.outPoint = false;
    };

    var mouseout = function mouseout(event) {
      var e = _this.normalizeEvent(event, config); // console.log("out", e.offsetX, e.offsetY);


      _this.outPoint = {
        x: e.offsetX,
        y: e.offsetY
      };

      if (event.toElement && event.toElement.parentElement == canvas) {// console.log(this.outPoint);
      } else if (config.penClass.outEnd) {
        end(_this.outPoint, "mouseout");
      } else if (event.which == 1) {
        mousemove(e);
      }
    };

    canvas.addEventListener("mousedown", mousedown);
    canvas.addEventListener("mousemove", mousemove);
    canvas.addEventListener("mouseup", mouseup);
    canvas.addEventListener("touchstart", mousedown);
    canvas.addEventListener("touchmove", mousemove);
    canvas.addEventListener("touchend", mouseup);
    canvas.addEventListener("mouseover", mouseover);
    canvas.addEventListener("mouseout", mouseout);

    var append = function append(div, x, y) {
      if (div) {
        div.className = "painter-canvas__item";
        if (x != null) div.style.left = _this.warpData(x, canvas) + "px";
        if (y != null) div.style.top = _this.warpData(y, canvas, 1) + "px";
        parent.appendChild(div);
      }

      return parent;
    };

    var createNewPen = this.createNewPen = function () {
      // 设置画笔鼠标指针样式
      if (pen && typeof pen.unmount === "function") pen.unmount(); // canvas.style.cursor = config.penClass.cursor || 'auto';

      pen = new config.penClass(_this.setData, penSuccess, append, _this);
    }; // 画笔绘制结束回调


    var penSuccess = function penSuccess(data) {
      _this.dispatchEvent('success', data);

      createNewPen();

      if (typeof data != "undefined") {
        config.history.push({
          key: _pens__WEBPACK_IMPORTED_MODULE_1__["default"].key(config.penClass),
          data: data,
          style: _this.getStyle()
        });
        config.penData = undefined;
        config.redo.length = 0;

        _this.update();
      }
    };

    createNewPen();
    parent.appendChild(canvas);

    if (getComputedStyle(parent).position === "static") {
      parent.style.position = "relative";
    }

    this.resize();
  }

  _createClass(Drawer, [{
    key: "defaultConfig",
    value: function defaultConfig() {
      return {
        history: [],
        redo: [],
        penClass: defaultPen
      };
    }
  }, {
    key: "warpData",
    value: function warpData(data, i) {
      var config = this.config;

      if (data instanceof Array) {
        var list = [];

        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          list.push(this.warpData(item, i));
        }

        return list;
      }

      if (typeof data === "number") {
        return (i & 1 ? config.height : config.width) * data / 10000;
      }

      return data;
    }
  }, {
    key: "normalizeEvent",
    value: function normalizeEvent(e, config) {
      if (e.normalized) {
        return e;
      }

      var offsetX, offsetY;

      if (e instanceof TouchEvent) {
        var off = Object(_libs_Offset_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target);

        offsetX = (e.changedTouches[0] || e.touches[0]).pageX - off.left;
        offsetY = (e.changedTouches[0] || e.touches[0]).pageY - off.top;
      } else {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
      }

      offsetX = Math.floor(offsetX / config.width * 10000);
      offsetY = Math.floor(offsetY / config.height * 10000);
      return {
        offsetX: offsetX,
        offsetY: offsetY,
        normalized: true
      };
    }
  }, {
    key: "setPen",
    value: function setPen(penClass) {
      // 模拟mouseup
      this.end(this.outPoint, "setPen"); // 设置为默认画笔

      if (typeof penClass === "string") {
        if (this._prevPenClass) {
          this.canvas.classList.remove(this._prevPenClass);
        }

        this._prevPenClass = penClass;
        this.canvas.classList.add(penClass);
      }

      if (typeof penClass == "undefined") penClass = defaultPen;
      var tmp = _pens__WEBPACK_IMPORTED_MODULE_1__["default"].get(penClass);

      if (tmp) {
        // 清除没有完成的画笔数据
        if (this.config.penClass != tmp) {
          this.config.penClass = tmp;
          this.config.penData = undefined;
        } // 创建画笔


        this.createNewPen();
      } else {
        console.log("不能识别的画笔", penClass);
      }
    }
  }, {
    key: "stringify",
    value: function stringify() {
      return JSON.stringify(this.config.history);
    }
  }, {
    key: "parse",
    value: function parse(data) {
      if (typeof data === "string") {
        this.config.history = JSON.parse(data);
      } else if (data instanceof Array) {
        this.config.history = data;
      } else {
        return;
      }

      this.update(true);
    }
  }, {
    key: "undo",
    value: function undo(test) {
      if (this.config.history.length > 0) {
        if (test) return true;
        this.config.redo.push(this.config.history.pop());
        this.update(true);
      }
    }
  }, {
    key: "redo",
    value: function redo(test) {
      if (this.config.redo.length > 0) {
        if (test) return true;
        this.config.history.push(this.config.redo.pop());
        this.update();
      }
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: "resize",
    value: function resize() {
      var modify = false;
      var dom = this.dom,
          config = this.config;

      if (dom.offsetWidth != config.width) {
        modify = true;
        config.width = dom.scrollWidth || dom.offsetWidth;
      }

      if (dom.offsetHeight != config.height) {
        modify = true;
        config.height = dom.scrollHeight || dom.offsetHeight;
      }

      return modify;
    }
  }, {
    key: "offset",
    value: function offset() {
      return Object(_libs_Offset_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.canvas);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.canvas.classList.add("disable");
    }
  }, {
    key: "enable",
    value: function enable() {
      this.canvas.classList.remove("disable");
    }
  }, {
    key: "scale",
    value: function scale(n) {
      this.canvas.parentElement.style.transformOrigin = "50% 0 0";
      this.canvas.parentElement.style.transform = "scale(".concat(n, ")"); // translate(${})`;

      this.update();
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "createCanvas",
    value: function createCanvas() {}
  }, {
    key: "getStyle",
    value: function getStyle() {}
  }, {
    key: "update",
    value: function update() {}
  }]);

  return Drawer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Drawer, DrawerSvg, DrawerCanvas, Menu, pens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer-svg */ "./src/drawer-svg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerSvg", function() { return _drawer_svg__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _drawer_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer-canvas */ "./src/drawer-canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawerCanvas", function() { return _drawer_canvas__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pens */ "./src/pens/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pens", function() { return _pens__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_4__["default"]; });

 // import Drawer from './drawer-svg';
// import pens from './pens';
// export {
//     Drawer,
//     pens,
// };





var Drawer = _drawer_svg__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../node_modules/less-loader/dist/cjs.js??ref--4-oneOf-3-3!./index.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/index.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/libs/Drag.js":
/*!**************************!*\
  !*** ./src/libs/Drag.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offset */ "./src/libs/Offset.js");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event.js */ "./src/libs/Event.js");



function Drag(lis, aim) {
  var _this = this;

  _Event_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
  aim = aim || lis;
  this.state = {
    end: Object(_Offset__WEBPACK_IMPORTED_MODULE_0__["default"])(aim)
  };

  this.setBegin = function (x, y) {
    this.state.begin = {
      left: x,
      top: y
    };
  };

  this.warpEvent = function (e) {
    e.preventDefault();

    if (e instanceof TouchEvent) {
      if (e.type === "touchend") {
        e.pageX = e.changedTouches[0].pageX;
        e.pageY = e.changedTouches[0].pageY;
      } else {
        e.pageX = e.touches[0].pageX;
        e.pageY = e.touches[0].pageY;
      }
    }

    return e;
  };

  this.getMoved = function (x, y) {
    var _this$state$begin = this.state.begin,
        left = _this$state$begin.left,
        top = _this$state$begin.top;
    left = x - left;
    top = y - top;
    left += this.state.end.left || 0;
    top += this.state.end.top || 0;
    this.state.move = {
      left: left,
      top: top
    };
    return this.state.move;
  };

  this.begin = function (e) {
    if (!_this.state.begin) {
      e = _this.warpEvent(e);

      _this.setBegin(e.pageX, e.pageY);

      _this.dispatchEvent("begin");
    }
  };

  this.move = function (e) {
    if (_this.state.begin) {
      e = _this.warpEvent(e);

      var _this$getMoved = _this.getMoved(e.pageX, e.pageY),
          left = _this$getMoved.left,
          top = _this$getMoved.top;

      aim.style.left = left + "px";
      aim.style.top = top + "px";
    }
  };

  this.end = function (e) {
    if (_this.state.begin) {
      e = _this.warpEvent(e);

      var _this$getMoved2 = _this.getMoved(e.pageX, e.pageY),
          left = _this$getMoved2.left,
          top = _this$getMoved2.top;

      _this.state.begin = false;
      _this.state.end = {
        left: left,
        top: top
      };

      _this.dispatchEvent("end", {
        left: left,
        top: top
      });
    }
  };

  this.moveTo = function (_ref) {
    var left = _ref.left,
        top = _ref.top;
    aim.style.left = left + "px";
    aim.style.top = top + "px";
    _this.state.end = {
      left: left,
      top: top
    };
    return _this;
  };

  this.start = function () {
    lis.addEventListener("mousedown", this.begin);
    document.addEventListener("mousemove", this.move);
    document.addEventListener("mouseup", this.end);
    lis.addEventListener("touchstart", this.begin);
    document.addEventListener("touchmove", this.move);
    document.addEventListener("touchend", this.end);
    return this;
  };

  this.stop = function () {
    lis.removeEventListener("mousedown", this.begin);
    document.removeEventListener("mousemove", this.move);
    document.removeEventListener("mouseup", this.end);
    lis.removeEventListener("touchstart", this.begin);
    document.removeEventListener("touchmove", this.move);
    document.removeEventListener("touchend", this.end);
    return this;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Drag);

/***/ }),

/***/ "./src/libs/Event.js":
/*!***************************!*\
  !*** ./src/libs/Event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Event() {
  var _listeners = {}; // 添加

  this.addEventListener = function (type, fn) {
    if (typeof _listeners[type] === "undefined") {
      _listeners[type] = [];
    }

    if (typeof fn === "function") {
      _listeners[type].push(fn);
    }

    return this;
  }; // 触发


  this.dispatchEvent = function (type, data) {
    var arrayEvent = _listeners[type];

    if (arrayEvent instanceof Array) {
      for (var i = 0, length = arrayEvent.length; i < length; i += 1) {
        if (typeof arrayEvent[i] === "function") {
          arrayEvent[i](data);
        }
      }
    }

    return this;
  }; // 删除


  this.removeEventListener = function (type, fn) {
    var arrayEvent = _listeners[type];

    if (typeof type === "string" && arrayEvent instanceof Array) {
      if (typeof fn === "function") {
        // 清除当前type类型事件下对应fn方法
        for (var i = 0, length = arrayEvent.length; i < length; i += 1) {
          if (arrayEvent[i] === fn) {
            _listeners[type].splice(i, 1);

            break;
          }
        }
      } else if (typeof fn === "undefined") {
        // 如果仅仅参数type，则所有type类型事件清除
        delete _listeners[type];
      }
    }

    return this;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/libs/Offset.js":
/*!****************************!*\
  !*** ./src/libs/Offset.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function offset(who) {
  var box = who.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft,
    right: box.right,
    bottom: box.bottom
  };
}

/* harmony default export */ __webpack_exports__["default"] = (offset);

/***/ }),

/***/ "./src/pens/circlePen.js":
/*!*******************************!*\
  !*** ./src/pens/circlePen.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function circlePen(render, resolve) {
  this.move = function (bx, by, ex, ey) {
    render([bx, by, ex, ey]);
  };

  this.end = function (bx, by, ex, ey) {
    resolve([bx, by, ex, ey]);
  };
}

circlePen.moveBegin = true;

circlePen.render = function (data, drawer) {
  return console.error("暂未实现画canvas的圆形");
};

circlePen.renderSvg = function (data, drawer) {
  if (data && data.length === 4) {
    var x = data[0];
    var y = data[1];
    var a = Math.pow(Math.abs(data[2] - data[0]), 2);
    var b = Math.pow(Math.abs(data[3] - data[1]), 2);
    var r = Math.sqrt(a + b);
    return "<circle cx=\"".concat(x, "\" cy=\"").concat(y, "\" r=\"").concat(r, "\" style=\"").concat(drawer.getStyle(), "\"/>");
  }

  return "";
};

/* harmony default export */ __webpack_exports__["default"] = (circlePen);

/***/ }),

/***/ "./src/pens/defaultPen.js":
/*!********************************!*\
  !*** ./src/pens/defaultPen.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import pencil from './defaultPen.cur';

/**
 * 画笔构造函数
 * @param {function} render 渲染当前作画数据
 * @param {function} resolve 作画完成，提交本次作画数据
 */
function defaultPen(render, resolve) {
  var li = [];

  this.begin = function (bx, by) {
    li.push(bx);
    li.push(by);
  };

  this.move = function (bx, by, ex, ey) {
    li.push(ex);
    li.push(ey);
    render(li);
  };

  this.end = function (bx, by, ex, ey) {
    li.push(ex);
    li.push(ey);
    resolve(li);
  };
} // 鼠标move时触发this.begin


defaultPen.moveBegin = true; // 鼠标out时触发this.end

defaultPen.outEnd = true; // defaultPen.cursor = 'url(' + pencil + '),pointer';

defaultPen.render = function (data, drawer) {
  if (data instanceof Array && data.length > 0) {
    var ctx = drawer.ctx;
    ctx.beginPath();
    ctx.moveTo(data[0], data[1]);

    for (var i = 2; i < data.length; i += 2) {
      ctx.lineTo(data[i], data[i + 1]);
    }

    ctx.stroke();
  }
};

defaultPen.renderSvg = function (data, drawer) {
  if (data instanceof Array && data.length > 0) {
    var path = "";

    for (var i = 0; i < data.length; i++) {
      var item = data[i];

      if (i % 2 == 0) {
        path += i == 0 ? "M" : "L";
      }

      path += item + " ";
    }

    return "<path d=\"".concat(path, "\" style=\"").concat(drawer.getStyle(), "\"/>");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (defaultPen);

/***/ }),

/***/ "./src/pens/ellipsePen.js":
/*!********************************!*\
  !*** ./src/pens/ellipsePen.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ellipsePen(render, resolve) {
  this.move = function (bx, by, ex, ey) {
    render([bx, by, ex, ey]);
  };

  this.end = function (bx, by, ex, ey) {
    resolve([bx, by, ex, ey]);
  };
}

ellipsePen.moveBegin = true;

ellipsePen.render = function (data, drawer) {
  if (data && data.length === 4) {
    var ctx = drawer.ctx;
    var x = (data[0] + data[2]) / 2;
    var y = (data[1] + data[3]) / 2;
    var a = (data[2] - data[0]) / 2;
    var b = (data[3] - data[1]) / 2;
    var r = a > b ? a : b;
    var ratioX = a / r;
    var ratioY = b / r;
    ctx.scale(ratioX, ratioY);
    ctx.beginPath();
    ctx.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.stroke();
  }
};

ellipsePen.renderSvg = function (data, drawer) {
  if (data && data.length === 4) {
    var x = (data[0] + data[2]) / 2;
    var y = (data[1] + data[3]) / 2;
    var a = Math.abs((data[2] - data[0]) / 2);
    var b = Math.abs((data[3] - data[1]) / 2);
    return "<ellipse cx=\"".concat(x, "\" cy=\"").concat(y, "\" rx=\"").concat(a, "\" ry=\"").concat(b, "\" style=\"").concat(drawer.getStyle(), "\"/>");
  }

  return "";
};

/* harmony default export */ __webpack_exports__["default"] = (ellipsePen);

/***/ }),

/***/ "./src/pens/eraser.js":
/*!****************************!*\
  !*** ./src/pens/eraser.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import url from './eraser.png';
function count(dom, n) {
  n = n || 0;

  if (dom.previousElementSibling) {
    return count(dom.previousElementSibling, n + 1);
  }

  return n + "";
}

function eraser(render, resolve, append, drawer) {
  if (drawer.canvas.tagName == "svg") {
    var _li = [];

    var hover = function hover(event) {
      if (event.target != drawer.canvas && event.which == 1) {
        _li.push(count(event.target));

        render(_li);
      }
    };

    var click = function click(event) {
      if (event.target != drawer.canvas) {
        _li.push(count(event.target));

        render(_li);
      }
    };

    drawer.canvas.addEventListener("mousemove", hover);
    drawer.canvas.addEventListener("click", click);

    this.end = function (bx, by, ex, ey, what) {
      resolve(_li.length > 0 ? _li : undefined);
    };

    this.unmount = function () {
      drawer.canvas.removeEventListener("mousemove", hover);
      drawer.canvas.removeEventListener("click", click);
    };
  } else {
    var li = [];

    this.begin = function (bx, by, ex, ey) {
      li.push(bx);
      li.push(by);
    };

    this.move = function (bx, by, ex, ey) {
      li.push(ex);
      li.push(ey);
      render(li);
    };

    this.end = function (bx, by, ex, ey) {
      li.push(ex);
      li.push(ey);
      resolve(li);
    };
  }
} // eraser.cursor = 'url(' + url + '),pointer';


eraser.render = function (data, drawer) {
  if (data instanceof Array && data.length > 0) {
    var ctx = drawer.ctx;

    for (var i = 0; i < data.length; i += 2) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(data[i], data[i + 1], 5, 0, 2 * Math.PI);
      ctx.clip();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.restore();
    }
  }
};

eraser.renderSvg = function (data, drawer) {
  if (data instanceof Array && data.length > 0) {
    data.forEach(function (i) {
      var svg = drawer.canvas.childNodes[i];
      if (svg) svg.style.display = "none";
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (eraser);

/***/ }),

/***/ "./src/pens/index.js":
/*!***************************!*\
  !*** ./src/pens/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultPen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultPen.js */ "./src/pens/defaultPen.js");
/* harmony import */ var _linePen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linePen.js */ "./src/pens/linePen.js");
/* harmony import */ var _ellipsePen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsePen.js */ "./src/pens/ellipsePen.js");
/* harmony import */ var _circlePen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circlePen.js */ "./src/pens/circlePen.js");
/* harmony import */ var _rectPen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectPen.js */ "./src/pens/rectPen.js");
/* harmony import */ var _textPen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textPen.js */ "./src/pens/textPen.js");
/* harmony import */ var _eraser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eraser.js */ "./src/pens/eraser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








var map = {
  defaultPen: _defaultPen_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  linePen: _linePen_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  ellipsePen: _ellipsePen_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  circlePen: _circlePen_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  rectPen: _rectPen_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  textPen: _textPen_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  eraser: _eraser_js__WEBPACK_IMPORTED_MODULE_6__["default"]
};

function get(key) {
  return map[key] || _defaultPen_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}

;

function key(pen) {
  if (_typeof(pen) == "object") pen = pen.constuctor;

  if (typeof pen == "function" && typeof pen.render == "function") {
    for (var k in map) {
      var v = map[k];

      if (pen == v) {
        return k;
      }
    }
  }
}

;

function set(key, pen) {
  if (typeof pen == "function" && typeof pen.render == "function") {
    map[key] = pen;
    return true;
  }

  return false;
}

function keys() {
  var ks = [];

  for (var k in map) {
    ks.push(k);
  }

  return ks;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  key: key,
  set: set,
  keys: keys
});

/***/ }),

/***/ "./src/pens/linePen.js":
/*!*****************************!*\
  !*** ./src/pens/linePen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function linePen(render, resolve) {
  this.move = function (bx, by, ex, ey) {
    render([bx, by, ex, ey]);
  };

  this.end = function (bx, by, ex, ey) {
    resolve([bx, by, ex, ey]);
  };
}

linePen.moveBegin = true;

linePen.render = function (data, drawer) {
  if (data && data.length === 4) {
    var ctx = drawer.ctx;
    ctx.beginPath();
    ctx.moveTo(data[0], data[1]);
    ctx.lineTo(data[2], data[3]);
    ctx.stroke();
  }
};

linePen.renderSvg = function (data, drawer) {
  if (data && data.length === 4) {
    return "<line x1=\"".concat(data[0], "\" y1=\"").concat(data[1], "\" x2=\"").concat(data[2], "\" y2=\"").concat(data[3], "\" style=\"").concat(drawer.getStyle(), "\"/>");
  }

  return "";
};

/* harmony default export */ __webpack_exports__["default"] = (linePen);

/***/ }),

/***/ "./src/pens/rectPen.js":
/*!*****************************!*\
  !*** ./src/pens/rectPen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function rectPen(render, resolve) {
  this.move = function (bx, by, ex, ey) {
    render([bx, by, ex, ey]);
  };

  this.end = function (bx, by, ex, ey) {
    resolve([bx, by, ex, ey]);
  };
}

rectPen.moveBegin = true;

rectPen.render = function (data, drawer) {
  if (data && data.length === 4) {
    var ctx = drawer.ctx;
    ctx.beginPath();
    ctx.moveTo(data[0], data[1]);
    ctx.lineTo(data[2], data[1]);
    ctx.lineTo(data[2], data[3]);
    ctx.lineTo(data[0], data[3]);
    ctx.lineTo(data[0], data[1]);
    ctx.stroke();
  }
};

rectPen.renderSvg = function (data, drawer) {
  if (data && data.length === 4) {
    var x = Math.min(data[0], data[2]);
    var y = Math.min(data[1], data[3]);
    var width = Math.abs(data[2] - data[0]);
    var height = Math.abs(data[3] - data[1]);
    return "<rect x=\"".concat(x, "\" y=\"").concat(y, "\" width=\"").concat(width, "\" height=\"").concat(height, "\" style=\"").concat(drawer.getStyle(), "\"/>");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rectPen);

/***/ }),

/***/ "./src/pens/textPen.js":
/*!*****************************!*\
  !*** ./src/pens/textPen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textPen(render, resolve, append) {
  var input, dom, tmp;

  this.close = this.begin = function () {
    if (tmp) {
      resolve(tmp);
      tmp = null;
    }

    if (dom) try {
      dom.removeChild(input);
    } catch (error) {}
  };

  this.end = function (bx, by, ex, ey) {
    var _this = this;

    tmp = [bx, by];
    input = document.createElement("textarea");
    input.addEventListener("keyup", function (e) {
      if (e.ctrlKey && e.keyCode == 13) {
        _this.close();
      } else {
        tmp[2] = input.value;
        render(tmp);
      }
    });
    dom = append(input, ex, ey);
    input.focus();
  };
}

textPen.render = function (data, drawer) {
  if (data && data.length >= 4) {
    var ctx = drawer.ctx;
    ctx.font = textPen.font;
    var text = data[2] || "";
    var x = data[0];
    var y = data[1];
    var size = parseInt(textPen.font);
    text.split("\n").forEach(function (item, i) {
      ctx.fillText(item, x, y + i * size);
    });
  }
};

textPen.renderSvg = function (data, drawer) {
  if (data && data.length === 3) {
    var x = data[0];
    var y = data[1];
    var size = parseInt(drawer.penStyle['font-size']);
    var texts = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (data[2] || '').split('\n')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var text = _step.value;
        texts += "<text x=\"".concat(x, "\" y=\"").concat(y, "\" style=\"").concat(drawer.getStyle(), "\">").concat(text, "</text>");
        y += size;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return "<g>".concat(texts, "</g>");
  }

  return "";
};

/* harmony default export */ __webpack_exports__["default"] = (textPen);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWludC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFpbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly9wYWludC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9kcmF3ZXItY2FudmFzLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2RyYXdlci1zdmcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvZHJhd2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4Lmxlc3M/NmJhZCIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvbGlicy9FdmVudC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL09mZnNldC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2NpcmNsZVBlbi5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2RlZmF1bHRQZW4uanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9lbGxpcHNlUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvZXJhc2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9saW5lUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvcmVjdFBlbi5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL3RleHRQZW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiTWVudSIsImRyYXdlciIsIm1lbnUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib2Zmc2V0Iiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYXBwZW5kQ2hpbGQiLCJhZGRCdXR0b24iLCJodG1sIiwiY2IiLCJidG4iLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkUGVucyIsImtleXMiLCJwZW5zIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwic2V0UGVuIiwicHJldiIsIm1vdmVhYmxlIiwiZHJhZyIsIkRyYWciLCJtb3ZlVG8iLCJzdGFydCIsImRpc2FibGUiLCJlbmFibGUiLCJ1bmRvIiwicmVkbyIsInNjYWxlIiwiY29sb3IiLCJjb2xvcnMiLCJzZXRDb2xvciIsImNsZWFyIiwicGFyc2UiLCJyZXN0b3JlIiwicyIsImNvdW50Iiwic2F2ZSIsInN0cmluZ2lmeSIsInJlbW92ZUNoaWxkIiwic3R5bGVzIiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwicHJvdG90eXBlIiwiZ2V0U3R5bGUiLCJrIiwiaW5pdFN0eWxlIiwic2V0U3R5bGUiLCJEcmF3ZXJDYW52YXMiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJjdHgiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiY29uZmlnIiwicmVzaXplIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwYXRjaEV2ZW50IiwiZHJhd0ltYWdlIiwiaGlzdG9yeSIsInBhaW50SXRlbSIsInBlbkRhdGEiLCJwZW5DbGFzcyIsInJlbmRlciIsIndhcnBEYXRhIiwicGVuIiwiZ2V0IiwiZGF0YSIsInRvRGF0YVVSTCIsIkRyYXdlciIsIkRyYXdlclN2ZyIsImRpdiIsImNoaWxkTm9kZXMiLCJjdXJyZW50X2luZHgiLCJwZW5TdHlsZSIsImZpbGwiLCJzdHJva2UiLCJ2Iiwic3BsaXQiLCJzcyIsImxlbmd0aCIsInRyaW0iLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJleGVjIiwieDAiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInRleHQiLCJjdXJyZW50RG9tIiwiaW5zZXJ0QmVmb3JlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZm9yY2UiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsInJlbmRlclN2ZyIsImFwcGVuZCIsIm1vZGlmeSIsImRvbSIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJjYW52YXNfd2lkdGgiLCJOdW1iZXIiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjYW52YXNfaGVpZ2h0IiwiaSIsImNsb25lTm9kZSIsImRpc3BsYXkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvdXRlckhUTUwiLCJkZWZhdWx0UGVuIiwiYSIsImIiLCJFdmVudCIsImNhbGwiLCJjcmVhdGVDYW52YXMiLCJwYXJlbnQiLCJIVE1MSW1hZ2VFbGVtZW50IiwicGFyZW50RWxlbWVudCIsImRlZmF1bHRDb25maWciLCJpbml0IiwiYmVnaW5Qb2ludCIsIm91dFBvaW50Iiwic2V0RGF0YSIsInVwZGF0ZSIsImdldFBlbiIsIm1vdXNlZG93biIsImV2ZW50IiwiZSIsIm5vcm1hbGl6ZUV2ZW50IiwicHBhcCIsIngiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJiZWdpbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibW91c2Vtb3ZlIiwid2hpY2giLCJtb3ZlQmVnaW4iLCJtb3ZlIiwiZW5kIiwiZW5kUG9pbnQiLCJjYWxsQnkiLCJjbG9zZSIsIm1vdXNldXAiLCJtb3VzZW92ZXIiLCJvdXRFbmQiLCJtb3VzZW91dCIsInRvRWxlbWVudCIsImNyZWF0ZU5ld1BlbiIsInVubW91bnQiLCJwZW5TdWNjZXNzIiwicHVzaCIsInVuZGVmaW5lZCIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsIkFycmF5IiwibGlzdCIsIm5vcm1hbGl6ZWQiLCJUb3VjaEV2ZW50Iiwib2ZmIiwidGFyZ2V0IiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIk1hdGgiLCJmbG9vciIsIl9wcmV2UGVuQ2xhc3MiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0bXAiLCJKU09OIiwidGVzdCIsInBvcCIsIm4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJsaXMiLCJhaW0iLCJzdGF0ZSIsInNldEJlZ2luIiwid2FycEV2ZW50IiwidHlwZSIsImdldE1vdmVkIiwic3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfbGlzdGVuZXJzIiwiZm4iLCJhcnJheUV2ZW50Iiwic3BsaWNlIiwid2hvIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJyaWdodCIsImJvdHRvbSIsImNpcmNsZVBlbiIsInJlc29sdmUiLCJieCIsImJ5IiwiZXgiLCJleSIsInBvdyIsImFicyIsInIiLCJzcXJ0IiwibGkiLCJiZWdpblBhdGgiLCJsaW5lVG8iLCJwYXRoIiwiZWxsaXBzZVBlbiIsInJhdGlvWCIsInJhdGlvWSIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImVyYXNlciIsInRhZ05hbWUiLCJob3ZlciIsImNsaWNrIiwid2hhdCIsImNsaXAiLCJtYXAiLCJsaW5lUGVuIiwicmVjdFBlbiIsInRleHRQZW4iLCJjb25zdHVjdG9yIiwic2V0Iiwia3MiLCJtaW4iLCJpbnB1dCIsImN0cmxLZXkiLCJrZXlDb2RlIiwiZm9jdXMiLCJmb250Iiwic2l6ZSIsInBhcnNlSW50IiwiZmlsbFRleHQiLCJ0ZXh0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtB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OztBQUFBO0FBSzNCLDJCQUFnQixDQUFDdkwsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFTLEVBQVYsRUFBY1csS0FBZCxDQUFvQixJQUFwQixDQUFoQiw4SEFBMEM7QUFBQSxZQUFsQ1UsSUFBa0M7QUFDdENrSyxhQUFLLHdCQUFnQnBILENBQWhCLG9CQUF5QkUsQ0FBekIsd0JBQXNDbEosTUFBTSxDQUFDaUQsUUFBUCxFQUF0QyxnQkFBNERpRCxJQUE1RCxZQUFMO0FBQ0FnRCxTQUFDLElBQUkrRyxJQUFMO0FBQ0g7QUFSMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTM0Isd0JBQWFHLEtBQWI7QUFDSDs7QUFDRCxTQUFPLEVBQVA7QUFDSCxDQWJEOztBQWVlYixzRUFBZixFIiwiZmlsZSI6InBhaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwYWludFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYWludFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYWludFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIENyZWF0ZWQgRGF0ZTogMjAxNy0xMC0xNiAwOToyNzowOVxcbiAqIEF1dGhvcjogaW51MTI1NVxcbiAqIEUtTWFpbDogOTI5OTA5MjYwQHFxLmNvbVxcbiAqL1xcbi5pbnB1dC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uaW5wdXQtc3R5bGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUY5MEU2O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XFxufVxcbi50ZXh0YXJlYS1zdHlsZSB7XFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcbi50ZXh0YXJlYS1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLnNlbGVjdC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzNweDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuLnNlbGVjdC1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5wYWludGVyLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0biB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogNXB4IDdweDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMxREE1N0E7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzA0OGM2MTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMDQ4YzYxO1xcbn1cXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuOmFjdGl2ZSxcXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3MzQ4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMzZiZTkzO1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19tb3ZlIHtcXG4gIG1hcmdpbjogNXB4IDdweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLnBhaW50ZXItY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5wYWludGVyLWNhbnZhcyA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wYWludGVyLWNhbnZhcy5lcmFzZXIgPiAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlc3Ryb2tlO1xcbn1cXG4ucGFpbnRlci1jYW52YXMuZGlzYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBhaW50ZXItY2FudmFzLmRpc2FibGUgPiAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucGFpbnRlci1jYW52YXNfX2l0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgcGVucyBmcm9tICcuL3BlbnMnO1xuaW1wb3J0IERyYWcgZnJvbSAnLi9saWJzL0RyYWcnO1xuXG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5mdW5jdGlvbiBNZW51KGRyYXdlcikge1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwicGFpbnRlci1tZW51XCI7XG4gICAgdmFyIG9mZnNldCA9IGRyYXdlci5vZmZzZXQoKTtcbiAgICBtZW51LnN0eWxlLnRvcCA9IG9mZnNldC50b3AgKyBcInB4XCI7XG4gICAgbWVudS5zdHlsZS5sZWZ0ID0gb2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB0aGlzLmFkZEJ1dHRvbiA9IGZ1bmN0aW9uKGh0bWwsIGNiKSB7XG4gICAgICAgIGlmIChodG1sICYmIGNiKSB7XG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fYnRuXCI7XG4gICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gaHRtbDtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2IpO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hZGRQZW5zID0gZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBrZXlzID0ga2V5cyB8fCBwZW5zLmtleXMoKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaHRtbCkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IGh0bWw6IGl0ZW0sIGtleTogaXRlbSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBidG4uY2xhc3NOYW1lID0gXCJwYWludGVyLW1lbnVfX2J0biBwYWludGVyLW1lbnVfX3BlblwiO1xuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGl0ZW0uaHRtbC5yZXBsYWNlKC9wZW4kL2ksIFwiXCIpO1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgICAgICBkcmF3ZXIuc2V0UGVuKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRQZW5zLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQZW5zLnByZXYuY2xhc3NOYW1lID0gdGhpcy5hZGRQZW5zLnByZXYuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBlbnMucHJldiA9IGJ0bjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkZFBlbnMucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGVucy5wcmV2ID0gYnRuO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMubW92ZWFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fbW92ZVwiO1xuICAgICAgICB2YXIgZHJhZyA9IG5ldyBEcmFnKGJ0biwgbWVudSkubW92ZVRvKG9mZnNldCkuc3RhcnQoKTtcbiAgICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiYmVnaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIuZGlzYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLmVuYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMudW5kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIuaSpOmUgFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci51bmRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIumHjeWBmlwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci5yZWRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuc2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmlL7lpKdcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSAqPSAxLjE7XG4gICAgICAgICAgICBkcmF3ZXIuc2NhbGUoc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLnvKnlsI9cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSAvPSAxLjE7XG4gICAgICAgICAgICBkcmF3ZXIuc2NhbGUoc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmNvbG9yID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbXG4gICAgICAgICAgICBbXCJyZWRcIiwgXCLnuqLoibJcIl0sXG4gICAgICAgICAgICBbXCJ5ZWxsb3dcIiwgXCLpu4ToibJcIl0sXG4gICAgICAgICAgICBbXCJibHVlXCIsIFwi6JOd6ImyXCJdXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGJ0biA9IHRoaXMuYWRkQnV0dG9uKGl0ZW1bMV0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3ZXIuc2V0Q29sb3IoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvci5wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldi5jbGFzc05hbWUgPSB0aGlzLmNvbG9yLnByZXYuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLnByZXYgPSBidG47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9IGl0ZW1bMF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29sb3IucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldiA9IGJ0bjtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5riF56m6XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLnBhcnNlKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5yZXN0b3JlID0gZnVuY3Rpb24ocykge1xuICAgICAgICB0aGlzLnJlc3RvcmUuY291bnQrKztcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmgaLlpI1cIiArIHRoaXMucmVzdG9yZS5jb3VudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIucGFyc2Uocyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMucmVzdG9yZS5jb3VudCA9IDA7XG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5L+d5a2YXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZShkcmF3ZXIuc3RyaW5naWZ5KCkpO1xuICAgICAgICAgICAgZHJhd2VyLnBhcnNlKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgRHJhd2VyIGZyb20gJy4vZHJhd2VyLmpzJztcbmltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5cbmNvbnN0IHN0eWxlcyA9IFtcImZpbGxTdHlsZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJnbG9iYWxBbHBoYVwiLCBcImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvblwiLCBcImltYWdlU21vb3RoaW5nRW5hYmxlZFwiLCBcImltYWdlU21vb3RoaW5nUXVhbGl0eVwiLCBcImxpbmVDYXBcIiwgXCJsaW5lRGFzaE9mZnNldFwiLCBcImxpbmVKb2luXCIsIFwibGluZVdpZHRoXCIsIFwibWl0ZXJMaW1pdFwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dDb2xvclwiLCBcInNoYWRvd09mZnNldFhcIiwgXCJzaGFkb3dPZmZzZXRZXCIsIFwic3Ryb2tlU3R5bGVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJ0ZXh0QmFzZWxpbmVcIiwgXTtcblxuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5nZXRTdHlsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHN0eWxlcy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmICh0aGlzW2tdICE9IHRoaXMuaW5pdFN0eWxlW2tdKSBzdHlsZVtrXSA9IHRoaXNba107XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlO1xufTtcbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgIT0gXCJvYmplY3RcIikgcmV0dXJuIHRoaXM7XG4gICAgc3R5bGVzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKHN0eWxlW2tdICE9IG51bGwpIHRoaXNba10gPSBzdHlsZVtrXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbml0U3R5bGVba10pIHRoaXNba10gPSB0aGlzLmluaXRTdHlsZVtrXTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmNsYXNzIERyYXdlckNhbnZhcyBleHRlbmRzIERyYXdlciB7XG4gICAgZGVmYXVsdENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJcIixcbiAgICAgICAgICAgIGluaXRTdHlsZToge1xuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogXCJyZWRcIixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogXCJyZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzdXBlci5kZWZhdWx0Q29uZmlnKCkpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIC8vIOivu+WPlumFjee9rlxuICAgICAgICBjdHguaW5pdFN0eWxlID0ge307XG4gICAgICAgIGN0eC5zZXRTdHlsZSh0aGlzLmNvbmZpZy5pbml0U3R5bGUpO1xuICAgICAgICBjdHguaW5pdFN0eWxlID0gY3R4LmdldFN0eWxlKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gXCJwYWludGVyLWNhbnZhc1wiO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgICBnZXRTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4LmdldFN0eWxlKCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdmFyIHsgY2FudmFzLCBjdHgsIGNvbmZpZyB9ID0gdGhpcztcbiAgICAgICAgLy8g5riF6Zmk55S75biDXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmV1cGRhdGUnLCBjdHgpO1xuICAgICAgICAvLyDnlLvog4zmma9cbiAgICAgICAgaWYgKGNvbmZpZy5iYWNrZ3JvdW5kKSBjdHguZHJhd0ltYWdlKGNvbmZpZy5iYWNrZ3JvdW5kLCAwLCAwLCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICAvLyDnlLvljoblj7LmlbDmja5cbiAgICAgICAgY29uZmlnLmhpc3RvcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWludEl0ZW0oY3R4LCBpdGVtLCBjb25maWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g55S75b2T5YmN55S756yU5pWw5o2uXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGNvbmZpZy5wZW5DbGFzcy5yZW5kZXIodGhpcy53YXJwRGF0YShjb25maWcucGVuRGF0YSwgY2FudmFzKSwgdGhpcyk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndXBkYXRlJywgY3R4KTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZiAoc3VwZXIucmVzaXplKCkpIHtcbiAgICAgICAgICAgIGxldCB7IGNhbnZhcywgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5zZXRTdHlsZSh7fSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIGZ1bmN0aW9uXG4gICAgcGFpbnRJdGVtKGN0eCwgaXRlbSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgICAgICB2YXIgcGVuID0gcGVucy5nZXQoaXRlbS5rZXkpO1xuICAgICAgICBpZiAocGVuKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LnNldFN0eWxlKGl0ZW0uc3R5bGUpO1xuICAgICAgICAgICAgcGVuLnJlbmRlcih0aGlzLndhcnBEYXRhKGl0ZW0uZGF0YSksIHRoaXMpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDdHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgfVxuICAgIHRvRGF0YVVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyQ2FudmFzOyIsImltcG9ydCBEcmF3ZXIgZnJvbSAnLi9kcmF3ZXIuanMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcblxuY2xhc3MgRHJhd2VyU3ZnIGV4dGVuZHMgRHJhd2VyIHtcbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJwYWludGVyLWNhbnZhc1wiPjwvc3ZnPmA7XG4gICAgICAgIHZhciBjYW52YXMgPSBkaXYuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X2luZHggPSAwO1xuICAgICAgICB0aGlzLnBlblN0eWxlID0ge1xuICAgICAgICAgICAgZmlsbDogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICBzdHJva2U6IFwicmVkXCIsXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAnMzBweCcsXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAyLFxuICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiAnMHB4JyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0U3R5bGUoKSB7XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnBlblN0eWxlKSB7XG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMucGVuU3R5bGVba107XG4gICAgICAgICAgICBzICs9IGsgKyBcIjpcIiArIHYgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVuU3R5bGUuc3Ryb2tlID0gY29sb3I7XG4gICAgfVxuICAgIHNldFN0eWxlKHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGVuU3R5bGUsIHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNzID0gaXRlbS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5TdHlsZVtzc1swXS50cmltKCldID0gc3NbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZChjYW52YXMsIGh0bWwpIHtcbiAgICAgICAgaWYgKCFodG1sKSByZXR1cm47XG4gICAgICAgIHZhciBzdmc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgLzwoXFx3KykvLmV4ZWMoaHRtbClbMV0pO1xuICAgICAgICAgICAgaHRtbC5yZXBsYWNlKC9cXHMrKFxcdyspPVsnXCJdKFteJ1wiXSspWydcIl0vZywgZnVuY3Rpb24oeDAsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBodG1sLnJlcGxhY2UoLz4oW1xcc1xcU10rKTwvLCBmdW5jdGlvbih4MCwgdGV4dCkge1xuICAgICAgICAgICAgICAgIHN2Zy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuaW5zZXJ0QmVmb3JlKHN2ZywgdGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgdXBkYXRlKGZvcmNlKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHZhciB7IGNhbnZhcywgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAvLyDmuIXpmaTnlLvluINcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmV1cGRhdGUnKTtcbiAgICAgICAgaWYgKGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaW5keCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoY2FudmFzLmhhc0NoaWxkTm9kZXMoKSlcbiAgICAgICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQoY2FudmFzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9tID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55S75b2T5YmN55S756yU5pWw5o2uXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBjb25maWcucGVuQ2xhc3MucmVuZGVyU3ZnKHRoaXMud2FycERhdGEoY29uZmlnLnBlbkRhdGEpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREb20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IHRoaXMuYXBwZW5kKGNhbnZhcywgaHRtbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RG9tKSB7XG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUu+WOhuWPsuaVsOaNrlxuICAgICAgICBmb3IgKDsgdGhpcy5jdXJyZW50X2luZHggPCBjb25maWcuaGlzdG9yeS5sZW5ndGg7IHRoaXMuY3VycmVudF9pbmR4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjb25maWcuaGlzdG9yeVt0aGlzLmN1cnJlbnRfaW5keF07XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChjYW52YXMsIHRoaXMucGFpbnRJdGVtKGl0ZW0sIHRoaXMuY3VycmVudF9pbmR4KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1cGRhdGUnKTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICB2YXIgbW9kaWZ5ID0gZmFsc2U7XG4gICAgICAgIHZhciB7IGNhbnZhcywgY29uZmlnLCBkb20gfSA9IHRoaXM7XG4gICAgICAgIC8vIOWkhOeQhueUu+advyB3aWR0aFxuICAgICAgICB2YXIgd2lkdGggPSAoZG9tLnNjcm9sbFdpZHRoIHx8IGRvbS5vZmZzZXRXaWR0aCk7XG4gICAgICAgIHZhciBjYW52YXNfd2lkdGg9IE51bWJlcigoIGNhbnZhcy5zdHlsZS53aWR0aCArICcnKS5yZXBsYWNlKFwicHhcIixcIlwiKSk7XG4gICAgICAgIGlmICh3aWR0aCAhPSBjYW52YXNfd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGlmeSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgICAvLyDlpITnkIbnlLvmnb8gd2lkdGhcbiAgICAgICAgdmFyIGhlaWdodCA9IChkb20uc2Nyb2xsSGVpZ2h0IHx8IGRvbS5vZmZzZXRIZWlnaHQpO1xuICAgICAgICB2YXIgY2FudmFzX2hlaWdodCA9IE51bWJlcigoIGNhbnZhcy5zdHlsZS5oZWlnaHQgKyAnJykucmVwbGFjZShcInB4XCIsXCJcIikpO1xuICAgICAgICBpZiAoaGVpZ2h0ICE9IGNhbnZhc19oZWlnaHQpIHtcbiAgICAgICAgICAgIG1vZGlmeSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kaWZ5O1xuICAgIH1cbiAgICAvLyBhZGQgZnVuY3Rpb25cbiAgICBwYWludEl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgICAgICB2YXIgcGVuID0gcGVucy5nZXQoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgcyA9IFwiXCI7XG4gICAgICAgIGlmIChwZW4gJiYgcGVuLnJlbmRlclN2Zykge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShpdGVtLnN0eWxlKTtcbiAgICAgICAgICAgIHMgPSBwZW4ucmVuZGVyU3ZnKHRoaXMud2FycERhdGEoaXRlbS5kYXRhKSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgdG9TdmcoKSB7XG4gICAgICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcy5jbG9uZU5vZGUoKTtcbiAgICAgICAgc3ZnLmlubmVySFRNTCA9IHRoaXMuY2FudmFzLmlubmVySFRNTDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN2Zy5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3ZnLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIHN2Zy5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdmcucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgIHN2Zy5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgcmV0dXJuIHN2Zy5vdXRlckhUTUw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJTdmc7IiwiaW1wb3J0IEV2ZW50IGZyb20gJy4vbGlicy9FdmVudC5qcyc7XG5pbXBvcnQgcGVucyBmcm9tICcuL3BlbnMnO1xuaW1wb3J0IG9mZnNldCBmcm9tICcuL2xpYnMvT2Zmc2V0LmpzJztcbnZhciBkZWZhdWx0UGVuID0gcGVucy5nZXQoKTtcblxuaWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbihhLCBiKSB7XG5cdFx0Zm9yIChsZXQgayBpbiBiKSB7XG5cdFx0XHRsZXQgdiA9IGJba107XG5cdFx0XHRhW2tdID0gdjtcblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH07XG59XG5cbmNsYXNzIERyYXdlciB7XG5cdGNvbnN0cnVjdG9yKGRvbSwgY29uZmlnKSB7XG5cdFx0RXZlbnQuY2FsbCh0aGlzKTtcblx0XHR2YXIgY2FudmFzID0gdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuXHRcdHZhciBwYXJlbnQgPSB0aGlzLmRvbSA9IGRvbTtcblx0XHRpZiAoZG9tIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuXHRcdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdE9iamVjdC5hc3NpZ24ocGFyZW50LnN0eWxlLCBkb20uc3R5bGUpO1xuXHRcdFx0ZG9tLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHBhcmVudCwgZG9tKTtcblx0XHRcdGRvbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRvbSk7XG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoZG9tKTtcblx0XHR9XG5cdFx0Y29uZmlnID0gdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdENvbmZpZygpLCBjb25maWcpO1xuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdFx0Ly8g55S756yU5a6e5L6LXG5cdFx0dmFyIHBlbjtcblx0XHQvLyDpvKDmoIfmjInkuIvkvY3nva5cblx0XHR2YXIgYmVnaW5Qb2ludCA9IGZhbHNlO1xuXHRcdC8vIOm8oOagh291dOS9jee9rlxuXHRcdHRoaXMub3V0UG9pbnQgPSBmYWxzZTtcblxuXHRcdHRoaXMuc2V0RGF0YSA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRcdFx0dGhpcy5jb25maWcucGVuRGF0YSA9IGRhdGE7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBnZXRQZW4oKSB7XG5cdFx0XHRyZXR1cm4gcGVuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vdXNlZG93biA9IChldmVudCkgPT4ge1xuXHRcdFx0dmFyIGUgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50KGV2ZW50LCBjb25maWcpO1xuXHRcdFx0dmFyIHBwYXAgPSBnZXRQZW4oKTtcblx0XHRcdGlmICghYmVnaW5Qb2ludCkgYmVnaW5Qb2ludCA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfTtcblx0XHRcdGlmICh0eXBlb2YgcHBhcC5iZWdpbiA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0cHBhcC5iZWdpbihiZWdpblBvaW50LngsIGJlZ2luUG9pbnQueSk7XG5cdFx0XHR9XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xuXHRcdFx0dmFyIGUgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50KGV2ZW50LCBjb25maWcpO1xuXHRcdFx0dmFyIHBwYXAgPSBnZXRQZW4oKTtcblx0XHRcdC8vIOWcqOeUu+WbvueKtuaAgeS4i++8jOW9k+m8oOagh+aMieS4i+aXtm1vdmXkuovku7bkuZ/lj6/ku6Xorr7nva5iZWdpbuWdkOagh1xuXHRcdFx0aWYgKCFiZWdpblBvaW50ICYmIGV2ZW50LndoaWNoID09IDEgJiYgY29uZmlnLnBlbkNsYXNzLm1vdmVCZWdpbikgYmVnaW5Qb2ludCA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFksIG1vdmVCZWdpbjogdHJ1ZSB9O1xuXHRcdFx0aWYgKCFiZWdpblBvaW50KSByZXR1cm47XG5cdFx0XHRpZiAodHlwZW9mIHBwYXAubW92ZSA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0cHBhcC5tb3ZlKGJlZ2luUG9pbnQueCwgYmVnaW5Qb2ludC55LCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cdFx0XHR9XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGVuZCA9IHRoaXMuZW5kID0gKGVuZFBvaW50LCBjYWxsQnkpID0+IHtcblx0XHRcdGlmKGNhbGxCeT09XCJzZXRQZW5cIikge1xuXHRcdFx0XHR2YXIgcHBhcCA9IGdldFBlbigpO1xuXHRcdFx0XHRpZiAodHlwZW9mIHBwYXAuY2xvc2UgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0cHBhcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWJlZ2luUG9pbnQpIHJldHVybjtcblx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHRpZiAodHlwZW9mIHBwYXAuZW5kID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwcGFwLmVuZChiZWdpblBvaW50LngsIGJlZ2luUG9pbnQueSwgZW5kUG9pbnQueCwgZW5kUG9pbnQueSwgY2FsbEJ5KTtcblx0XHRcdH1cblx0XHRcdGJlZ2luUG9pbnQgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0dmFyIGUgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50KGV2ZW50LCBjb25maWcpO1xuXHRcdFx0ZW5kKHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfSk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlb3ZlciA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGNvbmZpZy5wZW5DbGFzcy5vdXRFbmQpIHtcblx0XHRcdFx0Ly8g5Zyob3V05pe25bey57uPZW5k5LqGXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3V0UG9pbnQgJiYgZXZlbnQud2hpY2ggIT0gMSkge1xuXHRcdFx0XHRlbmQodGhpcy5vdXRQb2ludCwgXCJtb3VzZW92ZXJcIik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm91dFBvaW50ID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlb3V0ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIm91dFwiLCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cdFx0XHR0aGlzLm91dFBvaW50ID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xuXHRcdFx0aWYgKGV2ZW50LnRvRWxlbWVudCAmJiBldmVudC50b0VsZW1lbnQucGFyZW50RWxlbWVudCA9PSBjYW52YXMpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5vdXRQb2ludCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5wZW5DbGFzcy5vdXRFbmQpIHtcblx0XHRcdFx0ZW5kKHRoaXMub3V0UG9pbnQsIFwibW91c2VvdXRcIik7XG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09IDEpIHtcblx0XHRcdFx0bW91c2Vtb3ZlKGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2Vkb3duKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZXVwKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgbW91c2Vkb3duKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbW91c2V1cCk7XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVyKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdXNlb3V0KTtcblxuXHRcdGNvbnN0IGFwcGVuZCA9IChkaXYsIHgsIHkpID0+IHtcblx0XHRcdGlmIChkaXYpIHtcblx0XHRcdFx0ZGl2LmNsYXNzTmFtZSA9IFwicGFpbnRlci1jYW52YXNfX2l0ZW1cIjtcblx0XHRcdFx0aWYgKHggIT0gbnVsbCkgZGl2LnN0eWxlLmxlZnQgPSB0aGlzLndhcnBEYXRhKHgsIGNhbnZhcykgKyBcInB4XCI7XG5cdFx0XHRcdGlmICh5ICE9IG51bGwpIGRpdi5zdHlsZS50b3AgPSB0aGlzLndhcnBEYXRhKHksIGNhbnZhcywgMSkgKyBcInB4XCI7XG5cdFx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9O1xuXHRcdGNvbnN0IGNyZWF0ZU5ld1BlbiA9IHRoaXMuY3JlYXRlTmV3UGVuID0gKCkgPT4ge1xuXHRcdFx0Ly8g6K6+572u55S756yU6byg5qCH5oyH6ZKI5qC35byPXG5cdFx0XHRpZiAocGVuICYmIHR5cGVvZiBwZW4udW5tb3VudCA9PT0gXCJmdW5jdGlvblwiKSBwZW4udW5tb3VudCgpO1xuXHRcdFx0Ly8gY2FudmFzLnN0eWxlLmN1cnNvciA9IGNvbmZpZy5wZW5DbGFzcy5jdXJzb3IgfHwgJ2F1dG8nO1xuXHRcdFx0cGVuID0gbmV3IGNvbmZpZy5wZW5DbGFzcyh0aGlzLnNldERhdGEsIHBlblN1Y2Nlc3MsIGFwcGVuZCwgdGhpcyk7XG5cdFx0fTtcblx0XHQvLyDnlLvnrJTnu5jliLbnu5PmnZ/lm57osINcblx0XHRjb25zdCBwZW5TdWNjZXNzID0gKGRhdGEpID0+IHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCgnc3VjY2VzcycsIGRhdGEpO1xuXHRcdFx0Y3JlYXRlTmV3UGVuKCk7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRjb25maWcuaGlzdG9yeS5wdXNoKHsga2V5OiBwZW5zLmtleShjb25maWcucGVuQ2xhc3MpLCBkYXRhLCBzdHlsZTogdGhpcy5nZXRTdHlsZSgpIH0pO1xuXHRcdFx0XHRjb25maWcucGVuRGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0Y29uZmlnLnJlZG8ubGVuZ3RoID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNyZWF0ZU5ld1BlbigpO1xuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuXHRcdGlmIChnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcblx0XHRcdHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fVxuXHRkZWZhdWx0Q29uZmlnKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRoaXN0b3J5OiBbXSxcblx0XHRcdHJlZG86IFtdLFxuXHRcdFx0cGVuQ2xhc3M6IGRlZmF1bHRQZW5cblx0XHR9O1xuXHR9XG5cdHdhcnBEYXRhKGRhdGEsIGkpIHtcblx0XHR2YXIgY29uZmlnID0gdGhpcy5jb25maWc7XG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0dmFyIGxpc3QgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IGRhdGFbaV07XG5cdFx0XHRcdGxpc3QucHVzaCh0aGlzLndhcnBEYXRhKGl0ZW0sIGkpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdHJldHVybiAoaSAmIDEgPyBjb25maWcuaGVpZ2h0IDogY29uZmlnLndpZHRoKSAqIGRhdGEgLyAxMDAwMDtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblx0bm9ybWFsaXplRXZlbnQoZSwgY29uZmlnKSB7XG5cdFx0aWYgKGUubm9ybWFsaXplZCkge1xuXHRcdFx0cmV0dXJuIGU7XG5cdFx0fVxuXHRcdHZhciBvZmZzZXRYLCBvZmZzZXRZO1xuXHRcdGlmIChlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuXHRcdFx0dmFyIG9mZiA9IG9mZnNldChlLnRhcmdldCk7XG5cdFx0XHRvZmZzZXRYID0gKGUuY2hhbmdlZFRvdWNoZXNbMF0gfHwgZS50b3VjaGVzWzBdKS5wYWdlWCAgLSBvZmYubGVmdDtcblx0XHRcdG9mZnNldFkgPSAoZS5jaGFuZ2VkVG91Y2hlc1swXSB8fCBlLnRvdWNoZXNbMF0pLnBhZ2VZIC0gb2ZmLnRvcDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2Zmc2V0WCA9IGUub2Zmc2V0WDtcblx0XHRcdG9mZnNldFkgPSBlLm9mZnNldFk7XG5cdFx0fVxuXHRcdG9mZnNldFggPSBNYXRoLmZsb29yKG9mZnNldFggLyBjb25maWcud2lkdGggKiAxMDAwMCk7XG5cdFx0b2Zmc2V0WSA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGNvbmZpZy5oZWlnaHQgKiAxMDAwMCk7XG5cdFx0cmV0dXJuIHsgb2Zmc2V0WCwgb2Zmc2V0WSwgbm9ybWFsaXplZDogdHJ1ZSB9O1xuXHR9XG5cdHNldFBlbihwZW5DbGFzcykge1xuXHRcdC8vIOaooeaLn21vdXNldXBcblx0XHR0aGlzLmVuZCh0aGlzLm91dFBvaW50LCBcInNldFBlblwiKTtcblx0XHQvLyDorr7nva7kuLrpu5jorqTnlLvnrJRcblx0XHRpZiAodHlwZW9mIHBlbkNsYXNzPT09XCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKHRoaXMuX3ByZXZQZW5DbGFzcykge1xuXHRcdFx0XHR0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3ByZXZQZW5DbGFzcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9wcmV2UGVuQ2xhc3MgPSBwZW5DbGFzcztcblx0XHRcdHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQocGVuQ2xhc3MpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHBlbkNsYXNzID09IFwidW5kZWZpbmVkXCIpIHBlbkNsYXNzID0gZGVmYXVsdFBlbjtcblx0XHR2YXIgdG1wID0gcGVucy5nZXQocGVuQ2xhc3MpO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdC8vIOa4hemZpOayoeacieWujOaIkOeahOeUu+eslOaVsOaNrlxuXHRcdFx0aWYgKHRoaXMuY29uZmlnLnBlbkNsYXNzICE9IHRtcCkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wZW5DbGFzcyA9IHRtcDtcblx0XHRcdFx0dGhpcy5jb25maWcucGVuRGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdC8vIOWIm+W7uueUu+eslFxuXHRcdFx0dGhpcy5jcmVhdGVOZXdQZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coXCLkuI3og73or4bliKvnmoTnlLvnrJRcIiwgcGVuQ2xhc3MpO1xuXHRcdH1cblx0fVxuXHRzdHJpbmdpZnkoKSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLmhpc3RvcnkpO1xuXHR9XG5cdHBhcnNlKGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHRoaXMuY29uZmlnLmhpc3RvcnkgPSBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHR0aGlzLmNvbmZpZy5oaXN0b3J5ID0gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZSh0cnVlKTtcblx0fVxuXHR1bmRvKHRlc3QpIHtcblx0XHRpZiAodGhpcy5jb25maWcuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAodGVzdCkgcmV0dXJuIHRydWU7XG5cdFx0XHR0aGlzLmNvbmZpZy5yZWRvLnB1c2godGhpcy5jb25maWcuaGlzdG9yeS5wb3AoKSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSh0cnVlKTtcblx0XHR9XG5cdH1cblx0cmVkbyh0ZXN0KSB7XG5cdFx0aWYgKHRoaXMuY29uZmlnLnJlZG8ubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKHRlc3QpIHJldHVybiB0cnVlO1xuXHRcdFx0dGhpcy5jb25maWcuaGlzdG9yeS5wdXNoKHRoaXMuY29uZmlnLnJlZG8ucG9wKCkpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9XG5cdH1cblx0Z2V0Q2FudmFzKCkge1xuXHRcdHJldHVybiB0aGlzLmNhbnZhcztcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIG1vZGlmeSA9IGZhbHNlO1xuXHRcdHZhciB7IGRvbSwgY29uZmlnIH0gPSB0aGlzO1xuXHRcdGlmIChkb20ub2Zmc2V0V2lkdGggIT0gY29uZmlnLndpZHRoKSB7XG5cdFx0XHRtb2RpZnkgPSB0cnVlO1xuXHRcdFx0Y29uZmlnLndpZHRoID0gZG9tLnNjcm9sbFdpZHRoIHx8IGRvbS5vZmZzZXRXaWR0aDtcblx0XHR9XG5cdFx0aWYgKGRvbS5vZmZzZXRIZWlnaHQgIT0gY29uZmlnLmhlaWdodCkge1xuXHRcdFx0bW9kaWZ5ID0gdHJ1ZTtcblx0XHRcdGNvbmZpZy5oZWlnaHQgPSBkb20uc2Nyb2xsSGVpZ2h0IHx8IGRvbS5vZmZzZXRIZWlnaHQ7XG5cdFx0fVxuXHRcdHJldHVybiBtb2RpZnk7XG5cdH1cblx0b2Zmc2V0KCkge1xuXHRcdHJldHVybiBvZmZzZXQodGhpcy5jYW52YXMpO1xuXHR9XG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG5cdH1cblx0ZW5hYmxlKCkge1xuXHRcdHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuXHR9XG5cdHNjYWxlKG4pIHtcblx0XHR0aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiNTAlIDAgMFwiO1xuXHRcdHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7bn0pYDsgLy8gdHJhbnNsYXRlKCR7fSlgO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblx0aW5pdCgpIHt9XG5cdGNyZWF0ZUNhbnZhcygpIHt9XG5cdGdldFN0eWxlKCkge31cblx0dXBkYXRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyOyIsImltcG9ydCAnLi9pbmRleC5sZXNzJztcbi8vIGltcG9ydCBEcmF3ZXIgZnJvbSAnLi9kcmF3ZXItc3ZnJztcbi8vIGltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG4vLyBleHBvcnQge1xuLy8gICAgIERyYXdlcixcbi8vICAgICBwZW5zLFxuLy8gfTtcbmltcG9ydCBEcmF3ZXJTdmcgZnJvbSAnLi9kcmF3ZXItc3ZnJztcbmltcG9ydCBEcmF3ZXJDYW52YXMgZnJvbSAnLi9kcmF3ZXItY2FudmFzJztcbmltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuXG5jb25zdCBEcmF3ZXIgPSBEcmF3ZXJTdmc7XG5cbmV4cG9ydCB7XG5cdERyYXdlcixcblx0RHJhd2VyU3ZnLFxuXHREcmF3ZXJDYW52YXMsXG5cdE1lbnUsXG5cdHBlbnMsXG59OyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0zLTMhLi9pbmRleC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCBvZmZzZXQgZnJvbSAnLi9PZmZzZXQnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQuanMnO1xuXG5mdW5jdGlvbiBEcmFnKGxpcywgYWltKSB7XG4gICAgRXZlbnQuY2FsbCh0aGlzKTtcbiAgICBhaW0gPSBhaW0gfHwgbGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7IGVuZDogb2Zmc2V0KGFpbSkgfTtcbiAgICB0aGlzLnNldEJlZ2luID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLnN0YXRlLmJlZ2luID0geyBsZWZ0OiB4LCB0b3A6IHkgfTtcbiAgICB9O1xuICAgIHRoaXMud2FycEV2ZW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgZS5wYWdlWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgZS5wYWdlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUucGFnZVggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgZS5wYWdlWSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0TW92ZWQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIGxldCB7IGxlZnQsIHRvcCB9ID0gdGhpcy5zdGF0ZS5iZWdpbjtcbiAgICAgICAgbGVmdCA9IHggLSBsZWZ0O1xuICAgICAgICB0b3AgPSB5IC0gdG9wO1xuICAgICAgICBsZWZ0ICs9IHRoaXMuc3RhdGUuZW5kLmxlZnQgfHwgMDtcbiAgICAgICAgdG9wICs9IHRoaXMuc3RhdGUuZW5kLnRvcCB8fCAwO1xuICAgICAgICB0aGlzLnN0YXRlLm1vdmUgPSB7IGxlZnQsIHRvcCB9O1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5tb3ZlO1xuICAgIH07XG4gICAgdGhpcy5iZWdpbiA9IChlKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5iZWdpbikge1xuICAgICAgICAgICAgZSA9IHRoaXMud2FycEV2ZW50KGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRCZWdpbihlLnBhZ2VYLCBlLnBhZ2VZKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcImJlZ2luXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZWdpbikge1xuICAgICAgICAgICAgZSA9IHRoaXMud2FycEV2ZW50KGUpO1xuICAgICAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmdldE1vdmVkKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgICAgYWltLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgYWltLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5lbmQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZWdpbikge1xuICAgICAgICAgICAgZSA9IHRoaXMud2FycEV2ZW50KGUpO1xuICAgICAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmdldE1vdmVkKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5iZWdpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbmQgPSB7IGxlZnQsIHRvcCB9O1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiZW5kXCIsIHsgbGVmdCwgdG9wIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vdmVUbyA9ICh7bGVmdCwgdG9wfSkgPT4ge1xuICAgICAgICBhaW0uc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgIGFpbS5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuc3RhdGUuZW5kID0geyBsZWZ0LCB0b3AgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgbGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmVuZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgbGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmVuZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWc7IiwiZnVuY3Rpb24gRXZlbnQoKXtcbiAgICB2YXIgX2xpc3RlbmVycz0ge31cbiAgICAvLyDmt7vliqBcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgICBpZiAodHlwZW9mIF9saXN0ZW5lcnNbdHlwZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIF9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9saXN0ZW5lcnNbdHlwZV0ucHVzaChmbik7XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyDop6blj5FcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbih0eXBlLGRhdGEpIHtcbiAgICAgICAgdmFyIGFycmF5RXZlbnQgPSBfbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBpZiAoYXJyYXlFdmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsIGxlbmd0aD1hcnJheUV2ZW50Lmxlbmd0aDsgaTxsZW5ndGg7IGkrPTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFycmF5RXZlbnRbaV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBhcnJheUV2ZW50W2ldKGRhdGEpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyDliKDpmaRcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgICB2YXIgYXJyYXlFdmVudCA9IF9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBhcnJheUV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIOa4hemZpOW9k+WJjXR5cGXnsbvlnovkuovku7bkuIvlr7nlupRmbuaWueazlVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPWFycmF5RXZlbnQubGVuZ3RoOyBpPGxlbmd0aDsgaSs9MSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUV2ZW50W2ldID09PSBmbil7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbGlzdGVuZXJzW3R5cGVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBmbj09PVwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzku4Xku4Xlj4LmlbB0eXBl77yM5YiZ5omA5pyJdHlwZeexu+Wei+S6i+S7tua4hemZpFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBfbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsImZ1bmN0aW9uIG9mZnNldCh3aG8pIHtcbiAgICB2YXIgYm94ID0gd2hvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQsXG4gICAgICAgIHJpZ2h0OiBib3gucmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm94LmJvdHRvbVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9mZnNldDsiLCJmdW5jdGlvbiBjaXJjbGVQZW4ocmVuZGVyLCByZXNvbHZlKSB7XG5cdHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG5cdFx0cmVuZGVyKFtieCwgYnksIGV4LCBleV0pO1xuXHR9O1xuXHR0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG5cdFx0cmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcblx0fTtcbn1cbmNpcmNsZVBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xuY2lyY2xlUGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuXHRyZXR1cm4gY29uc29sZS5lcnJvcihcIuaaguacquWunueOsOeUu2NhbnZhc+eahOWchuW9olwiKTtcbn07XG5jaXJjbGVQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG5cdGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID09PSA0KSB7XG5cdFx0dmFyIHggPSBkYXRhWzBdO1xuXHRcdHZhciB5ID0gZGF0YVsxXTtcblx0XHR2YXIgYSA9IE1hdGgucG93KE1hdGguYWJzKGRhdGFbMl0gLSBkYXRhWzBdKSwyKTtcblx0XHR2YXIgYiA9IE1hdGgucG93KE1hdGguYWJzKChkYXRhWzNdIC0gZGF0YVsxXSkpLDIpO1xuXHRcdHZhciByID0gTWF0aC5zcXJ0KGEgKyBiKTtcblx0XHRyZXR1cm4gYDxjaXJjbGUgY3g9XCIke3h9XCIgY3k9XCIke3l9XCIgcj1cIiR7cn1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG5cdH1cblx0cmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaXJjbGVQZW47IiwiLy8gaW1wb3J0IHBlbmNpbCBmcm9tICcuL2RlZmF1bHRQZW4uY3VyJztcblxuLyoqXG4gKiDnlLvnrJTmnoTpgKDlh73mlbBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbmRlciBcYua4suafk+W9k+WJjeS9nOeUu+aVsOaNrlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZSDkvZznlLvlrozmiJDvvIzmj5DkuqTmnKzmrKHkvZznlLvmlbDmja5cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdFBlbihyZW5kZXIsIHJlc29sdmUpIHtcbiAgICB2YXIgbGkgPSBbXTtcbiAgICB0aGlzLmJlZ2luID0gZnVuY3Rpb24oYngsIGJ5KSB7XG4gICAgICAgIGxpLnB1c2goYngpO1xuICAgICAgICBsaS5wdXNoKGJ5KTtcbiAgICB9O1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIGxpLnB1c2goZXgpO1xuICAgICAgICBsaS5wdXNoKGV5KTtcbiAgICAgICAgcmVuZGVyKGxpKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgbGkucHVzaChleCk7XG4gICAgICAgIGxpLnB1c2goZXkpO1xuICAgICAgICByZXNvbHZlKGxpKTtcbiAgICB9O1xufVxuLy8g6byg5qCHbW92ZeaXtuinpuWPkXRoaXMuYmVnaW5cbmRlZmF1bHRQZW4ubW92ZUJlZ2luID0gdHJ1ZTtcbi8vIOm8oOagh291dOaXtuinpuWPkXRoaXMuZW5kXG5kZWZhdWx0UGVuLm91dEVuZCA9IHRydWU7XG4vLyBkZWZhdWx0UGVuLmN1cnNvciA9ICd1cmwoJyArIHBlbmNpbCArICcpLHBvaW50ZXInO1xuZGVmYXVsdFBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oZGF0YVtpXSwgZGF0YVtpICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG59O1xuZGVmYXVsdFBlbi5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaV07XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gaSA9PSAwID8gXCJNXCIgOiBcIkxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGggKz0gaXRlbSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPHBhdGggZD1cIiR7cGF0aH1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0UGVuOyIsImZ1bmN0aW9uIGVsbGlwc2VQZW4ocmVuZGVyLCByZXNvbHZlKSB7XG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVuZGVyKFtieCwgYnksIGV4LCBleV0pO1xuICAgIH07XG4gICAgdGhpcy5lbmQgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICByZXNvbHZlKFtieCwgYnksIGV4LCBleV0pO1xuICAgIH07XG59XG5lbGxpcHNlUGVuLm1vdmVCZWdpbiA9IHRydWU7XG5lbGxpcHNlUGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGxldCBjdHggPSBkcmF3ZXIuY3R4O1xuICAgICAgICB2YXIgeCA9IChkYXRhWzBdICsgZGF0YVsyXSkgLyAyO1xuICAgICAgICB2YXIgeSA9IChkYXRhWzFdICsgZGF0YVszXSkgLyAyO1xuICAgICAgICB2YXIgYSA9IChkYXRhWzJdIC0gZGF0YVswXSkgLyAyO1xuICAgICAgICB2YXIgYiA9IChkYXRhWzNdIC0gZGF0YVsxXSkgLyAyO1xuXG4gICAgICAgIHZhciByID0gKGEgPiBiKSA/IGEgOiBiO1xuICAgICAgICB2YXIgcmF0aW9YID0gYSAvIHI7XG4gICAgICAgIHZhciByYXRpb1kgPSBiIC8gcjtcbiAgICAgICAgY3R4LnNjYWxlKHJhdGlvWCwgcmF0aW9ZKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHggLyByYXRpb1gsIHkgLyByYXRpb1ksIHIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn07XG5lbGxpcHNlUGVuLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHZhciB4ID0gKGRhdGFbMF0gKyBkYXRhWzJdKSAvIDI7XG4gICAgICAgIHZhciB5ID0gKGRhdGFbMV0gKyBkYXRhWzNdKSAvIDI7XG4gICAgICAgIHZhciBhID0gTWF0aC5hYnMoKGRhdGFbMl0gLSBkYXRhWzBdKSAvIDIpO1xuICAgICAgICB2YXIgYiA9IE1hdGguYWJzKChkYXRhWzNdIC0gZGF0YVsxXSkgLyAyKTtcblxuICAgICAgICByZXR1cm4gYDxlbGxpcHNlIGN4PVwiJHt4fVwiIGN5PVwiJHt5fVwiIHJ4PVwiJHthfVwiIHJ5PVwiJHtifVwiIHN0eWxlPVwiJHtkcmF3ZXIuZ2V0U3R5bGUoKX1cIi8+YDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbGxpcHNlUGVuOyIsIi8vIGltcG9ydCB1cmwgZnJvbSAnLi9lcmFzZXIucG5nJztcblxuZnVuY3Rpb24gY291bnQoZG9tLCBuKSB7XG4gICAgbiA9IG4gfHwgMDtcbiAgICBpZiAoZG9tLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50KGRvbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBuICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBuICsgXCJcIjtcbn1cblxuZnVuY3Rpb24gZXJhc2VyKHJlbmRlciwgcmVzb2x2ZSwgYXBwZW5kLCBkcmF3ZXIpIHtcbiAgICBpZiAoZHJhd2VyLmNhbnZhcy50YWdOYW1lID09IFwic3ZnXCIpIHtcbiAgICAgICAgbGV0IGxpID0gW107XG4gICAgICAgIGNvbnN0IGhvdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGRyYXdlci5jYW52YXMgJiYgZXZlbnQud2hpY2ggPT0gMSkge1xuICAgICAgICAgICAgICAgIGxpLnB1c2goY291bnQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyKGxpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT0gZHJhd2VyLmNhbnZhcykge1xuICAgICAgICAgICAgICAgIGxpLnB1c2goY291bnQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyKGxpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZHJhd2VyLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhvdmVyKTtcbiAgICAgICAgZHJhd2VyLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2spO1xuICAgICAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5LCB3aGF0KSB7XG4gICAgICAgICAgICByZXNvbHZlKGxpLmxlbmd0aCA+IDAgPyBsaSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhvdmVyKTtcbiAgICAgICAgICAgIGRyYXdlci5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGkgPSBbXTtcbiAgICAgICAgdGhpcy5iZWdpbiA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgICAgICBsaS5wdXNoKGJ4KTtcbiAgICAgICAgICAgIGxpLnB1c2goYnkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICAgICAgbGkucHVzaChleCk7XG4gICAgICAgICAgICBsaS5wdXNoKGV5KTtcbiAgICAgICAgICAgIHJlbmRlcihsaSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgICAgIGxpLnB1c2goZXgpO1xuICAgICAgICAgICAgbGkucHVzaChleSk7XG4gICAgICAgICAgICByZXNvbHZlKGxpKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyBlcmFzZXIuY3Vyc29yID0gJ3VybCgnICsgdXJsICsgJykscG9pbnRlcic7XG5lcmFzZXIucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoZGF0YVtpXSwgZGF0YVtpICsgMV0sIDUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXJhc2VyLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICB2YXIgc3ZnID0gZHJhd2VyLmNhbnZhcy5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHN2Zykgc3ZnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJhc2VyOyIsImltcG9ydCBkZWZhdWx0UGVuIGZyb20gJy4vZGVmYXVsdFBlbi5qcyc7XG5pbXBvcnQgbGluZVBlbiBmcm9tICcuL2xpbmVQZW4uanMnO1xuaW1wb3J0IGVsbGlwc2VQZW4gZnJvbSAnLi9lbGxpcHNlUGVuLmpzJztcbmltcG9ydCBjaXJjbGVQZW4gZnJvbSAnLi9jaXJjbGVQZW4uanMnO1xuaW1wb3J0IHJlY3RQZW4gZnJvbSAnLi9yZWN0UGVuLmpzJztcbmltcG9ydCB0ZXh0UGVuIGZyb20gJy4vdGV4dFBlbi5qcyc7XG5pbXBvcnQgZXJhc2VyIGZyb20gJy4vZXJhc2VyLmpzJztcblxudmFyIG1hcCA9IHtcbiAgICBkZWZhdWx0UGVuLFxuICAgIGxpbmVQZW4sXG4gICAgZWxsaXBzZVBlbixcbiAgICBjaXJjbGVQZW4sXG4gICAgcmVjdFBlbixcbiAgICB0ZXh0UGVuLFxuICAgIGVyYXNlcixcblxufTtcblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHJldHVybiBtYXBba2V5XSB8fCBkZWZhdWx0UGVuO1xufTtcblxuZnVuY3Rpb24ga2V5KHBlbikge1xuICAgIGlmICh0eXBlb2YgcGVuID09IFwib2JqZWN0XCIpXG4gICAgICAgIHBlbiA9IHBlbi5jb25zdHVjdG9yO1xuICAgIGlmICh0eXBlb2YgcGVuID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcGVuLnJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm9yICh2YXIgayBpbiBtYXApIHtcbiAgICAgICAgICAgIHZhciB2ID0gbWFwW2tdO1xuICAgICAgICAgICAgaWYgKHBlbiA9PSB2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzZXQoa2V5LCBwZW4pIHtcbiAgICBpZiAodHlwZW9mIHBlbiA9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHBlbi5yZW5kZXIgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG1hcFtrZXldID0gcGVuO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBrZXlzKCkge1xuICAgIHZhciBrcyA9IFtdO1xuICAgIGZvciAodmFyIGsgaW4gbWFwKSB7XG4gICAgICAgIGtzLnB1c2goayk7XG4gICAgfVxuICAgIHJldHVybiBrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCxcbiAgICBrZXksXG4gICAgc2V0LFxuICAgIGtleXNcbn07IiwiZnVuY3Rpb24gbGluZVBlbihyZW5kZXIsIHJlc29sdmUpIHtcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICByZW5kZXIoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlc29sdmUoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbn1cbmxpbmVQZW4ubW92ZUJlZ2luID0gdHJ1ZTtcbmxpbmVQZW4ucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzJdLCBkYXRhWzNdKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn07XG5saW5lUGVuLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHJldHVybiBgPGxpbmUgeDE9XCIke2RhdGFbMF19XCIgeTE9XCIke2RhdGFbMV19XCIgeDI9XCIke2RhdGFbMl19XCIgeTI9XCIke2RhdGFbM119XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiLz5gO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbmVQZW47IiwiZnVuY3Rpb24gcmVjdFBlbihyZW5kZXIsIHJlc29sdmUpIHtcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICByZW5kZXIoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlc29sdmUoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbn1cbnJlY3RQZW4ubW92ZUJlZ2luID0gdHJ1ZTtcbnJlY3RQZW4ucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzJdLCBkYXRhWzFdKTtcbiAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzJdLCBkYXRhWzNdKTtcbiAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzBdLCBkYXRhWzNdKTtcbiAgICAgICAgY3R4LmxpbmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn07XG5yZWN0UGVuLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHZhciB4ID0gTWF0aC5taW4oZGF0YVswXSwgZGF0YVsyXSk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5taW4oZGF0YVsxXSwgZGF0YVszXSk7XG4gICAgICAgIHZhciB3aWR0aCA9IE1hdGguYWJzKGRhdGFbMl0gLSBkYXRhWzBdKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IE1hdGguYWJzKGRhdGFbM10gLSBkYXRhWzFdKTtcblxuICAgICAgICByZXR1cm4gYDxyZWN0IHg9XCIke3h9XCIgeT1cIiR7eX1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiLz5gO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVjdFBlbjsiLCJmdW5jdGlvbiB0ZXh0UGVuKHJlbmRlciwgcmVzb2x2ZSwgYXBwZW5kKSB7XG4gICAgdmFyIGlucHV0LCBkb20sIHRtcDtcblxuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRtcCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0bXApO1xuICAgICAgICAgICAgdG1wID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZihkb20pIHRyeSB7IGRvbS5yZW1vdmVDaGlsZChpbnB1dCk7IH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHRtcCA9IFtieCwgYnldXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpPT4ge1xuICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1wWzJdID0gaW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICByZW5kZXIodG1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvbSA9IGFwcGVuZChpbnB1dCwgZXgsIGV5KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9O1xufVxudGV4dFBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgIGxldCBjdHggPSBkcmF3ZXIuY3R4O1xuICAgICAgICBjdHguZm9udCA9IHRleHRQZW4uZm9udDtcbiAgICAgICAgdmFyIHRleHQgPSBkYXRhWzJdIHx8IFwiXCI7XG4gICAgICAgIHZhciB4ID0gZGF0YVswXTtcbiAgICAgICAgdmFyIHkgPSBkYXRhWzFdO1xuICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlSW50KHRleHRQZW4uZm9udCk7XG4gICAgICAgIHRleHQuc3BsaXQoXCJcXG5cIikuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoaXRlbSwgeCwgeSArIGkgKiBzaXplKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbnRleHRQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFyIHggPSBkYXRhWzBdO1xuICAgICAgICB2YXIgeSA9IGRhdGFbMV07XG4gICAgICAgIHZhciBzaXplID0gcGFyc2VJbnQoZHJhd2VyLnBlblN0eWxlWydmb250LXNpemUnXSk7XG4gICAgICAgIHZhciB0ZXh0cyA9IFwiXCI7XG4gICAgICAgIGZvcihsZXQgdGV4dCBvZiAoZGF0YVsyXXx8JycpLnNwbGl0KCdcXG4nKSl7XG4gICAgICAgICAgICB0ZXh0cyArPSBgPHRleHQgeD1cIiR7eH1cIiB5PVwiJHt5fVwiIHN0eWxlPVwiJHtkcmF3ZXIuZ2V0U3R5bGUoKX1cIj4ke3RleHR9PC90ZXh0PmBcbiAgICAgICAgICAgIHkgKz0gc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxnPiR7dGV4dHN9PC9nPmA7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dFBlbjsiXSwic291cmNlUm9vdCI6IiJ9