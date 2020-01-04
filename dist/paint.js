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
          dom = this.dom;

      if (dom.offsetWidth != canvas.width) {
        modify = true;
        config.width = dom.scrollWidth || dom.offsetWidth;
        canvas.style.width = config.width + "px";
      }

      if (dom.offsetHeight != canvas.height) {
        modify = true;
        config.height = dom.scrollHeight || dom.offsetHeight;
        canvas.style.height = config.height + "px";
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
      var e = _this.normalizeEvent(event, config); // console.log("move", e.offsetX, e.offsetY);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWludC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFpbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly9wYWludC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9kcmF3ZXItY2FudmFzLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2RyYXdlci1zdmcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvZHJhd2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4Lmxlc3M/NmJhZCIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvbGlicy9FdmVudC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL09mZnNldC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2NpcmNsZVBlbi5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2RlZmF1bHRQZW4uanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9lbGxpcHNlUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvZXJhc2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9saW5lUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvcmVjdFBlbi5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL3RleHRQZW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiTWVudSIsImRyYXdlciIsIm1lbnUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib2Zmc2V0Iiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYXBwZW5kQ2hpbGQiLCJhZGRCdXR0b24iLCJodG1sIiwiY2IiLCJidG4iLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkUGVucyIsImtleXMiLCJwZW5zIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwic2V0UGVuIiwicHJldiIsIm1vdmVhYmxlIiwiZHJhZyIsIkRyYWciLCJtb3ZlVG8iLCJzdGFydCIsImRpc2FibGUiLCJlbmFibGUiLCJ1bmRvIiwicmVkbyIsInNjYWxlIiwiY29sb3IiLCJjb2xvcnMiLCJzZXRDb2xvciIsImNsZWFyIiwicGFyc2UiLCJyZXN0b3JlIiwicyIsImNvdW50Iiwic2F2ZSIsInN0cmluZ2lmeSIsInJlbW92ZUNoaWxkIiwic3R5bGVzIiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwicHJvdG90eXBlIiwiZ2V0U3R5bGUiLCJrIiwiaW5pdFN0eWxlIiwic2V0U3R5bGUiLCJEcmF3ZXJDYW52YXMiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJjdHgiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiY29uZmlnIiwicmVzaXplIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwYXRjaEV2ZW50IiwiZHJhd0ltYWdlIiwiaGlzdG9yeSIsInBhaW50SXRlbSIsInBlbkRhdGEiLCJwZW5DbGFzcyIsInJlbmRlciIsIndhcnBEYXRhIiwicGVuIiwiZ2V0IiwiZGF0YSIsInRvRGF0YVVSTCIsIkRyYXdlciIsIkRyYXdlclN2ZyIsImRpdiIsImNoaWxkTm9kZXMiLCJjdXJyZW50X2luZHgiLCJwZW5TdHlsZSIsImZpbGwiLCJzdHJva2UiLCJ2Iiwic3BsaXQiLCJzcyIsImxlbmd0aCIsInRyaW0iLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJleGVjIiwieDAiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInRleHQiLCJjdXJyZW50RG9tIiwiaW5zZXJ0QmVmb3JlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZm9yY2UiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsInJlbmRlclN2ZyIsImFwcGVuZCIsIm1vZGlmeSIsImRvbSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpIiwiY2xvbmVOb2RlIiwiZGlzcGxheSIsInJlbW92ZUF0dHJpYnV0ZSIsIm91dGVySFRNTCIsImRlZmF1bHRQZW4iLCJhIiwiYiIsIkV2ZW50IiwiY2FsbCIsImNyZWF0ZUNhbnZhcyIsInBhcmVudCIsIkhUTUxJbWFnZUVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZGVmYXVsdENvbmZpZyIsImluaXQiLCJiZWdpblBvaW50Iiwib3V0UG9pbnQiLCJzZXREYXRhIiwidXBkYXRlIiwiZ2V0UGVuIiwibW91c2Vkb3duIiwiZXZlbnQiLCJlIiwibm9ybWFsaXplRXZlbnQiLCJwcGFwIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsImJlZ2luIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJtb3VzZW1vdmUiLCJ3aGljaCIsIm1vdmVCZWdpbiIsIm1vdmUiLCJlbmQiLCJlbmRQb2ludCIsImNhbGxCeSIsImNsb3NlIiwibW91c2V1cCIsIm1vdXNlb3ZlciIsIm91dEVuZCIsIm1vdXNlb3V0IiwidG9FbGVtZW50IiwiY3JlYXRlTmV3UGVuIiwidW5tb3VudCIsInBlblN1Y2Nlc3MiLCJwdXNoIiwidW5kZWZpbmVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiQXJyYXkiLCJsaXN0Iiwibm9ybWFsaXplZCIsIlRvdWNoRXZlbnQiLCJvZmYiLCJ0YXJnZXQiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiTWF0aCIsImZsb29yIiwiX3ByZXZQZW5DbGFzcyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRtcCIsIkpTT04iLCJ0ZXN0IiwicG9wIiwibiIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsImxpcyIsImFpbSIsInN0YXRlIiwic2V0QmVnaW4iLCJ3YXJwRXZlbnQiLCJ0eXBlIiwiZ2V0TW92ZWQiLCJzdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lcnMiLCJmbiIsImFycmF5RXZlbnQiLCJzcGxpY2UiLCJ3aG8iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiY2lyY2xlUGVuIiwicmVzb2x2ZSIsImJ4IiwiYnkiLCJleCIsImV5IiwicG93IiwiYWJzIiwiciIsInNxcnQiLCJsaSIsImJlZ2luUGF0aCIsImxpbmVUbyIsInBhdGgiLCJlbGxpcHNlUGVuIiwicmF0aW9YIiwicmF0aW9ZIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZXJhc2VyIiwidGFnTmFtZSIsImhvdmVyIiwiY2xpY2siLCJ3aGF0IiwiY2xpcCIsIm1hcCIsImxpbmVQZW4iLCJyZWN0UGVuIiwidGV4dFBlbiIsImNvbnN0dWN0b3IiLCJzZXQiLCJrcyIsIm1pbiIsImlucHV0IiwiY3RybEtleSIsImtleUNvZGUiLCJmb2N1cyIsImZvbnQiLCJzaXplIiwicGFyc2VJbnQiLCJmaWxsVGV4dCIsInRleHRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxD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QUFBO0FBQUE7QUFBQTtBQUFBOztBQVMzQix3QkFBYUcsS0FBYjtBQUNIOztBQUNELFNBQU8sRUFBUDtBQUNILENBYkQ7O0FBZWViLHNFQUFmLEUiLCJmaWxlIjoicGFpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInBhaW50XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhaW50XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhaW50XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQ3JlYXRlZCBEYXRlOiAyMDE3LTEwLTE2IDA5OjI3OjA5XFxuICogQXV0aG9yOiBpbnUxMjU1XFxuICogRS1NYWlsOiA5Mjk5MDkyNjBAcXEuY29tXFxuICovXFxuLmlucHV0LXN0eWxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcbi5pbnB1dC1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLnRleHRhcmVhLXN0eWxlIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG59XFxuLnRleHRhcmVhLXN0eWxlOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzFGOTBFNjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbn1cXG4uc2VsZWN0LXN0eWxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzM3B4O1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uc2VsZWN0LXN0eWxlOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzFGOTBFNjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbn1cXG4uaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLnBhaW50ZXItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luOiA1cHggN3B4O1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzFEQTU3QTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDQ4YzYxO1xcbn1cXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6ICMwNDhjNjE7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19idG46YWN0aXZlLFxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19idG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDczNDg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICMzNmJlOTM7XFxuICBvcGFjaXR5OiAwLjY1O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX21vdmUge1xcbiAgbWFyZ2luOiA1cHggN3B4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4ucGFpbnRlci1jYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLnBhaW50ZXItY2FudmFzID4gKiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBhaW50ZXItY2FudmFzLmVyYXNlciA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGVzdHJva2U7XFxufVxcbi5wYWludGVyLWNhbnZhcy5kaXNhYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucGFpbnRlci1jYW52YXMuZGlzYWJsZSA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wYWludGVyLWNhbnZhc19faXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5pbXBvcnQgRHJhZyBmcm9tICcuL2xpYnMvRHJhZyc7XG5cbnZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIE1lbnUoZHJhd2VyKSB7XG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnUuY2xhc3NOYW1lID0gXCJwYWludGVyLW1lbnVcIjtcbiAgICB2YXIgb2Zmc2V0ID0gZHJhd2VyLm9mZnNldCgpO1xuICAgIG1lbnUuc3R5bGUudG9wID0gb2Zmc2V0LnRvcCArIFwicHhcIjtcbiAgICBtZW51LnN0eWxlLmxlZnQgPSBvZmZzZXQubGVmdCArIFwicHhcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIHRoaXMuYWRkQnV0dG9uID0gZnVuY3Rpb24oaHRtbCwgY2IpIHtcbiAgICAgICAgaWYgKGh0bWwgJiYgY2IpIHtcbiAgICAgICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSA9IFwicGFpbnRlci1tZW51X19idG5cIjtcbiAgICAgICAgICAgIGJ0bi5pbm5lclRleHQgPSBodG1sO1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYik7XG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgICByZXR1cm4gYnRuO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFkZFBlbnMgPSBmdW5jdGlvbihrZXlzKSB7XG4gICAgICAgIGtleXMgPSBrZXlzIHx8IHBlbnMua2V5cygpO1xuICAgICAgICBrZXlzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICAgICAgICAgIGlmICghaXRlbS5odG1sKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsgaHRtbDogaXRlbSwga2V5OiBpdGVtIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fYnRuIHBhaW50ZXItbWVudV9fcGVuXCI7XG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gaXRlbS5odG1sLnJlcGxhY2UoL3BlbiQvaSwgXCJcIik7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgICAgICAgICAgICAgIGRyYXdlci5zZXRQZW4oaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZFBlbnMucHJldikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBlbnMucHJldi5jbGFzc05hbWUgPSB0aGlzLmFkZFBlbnMucHJldi5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGVucy5wcmV2ID0gYnRuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRkUGVucy5wcmV2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQZW5zLnByZXYgPSBidG47XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5tb3ZlYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnRuLmNsYXNzTmFtZSA9IFwicGFpbnRlci1tZW51X19tb3ZlXCI7XG4gICAgICAgIHZhciBkcmFnID0gbmV3IERyYWcoYnRuLCBtZW51KS5tb3ZlVG8ob2Zmc2V0KS5zdGFydCgpO1xuICAgICAgICBkcmFnLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWdpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci5kaXNhYmxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkcmFnLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIuZW5hYmxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy51bmRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5pKk6ZSAXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLnVuZG8oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi6YeN5YGaXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLnJlZG8oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5zY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIuaUvuWkp1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjYWxlICo9IDEuMTtcbiAgICAgICAgICAgIGRyYXdlci5zY2FsZShzY2FsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIue8qeWwj1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjYWxlIC89IDEuMTtcbiAgICAgICAgICAgIGRyYXdlci5zY2FsZShzY2FsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuY29sb3IgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgY29sb3JzID0gY29sb3JzIHx8IFtcbiAgICAgICAgICAgIFtcInJlZFwiLCBcIue6ouiJslwiXSxcbiAgICAgICAgICAgIFtcInllbGxvd1wiLCBcIum7hOiJslwiXSxcbiAgICAgICAgICAgIFtcImJsdWVcIiwgXCLok53oibJcIl1cbiAgICAgICAgXTtcbiAgICAgICAgY29sb3JzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2YXIgYnRuID0gdGhpcy5hZGRCdXR0b24oaXRlbVsxXSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYXdlci5zZXRDb2xvcihpdGVtWzBdKTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvci5wcmV2LmNsYXNzTmFtZSA9IHRoaXMuY29sb3IucHJldi5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldiA9IGJ0bjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gaXRlbVswXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb2xvci5wcmV2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvci5wcmV2ID0gYnRuO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmuIXnqbpcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIucGFyc2UoW10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLnJlc3RvcmUgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZS5jb3VudCsrO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIuaBouWkjVwiICsgdGhpcy5yZXN0b3JlLmNvdW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci5wYXJzZShzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5yZXN0b3JlLmNvdW50ID0gMDtcbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLkv53lrZhcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlKGRyYXdlci5zdHJpbmdpZnkoKSk7XG4gICAgICAgICAgICBkcmF3ZXIucGFyc2UoW10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtZW51KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBEcmF3ZXIgZnJvbSAnLi9kcmF3ZXIuanMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcblxuY29uc3Qgc3R5bGVzID0gW1wiZmlsbFN0eWxlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImdsb2JhbEFscGhhXCIsIFwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uXCIsIFwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkXCIsIFwiaW1hZ2VTbW9vdGhpbmdRdWFsaXR5XCIsIFwibGluZUNhcFwiLCBcImxpbmVEYXNoT2Zmc2V0XCIsIFwibGluZUpvaW5cIiwgXCJsaW5lV2lkdGhcIiwgXCJtaXRlckxpbWl0XCIsIFwic2hhZG93Qmx1clwiLCBcInNoYWRvd0NvbG9yXCIsIFwic2hhZG93T2Zmc2V0WFwiLCBcInNoYWRvd09mZnNldFlcIiwgXCJzdHJva2VTdHlsZVwiLCBcInRleHRBbGlnblwiLCBcInRleHRCYXNlbGluZVwiLCBdO1xuXG5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmdldFN0eWxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgc3R5bGVzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKHRoaXNba10gIT0gdGhpcy5pbml0U3R5bGVba10pIHN0eWxlW2tdID0gdGhpc1trXTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGU7XG59O1xuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgaWYgKHR5cGVvZiBzdHlsZSAhPSBcIm9iamVjdFwiKSByZXR1cm4gdGhpcztcbiAgICBzdHlsZXMuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBpZiAoc3R5bGVba10gIT0gbnVsbCkgdGhpc1trXSA9IHN0eWxlW2tdO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmluaXRTdHlsZVtrXSkgdGhpc1trXSA9IHRoaXMuaW5pdFN0eWxlW2tdO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuY2xhc3MgRHJhd2VyQ2FudmFzIGV4dGVuZHMgRHJhd2VyIHtcbiAgICBkZWZhdWx0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIlwiLFxuICAgICAgICAgICAgaW5pdFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgIHN0cm9rZVN0eWxlOiBcInJlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHN1cGVyLmRlZmF1bHRDb25maWcoKSk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgLy8g6K+75Y+W6YWN572uXG4gICAgICAgIGN0eC5pbml0U3R5bGUgPSB7fTtcbiAgICAgICAgY3R4LnNldFN0eWxlKHRoaXMuY29uZmlnLmluaXRTdHlsZSk7XG4gICAgICAgIGN0eC5pbml0U3R5bGUgPSBjdHguZ2V0U3R5bGUoKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5jbGFzc05hbWUgPSBcInBhaW50ZXItY2FudmFzXCI7XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuICAgIGdldFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdHguZ2V0U3R5bGUoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB2YXIgeyBjYW52YXMsIGN0eCwgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAvLyDmuIXpmaTnlLvluINcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2JlZm9yZXVwZGF0ZScsIGN0eCk7XG4gICAgICAgIC8vIOeUu+iDjOaZr1xuICAgICAgICBpZiAoY29uZmlnLmJhY2tncm91bmQpIGN0eC5kcmF3SW1hZ2UoY29uZmlnLmJhY2tncm91bmQsIDAsIDAsIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCk7XG4gICAgICAgIC8vIOeUu+WOhuWPsuaVsOaNrlxuICAgICAgICBjb25maWcuaGlzdG9yeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhaW50SXRlbShjdHgsIGl0ZW0sIGNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDnlLvlvZPliY3nlLvnrJTmlbDmja5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcucGVuRGF0YSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY29uZmlnLnBlbkNsYXNzLnJlbmRlcih0aGlzLndhcnBEYXRhKGNvbmZpZy5wZW5EYXRhLCBjYW52YXMpLCB0aGlzKTtcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1cGRhdGUnLCBjdHgpO1xuICAgIH1cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmIChzdXBlci5yZXNpemUoKSkge1xuICAgICAgICAgICAgbGV0IHsgY2FudmFzLCBjb25maWcgfSA9IHRoaXM7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNldFN0eWxlKHt9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgZnVuY3Rpb25cbiAgICBwYWludEl0ZW0oY3R4LCBpdGVtKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgICAgIHZhciBwZW4gPSBwZW5zLmdldChpdGVtLmtleSk7XG4gICAgICAgIGlmIChwZW4pIHtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHguc2V0U3R5bGUoaXRlbS5zdHlsZSk7XG4gICAgICAgICAgICBwZW4ucmVuZGVyKHRoaXMud2FycERhdGEoaXRlbS5kYXRhKSwgdGhpcyk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEN0eCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICB9XG4gICAgdG9EYXRhVVJMKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJDYW52YXM7IiwiaW1wb3J0IERyYXdlciBmcm9tICcuL2RyYXdlci5qcyc7XG5pbXBvcnQgcGVucyBmcm9tICcuL3BlbnMnO1xuXG5jbGFzcyBEcmF3ZXJTdmcgZXh0ZW5kcyBEcmF3ZXIge1xuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cInBhaW50ZXItY2FudmFzXCI+PC9zdmc+YDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRpdi5jaGlsZE5vZGVzWzBdO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRfaW5keCA9IDA7XG4gICAgICAgIHRoaXMucGVuU3R5bGUgPSB7XG4gICAgICAgICAgICBmaWxsOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICAgICAgICAgIHN0cm9rZTogXCJyZWRcIixcbiAgICAgICAgICAgIFwiZm9udC1zaXplXCI6ICczMHB4JyxcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDIsXG4gICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6ICcwcHgnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRTdHlsZSgpIHtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMucGVuU3R5bGUpIHtcbiAgICAgICAgICAgIGxldCB2ID0gdGhpcy5wZW5TdHlsZVtrXTtcbiAgICAgICAgICAgIHMgKz0gayArIFwiOlwiICsgdiArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wZW5TdHlsZS5zdHJva2UgPSBjb2xvcjtcbiAgICB9XG4gICAgc2V0U3R5bGUocykge1xuICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wZW5TdHlsZSwgcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHMuc3BsaXQoXCI7XCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3MgPSBpdGVtLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlblN0eWxlW3NzWzBdLnRyaW0oKV0gPSBzc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kKGNhbnZhcywgaHRtbCkge1xuICAgICAgICBpZiAoIWh0bWwpIHJldHVybjtcbiAgICAgICAgdmFyIHN2ZztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAvPChcXHcrKS8uZXhlYyhodG1sKVsxXSk7XG4gICAgICAgICAgICBodG1sLnJlcGxhY2UoL1xccysoXFx3Kyk9WydcIl0oW14nXCJdKylbJ1wiXS9nLCBmdW5jdGlvbih4MCwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGh0bWwucmVwbGFjZSgvPihbXFxzXFxTXSspPC8sIGZ1bmN0aW9uKHgwLCB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgc3ZnLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudERvbSkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5pbnNlcnRCZWZvcmUoc3ZnLCB0aGlzLmN1cnJlbnREb20pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICB1cGRhdGUoZm9yY2UpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdmFyIHsgY2FudmFzLCBjb25maWcgfSA9IHRoaXM7XG4gICAgICAgIC8vIOa4hemZpOeUu+W4g1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2JlZm9yZXVwZGF0ZScpO1xuICAgICAgICBpZiAoZm9yY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9pbmR4ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChjYW52YXMuaGFzQ2hpbGROb2RlcygpKVxuICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChjYW52YXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREb20gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlLvlvZPliY3nlLvnrJTmlbDmja5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcucGVuRGF0YSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgaHRtbCA9IGNvbmZpZy5wZW5DbGFzcy5yZW5kZXJTdmcodGhpcy53YXJwRGF0YShjb25maWcucGVuRGF0YSksIHRoaXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudERvbSkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZCh0aGlzLmN1cnJlbnREb20pO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9tID0gdGhpcy5hcHBlbmQoY2FudmFzLCBodG1sKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZCh0aGlzLmN1cnJlbnREb20pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9tID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55S75Y6G5Y+y5pWw5o2uXG4gICAgICAgIGZvciAoOyB0aGlzLmN1cnJlbnRfaW5keCA8IGNvbmZpZy5oaXN0b3J5Lmxlbmd0aDsgdGhpcy5jdXJyZW50X2luZHgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNvbmZpZy5oaXN0b3J5W3RoaXMuY3VycmVudF9pbmR4XTtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKGNhbnZhcywgdGhpcy5wYWludEl0ZW0oaXRlbSwgdGhpcy5jdXJyZW50X2luZHgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHZhciBtb2RpZnkgPSBmYWxzZTtcbiAgICAgICAgdmFyIHsgY2FudmFzLCBjb25maWcsIGRvbSB9ID0gdGhpcztcbiAgICAgICAgaWYgKGRvbS5vZmZzZXRXaWR0aCAhPSBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGlmeSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcud2lkdGggPSBkb20uc2Nyb2xsV2lkdGggfHwgZG9tLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gY29uZmlnLndpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb20ub2Zmc2V0SGVpZ2h0ICE9IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIG1vZGlmeSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gZG9tLnNjcm9sbEhlaWdodCB8fCBkb20ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGlmeTtcbiAgICB9XG4gICAgLy8gYWRkIGZ1bmN0aW9uXG4gICAgcGFpbnRJdGVtKGl0ZW0sIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtICE9IFwib2JqZWN0XCIpIHJldHVybjtcbiAgICAgICAgdmFyIHBlbiA9IHBlbnMuZ2V0KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICBpZiAocGVuICYmIHBlbi5yZW5kZXJTdmcpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHRoaXMuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoaXRlbS5zdHlsZSk7XG4gICAgICAgICAgICBzID0gcGVuLnJlbmRlclN2Zyh0aGlzLndhcnBEYXRhKGl0ZW0uZGF0YSksIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIHRvU3ZnKCkge1xuICAgICAgICB2YXIgc3ZnID0gdGhpcy5jYW52YXMuY2xvbmVOb2RlKCk7XG4gICAgICAgIHN2Zy5pbm5lckhUTUwgPSB0aGlzLmNhbnZhcy5pbm5lckhUTUw7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdmcuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN2Zy5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBzdmcucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3ZnLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgICAgICBzdmcucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgIHJldHVybiBzdmcub3V0ZXJIVE1MO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyU3ZnOyIsImltcG9ydCBFdmVudCBmcm9tICcuL2xpYnMvRXZlbnQuanMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9saWJzL09mZnNldC5qcyc7XG52YXIgZGVmYXVsdFBlbiA9IHBlbnMuZ2V0KCk7XG5cbmlmICghT2JqZWN0LmFzc2lnbikge1xuXHRPYmplY3QuYXNzaWduID0gZnVuY3Rpb24oYSwgYikge1xuXHRcdGZvciAobGV0IGsgaW4gYikge1xuXHRcdFx0bGV0IHYgPSBiW2tdO1xuXHRcdFx0YVtrXSA9IHY7XG5cdFx0fVxuXHRcdHJldHVybiBhO1xuXHR9O1xufVxuXG5jbGFzcyBEcmF3ZXIge1xuXHRjb25zdHJ1Y3Rvcihkb20sIGNvbmZpZykge1xuXHRcdEV2ZW50LmNhbGwodGhpcyk7XG5cdFx0dmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMoKTtcblx0XHR2YXIgcGFyZW50ID0gdGhpcy5kb20gPSBkb207XG5cdFx0aWYgKGRvbSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcblx0XHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRPYmplY3QuYXNzaWduKHBhcmVudC5zdHlsZSwgZG9tLnN0eWxlKTtcblx0XHRcdGRvbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwYXJlbnQsIGRvbSk7XG5cdFx0XHRkb20ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkb20pO1xuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGRvbSk7XG5cdFx0fVxuXHRcdGNvbmZpZyA9IHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRDb25maWcoKSwgY29uZmlnKTtcblx0XHR0aGlzLmluaXQoKTtcblxuXHRcdC8vIOeUu+eslOWunuS+i1xuXHRcdHZhciBwZW47XG5cdFx0Ly8g6byg5qCH5oyJ5LiL5L2N572uXG5cdFx0dmFyIGJlZ2luUG9pbnQgPSBmYWxzZTtcblx0XHQvLyDpvKDmoIdvdXTkvY3nva5cblx0XHR0aGlzLm91dFBvaW50ID0gZmFsc2U7XG5cblx0XHR0aGlzLnNldERhdGEgPSAoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRhID09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0XHRcdHRoaXMuY29uZmlnLnBlbkRhdGEgPSBkYXRhO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0UGVuKCkge1xuXHRcdFx0cmV0dXJuIHBlbjtcblx0XHR9XG5cblx0XHRjb25zdCBtb3VzZWRvd24gPSAoZXZlbnQpID0+IHtcblx0XHRcdHZhciBlID0gdGhpcy5ub3JtYWxpemVFdmVudChldmVudCwgY29uZmlnKTtcblx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHRpZiAoIWJlZ2luUG9pbnQpIGJlZ2luUG9pbnQgPSB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH07XG5cdFx0XHRpZiAodHlwZW9mIHBwYXAuYmVnaW4gPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBwYXAuYmVnaW4oYmVnaW5Qb2ludC54LCBiZWdpblBvaW50LnkpO1xuXHRcdFx0fVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH07XG5cblx0XHRjb25zdCBtb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcblx0XHRcdHZhciBlID0gdGhpcy5ub3JtYWxpemVFdmVudChldmVudCwgY29uZmlnKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwibW92ZVwiLCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cdFx0XHR2YXIgcHBhcCA9IGdldFBlbigpO1xuXHRcdFx0Ly8g5Zyo55S75Zu+54q25oCB5LiL77yM5b2T6byg5qCH5oyJ5LiL5pe2bW92ZeS6i+S7tuS5n+WPr+S7peiuvue9rmJlZ2lu5Z2Q5qCHXG5cdFx0XHRpZiAoIWJlZ2luUG9pbnQgJiYgZXZlbnQud2hpY2ggPT0gMSAmJiBjb25maWcucGVuQ2xhc3MubW92ZUJlZ2luKSBiZWdpblBvaW50ID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSwgbW92ZUJlZ2luOiB0cnVlIH07XG5cdFx0XHRpZiAoIWJlZ2luUG9pbnQpIHJldHVybjtcblx0XHRcdGlmICh0eXBlb2YgcHBhcC5tb3ZlID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwcGFwLm1vdmUoYmVnaW5Qb2ludC54LCBiZWdpblBvaW50LnksIGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcblx0XHRcdH1cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZW5kID0gdGhpcy5lbmQgPSAoZW5kUG9pbnQsIGNhbGxCeSkgPT4ge1xuXHRcdFx0aWYoY2FsbEJ5PT1cInNldFBlblwiKSB7XG5cdFx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHBhcC5jbG9zZSA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRwcGFwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghYmVnaW5Qb2ludCkgcmV0dXJuO1xuXHRcdFx0dmFyIHBwYXAgPSBnZXRQZW4oKTtcblx0XHRcdGlmICh0eXBlb2YgcHBhcC5lbmQgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBwYXAuZW5kKGJlZ2luUG9pbnQueCwgYmVnaW5Qb2ludC55LCBlbmRQb2ludC54LCBlbmRQb2ludC55LCBjYWxsQnkpO1xuXHRcdFx0fVxuXHRcdFx0YmVnaW5Qb2ludCA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHRlbmQoeyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9KTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgbW91c2VvdmVyID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoY29uZmlnLnBlbkNsYXNzLm91dEVuZCkge1xuXHRcdFx0XHQvLyDlnKhvdXTml7blt7Lnu49lbmTkuoZcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vdXRQb2ludCAmJiBldmVudC53aGljaCAhPSAxKSB7XG5cdFx0XHRcdGVuZCh0aGlzLm91dFBvaW50LCBcIm1vdXNlb3ZlclwiKTtcblx0XHRcdH1cblx0XHRcdHRoaXMub3V0UG9pbnQgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgbW91c2VvdXQgPSAoZXZlbnQpID0+IHtcblx0XHRcdHZhciBlID0gdGhpcy5ub3JtYWxpemVFdmVudChldmVudCwgY29uZmlnKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwib3V0XCIsIGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcblx0XHRcdHRoaXMub3V0UG9pbnQgPSB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH07XG5cdFx0XHRpZiAoZXZlbnQudG9FbGVtZW50ICYmIGV2ZW50LnRvRWxlbWVudC5wYXJlbnRFbGVtZW50ID09IGNhbnZhcykge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLm91dFBvaW50KTtcblx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLnBlbkNsYXNzLm91dEVuZCkge1xuXHRcdFx0XHRlbmQodGhpcy5vdXRQb2ludCwgXCJtb3VzZW91dFwiKTtcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT0gMSkge1xuXHRcdFx0XHRtb3VzZW1vdmUoZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZWRvd24pO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlbW92ZSk7XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNldXApO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBtb3VzZWRvd24pO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdXNlbW92ZSk7XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBtb3VzZXVwKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtb3VzZW92ZXIpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW91c2VvdXQpO1xuXG5cdFx0Y29uc3QgYXBwZW5kID0gKGRpdiwgeCwgeSkgPT4ge1xuXHRcdFx0aWYgKGRpdikge1xuXHRcdFx0XHRkaXYuY2xhc3NOYW1lID0gXCJwYWludGVyLWNhbnZhc19faXRlbVwiO1xuXHRcdFx0XHRpZiAoeCAhPSBudWxsKSBkaXYuc3R5bGUubGVmdCA9IHRoaXMud2FycERhdGEoeCwgY2FudmFzKSArIFwicHhcIjtcblx0XHRcdFx0aWYgKHkgIT0gbnVsbCkgZGl2LnN0eWxlLnRvcCA9IHRoaXMud2FycERhdGEoeSwgY2FudmFzLCAxKSArIFwicHhcIjtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyZW50O1xuXHRcdH07XG5cdFx0Y29uc3QgY3JlYXRlTmV3UGVuID0gdGhpcy5jcmVhdGVOZXdQZW4gPSAoKSA9PiB7XG5cdFx0XHQvLyDorr7nva7nlLvnrJTpvKDmoIfmjIfpkojmoLflvI9cblx0XHRcdGlmIChwZW4gJiYgdHlwZW9mIHBlbi51bm1vdW50ID09PSBcImZ1bmN0aW9uXCIpIHBlbi51bm1vdW50KCk7XG5cdFx0XHQvLyBjYW52YXMuc3R5bGUuY3Vyc29yID0gY29uZmlnLnBlbkNsYXNzLmN1cnNvciB8fCAnYXV0byc7XG5cdFx0XHRwZW4gPSBuZXcgY29uZmlnLnBlbkNsYXNzKHRoaXMuc2V0RGF0YSwgcGVuU3VjY2VzcywgYXBwZW5kLCB0aGlzKTtcblx0XHR9O1xuXHRcdC8vIOeUu+eslOe7mOWItue7k+adn+Wbnuiwg1xuXHRcdGNvbnN0IHBlblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCdzdWNjZXNzJywgZGF0YSk7XG5cdFx0XHRjcmVhdGVOZXdQZW4oKTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGNvbmZpZy5oaXN0b3J5LnB1c2goeyBrZXk6IHBlbnMua2V5KGNvbmZpZy5wZW5DbGFzcyksIGRhdGEsIHN0eWxlOiB0aGlzLmdldFN0eWxlKCkgfSk7XG5cdFx0XHRcdGNvbmZpZy5wZW5EYXRhID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRjb25maWcucmVkby5sZW5ndGggPSAwO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y3JlYXRlTmV3UGVuKCk7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cdFx0aWYgKGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuXHRcdFx0cGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHR9XG5cdGRlZmF1bHRDb25maWcoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhpc3Rvcnk6IFtdLFxuXHRcdFx0cmVkbzogW10sXG5cdFx0XHRwZW5DbGFzczogZGVmYXVsdFBlblxuXHRcdH07XG5cdH1cblx0d2FycERhdGEoZGF0YSwgaSkge1xuXHRcdHZhciBjb25maWcgPSB0aGlzLmNvbmZpZztcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHR2YXIgbGlzdCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gZGF0YVtpXTtcblx0XHRcdFx0bGlzdC5wdXNoKHRoaXMud2FycERhdGEoaXRlbSwgaSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIChpICYgMSA/IGNvbmZpZy5oZWlnaHQgOiBjb25maWcud2lkdGgpICogZGF0YSAvIDEwMDAwO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXHRub3JtYWxpemVFdmVudChlLCBjb25maWcpIHtcblx0XHRpZiAoZS5ub3JtYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdFx0dmFyIG9mZnNldFgsIG9mZnNldFk7XG5cdFx0aWYgKGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG5cdFx0XHR2YXIgb2ZmID0gb2Zmc2V0KGUudGFyZ2V0KTtcblx0XHRcdG9mZnNldFggPSAoZS5jaGFuZ2VkVG91Y2hlc1swXSB8fCBlLnRvdWNoZXNbMF0pLnBhZ2VYICAtIG9mZi5sZWZ0O1xuXHRcdFx0b2Zmc2V0WSA9IChlLmNoYW5nZWRUb3VjaGVzWzBdIHx8IGUudG91Y2hlc1swXSkucGFnZVkgLSBvZmYudG9wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvZmZzZXRYID0gZS5vZmZzZXRYO1xuXHRcdFx0b2Zmc2V0WSA9IGUub2Zmc2V0WTtcblx0XHR9XG5cdFx0b2Zmc2V0WCA9IE1hdGguZmxvb3Iob2Zmc2V0WCAvIGNvbmZpZy53aWR0aCAqIDEwMDAwKTtcblx0XHRvZmZzZXRZID0gTWF0aC5mbG9vcihvZmZzZXRZIC8gY29uZmlnLmhlaWdodCAqIDEwMDAwKTtcblx0XHRyZXR1cm4geyBvZmZzZXRYLCBvZmZzZXRZLCBub3JtYWxpemVkOiB0cnVlIH07XG5cdH1cblx0c2V0UGVuKHBlbkNsYXNzKSB7XG5cdFx0Ly8g5qih5oufbW91c2V1cFxuXHRcdHRoaXMuZW5kKHRoaXMub3V0UG9pbnQsIFwic2V0UGVuXCIpO1xuXHRcdC8vIOiuvue9ruS4uum7mOiupOeUu+eslFxuXHRcdGlmICh0eXBlb2YgcGVuQ2xhc3M9PT1cInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAodGhpcy5fcHJldlBlbkNsYXNzKSB7XG5cdFx0XHRcdHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fcHJldlBlbkNsYXNzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3ByZXZQZW5DbGFzcyA9IHBlbkNsYXNzO1xuXHRcdFx0dGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChwZW5DbGFzcyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgcGVuQ2xhc3MgPT0gXCJ1bmRlZmluZWRcIikgcGVuQ2xhc3MgPSBkZWZhdWx0UGVuO1xuXHRcdHZhciB0bXAgPSBwZW5zLmdldChwZW5DbGFzcyk7XG5cdFx0aWYgKHRtcCkge1xuXHRcdFx0Ly8g5riF6Zmk5rKh5pyJ5a6M5oiQ55qE55S756yU5pWw5o2uXG5cdFx0XHRpZiAodGhpcy5jb25maWcucGVuQ2xhc3MgIT0gdG1wKSB7XG5cdFx0XHRcdHRoaXMuY29uZmlnLnBlbkNsYXNzID0gdG1wO1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wZW5EYXRhID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0Ly8g5Yib5bu655S756yUXG5cdFx0XHR0aGlzLmNyZWF0ZU5ld1BlbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIuS4jeiDveivhuWIq+eahOeUu+eslFwiLCBwZW5DbGFzcyk7XG5cdFx0fVxuXHR9XG5cdHN0cmluZ2lmeSgpIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcuaGlzdG9yeSk7XG5cdH1cblx0cGFyc2UoZGF0YSkge1xuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dGhpcy5jb25maWcuaGlzdG9yeSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0fSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdHRoaXMuY29uZmlnLmhpc3RvcnkgPSBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlKHRydWUpO1xuXHR9XG5cdHVuZG8odGVzdCkge1xuXHRcdGlmICh0aGlzLmNvbmZpZy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdGlmICh0ZXN0KSByZXR1cm4gdHJ1ZTtcblx0XHRcdHRoaXMuY29uZmlnLnJlZG8ucHVzaCh0aGlzLmNvbmZpZy5oaXN0b3J5LnBvcCgpKTtcblx0XHRcdHRoaXMudXBkYXRlKHRydWUpO1xuXHRcdH1cblx0fVxuXHRyZWRvKHRlc3QpIHtcblx0XHRpZiAodGhpcy5jb25maWcucmVkby5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAodGVzdCkgcmV0dXJuIHRydWU7XG5cdFx0XHR0aGlzLmNvbmZpZy5oaXN0b3J5LnB1c2godGhpcy5jb25maWcucmVkby5wb3AoKSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH1cblx0fVxuXHRnZXRDYW52YXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FudmFzO1xuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgbW9kaWZ5ID0gZmFsc2U7XG5cdFx0dmFyIHsgZG9tLCBjb25maWcgfSA9IHRoaXM7XG5cdFx0aWYgKGRvbS5vZmZzZXRXaWR0aCAhPSBjb25maWcud2lkdGgpIHtcblx0XHRcdG1vZGlmeSA9IHRydWU7XG5cdFx0XHRjb25maWcud2lkdGggPSBkb20uc2Nyb2xsV2lkdGggfHwgZG9tLm9mZnNldFdpZHRoO1xuXHRcdH1cblx0XHRpZiAoZG9tLm9mZnNldEhlaWdodCAhPSBjb25maWcuaGVpZ2h0KSB7XG5cdFx0XHRtb2RpZnkgPSB0cnVlO1xuXHRcdFx0Y29uZmlnLmhlaWdodCA9IGRvbS5zY3JvbGxIZWlnaHQgfHwgZG9tLm9mZnNldEhlaWdodDtcblx0XHR9XG5cdFx0cmV0dXJuIG1vZGlmeTtcblx0fVxuXHRvZmZzZXQoKSB7XG5cdFx0cmV0dXJuIG9mZnNldCh0aGlzLmNhbnZhcyk7XG5cdH1cblx0ZGlzYWJsZSgpIHtcblx0XHR0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcblx0fVxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cdH1cblx0c2NhbGUobikge1xuXHRcdHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCI1MCUgMCAwXCI7XG5cdFx0dGhpcy5jYW52YXMucGFyZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtufSlgOyAvLyB0cmFuc2xhdGUoJHt9KWA7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXHRpbml0KCkge31cblx0Y3JlYXRlQ2FudmFzKCkge31cblx0Z2V0U3R5bGUoKSB7fVxuXHR1cGRhdGUoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7IiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuLy8gaW1wb3J0IERyYXdlciBmcm9tICcuL2RyYXdlci1zdmcnO1xuLy8gaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcbi8vIGV4cG9ydCB7XG4vLyAgICAgRHJhd2VyLFxuLy8gICAgIHBlbnMsXG4vLyB9O1xuaW1wb3J0IERyYXdlclN2ZyBmcm9tICcuL2RyYXdlci1zdmcnO1xuaW1wb3J0IERyYXdlckNhbnZhcyBmcm9tICcuL2RyYXdlci1jYW52YXMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5cbmNvbnN0IERyYXdlciA9IERyYXdlclN2ZztcblxuZXhwb3J0IHtcblx0RHJhd2VyLFxuXHREcmF3ZXJTdmcsXG5cdERyYXdlckNhbnZhcyxcblx0TWVudSxcblx0cGVucyxcbn07IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTMtMyEuL2luZGV4Lmxlc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IG9mZnNldCBmcm9tICcuL09mZnNldCc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudC5qcyc7XG5cbmZ1bmN0aW9uIERyYWcobGlzLCBhaW0pIHtcbiAgICBFdmVudC5jYWxsKHRoaXMpO1xuICAgIGFpbSA9IGFpbSB8fCBsaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZW5kOiBvZmZzZXQoYWltKSB9O1xuICAgIHRoaXMuc2V0QmVnaW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYmVnaW4gPSB7IGxlZnQ6IHgsIHRvcDogeSB9O1xuICAgIH07XG4gICAgdGhpcy53YXJwRXZlbnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICAgICAgICAgICAgICBlLnBhZ2VYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBlLnBhZ2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5wYWdlWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBlLnBhZ2VZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH07XG4gICAgdGhpcy5nZXRNb3ZlZCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLnN0YXRlLmJlZ2luO1xuICAgICAgICBsZWZ0ID0geCAtIGxlZnQ7XG4gICAgICAgIHRvcCA9IHkgLSB0b3A7XG4gICAgICAgIGxlZnQgKz0gdGhpcy5zdGF0ZS5lbmQubGVmdCB8fCAwO1xuICAgICAgICB0b3AgKz0gdGhpcy5zdGF0ZS5lbmQudG9wIHx8IDA7XG4gICAgICAgIHRoaXMuc3RhdGUubW92ZSA9IHsgbGVmdCwgdG9wIH07XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1vdmU7XG4gICAgfTtcbiAgICB0aGlzLmJlZ2luID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmJlZ2luKSB7XG4gICAgICAgICAgICBlID0gdGhpcy53YXJwRXZlbnQoZSk7XG4gICAgICAgICAgICB0aGlzLnNldEJlZ2luKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiYmVnaW5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW92ZSA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJlZ2luKSB7XG4gICAgICAgICAgICBlID0gdGhpcy53YXJwRXZlbnQoZSk7XG4gICAgICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZ2V0TW92ZWQoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgICBhaW0uc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICBhaW0uc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJlZ2luKSB7XG4gICAgICAgICAgICBlID0gdGhpcy53YXJwRXZlbnQoZSk7XG4gICAgICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZ2V0TW92ZWQoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJlZ2luID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmVuZCA9IHsgbGVmdCwgdG9wIH07XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJlbmRcIiwgeyBsZWZ0LCB0b3AgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW92ZVRvID0gKHtsZWZ0LCB0b3B9KSA9PiB7XG4gICAgICAgIGFpbS5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcbiAgICAgICAgYWltLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgdGhpcy5zdGF0ZS5lbmQgPSB7IGxlZnQsIHRvcCB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5lbmQpO1xuICAgICAgICBsaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5lbmQpO1xuICAgICAgICBsaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZzsiLCJmdW5jdGlvbiBFdmVudCgpe1xuICAgIHZhciBfbGlzdGVuZXJzPSB7fVxuICAgIC8vIOa3u+WKoFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgX2xpc3RlbmVyc1t0eXBlXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgX2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGZuKTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIOinpuWPkVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKHR5cGUsZGF0YSkge1xuICAgICAgICB2YXIgYXJyYXlFdmVudCA9IF9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIGlmIChhcnJheUV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPWFycmF5RXZlbnQubGVuZ3RoOyBpPGxlbmd0aDsgaSs9MSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyYXlFdmVudFtpXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5RXZlbnRbaV0oZGF0YSk7ICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIOWIoOmZpFxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICAgIHZhciBhcnJheUV2ZW50ID0gX2xpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiICYmIGFycmF5RXZlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5riF6Zmk5b2T5YmNdHlwZeexu+Wei+S6i+S7tuS4i+WvueW6lGZu5pa55rOVXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wLCBsZW5ndGg9YXJyYXlFdmVudC5sZW5ndGg7IGk8bGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5RXZlbnRbaV0gPT09IGZuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saXN0ZW5lcnNbdHlwZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIGZuPT09XCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOS7heS7heWPguaVsHR5cGXvvIzliJnmiYDmnIl0eXBl57G75Z6L5LqL5Lu25riF6ZmkXG4gICAgICAgICAgICAgICAgZGVsZXRlIF9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiZnVuY3Rpb24gb2Zmc2V0KHdobykge1xuICAgIHZhciBib3ggPSB3aG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCxcbiAgICAgICAgcmlnaHQ6IGJveC5yaWdodCxcbiAgICAgICAgYm90dG9tOiBib3guYm90dG9tXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2Zmc2V0OyIsImZ1bmN0aW9uIGNpcmNsZVBlbihyZW5kZXIsIHJlc29sdmUpIHtcblx0dGhpcy5tb3ZlID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcblx0XHRyZW5kZXIoW2J4LCBieSwgZXgsIGV5XSk7XG5cdH07XG5cdHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcblx0XHRyZXNvbHZlKFtieCwgYnksIGV4LCBleV0pO1xuXHR9O1xufVxuY2lyY2xlUGVuLm1vdmVCZWdpbiA9IHRydWU7XG5jaXJjbGVQZW4ucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG5cdHJldHVybiBjb25zb2xlLmVycm9yKFwi5pqC5pyq5a6e546w55S7Y2FudmFz55qE5ZyG5b2iXCIpO1xufTtcbmNpcmNsZVBlbi5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcblx0aWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcblx0XHR2YXIgeCA9IGRhdGFbMF07XG5cdFx0dmFyIHkgPSBkYXRhWzFdO1xuXHRcdHZhciBhID0gTWF0aC5wb3coTWF0aC5hYnMoZGF0YVsyXSAtIGRhdGFbMF0pLDIpO1xuXHRcdHZhciBiID0gTWF0aC5wb3coTWF0aC5hYnMoKGRhdGFbM10gLSBkYXRhWzFdKSksMik7XG5cdFx0dmFyIHIgPSBNYXRoLnNxcnQoYSArIGIpO1xuXHRcdHJldHVybiBgPGNpcmNsZSBjeD1cIiR7eH1cIiBjeT1cIiR7eX1cIiByPVwiJHtyfVwiIHN0eWxlPVwiJHtkcmF3ZXIuZ2V0U3R5bGUoKX1cIi8+YDtcblx0fVxuXHRyZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNpcmNsZVBlbjsiLCIvLyBpbXBvcnQgcGVuY2lsIGZyb20gJy4vZGVmYXVsdFBlbi5jdXInO1xuXG4vKipcbiAqIOeUu+eslOaehOmAoOWHveaVsFxuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVuZGVyIFxi5riy5p+T5b2T5YmN5L2c55S75pWw5o2uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlIOS9nOeUu+WujOaIkO+8jOaPkOS6pOacrOasoeS9nOeUu+aVsOaNrlxuICovXG5mdW5jdGlvbiBkZWZhdWx0UGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHZhciBsaSA9IFtdO1xuICAgIHRoaXMuYmVnaW4gPSBmdW5jdGlvbihieCwgYnkpIHtcbiAgICAgICAgbGkucHVzaChieCk7XG4gICAgICAgIGxpLnB1c2goYnkpO1xuICAgIH07XG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgbGkucHVzaChleCk7XG4gICAgICAgIGxpLnB1c2goZXkpO1xuICAgICAgICByZW5kZXIobGkpO1xuICAgIH07XG4gICAgdGhpcy5lbmQgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICBsaS5wdXNoKGV4KTtcbiAgICAgICAgbGkucHVzaChleSk7XG4gICAgICAgIHJlc29sdmUobGkpO1xuICAgIH07XG59XG4vLyDpvKDmoIdtb3Zl5pe26Kem5Y+RdGhpcy5iZWdpblxuZGVmYXVsdFBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xuLy8g6byg5qCHb3V05pe26Kem5Y+RdGhpcy5lbmRcbmRlZmF1bHRQZW4ub3V0RW5kID0gdHJ1ZTtcbi8vIGRlZmF1bHRQZW4uY3Vyc29yID0gJ3VybCgnICsgcGVuY2lsICsgJykscG9pbnRlcic7XG5kZWZhdWx0UGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjdHggPSBkcmF3ZXIuY3R4O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGF0YVswXSwgZGF0YVsxXSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhkYXRhW2ldLCBkYXRhW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn07XG5kZWZhdWx0UGVuLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGlmIChpICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBpID09IDAgPyBcIk1cIiA6IFwiTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aCArPSBpdGVtICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8cGF0aCBkPVwiJHtwYXRofVwiIHN0eWxlPVwiJHtkcmF3ZXIuZ2V0U3R5bGUoKX1cIi8+YDtcbiAgICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRQZW47IiwiZnVuY3Rpb24gZWxsaXBzZVBlbihyZW5kZXIsIHJlc29sdmUpIHtcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICByZW5kZXIoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlc29sdmUoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbn1cbmVsbGlwc2VQZW4ubW92ZUJlZ2luID0gdHJ1ZTtcbmVsbGlwc2VQZW4ucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIHZhciB4ID0gKGRhdGFbMF0gKyBkYXRhWzJdKSAvIDI7XG4gICAgICAgIHZhciB5ID0gKGRhdGFbMV0gKyBkYXRhWzNdKSAvIDI7XG4gICAgICAgIHZhciBhID0gKGRhdGFbMl0gLSBkYXRhWzBdKSAvIDI7XG4gICAgICAgIHZhciBiID0gKGRhdGFbM10gLSBkYXRhWzFdKSAvIDI7XG5cbiAgICAgICAgdmFyIHIgPSAoYSA+IGIpID8gYSA6IGI7XG4gICAgICAgIHZhciByYXRpb1ggPSBhIC8gcjtcbiAgICAgICAgdmFyIHJhdGlvWSA9IGIgLyByO1xuICAgICAgICBjdHguc2NhbGUocmF0aW9YLCByYXRpb1kpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeCAvIHJhdGlvWCwgeSAvIHJhdGlvWSwgciwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbmVsbGlwc2VQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdmFyIHggPSAoZGF0YVswXSArIGRhdGFbMl0pIC8gMjtcbiAgICAgICAgdmFyIHkgPSAoZGF0YVsxXSArIGRhdGFbM10pIC8gMjtcbiAgICAgICAgdmFyIGEgPSBNYXRoLmFicygoZGF0YVsyXSAtIGRhdGFbMF0pIC8gMik7XG4gICAgICAgIHZhciBiID0gTWF0aC5hYnMoKGRhdGFbM10gLSBkYXRhWzFdKSAvIDIpO1xuXG4gICAgICAgIHJldHVybiBgPGVsbGlwc2UgY3g9XCIke3h9XCIgY3k9XCIke3l9XCIgcng9XCIke2F9XCIgcnk9XCIke2J9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiLz5gO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsbGlwc2VQZW47IiwiLy8gaW1wb3J0IHVybCBmcm9tICcuL2VyYXNlci5wbmcnO1xuXG5mdW5jdGlvbiBjb3VudChkb20sIG4pIHtcbiAgICBuID0gbiB8fCAwO1xuICAgIGlmIChkb20ucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICByZXR1cm4gY291bnQoZG9tLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIG4gKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG4gKyBcIlwiO1xufVxuXG5mdW5jdGlvbiBlcmFzZXIocmVuZGVyLCByZXNvbHZlLCBhcHBlbmQsIGRyYXdlcikge1xuICAgIGlmIChkcmF3ZXIuY2FudmFzLnRhZ05hbWUgPT0gXCJzdmdcIikge1xuICAgICAgICBsZXQgbGkgPSBbXTtcbiAgICAgICAgY29uc3QgaG92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT0gZHJhd2VyLmNhbnZhcyAmJiBldmVudC53aGljaCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGkucHVzaChjb3VudChldmVudC50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICByZW5kZXIobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBkcmF3ZXIuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgbGkucHVzaChjb3VudChldmVudC50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICByZW5kZXIobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkcmF3ZXIuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaG92ZXIpO1xuICAgICAgICBkcmF3ZXIuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGljayk7XG4gICAgICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXksIHdoYXQpIHtcbiAgICAgICAgICAgIHJlc29sdmUobGkubGVuZ3RoID4gMCA/IGxpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51bm1vdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaG92ZXIpO1xuICAgICAgICAgICAgZHJhd2VyLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2spO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaSA9IFtdO1xuICAgICAgICB0aGlzLmJlZ2luID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgICAgIGxpLnB1c2goYngpO1xuICAgICAgICAgICAgbGkucHVzaChieSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgICAgICBsaS5wdXNoKGV4KTtcbiAgICAgICAgICAgIGxpLnB1c2goZXkpO1xuICAgICAgICAgICAgcmVuZGVyKGxpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmQgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICAgICAgbGkucHVzaChleCk7XG4gICAgICAgICAgICBsaS5wdXNoKGV5KTtcbiAgICAgICAgICAgIHJlc29sdmUobGkpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIGVyYXNlci5jdXJzb3IgPSAndXJsKCcgKyB1cmwgKyAnKSxwb2ludGVyJztcbmVyYXNlci5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkYXRhW2ldLCBkYXRhW2kgKyAxXSwgNSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5lcmFzZXIucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIHZhciBzdmcgPSBkcmF3ZXIuY2FudmFzLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBpZiAoc3ZnKSBzdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcmFzZXI7IiwiaW1wb3J0IGRlZmF1bHRQZW4gZnJvbSAnLi9kZWZhdWx0UGVuLmpzJztcbmltcG9ydCBsaW5lUGVuIGZyb20gJy4vbGluZVBlbi5qcyc7XG5pbXBvcnQgZWxsaXBzZVBlbiBmcm9tICcuL2VsbGlwc2VQZW4uanMnO1xuaW1wb3J0IGNpcmNsZVBlbiBmcm9tICcuL2NpcmNsZVBlbi5qcyc7XG5pbXBvcnQgcmVjdFBlbiBmcm9tICcuL3JlY3RQZW4uanMnO1xuaW1wb3J0IHRleHRQZW4gZnJvbSAnLi90ZXh0UGVuLmpzJztcbmltcG9ydCBlcmFzZXIgZnJvbSAnLi9lcmFzZXIuanMnO1xuXG52YXIgbWFwID0ge1xuICAgIGRlZmF1bHRQZW4sXG4gICAgbGluZVBlbixcbiAgICBlbGxpcHNlUGVuLFxuICAgIGNpcmNsZVBlbixcbiAgICByZWN0UGVuLFxuICAgIHRleHRQZW4sXG4gICAgZXJhc2VyLFxuXG59O1xuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIG1hcFtrZXldIHx8IGRlZmF1bHRQZW47XG59O1xuXG5mdW5jdGlvbiBrZXkocGVuKSB7XG4gICAgaWYgKHR5cGVvZiBwZW4gPT0gXCJvYmplY3RcIilcbiAgICAgICAgcGVuID0gcGVuLmNvbnN0dWN0b3I7XG4gICAgaWYgKHR5cGVvZiBwZW4gPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBwZW4ucmVuZGVyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmb3IgKHZhciBrIGluIG1hcCkge1xuICAgICAgICAgICAgdmFyIHYgPSBtYXBba107XG4gICAgICAgICAgICBpZiAocGVuID09IHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHNldChrZXksIHBlbikge1xuICAgIGlmICh0eXBlb2YgcGVuID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcGVuLnJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbWFwW2tleV0gPSBwZW47XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdmFyIGtzID0gW107XG4gICAgZm9yICh2YXIgayBpbiBtYXApIHtcbiAgICAgICAga3MucHVzaChrKTtcbiAgICB9XG4gICAgcmV0dXJuIGtzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBzZXQsXG4gICAga2V5c1xufTsiLCJmdW5jdGlvbiBsaW5lUGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxubGluZVBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xubGluZVBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbM10pO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbmxpbmVQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIGA8bGluZSB4MT1cIiR7ZGF0YVswXX1cIiB5MT1cIiR7ZGF0YVsxXX1cIiB4Mj1cIiR7ZGF0YVsyXX1cIiB5Mj1cIiR7ZGF0YVszXX1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGluZVBlbjsiLCJmdW5jdGlvbiByZWN0UGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxucmVjdFBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xucmVjdFBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbM10pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMF0sIGRhdGFbM10pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbnJlY3RQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdmFyIHggPSBNYXRoLm1pbihkYXRhWzBdLCBkYXRhWzJdKTtcbiAgICAgICAgdmFyIHkgPSBNYXRoLm1pbihkYXRhWzFdLCBkYXRhWzNdKTtcbiAgICAgICAgdmFyIHdpZHRoID0gTWF0aC5hYnMoZGF0YVsyXSAtIGRhdGFbMF0pO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5hYnMoZGF0YVszXSAtIGRhdGFbMV0pO1xuXG4gICAgICAgIHJldHVybiBgPHJlY3QgeD1cIiR7eH1cIiB5PVwiJHt5fVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCByZWN0UGVuOyIsImZ1bmN0aW9uIHRleHRQZW4ocmVuZGVyLCByZXNvbHZlLCBhcHBlbmQpIHtcbiAgICB2YXIgaW5wdXQsIGRvbSwgdG1wO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuYmVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodG1wKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRtcCk7XG4gICAgICAgICAgICB0bXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKGRvbSkgdHJ5IHsgZG9tLnJlbW92ZUNoaWxkKGlucHV0KTsgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgdG1wID0gW2J4LCBieV1cbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PiB7XG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbMl0gPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgIHJlbmRlcih0bXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9tID0gYXBwZW5kKGlucHV0LCBleCwgZXkpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH07XG59XG50ZXh0UGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID49IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5mb250ID0gdGV4dFBlbi5mb250O1xuICAgICAgICB2YXIgdGV4dCA9IGRhdGFbMl0gfHwgXCJcIjtcbiAgICAgICAgdmFyIHggPSBkYXRhWzBdO1xuICAgICAgICB2YXIgeSA9IGRhdGFbMV07XG4gICAgICAgIHZhciBzaXplID0gcGFyc2VJbnQodGV4dFBlbi5mb250KTtcbiAgICAgICAgdGV4dC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChpdGVtLCB4LCB5ICsgaSAqIHNpemUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudGV4dFBlbi5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YXIgeCA9IGRhdGFbMF07XG4gICAgICAgIHZhciB5ID0gZGF0YVsxXTtcbiAgICAgICAgdmFyIHNpemUgPSBwYXJzZUludChkcmF3ZXIucGVuU3R5bGVbJ2ZvbnQtc2l6ZSddKTtcbiAgICAgICAgdmFyIHRleHRzID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCB0ZXh0IG9mIChkYXRhWzJdfHwnJykuc3BsaXQoJ1xcbicpKXtcbiAgICAgICAgICAgIHRleHRzICs9IGA8dGV4dCB4PVwiJHt4fVwiIHk9XCIke3l9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiPiR7dGV4dH08L3RleHQ+YFxuICAgICAgICAgICAgeSArPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGc+JHt0ZXh0c308L2c+YDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0UGVuOyJdLCJzb3VyY2VSb290IjoiIn0=