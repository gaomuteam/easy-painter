import Event from './libs/Event.js';
import pens from './pens';
import offset from './libs/Offset.js';
var defaultPen = pens.get();

if (!Object.assign) {
	Object.assign = function(a, b) {
		for (let k in b) {
			let v = b[k];
			a[k] = v;
		}
		return a;
	};
}

class Drawer {
	constructor(dom, config) {
		Event.call(this);
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
		this.init();

		// 画笔实例
		var pen;
		// 鼠标按下位置
		var beginPoint = false;
		// 鼠标out位置
		this.outPoint = false;

		this.setData = (data) => {
			if (typeof data == "undefined") return;
			this.config.penData = data;
			this.update();
		};

		function getPen() {
			return pen;
		}

		const mousedown = (event) => {
			var e = this.normalizeEvent(event, config);
			var ppap = getPen();
			if (!beginPoint) beginPoint = { x: e.offsetX, y: e.offsetY };
			if (typeof ppap.begin == "function") {
				ppap.begin(beginPoint.x, beginPoint.y);
			}
			event.preventDefault();
		};

		const mousemove = (event) => {
			var e = this.normalizeEvent(event, config);
			// console.log("move", e.offsetX, e.offsetY);
			var ppap = getPen();
			// 在画图状态下，当鼠标按下时move事件也可以设置begin坐标
			if (!beginPoint && event.which == 1 && config.penClass.moveBegin) beginPoint = { x: e.offsetX, y: e.offsetY, moveBegin: true };
			if (!beginPoint) return;
			if (typeof ppap.move == "function") {
				ppap.move(beginPoint.x, beginPoint.y, e.offsetX, e.offsetY);
			}
			event.preventDefault && event.preventDefault();
		};

		const end = this.end = (endPoint, callBy) => {
			if(callBy=="setPen") {
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

		const mouseup = (event) => {
			var e = this.normalizeEvent(event, config);
			end({ x: e.offsetX, y: e.offsetY });
			event.preventDefault();
		};

		const mouseover = (event) => {
			if (config.penClass.outEnd) {
				// 在out时已经end了
			} else if (this.outPoint && event.which != 1) {
				end(this.outPoint, "mouseover");
			}
			this.outPoint = false;
		};

		const mouseout = (event) => {
			var e = this.normalizeEvent(event, config);
			// console.log("out", e.offsetX, e.offsetY);
			this.outPoint = { x: e.offsetX, y: e.offsetY };
			if (event.toElement && event.toElement.parentElement == canvas) {
				// console.log(this.outPoint);
			} else if (config.penClass.outEnd) {
				end(this.outPoint, "mouseout");
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

		// debug
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



		const append = (div, x, y) => {
			if (div) {
				div.className = "painter-canvas__item";
				if (x != null) div.style.left = this.warpData(x, canvas) + "px";
				if (y != null) div.style.top = this.warpData(y, canvas, 1) + "px";
				parent.appendChild(div);
			}
			return parent;
		};
		const createNewPen = this.createNewPen = () => {
			// 设置画笔鼠标指针样式
			if (pen && typeof pen.unmount === "function") pen.unmount();
			// canvas.style.cursor = config.penClass.cursor || 'auto';
			pen = new config.penClass(this.setData, penSuccess, append, this);
		};
		// 画笔绘制结束回调
		const penSuccess = (data) => {
			this.dispatchEvent('success', data);
			createNewPen();
			if (typeof data != "undefined") {
				config.history.push({ key: pens.key(config.penClass), data, style: this.getStyle() });
				config.penData = undefined;
				config.redo.length = 0;
				this.update();
			}
		};
		createNewPen();
		parent.appendChild(canvas);
		if (getComputedStyle(parent).position === "static") {
			parent.style.position = "relative";
		}
		this.resize();
	}
	defaultConfig() {
		return {
			history: [],
			redo: [],
			penClass: defaultPen
		};
	}
	warpData(data, i) {
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
	normalizeEvent(e, config) {
		if (e.normalized) {
			return e;
		}
		var offsetX, offsetY;
		if (e instanceof TouchEvent) {
			var off = offset(e.target);
			offsetX = (e.changedTouches[0] || e.touches[0]).pageX  - off.left;
			offsetY = (e.changedTouches[0] || e.touches[0]).pageY - off.top;
		} else {
			offsetX = e.offsetX;
			offsetY = e.offsetY;
		}
		offsetX = Math.floor(offsetX / config.width * 10000);
		offsetY = Math.floor(offsetY / config.height * 10000);
		return { offsetX, offsetY, normalized: true };
	}
	setPen(penClass) {
		// 模拟mouseup
		this.end(this.outPoint, "setPen");
		// 设置为默认画笔
		if (typeof penClass==="string") {
			if (this._prevPenClass) {
				this.canvas.classList.remove(this._prevPenClass);
			}
			this._prevPenClass = penClass;
			this.canvas.classList.add(penClass);
		}
		if (typeof penClass == "undefined") penClass = defaultPen;
		var tmp = pens.get(penClass);
		if (tmp) {
			// 清除没有完成的画笔数据
			if (this.config.penClass != tmp) {
				this.config.penClass = tmp;
				this.config.penData = undefined;
			}
			// 创建画笔
			this.createNewPen();
		} else {
			console.log("不能识别的画笔", penClass);
		}
	}
	stringify() {
		return JSON.stringify(this.config.history);
	}
	parse(data) {
		if (typeof data === "string") {
			this.config.history = JSON.parse(data);
		} else if (data instanceof Array) {
			this.config.history = data;
		} else {
			return;
		}
		this.update(true);
	}
	undo(test) {
		if (this.config.history.length > 0) {
			if (test) return true;
			this.config.redo.push(this.config.history.pop());
			this.update(true);
		}
	}
	redo(test) {
		if (this.config.redo.length > 0) {
			if (test) return true;
			this.config.history.push(this.config.redo.pop());
			this.update();
		}
	}
	getCanvas() {
		return this.canvas;
	}
	resize() {
		var modify = false;
		var { dom, config } = this;
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
	offset() {
		return offset(this.canvas);
	}
	disable() {
		this.canvas.classList.add("disable");
	}
	enable() {
		this.canvas.classList.remove("disable");
	}
	scale(n) {
		this.canvas.parentElement.style.transformOrigin = "50% 0 0";
		this.canvas.parentElement.style.transform = `scale(${n})`; // translate(${})`;
		this.update();
	}
	init() {}
	createCanvas() {}
	getStyle() {}
	update() {}
}

export default Drawer;