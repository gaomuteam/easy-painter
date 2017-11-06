(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("paint", [], factory);
	else if(typeof exports === 'object')
		exports["paint"] = factory();
	else
		root["paint"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _defaultPen = __webpack_require__(10);

var _defaultPen2 = _interopRequireDefault(_defaultPen);

var _linePen = __webpack_require__(12);

var _linePen2 = _interopRequireDefault(_linePen);

var _ellipsePen = __webpack_require__(13);

var _ellipsePen2 = _interopRequireDefault(_ellipsePen);

var _rectPen = __webpack_require__(14);

var _rectPen2 = _interopRequireDefault(_rectPen);

var _textPen = __webpack_require__(15);

var _textPen2 = _interopRequireDefault(_textPen);

var _eraser = __webpack_require__(16);

var _eraser2 = _interopRequireDefault(_eraser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = {
    defaultPen: _defaultPen2.default,
    linePen: _linePen2.default,
    ellipsePen: _ellipsePen2.default,
    rectPen: _rectPen2.default,
    textPen: _textPen2.default,
    eraser: _eraser2.default
};

function get(key) {
    return map[key] || _defaultPen2.default;
};

function key(pen) {
    if ((typeof pen === 'undefined' ? 'undefined' : _typeof(pen)) == "object") pen = pen.constuctor;
    if (typeof pen == "function" && typeof pen.render == "function") {
        for (var k in map) {
            var v = map[k];
            if (pen == v) {
                return k;
            }
        }
    }
};

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

exports.default = {
    get: get,
    key: key,
    set: set,
    keys: keys
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Event() {
    var _listeners = {};
    // 添加
    this.addEventListener = function (type, fn) {
        if (typeof _listeners[type] === "undefined") {
            _listeners[type] = [];
        }
        if (typeof fn === "function") {
            _listeners[type].push(fn);
        }
        return this;
    };
    // 触发
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
    };
    // 删除
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

exports.default = Event;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function offset(who) {
    var box = who.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft,
        right: box.right,
        bottom: box.bottom
    };
}

exports.default = offset;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pens = exports.Menu = exports.Drawer = undefined;

__webpack_require__(4);

var _drawer = __webpack_require__(9);

var _drawer2 = _interopRequireDefault(_drawer);

var _pens = __webpack_require__(0);

var _pens2 = _interopRequireDefault(_pens);

var _Menu = __webpack_require__(18);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Drawer = _drawer2.default;
exports.Menu = _Menu2.default;
exports.pens = _pens2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--0-oneOf-3-1!../node_modules/_postcss-loader@2.0.8@postcss-loader/lib/index.js??postcss!../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js??ref--0-oneOf-3-3!./index.less", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.7@css-loader/index.js??ref--0-oneOf-3-1!../node_modules/_postcss-loader@2.0.8@postcss-loader/lib/index.js??postcss!../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js??ref--0-oneOf-3-3!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Created Date: 2017-10-16 09:27:09\n * Author: inu1255\n * E-Mail: 929909260@qq.com\n */\n.input-style {\n  width: 100%;\n  height: 38px;\n  padding: 6px 12px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 3px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.input-style:focus {\n  border-color: #1F90E6;\n  -webkit-box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.textarea-style {\n  line-height: 1.42857143;\n  width: 100%;\n  padding: 6px 12px;\n  border-radius: 3px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.textarea-style:focus {\n  border-color: #1F90E6;\n  -webkit-box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.select-style {\n  width: 100%;\n  height: 33px;\n  padding: 5px 12px;\n  background-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 3px;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.select-style:focus {\n  border-color: #1F90E6;\n  -webkit-box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.hide {\n  opacity: 0;\n  pointer-events: none;\n}\n.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n.painter-menu {\n  position: absolute;\n  background: #eee;\n  border: 1px solid #ccc;\n  max-width: 50%;\n}\n.painter-menu > .painter-menu__btn {\n  float: left;\n  margin: 5px 7px;\n  padding: 2px 5px;\n  color: #fff;\n  background: #1DA57A;\n  cursor: pointer;\n}\n.painter-menu > .painter-menu__btn:hover {\n  background: #048c61;\n}\n.painter-menu > .painter-menu__btn.selected {\n  background: #048c61;\n}\n.painter-menu > .painter-menu__btn:active,\n.painter-menu > .painter-menu__btn.active {\n  background: #007348;\n  -webkit-box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n.painter-menu > .painter-menu__btn:disabled {\n  background: #36be93;\n  opacity: .65;\n  cursor: not-allowed;\n}\n.painter-menu > .painter-menu__move {\n  margin: 5px 7px;\n  width: 24px;\n  height: 24px;\n  float: right;\n  border: 1px solid #ccc;\n  cursor: move;\n}\n.painter-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.painter-canvas__item {\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Event = __webpack_require__(1);

var _Event2 = _interopRequireDefault(_Event);

var _pens = __webpack_require__(0);

var _pens2 = _interopRequireDefault(_pens);

var _Offset = __webpack_require__(2);

var _Offset2 = _interopRequireDefault(_Offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPen = _pens2.default.get();

function newConfig(config) {
    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) != "object") config = {};
    return {
        background: config.background,
        history: config.history || [],
        redo: config.redo || [],
        penClass: config.penClass || defaultPen,
        initStyle: config.initStyle || {
            fillStyle: "red",
            strokeStyle: "red"
        }
    };
}

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

    if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) != "object") return this;
    styles.forEach(function (k) {
        if (style[k] != null) _this2[k] = style[k];else if (_this2.initStyle[k]) _this2[k] = _this2.initStyle[k];
    });
    return this;
};

function paintItem(ctx, item, r) {
    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) != "object") return;
    var pen = _pens2.default.get(item.key);
    if (pen) {
        ctx.save();
        pen.render(ctx.setStyle(item.style), warpData(item.data, r));
        ctx.restore();
    }
}

function normalizeEvent(e, r) {
    if (e instanceof TouchEvent) {
        var off = (0, _Offset2.default)(e.target);
        var offsetX = Math.floor((e.touches[0].pageX - off.top) / r.width * 10000);
        var offsetY = Math.floor((e.touches[0].pageY - off.left) / r.height * 10000);
        return { offsetX: offsetX, offsetY: offsetY };
    } else {
        var offsetX = Math.floor(e.offsetX / r.width * 10000);
        var offsetY = Math.floor(e.offsetY / r.height * 10000);
        return { offsetX: offsetX, offsetY: offsetY };
    }
}

function warpData(data, r, i) {
    if (data instanceof Array) {
        var list = [];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            list.push(warpData(item, r, i));
        }
        return list;
    }
    if (typeof data === "number") {
        return (i & 1 ? r.height : r.width) * data / 10000;
    }
    return data;
}

function drawer(dom, config) {
    var _this3 = this;

    _Event2.default.call(this);
    var canvas = document.createElement('canvas');
    canvas.className = "painter-canvas";
    var parent = dom;
    if (dom instanceof HTMLImageElement) {
        parent = document.createElement("div");
        Object.assign(parent.style, dom.style);
        dom.parentElement.insertBefore(parent, dom);
        dom.parentElement.removeChild(dom);
        parent.appendChild(dom);
    }
    var ctx = canvas.getContext("2d");
    // 读取配置
    config = newConfig(config);
    ctx.initStyle = {};
    ctx.setStyle(config.initStyle);
    ctx.initStyle = ctx.getStyle();
    // 画笔实例
    var pen;
    // 鼠标按下位置
    var beginPoint = false;
    // 鼠标out位置
    var outPoint = false;

    function getPen() {
        return pen;
    }

    var mousedown = function mousedown(event) {
        var e = normalizeEvent(event, canvas);
        var ppap = getPen();
        if (!beginPoint) beginPoint = { x: e.offsetX, y: e.offsetY };
        if (typeof ppap.begin == "function") {
            ppap.begin(beginPoint.x, beginPoint.y);
        }
        event.preventDefault();
    };

    var mousemove = function mousemove(event) {
        var e = normalizeEvent(event, canvas);
        var ppap = getPen();
        // 在画图状态下，当鼠标按下时move事件也可以设置begin坐标
        if (!beginPoint && event.buttons == 1 && config.penClass.moveBegin) beginPoint = { x: e.offsetX, y: e.offsetY, moveBegin: true };
        if (!beginPoint) return;
        if (typeof ppap.move == "function") {
            ppap.move(beginPoint.x, beginPoint.y, e.offsetX, e.offsetY);
        }
        event.preventDefault();
    };

    var end = function end(endPoint, callBy) {
        if (!beginPoint) return;
        var ppap = getPen();
        if (typeof ppap.end == "function") {
            ppap.end(beginPoint.x, beginPoint.y, endPoint.x, endPoint.y, callBy);
        }
        beginPoint = false;
    };

    function mouseup(event) {
        var e = normalizeEvent(event, canvas);
        end({ x: e.offsetX, y: e.offsetY });
        event.preventDefault();
    }

    function mouseover(event) {
        if (config.penClass.outEnd) {
            // 在out时已经end了
        } else if (event.buttons != 1) {
            end(outPoint, "mouseover");
        }
        outPoint = false;
    }

    function mouseout(event) {
        var e = normalizeEvent(event, canvas);
        outPoint = { x: e.offsetX, y: e.offsetY };
        if (config.penClass.outEnd) {
            end(outPoint, "mouseout");
        } else if (event.buttons == 1) {
            mousemove(e);
        }
    }
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
            if (x != null) div.style.left = warpData(x, canvas) + "px";
            if (y != null) div.style.top = warpData(y, canvas, 1) + "px";
            parent.appendChild(div);
        }
        return parent;
    };
    var createNewPen = function createNewPen() {
        // 设置画笔鼠标指针样式
        canvas.style.cursor = config.penClass.cursor || 'auto';
        pen = new config.penClass(_this3.setData, penSuccess, append);
    };
    // 画笔绘制结束回调
    var penSuccess = function penSuccess(data) {
        createNewPen();
        if (typeof data != "undefined") {
            config.history.push({ key: _pens2.default.key(config.penClass), data: data, style: ctx.getStyle() });
            config.penData = undefined;
            config.redo.length = 0;
            _this3.update();
        }
    };

    this.setPen = function (penClass) {
        // 模拟mouseup
        end(outPoint, "setPen");
        // 设置为默认画笔
        if (typeof penClass == "undefined") penClass = defaultPen;
        var tmp = _pens2.default.get(penClass);
        if (tmp) {
            // 清除没有完成的画笔数据
            if (config.penClass != tmp) {
                config.penClass = tmp;
                config.penData = undefined;
            }
            // 创建画笔
            createNewPen();
        } else {
            console.log("不能识别的画笔");
            console.log(penClass);
        }
    };
    this.update = function () {
        this.resize();
        // 清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.dispatchEvent('beforeupdate', ctx);
        // 画背景
        if (config.background) ctx.drawImage(config.background, 0, 0, canvas.width, canvas.height);
        // 画历史数据
        config.history.forEach(function (item) {
            paintItem(ctx, item, canvas);
        });
        // 画当前画笔数据
        if (typeof config.penData != "undefined") {
            ctx.save();
            config.penClass.render(ctx, warpData(config.penData, canvas));
            ctx.restore();
        }
        this.dispatchEvent('update', ctx);
    };
    this.setData = function (data) {
        if (typeof data == "undefined") return;
        config.penData = data;
        _this3.update();
    };
    this.stringify = function () {
        return JSON.stringify(config.history);
    };
    this.parse = function (data) {
        if (typeof data === "string") {
            config.history = JSON.parse(data);
        } else if (data instanceof Array) {
            config.history = data;
        } else {
            return;
        }
        this.update();
    };
    this.undo = function (test) {
        if (config.history.length > 0) {
            if (test) return true;
            config.redo.push(config.history.pop());
            this.update();
        }
    };
    this.redo = function (test) {
        if (config.redo.length > 0) {
            if (test) return true;
            config.history.push(config.redo.pop());
            this.update();
        }
    };
    this.setColor = function (color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
    };
    this.getCanvas = function () {
        return canvas;
    };
    this.resize = function () {
        var modify = false;
        if (dom.offsetWidth != canvas.width) {
            modify = true;
            canvas.width = dom.offsetWidth;
        }
        if (dom.offsetHeight != canvas.height) {
            modify = true;
            canvas.height = dom.offsetHeight;
        }
        if (modify) {
            ctx.setStyle({});
        }
    };
    this.toDataURL = function () {
        return canvas.toDataURL();
    };
    this.getCtx = function () {
        return ctx;
    };
    this.offset = function () {
        return (0, _Offset2.default)(canvas);
    };
    this.disable = function () {
        canvas.style.pointerEvents = "none";
    };
    this.enable = function () {
        canvas.style.pointerEvents = "auto";
    };
    this.scale = function (n) {
        dom.style.transformOrigin = "50% 0 0";
        dom.style.transform = 'scale(' + n + ')'; // translate(${})`;
        this.update();
    };
    createNewPen();

    parent.appendChild(canvas);
    if (getComputedStyle(parent).position === "static") {
        parent.style.position = "relative";
    }
    this.resize();
}

exports.default = drawer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaultPen = __webpack_require__(11);

var _defaultPen2 = _interopRequireDefault(_defaultPen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}
// 鼠标move时触发this.begin
defaultPen.moveBegin = true;
// 鼠标out时触发this.end
defaultPen.outEnd = true;
defaultPen.cursor = 'url(' + _defaultPen2.default + '),pointer';
defaultPen.render = function (ctx, data) {
    if (data instanceof Array && data.length > 0) {
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        for (var i = 2; i < data.length; i += 2) {
            ctx.lineTo(data[i], data[i + 1]);
        }
        ctx.stroke();
    }
};

exports.default = defaultPen;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRjE4NkRCRkVCN0JFMDExODBERUJDM0QxRjY2MzNCMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMjMwQTJEMUEwMDMxMUU2QkE1MkQ5NEE3QjkyQzAyRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMjMwQTJEMEEwMDMxMUU2QkE1MkQ5NEE3QjkyQzAyRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmRiMjkxMjItNDY1My00YjAyLWEzNmUtN2U4YjUwODFkZmFjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NWY1YzI3YjEtZTg2ZC0xMTc5LTkyZGUtZjI2ZDAxNGI3YWE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+u8AqPQAAASZQTFRFAAAABwcHCAgI1NTU1dXVwMDA1tbWT09PUVFRwsLC0tLS29vb8PDw9/f3SUlJsbGxwcHBVVVVVFRUPT096+vrFxcX7u7ura2t4uLiiYmJfHx8nJycHBwclpaW7Ozs5ubmKSkpWFhYZmZm5eXl+/v77e3tmJiYTExMnp6em5ub3NzczMzMLi4uJiYmS0tLqKio4ODgDw8PCwsLCgoKICAgpKSktra2Tk5OFhYWCQkJmZmZODg4EhISg4ODQkJCGBgYDg4OEBAQ09PT6urqISEh3d3dOzs7tbW1GhoaV1dXxMTEo6Ojvb29kJCQBQUFNjY20dHRPDw8X19faGhoeXl5w8PD+fn5DQ0NUFBQ0NDQW1tb+vr6c3NzRUVFHx8fbm5u2tra////AP/wNQAAAGJ0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAQVpKqAAABNUlEQVR42oTS5XLDMBAE4LXjuG0aZigzM1PKzMztvv9L1HbSSJacdn/YJ+m7G3nG4D8BR+4qL3+CKQA9r4XHpqATtcSPmgDLOez4Tqac1/tBEOA+FgadaqCwDqRmAkAv9uqLG2A+pIME6pvt7lUMWwPEsFudXVW9yxqWBjLuYxq/MW0VhLFETjYAjJACiAleHwsA01LAFzLwRZrhgS6oETM8wLgmjPPxNwn0m9CzWhSAIUM77zNRFIC2OuOB0Y2dbgHUGWFnK4KSBGjLos3dOcGoDOQZbj+fgc+8DGgZcn+rW5V9gLum6G/xyi0/oDXr6wcOFcBTbCdFP5BWQQT3Uj8wpILsUy4q+nEZUwHHMJdINz53kRqo/bn1lBkAmC1d5LzjlQoDgZP85vLH7VqMTYGcHwEGAC8r8nWFIZTXAAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function linePen(render, resolve) {
    this.move = function (bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function (bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
linePen.moveBegin = true;
linePen.render = function (ctx, data) {
    if (data && data.length === 4) {
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        ctx.lineTo(data[2], data[3]);
        ctx.stroke();
    }
};

exports.default = linePen;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function ellipsePen(render, resolve) {
    this.move = function (bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function (bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
ellipsePen.moveBegin = true;
ellipsePen.render = function (ctx, data) {
    if (data && data.length === 4) {
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

exports.default = ellipsePen;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function ellipsePen(render, resolve) {
    this.move = function (bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function (bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
ellipsePen.moveBegin = true;
ellipsePen.render = function (ctx, data) {
    if (data && data.length === 4) {
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        ctx.lineTo(data[2], data[1]);
        ctx.lineTo(data[2], data[3]);
        ctx.lineTo(data[0], data[3]);
        ctx.lineTo(data[0], data[1]);
        ctx.stroke();
    }
};

exports.default = ellipsePen;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function textPen(render, resolve, append) {
    this.move = function (bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function (bx, by, ex, ey) {
        var input = document.createElement("textarea");
        input.addEventListener("blur", function () {
            resolve([bx, by, ex, ey, input.value]);
            try {
                dom.removeChild(input);
            } catch (error) {}
        });
        input.addEventListener("keyup", function (e) {
            if (e.ctrlKey && e.keyCode == 13) {
                resolve([bx, by, ex, ey, input.value]);
                try {
                    dom.removeChild(input);
                } catch (error) {}
            } else {
                render([bx, by, ex, ey, input.value]);
            }
        });
        var dom = append(input, bx, by);
        input.focus();
    };
}
textPen.font = "16px serif";
textPen.render = function (ctx, data) {
    if (data && data.length >= 4) {
        ctx.beginPath();
        var bx = data[0],
            by = data[1],
            ex = data[2],
            ey = data[3];
        var xei = Math.atan((ey - by) / (ex - bx));
        var deg = 0.5;
        ctx.moveTo(bx, by);
        ctx.lineTo(ex, ey);
        if (ex > bx) {
            ctx.lineTo(ex - 10 * Math.cos(deg - xei), ey + 10 * Math.sin(deg - xei));
            ctx.lineTo(ex - 10 * Math.cos(deg + xei), ey - 10 * Math.sin(deg + xei));
        } else {
            ctx.lineTo(ex + 10 * Math.cos(deg - xei), ey - 10 * Math.sin(deg - xei));
            ctx.lineTo(ex + 10 * Math.cos(deg + xei), ey + 10 * Math.sin(deg + xei));
        }
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.fill();
        ctx.font = textPen.font;
        var text = data[4] || "";
        var x = data[2];
        var y = data[3];
        var size = parseInt(textPen.font);
        if (data[3] > data[1]) y += size;
        text.split("\n").forEach(function (item, i) {
            ctx.fillText(item, x, y + i * size);
        });
    }
};

exports.default = textPen;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eraser = __webpack_require__(17);

var _eraser2 = _interopRequireDefault(_eraser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eraser(render, resolve) {
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
eraser.cursor = 'url(' + _eraser2.default + '),pointer';
eraser.render = function (ctx, data) {
    if (data instanceof Array && data.length > 0) {
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

exports.default = eraser;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAI3LAACNywG5aPW3AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAADo0lEQVRYCcXWeahOaRzA8cslyxjZjbFdWS6Ff2zDxdiyk2wpW8wtS/lDylrzn5rRFIXsQvYl/lBkichSlJJkJ0s0lrKbhjHf79v76Nz33td7Ltf1q8895znnOc/yO8953puV9Z0jO2b/NalXH6/xIeYzJVatGy2dxX2sgoMptehBT9exB/m4ia0olUH0pKMb2IFaMLzmILYjXOO05KM3TdrRNqTOtgfXHNhO1EaJRx9avIUtSO08dNadE1/NbtQJF0vi2JdGbmMzamRo0MV5Da6PuhnqxrrdmVqmfROqx3oiKyuPelexF189iNk0cgX1UJzoQmWf24efivOgdctGHijD+Qu8ilyLc3qaSpPQDCtRrAmkDsCdMXqNYqw4Q60lGIrV+BmxItqZGdCXRBsemoHLaIo1qI+MER1AqPxfOIl5bE49U+8iNBOT0QBrk0cO8cJF+AT941VP1GrI3+NwT2gH9w1nPhEXcRDWSRvRDDhzG1gB94NM4YyXoxX8sbqEp3AjawEH4Sa1Do2QMcJn6MbiZvS5TLhP+HvwGL3wI3KQhx9guSV8HRdwGI1RKKIZcAE+x0wcwyoMQGpU4cIi+HtxBOfwEm0wAm+T5Z4cHej45HE9xxykjTncsTFnUBU+cBeDEKIiJ4vhXjEaFZCDIagEy23h4DxXZ/yG83BiTfApohkIF7M5cUMyE4fgmhiM8piPcdiPo/gHLjpn6xqynItfkueWO+EDfM7JrUGR+0TIgO8vhJlYjTvYCF/RDJSDC2sibNSJOPNRcKCWf0U/OCHrm8kpMKv5SERRGQj3PJqJWTiACbiH3XgPB+oXYBvO3v8NXP3O1nID5MCy9d0vusDBOJFCUVQGQiU785NzANNhFqrBaI1pqGCBcOZjUcYCMRxmwuMDLINZS4SjiROucgfozNzzXVCbYZhyX1UIF2oVfExecHGORDf4sz0Xr5GIuAOwsivfh214GKYmz52R33pXtMdSmHZnXBnvYFb2YB4+dc554n14NEyZCyakzmup4cM2YiYWwg3GDg1XvJkKz1t3DPKwC35Bb1Ag7DBELU58+CCcQbr4lxsn4Oy6oybsxBmew2AMhAsvHzuwAIU651qBcDBhIRW4kabgAP6Cr2QnfPd+ER2S5Uccve8aSBvRDNjQ52ae2oiZOAkH7SrPRUfY5iS4SH/HW3zTcOZ/wnXxDH/jD3g9Y0QzkLFymgq+61N4CAexAf5euPpLPTLtrIUG9D/ZlLcA+kExxQAAAABJRU5ErkJggg=="

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pens = __webpack_require__(0);

var _pens2 = _interopRequireDefault(_pens);

var _Drag = __webpack_require__(19);

var _Drag2 = _interopRequireDefault(_Drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.body || document.documentElement;

function Menu(drawer) {
    var menu = document.createElement("div");
    menu.className = "painter-menu";
    var offset = drawer.offset();
    menu.style.top = offset.top + "px";
    menu.style.left = offset.left + "px";
    document.body.appendChild(menu);
    this.addPens = function (keys) {
        var _this = this;

        keys = keys || _pens2.default.keys();
        keys.forEach(function (item) {
            if (!item) return;
            if (!item.html) {
                item = { html: item, key: item };
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
        var drag = new _Drag2.default(btn, menu).moveTo(offset).start();
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
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "撤销";
        btn.addEventListener("click", function () {
            drawer.undo();
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "重做";
        btn.addEventListener("click", function () {
            drawer.redo();
        });
        menu.appendChild(btn);
        return this;
    };
    this.scale = function () {
        var scale = 1;
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "放大";
        btn.addEventListener("click", function () {
            scale *= 1.1;
            drawer.scale(scale);
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "缩小";
        btn.addEventListener("click", function () {
            scale /= 1.1;
            drawer.scale(scale);
        });
        menu.appendChild(btn);
        return this;
    };
    this.color = function () {
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.style.color = "red";
        btn.innerText = "红色";
        btn.addEventListener("click", function () {
            drawer.setColor("red");
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.style.color = "yellow";
        btn.innerText = "黄色";
        btn.addEventListener("click", function () {
            drawer.setColor("yellow");
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.style.color = "blue";
        btn.innerText = "蓝色";
        btn.addEventListener("click", function () {
            drawer.setColor("blue");
        });
        menu.appendChild(btn);
        return this;
    };
    this.clear = function () {
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "清空";
        btn.addEventListener("click", function () {
            drawer.parse([]);
        });
        menu.appendChild(btn);
        return this;
    };
    this.restore = function (s) {
        this.restore.count++;
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "恢复" + this.restore.count;
        btn.addEventListener("click", function () {
            drawer.parse(s);
        });
        menu.appendChild(btn);
        return this;
    };
    this.restore.count = 0;
    this.save = function () {
        var _this2 = this;

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "保存";
        btn.addEventListener("click", function () {
            _this2.restore(drawer.stringify());
            drawer.parse([]);
        });
        menu.appendChild(btn);
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

exports.default = Menu;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Offset = __webpack_require__(2);

var _Offset2 = _interopRequireDefault(_Offset);

var _Event = __webpack_require__(1);

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Drag(lis, aim) {
    var _this = this;

    _Event2.default.call(this);
    aim = aim || lis;
    this.state = { end: (0, _Offset2.default)(aim) };
    this.setBegin = function (x, y) {
        this.state.begin = { left: x, top: y };
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
        var _state$begin = this.state.begin,
            left = _state$begin.left,
            top = _state$begin.top;

        left = x - left;
        top = y - top;
        left += this.state.end.left || 0;
        top += this.state.end.top || 0;
        this.state.move = { left: left, top: top };
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

            var _getMoved = _this.getMoved(e.pageX, e.pageY),
                left = _getMoved.left,
                top = _getMoved.top;

            aim.style.left = left + "px";
            aim.style.top = top + "px";
        }
    };
    this.end = function (e) {
        if (_this.state.begin) {
            e = _this.warpEvent(e);

            var _getMoved2 = _this.getMoved(e.pageX, e.pageY),
                left = _getMoved2.left,
                top = _getMoved2.top;

            _this.state.begin = false;
            _this.state.end = { left: left, top: top };
            _this.dispatchEvent("end", { left: left, top: top });
        }
    };
    this.moveTo = function (_ref) {
        var left = _ref.left,
            top = _ref.top;

        aim.style.left = left + "px";
        aim.style.top = top + "px";
        _this.state.end = { left: left, top: top };
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

exports.default = Drag;

/***/ })
/******/ ]);
});
//# sourceMappingURL=paint.js.map