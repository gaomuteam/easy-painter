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
    canvas.addEventListener("mouseout", mouseout); // debug
    // canvas.addEventListener("mousedown", function (e) {
    // 	console.log("mousedown:",e);
    // });
    // canvas.addEventListener("mousemove", function (e) {
    // 	console.log("mousemove:",e);
    // });
    // canvas.addEventListener("mouseup", function (e) {
    // 	console.log("mouseup:",e);
    // });
    // canvas.addEventListener("mouseover", function (e) {
    //     console.log("mouseover:",e);
    // });
    // canvas.addEventListener("mouseout", function (e) {
    //     console.log("mouseout:",e);
    // });
    // canvas.addEventListener("touchstart", function (e) {
    // 	console.log("touchstart:",e.type,' :',e.touches,' :',e.changedTouches);
    // });
    // canvas.addEventListener("touchmove", function (e) {
    // 	console.log("touchmove:",e.type,' :',e.touches,' :',e.changedTouches);
    // });
    // canvas.addEventListener("touchend", function (e) {
    // 	console.log("touchend:",e.type,' :',e.touches,' :',e.changedTouches);
    // });

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
/* harmony import */ var _rectPen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rectPen.js */ "./src/pens/rectPen.js");
/* harmony import */ var _textPen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textPen.js */ "./src/pens/textPen.js");
/* harmony import */ var _eraser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eraser.js */ "./src/pens/eraser.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var map = {
  defaultPen: _defaultPen_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  linePen: _linePen_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  ellipsePen: _ellipsePen_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  rectPen: _rectPen_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  textPen: _textPen_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  eraser: _eraser_js__WEBPACK_IMPORTED_MODULE_5__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWludC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFpbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly9wYWludC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9kcmF3ZXItY2FudmFzLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2RyYXdlci1zdmcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvZHJhd2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4Lmxlc3M/NmJhZCIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvbGlicy9FdmVudC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL09mZnNldC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2RlZmF1bHRQZW4uanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9lbGxpcHNlUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvZXJhc2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9saW5lUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvcmVjdFBlbi5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL3RleHRQZW4uanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiTWVudSIsImRyYXdlciIsIm1lbnUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib2Zmc2V0Iiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYXBwZW5kQ2hpbGQiLCJhZGRCdXR0b24iLCJodG1sIiwiY2IiLCJidG4iLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkUGVucyIsImtleXMiLCJwZW5zIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwic2V0UGVuIiwicHJldiIsIm1vdmVhYmxlIiwiZHJhZyIsIkRyYWciLCJtb3ZlVG8iLCJzdGFydCIsImRpc2FibGUiLCJlbmFibGUiLCJ1bmRvIiwicmVkbyIsInNjYWxlIiwiY29sb3IiLCJjb2xvcnMiLCJzZXRDb2xvciIsImNsZWFyIiwicGFyc2UiLCJyZXN0b3JlIiwicyIsImNvdW50Iiwic2F2ZSIsInN0cmluZ2lmeSIsInJlbW92ZUNoaWxkIiwic3R5bGVzIiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwicHJvdG90eXBlIiwiZ2V0U3R5bGUiLCJrIiwiaW5pdFN0eWxlIiwic2V0U3R5bGUiLCJEcmF3ZXJDYW52YXMiLCJPYmplY3QiLCJhc3NpZ24iLCJiYWNrZ3JvdW5kIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJjdHgiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiY29uZmlnIiwicmVzaXplIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwYXRjaEV2ZW50IiwiZHJhd0ltYWdlIiwiaGlzdG9yeSIsInBhaW50SXRlbSIsInBlbkRhdGEiLCJwZW5DbGFzcyIsInJlbmRlciIsIndhcnBEYXRhIiwicGVuIiwiZ2V0IiwiZGF0YSIsInRvRGF0YVVSTCIsIkRyYXdlciIsIkRyYXdlclN2ZyIsImRpdiIsImNoaWxkTm9kZXMiLCJjdXJyZW50X2luZHgiLCJwZW5TdHlsZSIsImZpbGwiLCJzdHJva2UiLCJ2Iiwic3BsaXQiLCJzcyIsImxlbmd0aCIsInRyaW0iLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJleGVjIiwieDAiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInRleHQiLCJjdXJyZW50RG9tIiwiaW5zZXJ0QmVmb3JlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZm9yY2UiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsInJlbmRlclN2ZyIsImFwcGVuZCIsIm1vZGlmeSIsImRvbSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpIiwiY2xvbmVOb2RlIiwiZGlzcGxheSIsInJlbW92ZUF0dHJpYnV0ZSIsIm91dGVySFRNTCIsImRlZmF1bHRQZW4iLCJhIiwiYiIsIkV2ZW50IiwiY2FsbCIsImNyZWF0ZUNhbnZhcyIsInBhcmVudCIsIkhUTUxJbWFnZUVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZGVmYXVsdENvbmZpZyIsImluaXQiLCJiZWdpblBvaW50Iiwib3V0UG9pbnQiLCJzZXREYXRhIiwidXBkYXRlIiwiZ2V0UGVuIiwibW91c2Vkb3duIiwiZXZlbnQiLCJlIiwibm9ybWFsaXplRXZlbnQiLCJwcGFwIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsImJlZ2luIiwicHJldmVudERlZmF1bHQiLCJtb3VzZW1vdmUiLCJ3aGljaCIsIm1vdmVCZWdpbiIsIm1vdmUiLCJlbmQiLCJlbmRQb2ludCIsImNhbGxCeSIsImNsb3NlIiwibW91c2V1cCIsIm1vdXNlb3ZlciIsIm91dEVuZCIsIm1vdXNlb3V0IiwidG9FbGVtZW50IiwiY3JlYXRlTmV3UGVuIiwidW5tb3VudCIsInBlblN1Y2Nlc3MiLCJwdXNoIiwidW5kZWZpbmVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiQXJyYXkiLCJsaXN0Iiwibm9ybWFsaXplZCIsIlRvdWNoRXZlbnQiLCJvZmYiLCJ0YXJnZXQiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiTWF0aCIsImZsb29yIiwiX3ByZXZQZW5DbGFzcyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRtcCIsIkpTT04iLCJ0ZXN0IiwicG9wIiwibiIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsImxpcyIsImFpbSIsInN0YXRlIiwic2V0QmVnaW4iLCJ3YXJwRXZlbnQiLCJ0eXBlIiwiZ2V0TW92ZWQiLCJzdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lcnMiLCJmbiIsImFycmF5RXZlbnQiLCJzcGxpY2UiLCJ3aG8iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsInJpZ2h0IiwiYm90dG9tIiwicmVzb2x2ZSIsImxpIiwiYngiLCJieSIsImV4IiwiZXkiLCJiZWdpblBhdGgiLCJsaW5lVG8iLCJwYXRoIiwiZWxsaXBzZVBlbiIsInIiLCJyYXRpb1giLCJyYXRpb1kiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImFicyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJlcmFzZXIiLCJ0YWdOYW1lIiwiaG92ZXIiLCJjbGljayIsIndoYXQiLCJjbGlwIiwibWFwIiwibGluZVBlbiIsInJlY3RQZW4iLCJ0ZXh0UGVuIiwiY29uc3R1Y3RvciIsInNldCIsImtzIiwibWluIiwiaW5wdXQiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImZvY3VzIiwiZm9udCIsInNpemUiLCJwYXJzZUludCIsImZpbGxUZXh0IiwidGV4dHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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SUEsSUFBSSxDQUFDYSxNQUFMLEtBQWdCLENBQTVCLEVBQStCO0FBQzNCLFFBQUltRCxDQUFDLEdBQUdoRSxJQUFJLENBQUMsQ0FBRCxDQUFaO0FBQ0EsUUFBSWtFLENBQUMsR0FBR2xFLElBQUksQ0FBQyxDQUFELENBQVo7QUFDQSxRQUFJNkssSUFBSSxHQUFHQyxRQUFRLENBQUMzUCxNQUFNLENBQUNvRixRQUFQLENBQWdCLFdBQWhCLENBQUQsQ0FBbkI7QUFDQSxRQUFJeUssS0FBSyxHQUFHLEVBQVo7QUFKMkI7QUFBQTtBQUFBOztBQUFBO0FBSzNCLDJCQUFnQixDQUFDaEwsSUFBSSxDQUFDLENBQUQsQ0FBSixJQUFTLEVBQVYsRUFBY1csS0FBZCxDQUFvQixJQUFwQixDQUFoQiw4SEFBMEM7QUFBQSxZQUFsQ1UsSUFBa0M7QUFDdEMySixhQUFLLHdCQUFnQmhILENBQWhCLG9CQUF5QkUsQ0FBekIsd0JBQXNDL0ksTUFBTSxDQUFDaUQsUUFBUCxFQUF0QyxnQkFBNERpRCxJQUE1RCxZQUFMO0FBQ0E2QyxTQUFDLElBQUkyRyxJQUFMO0FBQ0g7QUFSMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTM0Isd0JBQWFHLEtBQWI7QUFDSDs7QUFDRCxTQUFPLEVBQVA7QUFDSCxDQWJEOztBQWVlYixzRUFBZixFIiwiZmlsZSI6InBhaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwYWludFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYWludFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYWludFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIENyZWF0ZWQgRGF0ZTogMjAxNy0xMC0xNiAwOToyNzowOVxcbiAqIEF1dGhvcjogaW51MTI1NVxcbiAqIEUtTWFpbDogOTI5OTA5MjYwQHFxLmNvbVxcbiAqL1xcbi5pbnB1dC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uaW5wdXQtc3R5bGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUY5MEU2O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XFxufVxcbi50ZXh0YXJlYS1zdHlsZSB7XFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcbi50ZXh0YXJlYS1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLnNlbGVjdC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzNweDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuLnNlbGVjdC1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5wYWludGVyLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0biB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogNXB4IDdweDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMxREE1N0E7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzA0OGM2MTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMDQ4YzYxO1xcbn1cXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuOmFjdGl2ZSxcXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3MzQ4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMzZiZTkzO1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19tb3ZlIHtcXG4gIG1hcmdpbjogNXB4IDdweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLnBhaW50ZXItY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5wYWludGVyLWNhbnZhcyA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wYWludGVyLWNhbnZhcy5lcmFzZXIgPiAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlc3Ryb2tlO1xcbn1cXG4ucGFpbnRlci1jYW52YXMuZGlzYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBhaW50ZXItY2FudmFzLmRpc2FibGUgPiAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucGFpbnRlci1jYW52YXNfX2l0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgcGVucyBmcm9tICcuL3BlbnMnO1xuaW1wb3J0IERyYWcgZnJvbSAnLi9saWJzL0RyYWcnO1xuXG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5mdW5jdGlvbiBNZW51KGRyYXdlcikge1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwicGFpbnRlci1tZW51XCI7XG4gICAgdmFyIG9mZnNldCA9IGRyYXdlci5vZmZzZXQoKTtcbiAgICBtZW51LnN0eWxlLnRvcCA9IG9mZnNldC50b3AgKyBcInB4XCI7XG4gICAgbWVudS5zdHlsZS5sZWZ0ID0gb2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB0aGlzLmFkZEJ1dHRvbiA9IGZ1bmN0aW9uKGh0bWwsIGNiKSB7XG4gICAgICAgIGlmIChodG1sICYmIGNiKSB7XG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fYnRuXCI7XG4gICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gaHRtbDtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2IpO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hZGRQZW5zID0gZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBrZXlzID0ga2V5cyB8fCBwZW5zLmtleXMoKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaHRtbCkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IGh0bWw6IGl0ZW0sIGtleTogaXRlbSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBidG4uY2xhc3NOYW1lID0gXCJwYWludGVyLW1lbnVfX2J0biBwYWludGVyLW1lbnVfX3BlblwiO1xuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGl0ZW0uaHRtbC5yZXBsYWNlKC9wZW4kL2ksIFwiXCIpO1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgICAgICBkcmF3ZXIuc2V0UGVuKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRQZW5zLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQZW5zLnByZXYuY2xhc3NOYW1lID0gdGhpcy5hZGRQZW5zLnByZXYuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBlbnMucHJldiA9IGJ0bjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkZFBlbnMucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGVucy5wcmV2ID0gYnRuO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMubW92ZWFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fbW92ZVwiO1xuICAgICAgICB2YXIgZHJhZyA9IG5ldyBEcmFnKGJ0biwgbWVudSkubW92ZVRvKG9mZnNldCkuc3RhcnQoKTtcbiAgICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiYmVnaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIuZGlzYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLmVuYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMudW5kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIuaSpOmUgFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci51bmRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIumHjeWBmlwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci5yZWRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuc2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmlL7lpKdcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSAqPSAxLjE7XG4gICAgICAgICAgICBkcmF3ZXIuc2NhbGUoc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLnvKnlsI9cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSAvPSAxLjE7XG4gICAgICAgICAgICBkcmF3ZXIuc2NhbGUoc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmNvbG9yID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbXG4gICAgICAgICAgICBbXCJyZWRcIiwgXCLnuqLoibJcIl0sXG4gICAgICAgICAgICBbXCJ5ZWxsb3dcIiwgXCLpu4ToibJcIl0sXG4gICAgICAgICAgICBbXCJibHVlXCIsIFwi6JOd6ImyXCJdXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGJ0biA9IHRoaXMuYWRkQnV0dG9uKGl0ZW1bMV0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3ZXIuc2V0Q29sb3IoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvci5wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldi5jbGFzc05hbWUgPSB0aGlzLmNvbG9yLnByZXYuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLnByZXYgPSBidG47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9IGl0ZW1bMF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29sb3IucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldiA9IGJ0bjtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5riF56m6XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLnBhcnNlKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5yZXN0b3JlID0gZnVuY3Rpb24ocykge1xuICAgICAgICB0aGlzLnJlc3RvcmUuY291bnQrKztcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmgaLlpI1cIiArIHRoaXMucmVzdG9yZS5jb3VudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIucGFyc2Uocyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMucmVzdG9yZS5jb3VudCA9IDA7XG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5L+d5a2YXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZShkcmF3ZXIuc3RyaW5naWZ5KCkpO1xuICAgICAgICAgICAgZHJhd2VyLnBhcnNlKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgRHJhd2VyIGZyb20gJy4vZHJhd2VyLmpzJztcbmltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5cbmNvbnN0IHN0eWxlcyA9IFtcImZpbGxTdHlsZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJnbG9iYWxBbHBoYVwiLCBcImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvblwiLCBcImltYWdlU21vb3RoaW5nRW5hYmxlZFwiLCBcImltYWdlU21vb3RoaW5nUXVhbGl0eVwiLCBcImxpbmVDYXBcIiwgXCJsaW5lRGFzaE9mZnNldFwiLCBcImxpbmVKb2luXCIsIFwibGluZVdpZHRoXCIsIFwibWl0ZXJMaW1pdFwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dDb2xvclwiLCBcInNoYWRvd09mZnNldFhcIiwgXCJzaGFkb3dPZmZzZXRZXCIsIFwic3Ryb2tlU3R5bGVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJ0ZXh0QmFzZWxpbmVcIiwgXTtcblxuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5nZXRTdHlsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHN0eWxlcy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmICh0aGlzW2tdICE9IHRoaXMuaW5pdFN0eWxlW2tdKSBzdHlsZVtrXSA9IHRoaXNba107XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlO1xufTtcbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgIT0gXCJvYmplY3RcIikgcmV0dXJuIHRoaXM7XG4gICAgc3R5bGVzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKHN0eWxlW2tdICE9IG51bGwpIHRoaXNba10gPSBzdHlsZVtrXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbml0U3R5bGVba10pIHRoaXNba10gPSB0aGlzLmluaXRTdHlsZVtrXTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmNsYXNzIERyYXdlckNhbnZhcyBleHRlbmRzIERyYXdlciB7XG4gICAgZGVmYXVsdENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJcIixcbiAgICAgICAgICAgIGluaXRTdHlsZToge1xuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogXCJyZWRcIixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogXCJyZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzdXBlci5kZWZhdWx0Q29uZmlnKCkpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIC8vIOivu+WPlumFjee9rlxuICAgICAgICBjdHguaW5pdFN0eWxlID0ge307XG4gICAgICAgIGN0eC5zZXRTdHlsZSh0aGlzLmNvbmZpZy5pbml0U3R5bGUpO1xuICAgICAgICBjdHguaW5pdFN0eWxlID0gY3R4LmdldFN0eWxlKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gXCJwYWludGVyLWNhbnZhc1wiO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgICBnZXRTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4LmdldFN0eWxlKCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdmFyIHsgY2FudmFzLCBjdHgsIGNvbmZpZyB9ID0gdGhpcztcbiAgICAgICAgLy8g5riF6Zmk55S75biDXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmV1cGRhdGUnLCBjdHgpO1xuICAgICAgICAvLyDnlLvog4zmma9cbiAgICAgICAgaWYgKGNvbmZpZy5iYWNrZ3JvdW5kKSBjdHguZHJhd0ltYWdlKGNvbmZpZy5iYWNrZ3JvdW5kLCAwLCAwLCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICAvLyDnlLvljoblj7LmlbDmja5cbiAgICAgICAgY29uZmlnLmhpc3RvcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWludEl0ZW0oY3R4LCBpdGVtLCBjb25maWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g55S75b2T5YmN55S756yU5pWw5o2uXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGNvbmZpZy5wZW5DbGFzcy5yZW5kZXIodGhpcy53YXJwRGF0YShjb25maWcucGVuRGF0YSwgY2FudmFzKSwgdGhpcyk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndXBkYXRlJywgY3R4KTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZiAoc3VwZXIucmVzaXplKCkpIHtcbiAgICAgICAgICAgIGxldCB7IGNhbnZhcywgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5zZXRTdHlsZSh7fSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIGZ1bmN0aW9uXG4gICAgcGFpbnRJdGVtKGN0eCwgaXRlbSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgICAgICB2YXIgcGVuID0gcGVucy5nZXQoaXRlbS5rZXkpO1xuICAgICAgICBpZiAocGVuKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LnNldFN0eWxlKGl0ZW0uc3R5bGUpO1xuICAgICAgICAgICAgcGVuLnJlbmRlcih0aGlzLndhcnBEYXRhKGl0ZW0uZGF0YSksIHRoaXMpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDdHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgfVxuICAgIHRvRGF0YVVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyQ2FudmFzOyIsImltcG9ydCBEcmF3ZXIgZnJvbSAnLi9kcmF3ZXIuanMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcblxuY2xhc3MgRHJhd2VyU3ZnIGV4dGVuZHMgRHJhd2VyIHtcbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJwYWludGVyLWNhbnZhc1wiPjwvc3ZnPmA7XG4gICAgICAgIHZhciBjYW52YXMgPSBkaXYuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X2luZHggPSAwO1xuICAgICAgICB0aGlzLnBlblN0eWxlID0ge1xuICAgICAgICAgICAgZmlsbDogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICBzdHJva2U6IFwicmVkXCIsXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAnMzBweCcsXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAyLFxuICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiAnMHB4JyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0U3R5bGUoKSB7XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnBlblN0eWxlKSB7XG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMucGVuU3R5bGVba107XG4gICAgICAgICAgICBzICs9IGsgKyBcIjpcIiArIHYgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVuU3R5bGUuc3Ryb2tlID0gY29sb3I7XG4gICAgfVxuICAgIHNldFN0eWxlKHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGVuU3R5bGUsIHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNzID0gaXRlbS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5TdHlsZVtzc1swXS50cmltKCldID0gc3NbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZChjYW52YXMsIGh0bWwpIHtcbiAgICAgICAgaWYgKCFodG1sKSByZXR1cm47XG4gICAgICAgIHZhciBzdmc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgLzwoXFx3KykvLmV4ZWMoaHRtbClbMV0pO1xuICAgICAgICAgICAgaHRtbC5yZXBsYWNlKC9cXHMrKFxcdyspPVsnXCJdKFteJ1wiXSspWydcIl0vZywgZnVuY3Rpb24oeDAsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBodG1sLnJlcGxhY2UoLz4oW1xcc1xcU10rKTwvLCBmdW5jdGlvbih4MCwgdGV4dCkge1xuICAgICAgICAgICAgICAgIHN2Zy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuaW5zZXJ0QmVmb3JlKHN2ZywgdGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgdXBkYXRlKGZvcmNlKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHZhciB7IGNhbnZhcywgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAvLyDmuIXpmaTnlLvluINcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmV1cGRhdGUnKTtcbiAgICAgICAgaWYgKGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaW5keCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoY2FudmFzLmhhc0NoaWxkTm9kZXMoKSlcbiAgICAgICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQoY2FudmFzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9tID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55S75b2T5YmN55S756yU5pWw5o2uXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBjb25maWcucGVuQ2xhc3MucmVuZGVyU3ZnKHRoaXMud2FycERhdGEoY29uZmlnLnBlbkRhdGEpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREb20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IHRoaXMuYXBwZW5kKGNhbnZhcywgaHRtbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RG9tKSB7XG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUu+WOhuWPsuaVsOaNrlxuICAgICAgICBmb3IgKDsgdGhpcy5jdXJyZW50X2luZHggPCBjb25maWcuaGlzdG9yeS5sZW5ndGg7IHRoaXMuY3VycmVudF9pbmR4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjb25maWcuaGlzdG9yeVt0aGlzLmN1cnJlbnRfaW5keF07XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChjYW52YXMsIHRoaXMucGFpbnRJdGVtKGl0ZW0sIHRoaXMuY3VycmVudF9pbmR4KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1cGRhdGUnKTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICB2YXIgbW9kaWZ5ID0gZmFsc2U7XG4gICAgICAgIHZhciB7IGNhbnZhcywgY29uZmlnLCBkb20gfSA9IHRoaXM7XG4gICAgICAgIGlmIChkb20ub2Zmc2V0V2lkdGggIT0gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICBtb2RpZnkgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLndpZHRoID0gZG9tLnNjcm9sbFdpZHRoIHx8IGRvbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGNvbmZpZy53aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tLm9mZnNldEhlaWdodCAhPSBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBtb2RpZnkgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLmhlaWdodCA9IGRvbS5zY3JvbGxIZWlnaHQgfHwgZG9tLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBjb25maWcuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RpZnk7XG4gICAgfVxuICAgIC8vIGFkZCBmdW5jdGlvblxuICAgIHBhaW50SXRlbShpdGVtLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgICAgIHZhciBwZW4gPSBwZW5zLmdldChpdGVtLmtleSk7XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgaWYgKHBlbiAmJiBwZW4ucmVuZGVyU3ZnKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlKGl0ZW0uc3R5bGUpO1xuICAgICAgICAgICAgcyA9IHBlbi5yZW5kZXJTdmcodGhpcy53YXJwRGF0YShpdGVtLmRhdGEpLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICB0b1N2ZygpIHtcbiAgICAgICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLmNsb25lTm9kZSgpO1xuICAgICAgICBzdmcuaW5uZXJIVE1MID0gdGhpcy5jYW52YXMuaW5uZXJIVE1MO1xuICAgICAgICBmb3IgKGxldCBpID0gc3ZnLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdmcuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgc3ZnLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN2Zy5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgc3ZnLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICByZXR1cm4gc3ZnLm91dGVySFRNTDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlclN2ZzsiLCJpbXBvcnQgRXZlbnQgZnJvbSAnLi9saWJzL0V2ZW50LmpzJztcbmltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJy4vbGlicy9PZmZzZXQuanMnO1xudmFyIGRlZmF1bHRQZW4gPSBwZW5zLmdldCgpO1xuXG5pZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0T2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRmb3IgKGxldCBrIGluIGIpIHtcblx0XHRcdGxldCB2ID0gYltrXTtcblx0XHRcdGFba10gPSB2O1xuXHRcdH1cblx0XHRyZXR1cm4gYTtcblx0fTtcbn1cblxuY2xhc3MgRHJhd2VyIHtcblx0Y29uc3RydWN0b3IoZG9tLCBjb25maWcpIHtcblx0XHRFdmVudC5jYWxsKHRoaXMpO1xuXHRcdHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKCk7XG5cdFx0dmFyIHBhcmVudCA9IHRoaXMuZG9tID0gZG9tO1xuXHRcdGlmIChkb20gaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cdFx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0T2JqZWN0LmFzc2lnbihwYXJlbnQuc3R5bGUsIGRvbS5zdHlsZSk7XG5cdFx0XHRkb20ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocGFyZW50LCBkb20pO1xuXHRcdFx0ZG9tLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tKTtcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChkb20pO1xuXHRcdH1cblx0XHRjb25maWcgPSB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0Q29uZmlnKCksIGNvbmZpZyk7XG5cdFx0dGhpcy5pbml0KCk7XG5cblx0XHQvLyDnlLvnrJTlrp7kvotcblx0XHR2YXIgcGVuO1xuXHRcdC8vIOm8oOagh+aMieS4i+S9jee9rlxuXHRcdHZhciBiZWdpblBvaW50ID0gZmFsc2U7XG5cdFx0Ly8g6byg5qCHb3V05L2N572uXG5cdFx0dGhpcy5vdXRQb2ludCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zZXREYXRhID0gKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdFx0XHR0aGlzLmNvbmZpZy5wZW5EYXRhID0gZGF0YTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGdldFBlbigpIHtcblx0XHRcdHJldHVybiBwZW47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW91c2Vkb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHR2YXIgcHBhcCA9IGdldFBlbigpO1xuXHRcdFx0aWYgKCFiZWdpblBvaW50KSBiZWdpblBvaW50ID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xuXHRcdFx0aWYgKHR5cGVvZiBwcGFwLmJlZ2luID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwcGFwLmJlZ2luKGJlZ2luUG9pbnQueCwgYmVnaW5Qb2ludC55KTtcblx0XHRcdH1cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xuXHRcdFx0dmFyIGUgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50KGV2ZW50LCBjb25maWcpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJtb3ZlXCIsIGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcblx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHQvLyDlnKjnlLvlm77nirbmgIHkuIvvvIzlvZPpvKDmoIfmjInkuIvml7Ztb3Zl5LqL5Lu25Lmf5Y+v5Lul6K6+572uYmVnaW7lnZDmoIdcblx0XHRcdGlmICghYmVnaW5Qb2ludCAmJiBldmVudC53aGljaCA9PSAxICYmIGNvbmZpZy5wZW5DbGFzcy5tb3ZlQmVnaW4pIGJlZ2luUG9pbnQgPSB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZLCBtb3ZlQmVnaW46IHRydWUgfTtcblx0XHRcdGlmICghYmVnaW5Qb2ludCkgcmV0dXJuO1xuXHRcdFx0aWYgKHR5cGVvZiBwcGFwLm1vdmUgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBwYXAubW92ZShiZWdpblBvaW50LngsIGJlZ2luUG9pbnQueSwgZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuXHRcdFx0fVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZW5kID0gdGhpcy5lbmQgPSAoZW5kUG9pbnQsIGNhbGxCeSkgPT4ge1xuXHRcdFx0aWYoY2FsbEJ5PT1cInNldFBlblwiKSB7XG5cdFx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHBhcC5jbG9zZSA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRwcGFwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghYmVnaW5Qb2ludCkgcmV0dXJuO1xuXHRcdFx0dmFyIHBwYXAgPSBnZXRQZW4oKTtcblx0XHRcdGlmICh0eXBlb2YgcHBhcC5lbmQgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBwYXAuZW5kKGJlZ2luUG9pbnQueCwgYmVnaW5Qb2ludC55LCBlbmRQb2ludC54LCBlbmRQb2ludC55LCBjYWxsQnkpO1xuXHRcdFx0fVxuXHRcdFx0YmVnaW5Qb2ludCA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHRlbmQoeyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9KTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlb3ZlciA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGNvbmZpZy5wZW5DbGFzcy5vdXRFbmQpIHtcblx0XHRcdFx0Ly8g5Zyob3V05pe25bey57uPZW5k5LqGXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3V0UG9pbnQgJiYgZXZlbnQud2hpY2ggIT0gMSkge1xuXHRcdFx0XHRlbmQodGhpcy5vdXRQb2ludCwgXCJtb3VzZW92ZXJcIik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm91dFBvaW50ID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlb3V0ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIm91dFwiLCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cdFx0XHR0aGlzLm91dFBvaW50ID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xuXHRcdFx0aWYgKGV2ZW50LnRvRWxlbWVudCAmJiBldmVudC50b0VsZW1lbnQucGFyZW50RWxlbWVudCA9PSBjYW52YXMpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5vdXRQb2ludCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5wZW5DbGFzcy5vdXRFbmQpIHtcblx0XHRcdFx0ZW5kKHRoaXMub3V0UG9pbnQsIFwibW91c2VvdXRcIik7XG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09IDEpIHtcblx0XHRcdFx0bW91c2Vtb3ZlKGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2Vkb3duKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZXVwKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgbW91c2Vkb3duKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbW91c2V1cCk7XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVyKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdXNlb3V0KTtcblxuXHRcdC8vIGRlYnVnXG5cdFx0Ly8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwibW91c2Vkb3duOlwiLGUpO1xuXHRcdC8vIH0pO1xuXHRcdC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcIm1vdXNlbW92ZTpcIixlKTtcblx0XHQvLyB9KTtcblx0XHQvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwibW91c2V1cDpcIixlKTtcblx0XHQvLyB9KTtcblx0XHQvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdC8vICAgICBjb25zb2xlLmxvZyhcIm1vdXNlb3ZlcjpcIixlKTtcblx0XHQvLyB9KTtcblx0XHQvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gICAgIGNvbnNvbGUubG9nKFwibW91c2VvdXQ6XCIsZSk7XG5cdFx0Ly8gfSk7XG5cdFx0Ly8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcInRvdWNoc3RhcnQ6XCIsZS50eXBlLCcgOicsZS50b3VjaGVzLCcgOicsZS5jaGFuZ2VkVG91Y2hlcyk7XG5cdFx0Ly8gfSk7XG5cdFx0Ly8gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG91Y2htb3ZlOlwiLGUudHlwZSwnIDonLGUudG91Y2hlcywnIDonLGUuY2hhbmdlZFRvdWNoZXMpO1xuXHRcdC8vIH0pO1xuXHRcdC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidG91Y2hlbmQ6XCIsZS50eXBlLCcgOicsZS50b3VjaGVzLCcgOicsZS5jaGFuZ2VkVG91Y2hlcyk7XG5cdFx0Ly8gfSk7XG5cblxuXG5cdFx0Y29uc3QgYXBwZW5kID0gKGRpdiwgeCwgeSkgPT4ge1xuXHRcdFx0aWYgKGRpdikge1xuXHRcdFx0XHRkaXYuY2xhc3NOYW1lID0gXCJwYWludGVyLWNhbnZhc19faXRlbVwiO1xuXHRcdFx0XHRpZiAoeCAhPSBudWxsKSBkaXYuc3R5bGUubGVmdCA9IHRoaXMud2FycERhdGEoeCwgY2FudmFzKSArIFwicHhcIjtcblx0XHRcdFx0aWYgKHkgIT0gbnVsbCkgZGl2LnN0eWxlLnRvcCA9IHRoaXMud2FycERhdGEoeSwgY2FudmFzLCAxKSArIFwicHhcIjtcblx0XHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyZW50O1xuXHRcdH07XG5cdFx0Y29uc3QgY3JlYXRlTmV3UGVuID0gdGhpcy5jcmVhdGVOZXdQZW4gPSAoKSA9PiB7XG5cdFx0XHQvLyDorr7nva7nlLvnrJTpvKDmoIfmjIfpkojmoLflvI9cblx0XHRcdGlmIChwZW4gJiYgdHlwZW9mIHBlbi51bm1vdW50ID09PSBcImZ1bmN0aW9uXCIpIHBlbi51bm1vdW50KCk7XG5cdFx0XHQvLyBjYW52YXMuc3R5bGUuY3Vyc29yID0gY29uZmlnLnBlbkNsYXNzLmN1cnNvciB8fCAnYXV0byc7XG5cdFx0XHRwZW4gPSBuZXcgY29uZmlnLnBlbkNsYXNzKHRoaXMuc2V0RGF0YSwgcGVuU3VjY2VzcywgYXBwZW5kLCB0aGlzKTtcblx0XHR9O1xuXHRcdC8vIOeUu+eslOe7mOWItue7k+adn+Wbnuiwg1xuXHRcdGNvbnN0IHBlblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KCdzdWNjZXNzJywgZGF0YSk7XG5cdFx0XHRjcmVhdGVOZXdQZW4oKTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGNvbmZpZy5oaXN0b3J5LnB1c2goeyBrZXk6IHBlbnMua2V5KGNvbmZpZy5wZW5DbGFzcyksIGRhdGEsIHN0eWxlOiB0aGlzLmdldFN0eWxlKCkgfSk7XG5cdFx0XHRcdGNvbmZpZy5wZW5EYXRhID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRjb25maWcucmVkby5sZW5ndGggPSAwO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y3JlYXRlTmV3UGVuKCk7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cdFx0aWYgKGdldENvbXB1dGVkU3R5bGUocGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuXHRcdFx0cGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHR9XG5cdGRlZmF1bHRDb25maWcoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGhpc3Rvcnk6IFtdLFxuXHRcdFx0cmVkbzogW10sXG5cdFx0XHRwZW5DbGFzczogZGVmYXVsdFBlblxuXHRcdH07XG5cdH1cblx0d2FycERhdGEoZGF0YSwgaSkge1xuXHRcdHZhciBjb25maWcgPSB0aGlzLmNvbmZpZztcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHR2YXIgbGlzdCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gZGF0YVtpXTtcblx0XHRcdFx0bGlzdC5wdXNoKHRoaXMud2FycERhdGEoaXRlbSwgaSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIChpICYgMSA/IGNvbmZpZy5oZWlnaHQgOiBjb25maWcud2lkdGgpICogZGF0YSAvIDEwMDAwO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXHRub3JtYWxpemVFdmVudChlLCBjb25maWcpIHtcblx0XHRpZiAoZS5ub3JtYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdFx0dmFyIG9mZnNldFgsIG9mZnNldFk7XG5cdFx0aWYgKGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG5cdFx0XHR2YXIgb2ZmID0gb2Zmc2V0KGUudGFyZ2V0KTtcblx0XHRcdG9mZnNldFggPSAoZS5jaGFuZ2VkVG91Y2hlc1swXSB8fCBlLnRvdWNoZXNbMF0pLnBhZ2VYICAtIG9mZi5sZWZ0O1xuXHRcdFx0b2Zmc2V0WSA9IChlLmNoYW5nZWRUb3VjaGVzWzBdIHx8IGUudG91Y2hlc1swXSkucGFnZVkgLSBvZmYudG9wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvZmZzZXRYID0gZS5vZmZzZXRYO1xuXHRcdFx0b2Zmc2V0WSA9IGUub2Zmc2V0WTtcblx0XHR9XG5cdFx0b2Zmc2V0WCA9IE1hdGguZmxvb3Iob2Zmc2V0WCAvIGNvbmZpZy53aWR0aCAqIDEwMDAwKTtcblx0XHRvZmZzZXRZID0gTWF0aC5mbG9vcihvZmZzZXRZIC8gY29uZmlnLmhlaWdodCAqIDEwMDAwKTtcblx0XHRyZXR1cm4geyBvZmZzZXRYLCBvZmZzZXRZLCBub3JtYWxpemVkOiB0cnVlIH07XG5cdH1cblx0c2V0UGVuKHBlbkNsYXNzKSB7XG5cdFx0Ly8g5qih5oufbW91c2V1cFxuXHRcdHRoaXMuZW5kKHRoaXMub3V0UG9pbnQsIFwic2V0UGVuXCIpO1xuXHRcdC8vIOiuvue9ruS4uum7mOiupOeUu+eslFxuXHRcdGlmICh0eXBlb2YgcGVuQ2xhc3M9PT1cInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAodGhpcy5fcHJldlBlbkNsYXNzKSB7XG5cdFx0XHRcdHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fcHJldlBlbkNsYXNzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3ByZXZQZW5DbGFzcyA9IHBlbkNsYXNzO1xuXHRcdFx0dGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChwZW5DbGFzcyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgcGVuQ2xhc3MgPT0gXCJ1bmRlZmluZWRcIikgcGVuQ2xhc3MgPSBkZWZhdWx0UGVuO1xuXHRcdHZhciB0bXAgPSBwZW5zLmdldChwZW5DbGFzcyk7XG5cdFx0aWYgKHRtcCkge1xuXHRcdFx0Ly8g5riF6Zmk5rKh5pyJ5a6M5oiQ55qE55S756yU5pWw5o2uXG5cdFx0XHRpZiAodGhpcy5jb25maWcucGVuQ2xhc3MgIT0gdG1wKSB7XG5cdFx0XHRcdHRoaXMuY29uZmlnLnBlbkNsYXNzID0gdG1wO1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wZW5EYXRhID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0Ly8g5Yib5bu655S756yUXG5cdFx0XHR0aGlzLmNyZWF0ZU5ld1BlbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIuS4jeiDveivhuWIq+eahOeUu+eslFwiLCBwZW5DbGFzcyk7XG5cdFx0fVxuXHR9XG5cdHN0cmluZ2lmeSgpIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcuaGlzdG9yeSk7XG5cdH1cblx0cGFyc2UoZGF0YSkge1xuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dGhpcy5jb25maWcuaGlzdG9yeSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0fSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdHRoaXMuY29uZmlnLmhpc3RvcnkgPSBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlKHRydWUpO1xuXHR9XG5cdHVuZG8odGVzdCkge1xuXHRcdGlmICh0aGlzLmNvbmZpZy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdGlmICh0ZXN0KSByZXR1cm4gdHJ1ZTtcblx0XHRcdHRoaXMuY29uZmlnLnJlZG8ucHVzaCh0aGlzLmNvbmZpZy5oaXN0b3J5LnBvcCgpKTtcblx0XHRcdHRoaXMudXBkYXRlKHRydWUpO1xuXHRcdH1cblx0fVxuXHRyZWRvKHRlc3QpIHtcblx0XHRpZiAodGhpcy5jb25maWcucmVkby5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAodGVzdCkgcmV0dXJuIHRydWU7XG5cdFx0XHR0aGlzLmNvbmZpZy5oaXN0b3J5LnB1c2godGhpcy5jb25maWcucmVkby5wb3AoKSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH1cblx0fVxuXHRnZXRDYW52YXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FudmFzO1xuXHR9XG5cdHJlc2l6ZSgpIHtcblx0XHR2YXIgbW9kaWZ5ID0gZmFsc2U7XG5cdFx0dmFyIHsgZG9tLCBjb25maWcgfSA9IHRoaXM7XG5cdFx0aWYgKGRvbS5vZmZzZXRXaWR0aCAhPSBjb25maWcud2lkdGgpIHtcblx0XHRcdG1vZGlmeSA9IHRydWU7XG5cdFx0XHRjb25maWcud2lkdGggPSBkb20uc2Nyb2xsV2lkdGggfHwgZG9tLm9mZnNldFdpZHRoO1xuXHRcdH1cblx0XHRpZiAoZG9tLm9mZnNldEhlaWdodCAhPSBjb25maWcuaGVpZ2h0KSB7XG5cdFx0XHRtb2RpZnkgPSB0cnVlO1xuXHRcdFx0Y29uZmlnLmhlaWdodCA9IGRvbS5zY3JvbGxIZWlnaHQgfHwgZG9tLm9mZnNldEhlaWdodDtcblx0XHR9XG5cdFx0cmV0dXJuIG1vZGlmeTtcblx0fVxuXHRvZmZzZXQoKSB7XG5cdFx0cmV0dXJuIG9mZnNldCh0aGlzLmNhbnZhcyk7XG5cdH1cblx0ZGlzYWJsZSgpIHtcblx0XHR0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcblx0fVxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG5cdH1cblx0c2NhbGUobikge1xuXHRcdHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCI1MCUgMCAwXCI7XG5cdFx0dGhpcy5jYW52YXMucGFyZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtufSlgOyAvLyB0cmFuc2xhdGUoJHt9KWA7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0fVxuXHRpbml0KCkge31cblx0Y3JlYXRlQ2FudmFzKCkge31cblx0Z2V0U3R5bGUoKSB7fVxuXHR1cGRhdGUoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7IiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuLy8gaW1wb3J0IERyYXdlciBmcm9tICcuL2RyYXdlci1zdmcnO1xuLy8gaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcbi8vIGV4cG9ydCB7XG4vLyAgICAgRHJhd2VyLFxuLy8gICAgIHBlbnMsXG4vLyB9O1xuaW1wb3J0IERyYXdlclN2ZyBmcm9tICcuL2RyYXdlci1zdmcnO1xuaW1wb3J0IERyYXdlckNhbnZhcyBmcm9tICcuL2RyYXdlci1jYW52YXMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5cbmNvbnN0IERyYXdlciA9IERyYXdlclN2ZztcblxuZXhwb3J0IHtcblx0RHJhd2VyLFxuXHREcmF3ZXJTdmcsXG5cdERyYXdlckNhbnZhcyxcblx0TWVudSxcblx0cGVucyxcbn07IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTMtMyEuL2luZGV4Lmxlc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IG9mZnNldCBmcm9tICcuL09mZnNldCc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudC5qcyc7XG5cbmZ1bmN0aW9uIERyYWcobGlzLCBhaW0pIHtcbiAgICBFdmVudC5jYWxsKHRoaXMpO1xuICAgIGFpbSA9IGFpbSB8fCBsaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZW5kOiBvZmZzZXQoYWltKSB9O1xuICAgIHRoaXMuc2V0QmVnaW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYmVnaW4gPSB7IGxlZnQ6IHgsIHRvcDogeSB9O1xuICAgIH07XG4gICAgdGhpcy53YXJwRXZlbnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICAgICAgICAgICAgICBlLnBhZ2VYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBlLnBhZ2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5wYWdlWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBlLnBhZ2VZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH07XG4gICAgdGhpcy5nZXRNb3ZlZCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLnN0YXRlLmJlZ2luO1xuICAgICAgICBsZWZ0ID0geCAtIGxlZnQ7XG4gICAgICAgIHRvcCA9IHkgLSB0b3A7XG4gICAgICAgIGxlZnQgKz0gdGhpcy5zdGF0ZS5lbmQubGVmdCB8fCAwO1xuICAgICAgICB0b3AgKz0gdGhpcy5zdGF0ZS5lbmQudG9wIHx8IDA7XG4gICAgICAgIHRoaXMuc3RhdGUubW92ZSA9IHsgbGVmdCwgdG9wIH07XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1vdmU7XG4gICAgfTtcbiAgICB0aGlzLmJlZ2luID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmJlZ2luKSB7XG4gICAgICAgICAgICBlID0gdGhpcy53YXJwRXZlbnQoZSk7XG4gICAgICAgICAgICB0aGlzLnNldEJlZ2luKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiYmVnaW5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW92ZSA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJlZ2luKSB7XG4gICAgICAgICAgICBlID0gdGhpcy53YXJwRXZlbnQoZSk7XG4gICAgICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZ2V0TW92ZWQoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgICBhaW0uc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICBhaW0uc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJlZ2luKSB7XG4gICAgICAgICAgICBlID0gdGhpcy53YXJwRXZlbnQoZSk7XG4gICAgICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZ2V0TW92ZWQoZS5wYWdlWCwgZS5wYWdlWSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJlZ2luID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmVuZCA9IHsgbGVmdCwgdG9wIH07XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJlbmRcIiwgeyBsZWZ0LCB0b3AgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW92ZVRvID0gKHtsZWZ0LCB0b3B9KSA9PiB7XG4gICAgICAgIGFpbS5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcbiAgICAgICAgYWltLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgdGhpcy5zdGF0ZS5lbmQgPSB7IGxlZnQsIHRvcCB9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5lbmQpO1xuICAgICAgICBsaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5lbmQpO1xuICAgICAgICBsaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5iZWdpbik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZzsiLCJmdW5jdGlvbiBFdmVudCgpe1xuICAgIHZhciBfbGlzdGVuZXJzPSB7fVxuICAgIC8vIOa3u+WKoFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgX2xpc3RlbmVyc1t0eXBlXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgX2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGZuKTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIOinpuWPkVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKHR5cGUsZGF0YSkge1xuICAgICAgICB2YXIgYXJyYXlFdmVudCA9IF9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIGlmIChhcnJheUV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPWFycmF5RXZlbnQubGVuZ3RoOyBpPGxlbmd0aDsgaSs9MSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyYXlFdmVudFtpXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5RXZlbnRbaV0oZGF0YSk7ICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIOWIoOmZpFxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICAgIHZhciBhcnJheUV2ZW50ID0gX2xpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiICYmIGFycmF5RXZlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5riF6Zmk5b2T5YmNdHlwZeexu+Wei+S6i+S7tuS4i+WvueW6lGZu5pa55rOVXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wLCBsZW5ndGg9YXJyYXlFdmVudC5sZW5ndGg7IGk8bGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5RXZlbnRbaV0gPT09IGZuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saXN0ZW5lcnNbdHlwZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIGZuPT09XCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOS7heS7heWPguaVsHR5cGXvvIzliJnmiYDmnIl0eXBl57G75Z6L5LqL5Lu25riF6ZmkXG4gICAgICAgICAgICAgICAgZGVsZXRlIF9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiZnVuY3Rpb24gb2Zmc2V0KHdobykge1xuICAgIHZhciBib3ggPSB3aG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCxcbiAgICAgICAgcmlnaHQ6IGJveC5yaWdodCxcbiAgICAgICAgYm90dG9tOiBib3guYm90dG9tXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2Zmc2V0OyIsIi8vIGltcG9ydCBwZW5jaWwgZnJvbSAnLi9kZWZhdWx0UGVuLmN1cic7XG5cbi8qKlxuICog55S756yU5p6E6YCg5Ye95pWwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZW5kZXIgXGLmuLLmn5PlvZPliY3kvZznlLvmlbDmja5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmUg5L2c55S75a6M5oiQ77yM5o+Q5Lqk5pys5qyh5L2c55S75pWw5o2uXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRQZW4ocmVuZGVyLCByZXNvbHZlKSB7XG4gICAgdmFyIGxpID0gW107XG4gICAgdGhpcy5iZWdpbiA9IGZ1bmN0aW9uKGJ4LCBieSkge1xuICAgICAgICBsaS5wdXNoKGJ4KTtcbiAgICAgICAgbGkucHVzaChieSk7XG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICBsaS5wdXNoKGV4KTtcbiAgICAgICAgbGkucHVzaChleSk7XG4gICAgICAgIHJlbmRlcihsaSk7XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIGxpLnB1c2goZXgpO1xuICAgICAgICBsaS5wdXNoKGV5KTtcbiAgICAgICAgcmVzb2x2ZShsaSk7XG4gICAgfTtcbn1cbi8vIOm8oOagh21vdmXml7bop6blj5F0aGlzLmJlZ2luXG5kZWZhdWx0UGVuLm1vdmVCZWdpbiA9IHRydWU7XG4vLyDpvKDmoIdvdXTml7bop6blj5F0aGlzLmVuZFxuZGVmYXVsdFBlbi5vdXRFbmQgPSB0cnVlO1xuLy8gZGVmYXVsdFBlbi5jdXJzb3IgPSAndXJsKCcgKyBwZW5jaWwgKyAnKSxwb2ludGVyJztcbmRlZmF1bHRQZW4ucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhkYXRhWzBdLCBkYXRhWzFdKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKGRhdGFbaV0sIGRhdGFbaSArIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbmRlZmF1bHRQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2ldO1xuICAgICAgICAgICAgaWYgKGkgJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGkgPT0gMCA/IFwiTVwiIDogXCJMXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRoICs9IGl0ZW0gKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3BhdGh9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiLz5gO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFBlbjsiLCJmdW5jdGlvbiBlbGxpcHNlUGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxuZWxsaXBzZVBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xuZWxsaXBzZVBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgdmFyIHggPSAoZGF0YVswXSArIGRhdGFbMl0pIC8gMjtcbiAgICAgICAgdmFyIHkgPSAoZGF0YVsxXSArIGRhdGFbM10pIC8gMjtcbiAgICAgICAgdmFyIGEgPSAoZGF0YVsyXSAtIGRhdGFbMF0pIC8gMjtcbiAgICAgICAgdmFyIGIgPSAoZGF0YVszXSAtIGRhdGFbMV0pIC8gMjtcblxuICAgICAgICB2YXIgciA9IChhID4gYikgPyBhIDogYjtcbiAgICAgICAgdmFyIHJhdGlvWCA9IGEgLyByO1xuICAgICAgICB2YXIgcmF0aW9ZID0gYiAvIHI7XG4gICAgICAgIGN0eC5zY2FsZShyYXRpb1gsIHJhdGlvWSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh4IC8gcmF0aW9YLCB5IC8gcmF0aW9ZLCByLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG59O1xuZWxsaXBzZVBlbi5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICB2YXIgeCA9IChkYXRhWzBdICsgZGF0YVsyXSkgLyAyO1xuICAgICAgICB2YXIgeSA9IChkYXRhWzFdICsgZGF0YVszXSkgLyAyO1xuICAgICAgICB2YXIgYSA9IE1hdGguYWJzKChkYXRhWzJdIC0gZGF0YVswXSkgLyAyKTtcbiAgICAgICAgdmFyIGIgPSBNYXRoLmFicygoZGF0YVszXSAtIGRhdGFbMV0pIC8gMik7XG5cbiAgICAgICAgcmV0dXJuIGA8ZWxsaXBzZSBjeD1cIiR7eH1cIiBjeT1cIiR7eX1cIiByeD1cIiR7YX1cIiByeT1cIiR7Yn1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxsaXBzZVBlbjsiLCIvLyBpbXBvcnQgdXJsIGZyb20gJy4vZXJhc2VyLnBuZyc7XG5cbmZ1bmN0aW9uIGNvdW50KGRvbSwgbikge1xuICAgIG4gPSBuIHx8IDA7XG4gICAgaWYgKGRvbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgIHJldHVybiBjb3VudChkb20ucHJldmlvdXNFbGVtZW50U2libGluZywgbiArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gbiArIFwiXCI7XG59XG5cbmZ1bmN0aW9uIGVyYXNlcihyZW5kZXIsIHJlc29sdmUsIGFwcGVuZCwgZHJhd2VyKSB7XG4gICAgaWYgKGRyYXdlci5jYW52YXMudGFnTmFtZSA9PSBcInN2Z1wiKSB7XG4gICAgICAgIGxldCBsaSA9IFtdO1xuICAgICAgICBjb25zdCBob3ZlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBkcmF3ZXIuY2FudmFzICYmIGV2ZW50LndoaWNoID09IDEpIHtcbiAgICAgICAgICAgICAgICBsaS5wdXNoKGNvdW50KGV2ZW50LnRhcmdldCkpO1xuICAgICAgICAgICAgICAgIHJlbmRlcihsaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGRyYXdlci5jYW52YXMpIHtcbiAgICAgICAgICAgICAgICBsaS5wdXNoKGNvdW50KGV2ZW50LnRhcmdldCkpO1xuICAgICAgICAgICAgICAgIHJlbmRlcihsaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRyYXdlci5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBob3Zlcik7XG4gICAgICAgIGRyYXdlci5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrKTtcbiAgICAgICAgdGhpcy5lbmQgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSwgd2hhdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShsaS5sZW5ndGggPiAwID8gbGkgOiB1bmRlZmluZWQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVubW91bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBob3Zlcik7XG4gICAgICAgICAgICBkcmF3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGljayk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxpID0gW107XG4gICAgICAgIHRoaXMuYmVnaW4gPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICAgICAgbGkucHVzaChieCk7XG4gICAgICAgICAgICBsaS5wdXNoKGJ5KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgICAgIGxpLnB1c2goZXgpO1xuICAgICAgICAgICAgbGkucHVzaChleSk7XG4gICAgICAgICAgICByZW5kZXIobGkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgICAgICBsaS5wdXNoKGV4KTtcbiAgICAgICAgICAgIGxpLnB1c2goZXkpO1xuICAgICAgICAgICAgcmVzb2x2ZShsaSk7XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gZXJhc2VyLmN1cnNvciA9ICd1cmwoJyArIHVybCArICcpLHBvaW50ZXInO1xuZXJhc2VyLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjdHggPSBkcmF3ZXIuY3R4O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRhdGFbaV0sIGRhdGFbaSArIDFdLCA1LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmVyYXNlci5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgdmFyIHN2ZyA9IGRyYXdlci5jYW52YXMuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChzdmcpIHN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVyYXNlcjsiLCJpbXBvcnQgZGVmYXVsdFBlbiBmcm9tICcuL2RlZmF1bHRQZW4uanMnO1xuaW1wb3J0IGxpbmVQZW4gZnJvbSAnLi9saW5lUGVuLmpzJztcbmltcG9ydCBlbGxpcHNlUGVuIGZyb20gJy4vZWxsaXBzZVBlbi5qcyc7XG5pbXBvcnQgcmVjdFBlbiBmcm9tICcuL3JlY3RQZW4uanMnO1xuaW1wb3J0IHRleHRQZW4gZnJvbSAnLi90ZXh0UGVuLmpzJztcbmltcG9ydCBlcmFzZXIgZnJvbSAnLi9lcmFzZXIuanMnO1xuXG52YXIgbWFwID0ge1xuICAgIGRlZmF1bHRQZW4sXG4gICAgbGluZVBlbixcbiAgICBlbGxpcHNlUGVuLFxuICAgIHJlY3RQZW4sXG4gICAgdGV4dFBlbixcbiAgICBlcmFzZXIsXG59O1xuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIG1hcFtrZXldIHx8IGRlZmF1bHRQZW47XG59O1xuXG5mdW5jdGlvbiBrZXkocGVuKSB7XG4gICAgaWYgKHR5cGVvZiBwZW4gPT0gXCJvYmplY3RcIilcbiAgICAgICAgcGVuID0gcGVuLmNvbnN0dWN0b3I7XG4gICAgaWYgKHR5cGVvZiBwZW4gPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBwZW4ucmVuZGVyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmb3IgKHZhciBrIGluIG1hcCkge1xuICAgICAgICAgICAgdmFyIHYgPSBtYXBba107XG4gICAgICAgICAgICBpZiAocGVuID09IHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHNldChrZXksIHBlbikge1xuICAgIGlmICh0eXBlb2YgcGVuID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcGVuLnJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbWFwW2tleV0gPSBwZW47XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdmFyIGtzID0gW107XG4gICAgZm9yICh2YXIgayBpbiBtYXApIHtcbiAgICAgICAga3MucHVzaChrKTtcbiAgICB9XG4gICAgcmV0dXJuIGtzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBzZXQsXG4gICAga2V5c1xufTsiLCJmdW5jdGlvbiBsaW5lUGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxubGluZVBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xubGluZVBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbM10pO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbmxpbmVQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIGA8bGluZSB4MT1cIiR7ZGF0YVswXX1cIiB5MT1cIiR7ZGF0YVsxXX1cIiB4Mj1cIiR7ZGF0YVsyXX1cIiB5Mj1cIiR7ZGF0YVszXX1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGluZVBlbjsiLCJmdW5jdGlvbiByZWN0UGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxucmVjdFBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xucmVjdFBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbM10pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMF0sIGRhdGFbM10pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbnJlY3RQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdmFyIHggPSBNYXRoLm1pbihkYXRhWzBdLCBkYXRhWzJdKTtcbiAgICAgICAgdmFyIHkgPSBNYXRoLm1pbihkYXRhWzFdLCBkYXRhWzNdKTtcbiAgICAgICAgdmFyIHdpZHRoID0gTWF0aC5hYnMoZGF0YVsyXSAtIGRhdGFbMF0pO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5hYnMoZGF0YVszXSAtIGRhdGFbMV0pO1xuXG4gICAgICAgIHJldHVybiBgPHJlY3QgeD1cIiR7eH1cIiB5PVwiJHt5fVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCByZWN0UGVuOyIsImZ1bmN0aW9uIHRleHRQZW4ocmVuZGVyLCByZXNvbHZlLCBhcHBlbmQpIHtcbiAgICB2YXIgaW5wdXQsIGRvbSwgdG1wO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuYmVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodG1wKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRtcCk7XG4gICAgICAgICAgICB0bXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKGRvbSkgdHJ5IHsgZG9tLnJlbW92ZUNoaWxkKGlucHV0KTsgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgdG1wID0gW2J4LCBieV1cbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PiB7XG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbMl0gPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgIHJlbmRlcih0bXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9tID0gYXBwZW5kKGlucHV0LCBleCwgZXkpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH07XG59XG50ZXh0UGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID49IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5mb250ID0gdGV4dFBlbi5mb250O1xuICAgICAgICB2YXIgdGV4dCA9IGRhdGFbMl0gfHwgXCJcIjtcbiAgICAgICAgdmFyIHggPSBkYXRhWzBdO1xuICAgICAgICB2YXIgeSA9IGRhdGFbMV07XG4gICAgICAgIHZhciBzaXplID0gcGFyc2VJbnQodGV4dFBlbi5mb250KTtcbiAgICAgICAgdGV4dC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChpdGVtLCB4LCB5ICsgaSAqIHNpemUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudGV4dFBlbi5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YXIgeCA9IGRhdGFbMF07XG4gICAgICAgIHZhciB5ID0gZGF0YVsxXTtcbiAgICAgICAgdmFyIHNpemUgPSBwYXJzZUludChkcmF3ZXIucGVuU3R5bGVbJ2ZvbnQtc2l6ZSddKTtcbiAgICAgICAgdmFyIHRleHRzID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCB0ZXh0IG9mIChkYXRhWzJdfHwnJykuc3BsaXQoJ1xcbicpKXtcbiAgICAgICAgICAgIHRleHRzICs9IGA8dGV4dCB4PVwiJHt4fVwiIHk9XCIke3l9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiPiR7dGV4dH08L3RleHQ+YFxuICAgICAgICAgICAgeSArPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGc+JHt0ZXh0c308L2c+YDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0UGVuOyJdLCJzb3VyY2VSb290IjoiIn0=