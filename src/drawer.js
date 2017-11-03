import Event from './libs/Event.js';
import pens from './pens';
import offset from './libs/Offset.js';
var defaultPen = pens.get();

function newConfig(config) {
    if (typeof config != "object") config = {};
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

const styles = ["fillStyle", "filter", "font", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled", "imageSmoothingQuality", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", ];

CanvasRenderingContext2D.prototype.getStyle = function() {
    var style = {};
    styles.forEach((k) => {
        if (this[k] != this.initStyle[k]) style[k] = this[k];
    });
    return style;
};
CanvasRenderingContext2D.prototype.setStyle = function(style) {
    if (typeof style != "object") return this;
    styles.forEach((k) => {
        if (style[k] != null) this[k] = style[k];
        else if (this.initStyle[k]) this[k] = this.initStyle[k];
    });
    return this;
};

function paintItem(ctx, item, r) {
    if (typeof item != "object") return;
    var pen = pens.get(item.key);
    if (pen) {
        ctx.save();
        pen.render(ctx.setStyle(item.style), warpData(item.data, r));
        ctx.restore();
    }
}

function normalizeEvent(e, r) {
    if (e instanceof TouchEvent) {
        var off = offset(e.target);
        var offsetX = Math.floor((e.touches[0].pageX - off.top) / r.width * 10000);
        var offsetY = Math.floor((e.touches[0].pageY - off.left) / r.height * 10000);
        return { offsetX, offsetY };
    } else {
        var offsetX = Math.floor(e.offsetX / r.width * 10000);
        var offsetY = Math.floor(e.offsetY / r.height * 10000);
        return { offsetX, offsetY };
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
    Event.call(this);
    var canvas = document.createElement('canvas');
    canvas.className = "painter-canvas";
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

    const mousedown = (event) => {
        var e = normalizeEvent(event, canvas);
        var ppap = getPen();
        if (!beginPoint) beginPoint = { x: e.offsetX, y: e.offsetY };
        if (typeof ppap.begin == "function") {
            ppap.begin(beginPoint.x, beginPoint.y);
        }
        event.preventDefault();
    };

    const mousemove = (event) => {
        var e = normalizeEvent(event, canvas);
        var ppap = getPen();
        // 在画图状态下，当鼠标按下时move事件也可以设置begin坐标
        if (!beginPoint && e.buttons == 1 && config.penClass.moveBegin) beginPoint = { x: e.offsetX, y: e.offsetY, moveBegin: true };
        if (!beginPoint) return;
        if (typeof ppap.move == "function") {
            ppap.move(beginPoint.x, beginPoint.y, e.offsetX, e.offsetY);
        }
        event.preventDefault();
    };

    const end = (endPoint, callBy) => {
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

    function mouseover(e) {
        if (config.penClass.outEnd) {
            // 在out时已经end了
        } else if (e.buttons != 1) {
            end(outPoint, "mouseover");
        }
        outPoint = false;
    }

    function mouseout(e) {
        outPoint = { x: e.offsetX, y: e.offsetY };
        if (config.penClass.outEnd) {
            end(outPoint, "mouseout");
        } else if (e.buttons == 1) {
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

    const append = function(div, x, y) {
        if (div) {
            div.className = "painter-canvas__item";
            if (x != null) div.style.left = warpData(x, canvas) + "px";
            if (y != null) div.style.top = warpData(y, canvas, 1) + "px";
            dom.appendChild(div);
        }
        return dom;
    };
    const createNewPen = () => {
        // 设置画笔鼠标指针样式
        canvas.style.cursor = config.penClass.cursor || 'auto';
        pen = new config.penClass(this.setData, penSuccess, append);
    };
    // 画笔绘制结束回调
    const penSuccess = (data) => {
        createNewPen();
        if (typeof data != "undefined") {
            config.history.push({ key: pens.key(config.penClass), data, style: ctx.getStyle() });
            config.penData = undefined;
            config.redo.length = 0;
            this.update();
        }
    };

    this.setPen = function(penClass) {
        // 模拟mouseup
        end(outPoint, "setPen");
        // 设置为默认画笔
        if (typeof penClass == "undefined") penClass = defaultPen;
        var tmp = pens.get(penClass);
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
    this.update = function() {
        this.resize();
        // 清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.dispatchEvent('beforeupdate', ctx);
        // 画背景
        if (config.background) ctx.drawImage(config.background, 0, 0, canvas.width, canvas.height);
        // 画历史数据
        config.history.forEach(function(item) {
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
    this.setData = (data) => {
        if (typeof data == "undefined") return;
        config.penData = data;
        this.update();
    };
    this.stringify = function() {
        return JSON.stringify(config.history);
    };
    this.parse = function(data) {
        if (typeof data === "string") {
            config.history = JSON.parse(data);
        } else if (data instanceof Array) {
            config.history = data;
        } else {
            return;
        }
        this.update();
    };
    this.undo = function(test) {
        if (config.history.length > 0) {
            if (test) return true;
            config.redo.push(config.history.pop());
            this.update();
        }
    };
    this.redo = function(test) {
        if (config.redo.length > 0) {
            if (test) return true;
            config.history.push(config.redo.pop());
            this.update();
        }
    };
    this.setColor = function(color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
    };
    this.getCanvas = function() {
        return canvas;
    };
    this.resize = function() {
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
    this.toDataURL = function() {
        return canvas.toDataURL();
    };
    this.getCtx = function() {
        return ctx;
    };
    this.offset = function() {
        return offset(canvas);
    };
    this.disable = function() {
        canvas.style.pointerEvents = "none";
    };
    this.enable = function() {
        canvas.style.pointerEvents = "auto";
    };
    this.scale = function(n) {
        dom.style.transformOrigin = "50% 0 0";
        dom.style.transform = `scale(${n})`; // translate(${})`;
        this.update();
    };
    createNewPen();

    dom.appendChild(canvas);
    if (getComputedStyle(dom).position === "static") {
        dom.style.position = "relative";
    }
    this.resize();
}

export default drawer;