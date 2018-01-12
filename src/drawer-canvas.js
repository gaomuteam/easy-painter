import Drawer from './drawer.js';
import pens from './pens';

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

class DrawerCanvas extends Drawer {
    defaultConfig() {
        return Object.assign({
            background: "",
            initStyle: {
                fillStyle: "red",
                strokeStyle: "red"
            }
        }, super.defaultConfig());
    }
    init() {
        var ctx = this.ctx = this.canvas.getContext("2d");
        // 读取配置
        ctx.initStyle = {};
        ctx.setStyle(this.config.initStyle);
        ctx.initStyle = ctx.getStyle();
    }
    createCanvas() {
        var canvas = document.createElement('canvas');
        canvas.className = "painter-canvas";
        return canvas;
    }
    getStyle() {
        return this.ctx.getStyle();
    }
    update() {
        this.resize();
        var { canvas, ctx, config } = this;
        // 清除画布
        ctx.clearRect(0, 0, config.width, config.height);
        this.dispatchEvent('beforeupdate', ctx);
        // 画背景
        if (config.background) ctx.drawImage(config.background, 0, 0, config.width, config.height);
        // 画历史数据
        config.history.forEach((item) => {
            this.paintItem(ctx, item, config);
        });
        // 画当前画笔数据
        if (typeof config.penData != "undefined") {
            ctx.save();
            config.penClass.render(this.warpData(config.penData, canvas), this);
            ctx.restore();
        }
        this.dispatchEvent('update', ctx);
    }
    resize() {
        if (super.resize()) {
            let { canvas, config } = this;
            canvas.width = config.width;
            canvas.height = config.height;
            this.ctx.setStyle({});
        }
    }
    // add function
    paintItem(ctx, item) {
        if (typeof item != "object") return;
        var pen = pens.get(item.key);
        if (pen) {
            ctx.save();
            ctx.setStyle(item.style);
            pen.render(this.warpData(item.data), this);
            ctx.restore();
        }
    }
    getCtx() {
        return this.ctx;
    }
    setColor(color) {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
    }
    toDataURL() {
        return this.canvas.toDataURL();
    }
}

export default DrawerCanvas;