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

      typeof event.preventDefault === 'function' && event.preventDefault();
      typeof event.stopPropagation === 'function' && event.stopPropagation();
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

      typeof event.preventDefault === 'function' && event.preventDefault();
      typeof event.stopPropagation === 'function' && event.stopPropagation();
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
      typeof event.preventDefault === 'function' && event.preventDefault();
      typeof event.stopPropagation === 'function' && event.stopPropagation();
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

/***/ "./src/libs/Optim.js":
/*!***************************!*\
  !*** ./src/libs/Optim.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 笔迹优化
var _FIRE_ON_ = true;

function Optim() {
  var filter_path__detal_k = 0.1; // 过滤的斜率差

  this.filter = function (arr) {
    if (!_FIRE_ON_) {
      return arr;
    }

    if (!Array.isArray(arr)) {
      console.error("参数必须是数组：", arr);
      return arr;
    }

    var list = JSON.parse(JSON.stringify(arr)); // var startLen = list.length, startTime = new Date().getTime();
    // console.log("=============filter befroe start len:", startLen);

    for (var i = 1; i < list.length; i = i + 2) {
      if (i < 3) continue;
      var _ax = list[i - 3],
          _ay = list[i - 2],
          _bx = list[i - 1],
          _by = list[i];

      if (_ax === _bx && _ay === _by) {
        var delList = list.splice(i - 1, 2); // console.log("filter delList:", delList);

        i = i - 2;
        continue;
      }

      if (i < 5) continue;
      _ax = list[i - 5], _ay = list[i - 4], _bx = list[i - 3], _by = list[i - 2];
      var _cx = list[i - 1],
          _cy = list[i];

      var _cbk = _cx - _bx ? (_cy - _by) / (_cx - _bx) : 0,
          _bak = _bx - _ax ? (_by - _ay) / (_bx - _ax) : 0;

      if (Math.abs(_cbk - _bak) <= filter_path__detal_k) {
        // console.log("_cx :", _cx, "_cy :", _cy, "_bx :", _bx, "_by :", _by, "_ax :", _ax, "_ay :", _ay);
        // console.log("_cbk :", _cbk, "_bak :", _bak, " detal k:", Math.abs(_cbk - _bak));
        var delList = list.splice(i - 3, 2); // console.log("filter delList:", delList);

        i = i - 2;
        continue;
      }
    } // var endTime = new Date().getTime();
    // console.log("=============filter after spend time:", new Date().getTime()-startTime, "del len:", startLen - list.length, " list:", list);


    return list;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Optim);

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
/* harmony import */ var _libs_Optim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Optim.js */ "./src/libs/Optim.js");
// import pencil from './defaultPen.cur';

var optimObj = new _libs_Optim_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
    li = optimObj.filter(li);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWludC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFpbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly9wYWludC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9kcmF3ZXItY2FudmFzLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2RyYXdlci1zdmcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvZHJhd2VyLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL2luZGV4Lmxlc3M/NmJhZCIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL0RyYWcuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvbGlicy9FdmVudC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL09mZnNldC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9saWJzL09wdGltLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvY2lyY2xlUGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvZGVmYXVsdFBlbi5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2VsbGlwc2VQZW4uanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9lcmFzZXIuanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYWludC8uL3NyYy9wZW5zL2xpbmVQZW4uanMiLCJ3ZWJwYWNrOi8vcGFpbnQvLi9zcmMvcGVucy9yZWN0UGVuLmpzIiwid2VicGFjazovL3BhaW50Ly4vc3JjL3BlbnMvdGV4dFBlbi5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJNZW51IiwiZHJhd2VyIiwibWVudSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvZmZzZXQiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJhcHBlbmRDaGlsZCIsImFkZEJ1dHRvbiIsImh0bWwiLCJjYiIsImJ0biIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRQZW5zIiwia2V5cyIsInBlbnMiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsImlubmVySFRNTCIsInJlcGxhY2UiLCJzZXRQZW4iLCJwcmV2IiwibW92ZWFibGUiLCJkcmFnIiwiRHJhZyIsIm1vdmVUbyIsInN0YXJ0IiwiZGlzYWJsZSIsImVuYWJsZSIsInVuZG8iLCJyZWRvIiwic2NhbGUiLCJjb2xvciIsImNvbG9ycyIsInNldENvbG9yIiwiY2xlYXIiLCJwYXJzZSIsInJlc3RvcmUiLCJzIiwiY291bnQiLCJzYXZlIiwic3RyaW5naWZ5IiwicmVtb3ZlQ2hpbGQiLCJzdHlsZXMiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJwcm90b3R5cGUiLCJnZXRTdHlsZSIsImsiLCJpbml0U3R5bGUiLCJzZXRTdHlsZSIsIkRyYXdlckNhbnZhcyIsIk9iamVjdCIsImFzc2lnbiIsImJhY2tncm91bmQiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImN0eCIsImNhbnZhcyIsImdldENvbnRleHQiLCJjb25maWciLCJyZXNpemUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BhdGNoRXZlbnQiLCJkcmF3SW1hZ2UiLCJoaXN0b3J5IiwicGFpbnRJdGVtIiwicGVuRGF0YSIsInBlbkNsYXNzIiwicmVuZGVyIiwid2FycERhdGEiLCJwZW4iLCJnZXQiLCJkYXRhIiwidG9EYXRhVVJMIiwiRHJhd2VyIiwiRHJhd2VyU3ZnIiwiZGl2IiwiY2hpbGROb2RlcyIsImN1cnJlbnRfaW5keCIsInBlblN0eWxlIiwiZmlsbCIsInN0cm9rZSIsInYiLCJzcGxpdCIsInNzIiwibGVuZ3RoIiwidHJpbSIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImV4ZWMiLCJ4MCIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwidGV4dCIsImN1cnJlbnREb20iLCJpbnNlcnRCZWZvcmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmb3JjZSIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwicmVuZGVyU3ZnIiwiYXBwZW5kIiwibW9kaWZ5IiwiZG9tIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNhbnZhc193aWR0aCIsIk51bWJlciIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNhbnZhc19oZWlnaHQiLCJpIiwiY2xvbmVOb2RlIiwiZGlzcGxheSIsInJlbW92ZUF0dHJpYnV0ZSIsIm91dGVySFRNTCIsImRlZmF1bHRQZW4iLCJhIiwiYiIsIkV2ZW50IiwiY2FsbCIsImNyZWF0ZUNhbnZhcyIsInBhcmVudCIsIkhUTUxJbWFnZUVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiZGVmYXVsdENvbmZpZyIsImluaXQiLCJiZWdpblBvaW50Iiwib3V0UG9pbnQiLCJzZXREYXRhIiwidXBkYXRlIiwiZ2V0UGVuIiwibW91c2Vkb3duIiwiZXZlbnQiLCJlIiwibm9ybWFsaXplRXZlbnQiLCJwcGFwIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsImJlZ2luIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJtb3VzZW1vdmUiLCJ3aGljaCIsIm1vdmVCZWdpbiIsIm1vdmUiLCJlbmQiLCJlbmRQb2ludCIsImNhbGxCeSIsImNsb3NlIiwibW91c2V1cCIsIm1vdXNlb3ZlciIsIm91dEVuZCIsIm1vdXNlb3V0IiwidG9FbGVtZW50IiwiY3JlYXRlTmV3UGVuIiwidW5tb3VudCIsInBlblN1Y2Nlc3MiLCJwdXNoIiwidW5kZWZpbmVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiQXJyYXkiLCJsaXN0Iiwibm9ybWFsaXplZCIsIlRvdWNoRXZlbnQiLCJvZmYiLCJ0YXJnZXQiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiTWF0aCIsImZsb29yIiwiX3ByZXZQZW5DbGFzcyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRtcCIsIkpTT04iLCJ0ZXN0IiwicG9wIiwibiIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsImxpcyIsImFpbSIsInN0YXRlIiwic2V0QmVnaW4iLCJ3YXJwRXZlbnQiLCJ0eXBlIiwiZ2V0TW92ZWQiLCJzdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9saXN0ZW5lcnMiLCJmbiIsImFycmF5RXZlbnQiLCJzcGxpY2UiLCJ3aG8iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiX0ZJUkVfT05fIiwiT3B0aW0iLCJmaWx0ZXJfcGF0aF9fZGV0YWxfayIsImZpbHRlciIsImFyciIsImlzQXJyYXkiLCJfYXgiLCJfYXkiLCJfYngiLCJfYnkiLCJkZWxMaXN0IiwiX2N4IiwiX2N5IiwiX2NiayIsIl9iYWsiLCJhYnMiLCJjaXJjbGVQZW4iLCJyZXNvbHZlIiwiYngiLCJieSIsImV4IiwiZXkiLCJwb3ciLCJyIiwic3FydCIsIm9wdGltT2JqIiwibGkiLCJiZWdpblBhdGgiLCJsaW5lVG8iLCJwYXRoIiwiZWxsaXBzZVBlbiIsInJhdGlvWCIsInJhdGlvWSIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImVyYXNlciIsInRhZ05hbWUiLCJob3ZlciIsImNsaWNrIiwid2hhdCIsImNsaXAiLCJtYXAiLCJsaW5lUGVuIiwicmVjdFBlbiIsInRleHRQZW4iLCJjb25zdHVjdG9yIiwic2V0Iiwia3MiLCJtaW4iLCJpbnB1dCIsImN0cmxLZXkiLCJrZXlDb2RlIiwiZm9jdXMiLCJmb250Iiwic2l6ZSIsInBhcnNlSW50IiwiZmlsbFRleHQiLCJ0ZXh0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsa0hBQWtILGdCQUFnQixpQkFBaUIsc0JBQXNCLDZEQUE2RCw2REFBNkQsdUJBQXVCLGlDQUFpQyw0QkFBNEIseUJBQXlCLEdBQUcsc0JBQXNCLDBCQUEwQix5REFBeUQseURBQXlELEdBQUcsbUJBQW1CLDRCQUE0QixnQkFBZ0Isc0JB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LEVBQVA7QUFDSCxDQWJEOztBQWVlYixzRUFBZixFIiwiZmlsZSI6InBhaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwYWludFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYWludFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYWludFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIENyZWF0ZWQgRGF0ZTogMjAxNy0xMC0xNiAwOToyNzowOVxcbiAqIEF1dGhvcjogaW51MTI1NVxcbiAqIEUtTWFpbDogOTI5OTA5MjYwQHFxLmNvbVxcbiAqL1xcbi5pbnB1dC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uaW5wdXQtc3R5bGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUY5MEU2O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XFxufVxcbi50ZXh0YXJlYS1zdHlsZSB7XFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcbi50ZXh0YXJlYS1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLnNlbGVjdC1zdHlsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzNweDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuLnNlbGVjdC1zdHlsZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxRjkwRTY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcXG59XFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5wYWludGVyLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0biB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogNXB4IDdweDtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMxREE1N0E7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzA0OGM2MTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMDQ4YzYxO1xcbn1cXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuOmFjdGl2ZSxcXG4ucGFpbnRlci1tZW51ID4gLnBhaW50ZXItbWVudV9fYnRuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3MzQ4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnBhaW50ZXItbWVudSA+IC5wYWludGVyLW1lbnVfX2J0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMzZiZTkzO1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5wYWludGVyLW1lbnUgPiAucGFpbnRlci1tZW51X19tb3ZlIHtcXG4gIG1hcmdpbjogNXB4IDdweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLnBhaW50ZXItY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5wYWludGVyLWNhbnZhcyA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wYWludGVyLWNhbnZhcy5lcmFzZXIgPiAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlc3Ryb2tlO1xcbn1cXG4ucGFpbnRlci1jYW52YXMuZGlzYWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBhaW50ZXItY2FudmFzLmRpc2FibGUgPiAqIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucGFpbnRlci1jYW52YXNfX2l0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgcGVucyBmcm9tICcuL3BlbnMnO1xuaW1wb3J0IERyYWcgZnJvbSAnLi9saWJzL0RyYWcnO1xuXG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5mdW5jdGlvbiBNZW51KGRyYXdlcikge1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwicGFpbnRlci1tZW51XCI7XG4gICAgdmFyIG9mZnNldCA9IGRyYXdlci5vZmZzZXQoKTtcbiAgICBtZW51LnN0eWxlLnRvcCA9IG9mZnNldC50b3AgKyBcInB4XCI7XG4gICAgbWVudS5zdHlsZS5sZWZ0ID0gb2Zmc2V0LmxlZnQgKyBcInB4XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB0aGlzLmFkZEJ1dHRvbiA9IGZ1bmN0aW9uKGh0bWwsIGNiKSB7XG4gICAgICAgIGlmIChodG1sICYmIGNiKSB7XG4gICAgICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fYnRuXCI7XG4gICAgICAgICAgICBidG4uaW5uZXJUZXh0ID0gaHRtbDtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2IpO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hZGRQZW5zID0gZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBrZXlzID0ga2V5cyB8fCBwZW5zLmtleXMoKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaHRtbCkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB7IGh0bWw6IGl0ZW0sIGtleTogaXRlbSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBidG4uY2xhc3NOYW1lID0gXCJwYWludGVyLW1lbnVfX2J0biBwYWludGVyLW1lbnVfX3BlblwiO1xuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGl0ZW0uaHRtbC5yZXBsYWNlKC9wZW4kL2ksIFwiXCIpO1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgICAgICBkcmF3ZXIuc2V0UGVuKGl0ZW0ua2V5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRQZW5zLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQZW5zLnByZXYuY2xhc3NOYW1lID0gdGhpcy5hZGRQZW5zLnByZXYuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBlbnMucHJldiA9IGJ0bjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFkZFBlbnMucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGVucy5wcmV2ID0gYnRuO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMubW92ZWFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSBcInBhaW50ZXItbWVudV9fbW92ZVwiO1xuICAgICAgICB2YXIgZHJhZyA9IG5ldyBEcmFnKGJ0biwgbWVudSkubW92ZVRvKG9mZnNldCkuc3RhcnQoKTtcbiAgICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiYmVnaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIuZGlzYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLmVuYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMudW5kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIuaSpOmUgFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci51bmRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbihcIumHjeWBmlwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRyYXdlci5yZWRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuc2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmlL7lpKdcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSAqPSAxLjE7XG4gICAgICAgICAgICBkcmF3ZXIuc2NhbGUoc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLnvKnlsI9cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSAvPSAxLjE7XG4gICAgICAgICAgICBkcmF3ZXIuc2NhbGUoc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmNvbG9yID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbXG4gICAgICAgICAgICBbXCJyZWRcIiwgXCLnuqLoibJcIl0sXG4gICAgICAgICAgICBbXCJ5ZWxsb3dcIiwgXCLpu4ToibJcIl0sXG4gICAgICAgICAgICBbXCJibHVlXCIsIFwi6JOd6ImyXCJdXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGJ0biA9IHRoaXMuYWRkQnV0dG9uKGl0ZW1bMV0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3ZXIuc2V0Q29sb3IoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvci5wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldi5jbGFzc05hbWUgPSB0aGlzLmNvbG9yLnByZXYuY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLnByZXYgPSBidG47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9IGl0ZW1bMF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29sb3IucHJldikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucHJldiA9IGJ0bjtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5riF56m6XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHJhd2VyLnBhcnNlKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5yZXN0b3JlID0gZnVuY3Rpb24ocykge1xuICAgICAgICB0aGlzLnJlc3RvcmUuY291bnQrKztcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oXCLmgaLlpI1cIiArIHRoaXMucmVzdG9yZS5jb3VudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIucGFyc2Uocyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMucmVzdG9yZS5jb3VudCA9IDA7XG4gICAgdGhpcy5zYXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKFwi5L+d5a2YXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZShkcmF3ZXIuc3RyaW5naWZ5KCkpO1xuICAgICAgICAgICAgZHJhd2VyLnBhcnNlKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgRHJhd2VyIGZyb20gJy4vZHJhd2VyLmpzJztcbmltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5cbmNvbnN0IHN0eWxlcyA9IFtcImZpbGxTdHlsZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJnbG9iYWxBbHBoYVwiLCBcImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvblwiLCBcImltYWdlU21vb3RoaW5nRW5hYmxlZFwiLCBcImltYWdlU21vb3RoaW5nUXVhbGl0eVwiLCBcImxpbmVDYXBcIiwgXCJsaW5lRGFzaE9mZnNldFwiLCBcImxpbmVKb2luXCIsIFwibGluZVdpZHRoXCIsIFwibWl0ZXJMaW1pdFwiLCBcInNoYWRvd0JsdXJcIiwgXCJzaGFkb3dDb2xvclwiLCBcInNoYWRvd09mZnNldFhcIiwgXCJzaGFkb3dPZmZzZXRZXCIsIFwic3Ryb2tlU3R5bGVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJ0ZXh0QmFzZWxpbmVcIiwgXTtcblxuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5nZXRTdHlsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHN0eWxlcy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmICh0aGlzW2tdICE9IHRoaXMuaW5pdFN0eWxlW2tdKSBzdHlsZVtrXSA9IHRoaXNba107XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlO1xufTtcbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgIT0gXCJvYmplY3RcIikgcmV0dXJuIHRoaXM7XG4gICAgc3R5bGVzLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKHN0eWxlW2tdICE9IG51bGwpIHRoaXNba10gPSBzdHlsZVtrXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pbml0U3R5bGVba10pIHRoaXNba10gPSB0aGlzLmluaXRTdHlsZVtrXTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmNsYXNzIERyYXdlckNhbnZhcyBleHRlbmRzIERyYXdlciB7XG4gICAgZGVmYXVsdENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJcIixcbiAgICAgICAgICAgIGluaXRTdHlsZToge1xuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogXCJyZWRcIixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogXCJyZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzdXBlci5kZWZhdWx0Q29uZmlnKCkpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIC8vIOivu+WPlumFjee9rlxuICAgICAgICBjdHguaW5pdFN0eWxlID0ge307XG4gICAgICAgIGN0eC5zZXRTdHlsZSh0aGlzLmNvbmZpZy5pbml0U3R5bGUpO1xuICAgICAgICBjdHguaW5pdFN0eWxlID0gY3R4LmdldFN0eWxlKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuY2xhc3NOYW1lID0gXCJwYWludGVyLWNhbnZhc1wiO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgICBnZXRTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4LmdldFN0eWxlKCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdmFyIHsgY2FudmFzLCBjdHgsIGNvbmZpZyB9ID0gdGhpcztcbiAgICAgICAgLy8g5riF6Zmk55S75biDXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmV1cGRhdGUnLCBjdHgpO1xuICAgICAgICAvLyDnlLvog4zmma9cbiAgICAgICAgaWYgKGNvbmZpZy5iYWNrZ3JvdW5kKSBjdHguZHJhd0ltYWdlKGNvbmZpZy5iYWNrZ3JvdW5kLCAwLCAwLCBjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICAvLyDnlLvljoblj7LmlbDmja5cbiAgICAgICAgY29uZmlnLmhpc3RvcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWludEl0ZW0oY3R4LCBpdGVtLCBjb25maWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g55S75b2T5YmN55S756yU5pWw5o2uXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGNvbmZpZy5wZW5DbGFzcy5yZW5kZXIodGhpcy53YXJwRGF0YShjb25maWcucGVuRGF0YSwgY2FudmFzKSwgdGhpcyk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndXBkYXRlJywgY3R4KTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZiAoc3VwZXIucmVzaXplKCkpIHtcbiAgICAgICAgICAgIGxldCB7IGNhbnZhcywgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5zZXRTdHlsZSh7fSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIGZ1bmN0aW9uXG4gICAgcGFpbnRJdGVtKGN0eCwgaXRlbSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgICAgICB2YXIgcGVuID0gcGVucy5nZXQoaXRlbS5rZXkpO1xuICAgICAgICBpZiAocGVuKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LnNldFN0eWxlKGl0ZW0uc3R5bGUpO1xuICAgICAgICAgICAgcGVuLnJlbmRlcih0aGlzLndhcnBEYXRhKGl0ZW0uZGF0YSksIHRoaXMpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDdHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgfVxuICAgIHRvRGF0YVVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyQ2FudmFzOyIsImltcG9ydCBEcmF3ZXIgZnJvbSAnLi9kcmF3ZXIuanMnO1xuaW1wb3J0IHBlbnMgZnJvbSAnLi9wZW5zJztcblxuY2xhc3MgRHJhd2VyU3ZnIGV4dGVuZHMgRHJhd2VyIHtcbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJwYWludGVyLWNhbnZhc1wiPjwvc3ZnPmA7XG4gICAgICAgIHZhciBjYW52YXMgPSBkaXYuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X2luZHggPSAwO1xuICAgICAgICB0aGlzLnBlblN0eWxlID0ge1xuICAgICAgICAgICAgZmlsbDogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgICAgICAgICBzdHJva2U6IFwicmVkXCIsXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAnMzBweCcsXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiAyLFxuICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiAnMHB4JyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0U3R5bGUoKSB7XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnBlblN0eWxlKSB7XG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMucGVuU3R5bGVba107XG4gICAgICAgICAgICBzICs9IGsgKyBcIjpcIiArIHYgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVuU3R5bGUuc3Ryb2tlID0gY29sb3I7XG4gICAgfVxuICAgIHNldFN0eWxlKHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGVuU3R5bGUsIHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNzID0gaXRlbS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5TdHlsZVtzc1swXS50cmltKCldID0gc3NbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZChjYW52YXMsIGh0bWwpIHtcbiAgICAgICAgaWYgKCFodG1sKSByZXR1cm47XG4gICAgICAgIHZhciBzdmc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgLzwoXFx3KykvLmV4ZWMoaHRtbClbMV0pO1xuICAgICAgICAgICAgaHRtbC5yZXBsYWNlKC9cXHMrKFxcdyspPVsnXCJdKFteJ1wiXSspWydcIl0vZywgZnVuY3Rpb24oeDAsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBodG1sLnJlcGxhY2UoLz4oW1xcc1xcU10rKTwvLCBmdW5jdGlvbih4MCwgdGV4dCkge1xuICAgICAgICAgICAgICAgIHN2Zy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuaW5zZXJ0QmVmb3JlKHN2ZywgdGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgdXBkYXRlKGZvcmNlKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHZhciB7IGNhbnZhcywgY29uZmlnIH0gPSB0aGlzO1xuICAgICAgICAvLyDmuIXpmaTnlLvluINcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmV1cGRhdGUnKTtcbiAgICAgICAgaWYgKGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaW5keCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoY2FudmFzLmhhc0NoaWxkTm9kZXMoKSlcbiAgICAgICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQoY2FudmFzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9tID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55S75b2T5YmN55S756yU5pWw5o2uXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnBlbkRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBjb25maWcucGVuQ2xhc3MucmVuZGVyU3ZnKHRoaXMud2FycERhdGEoY29uZmlnLnBlbkRhdGEpLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREb20pIHtcbiAgICAgICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREb20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IHRoaXMuYXBwZW5kKGNhbnZhcywgaHRtbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RG9tKSB7XG4gICAgICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQodGhpcy5jdXJyZW50RG9tKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERvbSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUu+WOhuWPsuaVsOaNrlxuICAgICAgICBmb3IgKDsgdGhpcy5jdXJyZW50X2luZHggPCBjb25maWcuaGlzdG9yeS5sZW5ndGg7IHRoaXMuY3VycmVudF9pbmR4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjb25maWcuaGlzdG9yeVt0aGlzLmN1cnJlbnRfaW5keF07XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChjYW52YXMsIHRoaXMucGFpbnRJdGVtKGl0ZW0sIHRoaXMuY3VycmVudF9pbmR4KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1cGRhdGUnKTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICB2YXIgbW9kaWZ5ID0gZmFsc2U7XG4gICAgICAgIHZhciB7IGNhbnZhcywgY29uZmlnLCBkb20gfSA9IHRoaXM7XG4gICAgICAgIC8vIOWkhOeQhueUu+advyB3aWR0aFxuICAgICAgICB2YXIgd2lkdGggPSAoZG9tLnNjcm9sbFdpZHRoIHx8IGRvbS5vZmZzZXRXaWR0aCk7XG4gICAgICAgIHZhciBjYW52YXNfd2lkdGg9IE51bWJlcigoIGNhbnZhcy5zdHlsZS53aWR0aCArICcnKS5yZXBsYWNlKFwicHhcIixcIlwiKSk7XG4gICAgICAgIGlmICh3aWR0aCAhPSBjYW52YXNfd2lkdGgpIHtcbiAgICAgICAgICAgIG1vZGlmeSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgICAvLyDlpITnkIbnlLvmnb8gd2lkdGhcbiAgICAgICAgdmFyIGhlaWdodCA9IChkb20uc2Nyb2xsSGVpZ2h0IHx8IGRvbS5vZmZzZXRIZWlnaHQpO1xuICAgICAgICB2YXIgY2FudmFzX2hlaWdodCA9IE51bWJlcigoIGNhbnZhcy5zdHlsZS5oZWlnaHQgKyAnJykucmVwbGFjZShcInB4XCIsXCJcIikpO1xuICAgICAgICBpZiAoaGVpZ2h0ICE9IGNhbnZhc19oZWlnaHQpIHtcbiAgICAgICAgICAgIG1vZGlmeSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kaWZ5O1xuICAgIH1cbiAgICAvLyBhZGQgZnVuY3Rpb25cbiAgICBwYWludEl0ZW0oaXRlbSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gIT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgICAgICB2YXIgcGVuID0gcGVucy5nZXQoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgcyA9IFwiXCI7XG4gICAgICAgIGlmIChwZW4gJiYgcGVuLnJlbmRlclN2Zykge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShpdGVtLnN0eWxlKTtcbiAgICAgICAgICAgIHMgPSBwZW4ucmVuZGVyU3ZnKHRoaXMud2FycERhdGEoaXRlbS5kYXRhKSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgdG9TdmcoKSB7XG4gICAgICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcy5jbG9uZU5vZGUoKTtcbiAgICAgICAgc3ZnLmlubmVySFRNTCA9IHRoaXMuY2FudmFzLmlubmVySFRNTDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN2Zy5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3ZnLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIHN2Zy5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdmcucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgIHN2Zy5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgcmV0dXJuIHN2Zy5vdXRlckhUTUw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJTdmc7IiwiaW1wb3J0IEV2ZW50IGZyb20gJy4vbGlicy9FdmVudC5qcyc7XG5pbXBvcnQgcGVucyBmcm9tICcuL3BlbnMnO1xuaW1wb3J0IG9mZnNldCBmcm9tICcuL2xpYnMvT2Zmc2V0LmpzJztcbnZhciBkZWZhdWx0UGVuID0gcGVucy5nZXQoKTtcblxuaWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbihhLCBiKSB7XG5cdFx0Zm9yIChsZXQgayBpbiBiKSB7XG5cdFx0XHRsZXQgdiA9IGJba107XG5cdFx0XHRhW2tdID0gdjtcblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH07XG59XG5cbmNsYXNzIERyYXdlciB7XG5cdGNvbnN0cnVjdG9yKGRvbSwgY29uZmlnKSB7XG5cdFx0RXZlbnQuY2FsbCh0aGlzKTtcblx0XHR2YXIgY2FudmFzID0gdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuXHRcdHZhciBwYXJlbnQgPSB0aGlzLmRvbSA9IGRvbTtcblx0XHRpZiAoZG9tIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuXHRcdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdE9iamVjdC5hc3NpZ24ocGFyZW50LnN0eWxlLCBkb20uc3R5bGUpO1xuXHRcdFx0ZG9tLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHBhcmVudCwgZG9tKTtcblx0XHRcdGRvbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRvbSk7XG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQoZG9tKTtcblx0XHR9XG5cdFx0Y29uZmlnID0gdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdENvbmZpZygpLCBjb25maWcpO1xuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdFx0Ly8g55S756yU5a6e5L6LXG5cdFx0dmFyIHBlbjtcblx0XHQvLyDpvKDmoIfmjInkuIvkvY3nva5cblx0XHR2YXIgYmVnaW5Qb2ludCA9IGZhbHNlO1xuXHRcdC8vIOm8oOagh291dOS9jee9rlxuXHRcdHRoaXMub3V0UG9pbnQgPSBmYWxzZTtcblxuXHRcdHRoaXMuc2V0RGF0YSA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRcdFx0dGhpcy5jb25maWcucGVuRGF0YSA9IGRhdGE7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBnZXRQZW4oKSB7XG5cdFx0XHRyZXR1cm4gcGVuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vdXNlZG93biA9IChldmVudCkgPT4ge1xuXHRcdFx0dmFyIGUgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50KGV2ZW50LCBjb25maWcpO1xuXHRcdFx0dmFyIHBwYXAgPSBnZXRQZW4oKTtcblx0XHRcdGlmICghYmVnaW5Qb2ludCkgYmVnaW5Qb2ludCA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfTtcblx0XHRcdGlmICh0eXBlb2YgcHBhcC5iZWdpbiA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0cHBhcC5iZWdpbihiZWdpblBvaW50LngsIGJlZ2luUG9pbnQueSk7XG5cdFx0XHR9XG5cdFx0XHQodHlwZW9mIGV2ZW50LnByZXZlbnREZWZhdWx0ID09PSAnZnVuY3Rpb24nKSAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0KHR5cGVvZiBldmVudC5zdG9wUHJvcGFnYXRpb24gPT09ICdmdW5jdGlvbicpICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH07XG5cblx0XHRjb25zdCBtb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcblx0XHRcdHZhciBlID0gdGhpcy5ub3JtYWxpemVFdmVudChldmVudCwgY29uZmlnKTtcblx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHQvLyDlnKjnlLvlm77nirbmgIHkuIvvvIzlvZPpvKDmoIfmjInkuIvml7Ztb3Zl5LqL5Lu25Lmf5Y+v5Lul6K6+572uYmVnaW7lnZDmoIdcblx0XHRcdGlmICghYmVnaW5Qb2ludCAmJiBldmVudC53aGljaCA9PSAxICYmIGNvbmZpZy5wZW5DbGFzcy5tb3ZlQmVnaW4pIGJlZ2luUG9pbnQgPSB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZLCBtb3ZlQmVnaW46IHRydWUgfTtcblx0XHRcdGlmICghYmVnaW5Qb2ludCkgcmV0dXJuO1xuXHRcdFx0aWYgKHR5cGVvZiBwcGFwLm1vdmUgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBwYXAubW92ZShiZWdpblBvaW50LngsIGJlZ2luUG9pbnQueSwgZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuXHRcdFx0fVxuXHRcdFx0KHR5cGVvZiBldmVudC5wcmV2ZW50RGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJykgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCh0eXBlb2YgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID09PSAnZnVuY3Rpb24nKSAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZW5kID0gdGhpcy5lbmQgPSAoZW5kUG9pbnQsIGNhbGxCeSkgPT4ge1xuXHRcdFx0aWYoY2FsbEJ5PT1cInNldFBlblwiKSB7XG5cdFx0XHRcdHZhciBwcGFwID0gZ2V0UGVuKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHBhcC5jbG9zZSA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRwcGFwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghYmVnaW5Qb2ludCkgcmV0dXJuO1xuXHRcdFx0dmFyIHBwYXAgPSBnZXRQZW4oKTtcblx0XHRcdGlmICh0eXBlb2YgcHBhcC5lbmQgPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBwYXAuZW5kKGJlZ2luUG9pbnQueCwgYmVnaW5Qb2ludC55LCBlbmRQb2ludC54LCBlbmRQb2ludC55LCBjYWxsQnkpO1xuXHRcdFx0fVxuXHRcdFx0YmVnaW5Qb2ludCA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHRlbmQoeyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9KTtcblx0XHRcdCh0eXBlb2YgZXZlbnQucHJldmVudERlZmF1bHQgPT09ICdmdW5jdGlvbicpICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQodHlwZW9mIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlb3ZlciA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGNvbmZpZy5wZW5DbGFzcy5vdXRFbmQpIHtcblx0XHRcdFx0Ly8g5Zyob3V05pe25bey57uPZW5k5LqGXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3V0UG9pbnQgJiYgZXZlbnQud2hpY2ggIT0gMSkge1xuXHRcdFx0XHRlbmQodGhpcy5vdXRQb2ludCwgXCJtb3VzZW92ZXJcIik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm91dFBvaW50ID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG1vdXNlb3V0ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHR2YXIgZSA9IHRoaXMubm9ybWFsaXplRXZlbnQoZXZlbnQsIGNvbmZpZyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIm91dFwiLCBlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG5cdFx0XHR0aGlzLm91dFBvaW50ID0geyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSB9O1xuXHRcdFx0aWYgKGV2ZW50LnRvRWxlbWVudCAmJiBldmVudC50b0VsZW1lbnQucGFyZW50RWxlbWVudCA9PSBjYW52YXMpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5vdXRQb2ludCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5wZW5DbGFzcy5vdXRFbmQpIHtcblx0XHRcdFx0ZW5kKHRoaXMub3V0UG9pbnQsIFwibW91c2VvdXRcIik7XG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09IDEpIHtcblx0XHRcdFx0bW91c2Vtb3ZlKGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2Vkb3duKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZXVwKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgbW91c2Vkb3duKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3VzZW1vdmUpO1xuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbW91c2V1cCk7XG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VvdmVyKTtcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdXNlb3V0KTtcblxuXHRcdGNvbnN0IGFwcGVuZCA9IChkaXYsIHgsIHkpID0+IHtcblx0XHRcdGlmIChkaXYpIHtcblx0XHRcdFx0ZGl2LmNsYXNzTmFtZSA9IFwicGFpbnRlci1jYW52YXNfX2l0ZW1cIjtcblx0XHRcdFx0aWYgKHggIT0gbnVsbCkgZGl2LnN0eWxlLmxlZnQgPSB0aGlzLndhcnBEYXRhKHgsIGNhbnZhcykgKyBcInB4XCI7XG5cdFx0XHRcdGlmICh5ICE9IG51bGwpIGRpdi5zdHlsZS50b3AgPSB0aGlzLndhcnBEYXRhKHksIGNhbnZhcywgMSkgKyBcInB4XCI7XG5cdFx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9O1xuXHRcdGNvbnN0IGNyZWF0ZU5ld1BlbiA9IHRoaXMuY3JlYXRlTmV3UGVuID0gKCkgPT4ge1xuXHRcdFx0Ly8g6K6+572u55S756yU6byg5qCH5oyH6ZKI5qC35byPXG5cdFx0XHRpZiAocGVuICYmIHR5cGVvZiBwZW4udW5tb3VudCA9PT0gXCJmdW5jdGlvblwiKSBwZW4udW5tb3VudCgpO1xuXHRcdFx0Ly8gY2FudmFzLnN0eWxlLmN1cnNvciA9IGNvbmZpZy5wZW5DbGFzcy5jdXJzb3IgfHwgJ2F1dG8nO1xuXHRcdFx0cGVuID0gbmV3IGNvbmZpZy5wZW5DbGFzcyh0aGlzLnNldERhdGEsIHBlblN1Y2Nlc3MsIGFwcGVuZCwgdGhpcyk7XG5cdFx0fTtcblx0XHQvLyDnlLvnrJTnu5jliLbnu5PmnZ/lm57osINcblx0XHRjb25zdCBwZW5TdWNjZXNzID0gKGRhdGEpID0+IHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudCgnc3VjY2VzcycsIGRhdGEpO1xuXHRcdFx0Y3JlYXRlTmV3UGVuKCk7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRjb25maWcuaGlzdG9yeS5wdXNoKHsga2V5OiBwZW5zLmtleShjb25maWcucGVuQ2xhc3MpLCBkYXRhLCBzdHlsZTogdGhpcy5nZXRTdHlsZSgpIH0pO1xuXHRcdFx0XHRjb25maWcucGVuRGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0Y29uZmlnLnJlZG8ubGVuZ3RoID0gMDtcblx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNyZWF0ZU5ld1BlbigpO1xuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuXHRcdGlmIChnZXRDb21wdXRlZFN0eWxlKHBhcmVudCkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcblx0XHRcdHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fVxuXHRkZWZhdWx0Q29uZmlnKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRoaXN0b3J5OiBbXSxcblx0XHRcdHJlZG86IFtdLFxuXHRcdFx0cGVuQ2xhc3M6IGRlZmF1bHRQZW5cblx0XHR9O1xuXHR9XG5cdHdhcnBEYXRhKGRhdGEsIGkpIHtcblx0XHR2YXIgY29uZmlnID0gdGhpcy5jb25maWc7XG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0dmFyIGxpc3QgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IGRhdGFbaV07XG5cdFx0XHRcdGxpc3QucHVzaCh0aGlzLndhcnBEYXRhKGl0ZW0sIGkpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdHJldHVybiAoaSAmIDEgPyBjb25maWcuaGVpZ2h0IDogY29uZmlnLndpZHRoKSAqIGRhdGEgLyAxMDAwMDtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblx0bm9ybWFsaXplRXZlbnQoZSwgY29uZmlnKSB7XG5cdFx0aWYgKGUubm9ybWFsaXplZCkge1xuXHRcdFx0cmV0dXJuIGU7XG5cdFx0fVxuXHRcdHZhciBvZmZzZXRYLCBvZmZzZXRZO1xuXHRcdGlmIChlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuXHRcdFx0dmFyIG9mZiA9IG9mZnNldChlLnRhcmdldCk7XG5cdFx0XHRvZmZzZXRYID0gKGUuY2hhbmdlZFRvdWNoZXNbMF0gfHwgZS50b3VjaGVzWzBdKS5wYWdlWCAgLSBvZmYubGVmdDtcblx0XHRcdG9mZnNldFkgPSAoZS5jaGFuZ2VkVG91Y2hlc1swXSB8fCBlLnRvdWNoZXNbMF0pLnBhZ2VZIC0gb2ZmLnRvcDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2Zmc2V0WCA9IGUub2Zmc2V0WDtcblx0XHRcdG9mZnNldFkgPSBlLm9mZnNldFk7XG5cdFx0fVxuXHRcdG9mZnNldFggPSBNYXRoLmZsb29yKG9mZnNldFggLyBjb25maWcud2lkdGggKiAxMDAwMCk7XG5cdFx0b2Zmc2V0WSA9IE1hdGguZmxvb3Iob2Zmc2V0WSAvIGNvbmZpZy5oZWlnaHQgKiAxMDAwMCk7XG5cdFx0cmV0dXJuIHsgb2Zmc2V0WCwgb2Zmc2V0WSwgbm9ybWFsaXplZDogdHJ1ZSB9O1xuXHR9XG5cdHNldFBlbihwZW5DbGFzcykge1xuXHRcdC8vIOaooeaLn21vdXNldXBcblx0XHR0aGlzLmVuZCh0aGlzLm91dFBvaW50LCBcInNldFBlblwiKTtcblx0XHQvLyDorr7nva7kuLrpu5jorqTnlLvnrJRcblx0XHRpZiAodHlwZW9mIHBlbkNsYXNzPT09XCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKHRoaXMuX3ByZXZQZW5DbGFzcykge1xuXHRcdFx0XHR0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3ByZXZQZW5DbGFzcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9wcmV2UGVuQ2xhc3MgPSBwZW5DbGFzcztcblx0XHRcdHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQocGVuQ2xhc3MpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHBlbkNsYXNzID09IFwidW5kZWZpbmVkXCIpIHBlbkNsYXNzID0gZGVmYXVsdFBlbjtcblx0XHR2YXIgdG1wID0gcGVucy5nZXQocGVuQ2xhc3MpO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdC8vIOa4hemZpOayoeacieWujOaIkOeahOeUu+eslOaVsOaNrlxuXHRcdFx0aWYgKHRoaXMuY29uZmlnLnBlbkNsYXNzICE9IHRtcCkge1xuXHRcdFx0XHR0aGlzLmNvbmZpZy5wZW5DbGFzcyA9IHRtcDtcblx0XHRcdFx0dGhpcy5jb25maWcucGVuRGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdC8vIOWIm+W7uueUu+eslFxuXHRcdFx0dGhpcy5jcmVhdGVOZXdQZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coXCLkuI3og73or4bliKvnmoTnlLvnrJRcIiwgcGVuQ2xhc3MpO1xuXHRcdH1cblx0fVxuXHRzdHJpbmdpZnkoKSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLmhpc3RvcnkpO1xuXHR9XG5cdHBhcnNlKGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHRoaXMuY29uZmlnLmhpc3RvcnkgPSBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHR0aGlzLmNvbmZpZy5oaXN0b3J5ID0gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZSh0cnVlKTtcblx0fVxuXHR1bmRvKHRlc3QpIHtcblx0XHRpZiAodGhpcy5jb25maWcuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAodGVzdCkgcmV0dXJuIHRydWU7XG5cdFx0XHR0aGlzLmNvbmZpZy5yZWRvLnB1c2godGhpcy5jb25maWcuaGlzdG9yeS5wb3AoKSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSh0cnVlKTtcblx0XHR9XG5cdH1cblx0cmVkbyh0ZXN0KSB7XG5cdFx0aWYgKHRoaXMuY29uZmlnLnJlZG8ubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKHRlc3QpIHJldHVybiB0cnVlO1xuXHRcdFx0dGhpcy5jb25maWcuaGlzdG9yeS5wdXNoKHRoaXMuY29uZmlnLnJlZG8ucG9wKCkpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9XG5cdH1cblx0Z2V0Q2FudmFzKCkge1xuXHRcdHJldHVybiB0aGlzLmNhbnZhcztcblx0fVxuXHRyZXNpemUoKSB7XG5cdFx0dmFyIG1vZGlmeSA9IGZhbHNlO1xuXHRcdHZhciB7IGRvbSwgY29uZmlnIH0gPSB0aGlzO1xuXHRcdGlmIChkb20ub2Zmc2V0V2lkdGggIT0gY29uZmlnLndpZHRoKSB7XG5cdFx0XHRtb2RpZnkgPSB0cnVlO1xuXHRcdFx0Y29uZmlnLndpZHRoID0gZG9tLnNjcm9sbFdpZHRoIHx8IGRvbS5vZmZzZXRXaWR0aDtcblx0XHR9XG5cdFx0aWYgKGRvbS5vZmZzZXRIZWlnaHQgIT0gY29uZmlnLmhlaWdodCkge1xuXHRcdFx0bW9kaWZ5ID0gdHJ1ZTtcblx0XHRcdGNvbmZpZy5oZWlnaHQgPSBkb20uc2Nyb2xsSGVpZ2h0IHx8IGRvbS5vZmZzZXRIZWlnaHQ7XG5cdFx0fVxuXHRcdHJldHVybiBtb2RpZnk7XG5cdH1cblx0b2Zmc2V0KCkge1xuXHRcdHJldHVybiBvZmZzZXQodGhpcy5jYW52YXMpO1xuXHR9XG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG5cdH1cblx0ZW5hYmxlKCkge1xuXHRcdHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuXHR9XG5cdHNjYWxlKG4pIHtcblx0XHR0aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiNTAlIDAgMFwiO1xuXHRcdHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7bn0pYDsgLy8gdHJhbnNsYXRlKCR7fSlgO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblx0aW5pdCgpIHt9XG5cdGNyZWF0ZUNhbnZhcygpIHt9XG5cdGdldFN0eWxlKCkge31cblx0dXBkYXRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyOyIsImltcG9ydCAnLi9pbmRleC5sZXNzJztcbi8vIGltcG9ydCBEcmF3ZXIgZnJvbSAnLi9kcmF3ZXItc3ZnJztcbi8vIGltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG4vLyBleHBvcnQge1xuLy8gICAgIERyYXdlcixcbi8vICAgICBwZW5zLFxuLy8gfTtcbmltcG9ydCBEcmF3ZXJTdmcgZnJvbSAnLi9kcmF3ZXItc3ZnJztcbmltcG9ydCBEcmF3ZXJDYW52YXMgZnJvbSAnLi9kcmF3ZXItY2FudmFzJztcbmltcG9ydCBwZW5zIGZyb20gJy4vcGVucyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuXG5jb25zdCBEcmF3ZXIgPSBEcmF3ZXJTdmc7XG5cbmV4cG9ydCB7XG5cdERyYXdlcixcblx0RHJhd2VyU3ZnLFxuXHREcmF3ZXJDYW52YXMsXG5cdE1lbnUsXG5cdHBlbnMsXG59OyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0zLTEhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0zLTMhLi9pbmRleC5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCBvZmZzZXQgZnJvbSAnLi9PZmZzZXQnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQuanMnO1xuXG5mdW5jdGlvbiBEcmFnKGxpcywgYWltKSB7XG4gICAgRXZlbnQuY2FsbCh0aGlzKTtcbiAgICBhaW0gPSBhaW0gfHwgbGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7IGVuZDogb2Zmc2V0KGFpbSkgfTtcbiAgICB0aGlzLnNldEJlZ2luID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICB0aGlzLnN0YXRlLmJlZ2luID0geyBsZWZ0OiB4LCB0b3A6IHkgfTtcbiAgICB9O1xuICAgIHRoaXMud2FycEV2ZW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgICAgICAgICAgICAgZS5wYWdlWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgZS5wYWdlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUucGFnZVggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgZS5wYWdlWSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0TW92ZWQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIGxldCB7IGxlZnQsIHRvcCB9ID0gdGhpcy5zdGF0ZS5iZWdpbjtcbiAgICAgICAgbGVmdCA9IHggLSBsZWZ0O1xuICAgICAgICB0b3AgPSB5IC0gdG9wO1xuICAgICAgICBsZWZ0ICs9IHRoaXMuc3RhdGUuZW5kLmxlZnQgfHwgMDtcbiAgICAgICAgdG9wICs9IHRoaXMuc3RhdGUuZW5kLnRvcCB8fCAwO1xuICAgICAgICB0aGlzLnN0YXRlLm1vdmUgPSB7IGxlZnQsIHRvcCB9O1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5tb3ZlO1xuICAgIH07XG4gICAgdGhpcy5iZWdpbiA9IChlKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5iZWdpbikge1xuICAgICAgICAgICAgZSA9IHRoaXMud2FycEV2ZW50KGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRCZWdpbihlLnBhZ2VYLCBlLnBhZ2VZKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcImJlZ2luXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZWdpbikge1xuICAgICAgICAgICAgZSA9IHRoaXMud2FycEV2ZW50KGUpO1xuICAgICAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmdldE1vdmVkKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgICAgYWltLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgYWltLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5lbmQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iZWdpbikge1xuICAgICAgICAgICAgZSA9IHRoaXMud2FycEV2ZW50KGUpO1xuICAgICAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmdldE1vdmVkKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5iZWdpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbmQgPSB7IGxlZnQsIHRvcCB9O1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiZW5kXCIsIHsgbGVmdCwgdG9wIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vdmVUbyA9ICh7bGVmdCwgdG9wfSkgPT4ge1xuICAgICAgICBhaW0uc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgIGFpbS5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIHRoaXMuc3RhdGUuZW5kID0geyBsZWZ0LCB0b3AgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgbGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmVuZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuZW5kKTtcbiAgICAgICAgbGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuYmVnaW4pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmVuZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWc7IiwiZnVuY3Rpb24gRXZlbnQoKXtcbiAgICB2YXIgX2xpc3RlbmVycz0ge31cbiAgICAvLyDmt7vliqBcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgICBpZiAodHlwZW9mIF9saXN0ZW5lcnNbdHlwZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIF9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9saXN0ZW5lcnNbdHlwZV0ucHVzaChmbik7XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyDop6blj5FcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbih0eXBlLGRhdGEpIHtcbiAgICAgICAgdmFyIGFycmF5RXZlbnQgPSBfbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICBpZiAoYXJyYXlFdmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTAsIGxlbmd0aD1hcnJheUV2ZW50Lmxlbmd0aDsgaTxsZW5ndGg7IGkrPTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFycmF5RXZlbnRbaV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBhcnJheUV2ZW50W2ldKGRhdGEpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyDliKDpmaRcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgICB2YXIgYXJyYXlFdmVudCA9IF9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBhcnJheUV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIOa4hemZpOW9k+WJjXR5cGXnsbvlnovkuovku7bkuIvlr7nlupRmbuaWueazlVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPWFycmF5RXZlbnQubGVuZ3RoOyBpPGxlbmd0aDsgaSs9MSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUV2ZW50W2ldID09PSBmbil7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbGlzdGVuZXJzW3R5cGVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBmbj09PVwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzku4Xku4Xlj4LmlbB0eXBl77yM5YiZ5omA5pyJdHlwZeexu+Wei+S6i+S7tua4hemZpFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBfbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsImZ1bmN0aW9uIG9mZnNldCh3aG8pIHtcbiAgICB2YXIgYm94ID0gd2hvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQsXG4gICAgICAgIHJpZ2h0OiBib3gucmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm94LmJvdHRvbVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9mZnNldDsiLCIvLyDnrJTov7nkvJjljJZcbnZhciBfRklSRV9PTl8gPSB0cnVlO1xuZnVuY3Rpb24gT3B0aW0oKSB7XG4gICAgdmFyIGZpbHRlcl9wYXRoX19kZXRhbF9rID0gMC4xOy8vIOi/h+a7pOeahOaWnOeOh+W3rlxuICAgIHRoaXMuZmlsdGVyID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICBpZighX0ZJUkVfT05fKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlj4LmlbDlv4XpobvmmK/mlbDnu4TvvJpcIiwgYXJyKTtcbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpc3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycikpO1xuICAgICAgICAvLyB2YXIgc3RhcnRMZW4gPSBsaXN0Lmxlbmd0aCwgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PWZpbHRlciBiZWZyb2Ugc3RhcnQgbGVuOlwiLCBzdGFydExlbik7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7aT1pKzIpIHtcbiAgICAgICAgICAgIGlmKGk8MykgY29udGludWU7XG4gICAgICAgICAgICB2YXIgX2F4ID0gbGlzdFtpLTNdLCBfYXkgPSBsaXN0W2ktMl0sXG4gICAgICAgICAgICAgICAgX2J4ID0gbGlzdFtpLTFdLCBfYnkgPSBsaXN0W2ldO1xuICAgICAgICAgICAgaWYoX2F4PT09X2J4ICYmIF9heT09PV9ieSl7XG4gICAgICAgICAgICAgICAgdmFyIGRlbExpc3QgPSBsaXN0LnNwbGljZShpLTEsMik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXIgZGVsTGlzdDpcIiwgZGVsTGlzdCk7XG4gICAgICAgICAgICAgICAgaT1pLTI7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpPDUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgX2F4ID0gbGlzdFtpLTVdLCBfYXkgPSBsaXN0W2ktNF0sXG4gICAgICAgICAgICBfYnggPSBsaXN0W2ktM10sIF9ieSA9IGxpc3RbaS0yXTtcbiAgICAgICAgICAgIHZhciBfY3ggPSBsaXN0W2ktMV0sIF9jeSA9IGxpc3RbaV07XG4gICAgICAgICAgICB2YXIgX2NiayA9IChfY3ggLSBfYngpID8gKF9jeSAtIF9ieSkgLyAoX2N4IC0gX2J4KSA6IDAsXG4gICAgICAgICAgICAgICAgX2JhayA9IChfYnggLSBfYXgpID8gKF9ieSAtIF9heSkgLyAoX2J4IC0gX2F4KSA6IDA7XG4gICAgICAgICAgICBpZihNYXRoLmFicyhfY2JrIC0gX2JhaykgPD0gZmlsdGVyX3BhdGhfX2RldGFsX2spe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX2N4IDpcIiwgX2N4LCBcIl9jeSA6XCIsIF9jeSwgXCJfYnggOlwiLCBfYngsIFwiX2J5IDpcIiwgX2J5LCBcIl9heCA6XCIsIF9heCwgXCJfYXkgOlwiLCBfYXkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX2NiayA6XCIsIF9jYmssIFwiX2JhayA6XCIsIF9iYWssIFwiIGRldGFsIGs6XCIsIE1hdGguYWJzKF9jYmsgLSBfYmFrKSk7XG4gICAgICAgICAgICAgICAgdmFyIGRlbExpc3QgPSBsaXN0LnNwbGljZShpLTMsMik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXIgZGVsTGlzdDpcIiwgZGVsTGlzdCk7XG4gICAgICAgICAgICAgICAgaT1pLTI7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT09ZmlsdGVyIGFmdGVyIHNwZW5kIHRpbWU6XCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLXN0YXJ0VGltZSwgXCJkZWwgbGVuOlwiLCBzdGFydExlbiAtIGxpc3QubGVuZ3RoLCBcIiBsaXN0OlwiLCBsaXN0KTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3B0aW07IiwiZnVuY3Rpb24gY2lyY2xlUGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuXHR0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuXHRcdHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcblx0fTtcblx0dGhpcy5lbmQgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuXHRcdHJlc29sdmUoW2J4LCBieSwgZXgsIGV5XSk7XG5cdH07XG59XG5jaXJjbGVQZW4ubW92ZUJlZ2luID0gdHJ1ZTtcbmNpcmNsZVBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcblx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoXCLmmoLmnKrlrp7njrDnlLtjYW52YXPnmoTlnIblvaJcIik7XG59O1xuY2lyY2xlUGVuLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuXHRpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuXHRcdHZhciB4ID0gZGF0YVswXTtcblx0XHR2YXIgeSA9IGRhdGFbMV07XG5cdFx0dmFyIGEgPSBNYXRoLnBvdyhNYXRoLmFicyhkYXRhWzJdIC0gZGF0YVswXSksMik7XG5cdFx0dmFyIGIgPSBNYXRoLnBvdyhNYXRoLmFicygoZGF0YVszXSAtIGRhdGFbMV0pKSwyKTtcblx0XHR2YXIgciA9IE1hdGguc3FydChhICsgYik7XG5cdFx0cmV0dXJuIGA8Y2lyY2xlIGN4PVwiJHt4fVwiIGN5PVwiJHt5fVwiIHI9XCIke3J9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiLz5gO1xuXHR9XG5cdHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2lyY2xlUGVuOyIsIi8vIGltcG9ydCBwZW5jaWwgZnJvbSAnLi9kZWZhdWx0UGVuLmN1cic7XG5cblxuaW1wb3J0IE9wdGltIGZyb20gJy4uL2xpYnMvT3B0aW0uanMnO1xuY29uc3Qgb3B0aW1PYmogPSBuZXcgT3B0aW0oKTtcblxuLyoqXG4gKiDnlLvnrJTmnoTpgKDlh73mlbBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbmRlciBcYua4suafk+W9k+WJjeS9nOeUu+aVsOaNrlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZSDkvZznlLvlrozmiJDvvIzmj5DkuqTmnKzmrKHkvZznlLvmlbDmja5cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdFBlbihyZW5kZXIsIHJlc29sdmUpIHtcbiAgICB2YXIgbGkgPSBbXTtcbiAgICB0aGlzLmJlZ2luID0gZnVuY3Rpb24oYngsIGJ5KSB7XG4gICAgICAgIGxpLnB1c2goYngpO1xuICAgICAgICBsaS5wdXNoKGJ5KTtcbiAgICB9O1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIGxpLnB1c2goZXgpO1xuICAgICAgICBsaS5wdXNoKGV5KTtcbiAgICAgICAgcmVuZGVyKGxpKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgbGkucHVzaChleCk7XG4gICAgICAgIGxpLnB1c2goZXkpO1xuICAgICAgICBsaSA9IG9wdGltT2JqLmZpbHRlcihsaSk7XG4gICAgICAgIHJlc29sdmUobGkpO1xuICAgIH07XG59XG4vLyDpvKDmoIdtb3Zl5pe26Kem5Y+RdGhpcy5iZWdpblxuZGVmYXVsdFBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xuLy8g6byg5qCHb3V05pe26Kem5Y+RdGhpcy5lbmRcbmRlZmF1bHRQZW4ub3V0RW5kID0gdHJ1ZTtcbi8vIGRlZmF1bHRQZW4uY3Vyc29yID0gJ3VybCgnICsgcGVuY2lsICsgJykscG9pbnRlcic7XG5kZWZhdWx0UGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjdHggPSBkcmF3ZXIuY3R4O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGF0YVswXSwgZGF0YVsxXSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhkYXRhW2ldLCBkYXRhW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbn07XG5kZWZhdWx0UGVuLnJlbmRlclN2ZyA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGlmIChpICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBpID09IDAgPyBcIk1cIiA6IFwiTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aCArPSBpdGVtICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8cGF0aCBkPVwiJHtwYXRofVwiIHN0eWxlPVwiJHtkcmF3ZXIuZ2V0U3R5bGUoKX1cIi8+YDtcbiAgICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRQZW47IiwiZnVuY3Rpb24gZWxsaXBzZVBlbihyZW5kZXIsIHJlc29sdmUpIHtcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICByZW5kZXIoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbiAgICB0aGlzLmVuZCA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlc29sdmUoW2J4LCBieSwgZXgsIGV5XSk7XG4gICAgfTtcbn1cbmVsbGlwc2VQZW4ubW92ZUJlZ2luID0gdHJ1ZTtcbmVsbGlwc2VQZW4ucmVuZGVyID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIHZhciB4ID0gKGRhdGFbMF0gKyBkYXRhWzJdKSAvIDI7XG4gICAgICAgIHZhciB5ID0gKGRhdGFbMV0gKyBkYXRhWzNdKSAvIDI7XG4gICAgICAgIHZhciBhID0gKGRhdGFbMl0gLSBkYXRhWzBdKSAvIDI7XG4gICAgICAgIHZhciBiID0gKGRhdGFbM10gLSBkYXRhWzFdKSAvIDI7XG5cbiAgICAgICAgdmFyIHIgPSAoYSA+IGIpID8gYSA6IGI7XG4gICAgICAgIHZhciByYXRpb1ggPSBhIC8gcjtcbiAgICAgICAgdmFyIHJhdGlvWSA9IGIgLyByO1xuICAgICAgICBjdHguc2NhbGUocmF0aW9YLCByYXRpb1kpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeCAvIHJhdGlvWCwgeSAvIHJhdGlvWSwgciwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbmVsbGlwc2VQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdmFyIHggPSAoZGF0YVswXSArIGRhdGFbMl0pIC8gMjtcbiAgICAgICAgdmFyIHkgPSAoZGF0YVsxXSArIGRhdGFbM10pIC8gMjtcbiAgICAgICAgdmFyIGEgPSBNYXRoLmFicygoZGF0YVsyXSAtIGRhdGFbMF0pIC8gMik7XG4gICAgICAgIHZhciBiID0gTWF0aC5hYnMoKGRhdGFbM10gLSBkYXRhWzFdKSAvIDIpO1xuXG4gICAgICAgIHJldHVybiBgPGVsbGlwc2UgY3g9XCIke3h9XCIgY3k9XCIke3l9XCIgcng9XCIke2F9XCIgcnk9XCIke2J9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiLz5gO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsbGlwc2VQZW47IiwiLy8gaW1wb3J0IHVybCBmcm9tICcuL2VyYXNlci5wbmcnO1xuXG5mdW5jdGlvbiBjb3VudChkb20sIG4pIHtcbiAgICBuID0gbiB8fCAwO1xuICAgIGlmIChkb20ucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICByZXR1cm4gY291bnQoZG9tLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIG4gKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG4gKyBcIlwiO1xufVxuXG5mdW5jdGlvbiBlcmFzZXIocmVuZGVyLCByZXNvbHZlLCBhcHBlbmQsIGRyYXdlcikge1xuICAgIGlmIChkcmF3ZXIuY2FudmFzLnRhZ05hbWUgPT0gXCJzdmdcIikge1xuICAgICAgICBsZXQgbGkgPSBbXTtcbiAgICAgICAgY29uc3QgaG92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT0gZHJhd2VyLmNhbnZhcyAmJiBldmVudC53aGljaCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbGkucHVzaChjb3VudChldmVudC50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICByZW5kZXIobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBkcmF3ZXIuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgbGkucHVzaChjb3VudChldmVudC50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICByZW5kZXIobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkcmF3ZXIuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaG92ZXIpO1xuICAgICAgICBkcmF3ZXIuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGljayk7XG4gICAgICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXksIHdoYXQpIHtcbiAgICAgICAgICAgIHJlc29sdmUobGkubGVuZ3RoID4gMCA/IGxpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51bm1vdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkcmF3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaG92ZXIpO1xuICAgICAgICAgICAgZHJhd2VyLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2spO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaSA9IFtdO1xuICAgICAgICB0aGlzLmJlZ2luID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgICAgIGxpLnB1c2goYngpO1xuICAgICAgICAgICAgbGkucHVzaChieSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgICAgICBsaS5wdXNoKGV4KTtcbiAgICAgICAgICAgIGxpLnB1c2goZXkpO1xuICAgICAgICAgICAgcmVuZGVyKGxpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmQgPSBmdW5jdGlvbihieCwgYnksIGV4LCBleSkge1xuICAgICAgICAgICAgbGkucHVzaChleCk7XG4gICAgICAgICAgICBsaS5wdXNoKGV5KTtcbiAgICAgICAgICAgIHJlc29sdmUobGkpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIGVyYXNlci5jdXJzb3IgPSAndXJsKCcgKyB1cmwgKyAnKSxwb2ludGVyJztcbmVyYXNlci5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkYXRhW2ldLCBkYXRhW2kgKyAxXSwgNSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5lcmFzZXIucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIHZhciBzdmcgPSBkcmF3ZXIuY2FudmFzLmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICBpZiAoc3ZnKSBzdmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcmFzZXI7IiwiaW1wb3J0IGRlZmF1bHRQZW4gZnJvbSAnLi9kZWZhdWx0UGVuLmpzJztcbmltcG9ydCBsaW5lUGVuIGZyb20gJy4vbGluZVBlbi5qcyc7XG5pbXBvcnQgZWxsaXBzZVBlbiBmcm9tICcuL2VsbGlwc2VQZW4uanMnO1xuaW1wb3J0IGNpcmNsZVBlbiBmcm9tICcuL2NpcmNsZVBlbi5qcyc7XG5pbXBvcnQgcmVjdFBlbiBmcm9tICcuL3JlY3RQZW4uanMnO1xuaW1wb3J0IHRleHRQZW4gZnJvbSAnLi90ZXh0UGVuLmpzJztcbmltcG9ydCBlcmFzZXIgZnJvbSAnLi9lcmFzZXIuanMnO1xuXG52YXIgbWFwID0ge1xuICAgIGRlZmF1bHRQZW4sXG4gICAgbGluZVBlbixcbiAgICBlbGxpcHNlUGVuLFxuICAgIGNpcmNsZVBlbixcbiAgICByZWN0UGVuLFxuICAgIHRleHRQZW4sXG4gICAgZXJhc2VyLFxuXG59O1xuXG5mdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIG1hcFtrZXldIHx8IGRlZmF1bHRQZW47XG59O1xuXG5mdW5jdGlvbiBrZXkocGVuKSB7XG4gICAgaWYgKHR5cGVvZiBwZW4gPT0gXCJvYmplY3RcIilcbiAgICAgICAgcGVuID0gcGVuLmNvbnN0dWN0b3I7XG4gICAgaWYgKHR5cGVvZiBwZW4gPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBwZW4ucmVuZGVyID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmb3IgKHZhciBrIGluIG1hcCkge1xuICAgICAgICAgICAgdmFyIHYgPSBtYXBba107XG4gICAgICAgICAgICBpZiAocGVuID09IHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHNldChrZXksIHBlbikge1xuICAgIGlmICh0eXBlb2YgcGVuID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcGVuLnJlbmRlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbWFwW2tleV0gPSBwZW47XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdmFyIGtzID0gW107XG4gICAgZm9yICh2YXIgayBpbiBtYXApIHtcbiAgICAgICAga3MucHVzaChrKTtcbiAgICB9XG4gICAgcmV0dXJuIGtzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0LFxuICAgIGtleSxcbiAgICBzZXQsXG4gICAga2V5c1xufTsiLCJmdW5jdGlvbiBsaW5lUGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxubGluZVBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xubGluZVBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbM10pO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbmxpbmVQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIGA8bGluZSB4MT1cIiR7ZGF0YVswXX1cIiB5MT1cIiR7ZGF0YVsxXX1cIiB4Mj1cIiR7ZGF0YVsyXX1cIiB5Mj1cIiR7ZGF0YVszXX1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGluZVBlbjsiLCJmdW5jdGlvbiByZWN0UGVuKHJlbmRlciwgcmVzb2x2ZSkge1xuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKGJ4LCBieSwgZXgsIGV5KSB7XG4gICAgICAgIHJlbmRlcihbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgcmVzb2x2ZShbYngsIGJ5LCBleCwgZXldKTtcbiAgICB9O1xufVxucmVjdFBlbi5tb3ZlQmVnaW4gPSB0cnVlO1xucmVjdFBlbi5yZW5kZXIgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBsZXQgY3R4ID0gZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbMV0pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMl0sIGRhdGFbM10pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMF0sIGRhdGFbM10pO1xuICAgICAgICBjdHgubGluZVRvKGRhdGFbMF0sIGRhdGFbMV0pO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxufTtcbnJlY3RQZW4ucmVuZGVyU3ZnID0gZnVuY3Rpb24oZGF0YSwgZHJhd2VyKSB7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdmFyIHggPSBNYXRoLm1pbihkYXRhWzBdLCBkYXRhWzJdKTtcbiAgICAgICAgdmFyIHkgPSBNYXRoLm1pbihkYXRhWzFdLCBkYXRhWzNdKTtcbiAgICAgICAgdmFyIHdpZHRoID0gTWF0aC5hYnMoZGF0YVsyXSAtIGRhdGFbMF0pO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5hYnMoZGF0YVszXSAtIGRhdGFbMV0pO1xuXG4gICAgICAgIHJldHVybiBgPHJlY3QgeD1cIiR7eH1cIiB5PVwiJHt5fVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBzdHlsZT1cIiR7ZHJhd2VyLmdldFN0eWxlKCl9XCIvPmA7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCByZWN0UGVuOyIsImZ1bmN0aW9uIHRleHRQZW4ocmVuZGVyLCByZXNvbHZlLCBhcHBlbmQpIHtcbiAgICB2YXIgaW5wdXQsIGRvbSwgdG1wO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuYmVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodG1wKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRtcCk7XG4gICAgICAgICAgICB0bXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKGRvbSkgdHJ5IHsgZG9tLnJlbW92ZUNoaWxkKGlucHV0KTsgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICAgIHRoaXMuZW5kID0gZnVuY3Rpb24oYngsIGJ5LCBleCwgZXkpIHtcbiAgICAgICAgdG1wID0gW2J4LCBieV1cbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSk9PiB7XG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbMl0gPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgIHJlbmRlcih0bXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9tID0gYXBwZW5kKGlucHV0LCBleCwgZXkpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH07XG59XG50ZXh0UGVuLnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEsIGRyYXdlcikge1xuICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID49IDQpIHtcbiAgICAgICAgbGV0IGN0eCA9IGRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5mb250ID0gdGV4dFBlbi5mb250O1xuICAgICAgICB2YXIgdGV4dCA9IGRhdGFbMl0gfHwgXCJcIjtcbiAgICAgICAgdmFyIHggPSBkYXRhWzBdO1xuICAgICAgICB2YXIgeSA9IGRhdGFbMV07XG4gICAgICAgIHZhciBzaXplID0gcGFyc2VJbnQodGV4dFBlbi5mb250KTtcbiAgICAgICAgdGV4dC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChpdGVtLCB4LCB5ICsgaSAqIHNpemUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudGV4dFBlbi5yZW5kZXJTdmcgPSBmdW5jdGlvbihkYXRhLCBkcmF3ZXIpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YXIgeCA9IGRhdGFbMF07XG4gICAgICAgIHZhciB5ID0gZGF0YVsxXTtcbiAgICAgICAgdmFyIHNpemUgPSBwYXJzZUludChkcmF3ZXIucGVuU3R5bGVbJ2ZvbnQtc2l6ZSddKTtcbiAgICAgICAgdmFyIHRleHRzID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCB0ZXh0IG9mIChkYXRhWzJdfHwnJykuc3BsaXQoJ1xcbicpKXtcbiAgICAgICAgICAgIHRleHRzICs9IGA8dGV4dCB4PVwiJHt4fVwiIHk9XCIke3l9XCIgc3R5bGU9XCIke2RyYXdlci5nZXRTdHlsZSgpfVwiPiR7dGV4dH08L3RleHQ+YFxuICAgICAgICAgICAgeSArPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPGc+JHt0ZXh0c308L2c+YDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0UGVuOyJdLCJzb3VyY2VSb290IjoiIn0=