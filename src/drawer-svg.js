import Drawer from './drawer.js';
import pens from './pens';

class DrawerSvg extends Drawer {
    createCanvas() {
        var div = document.createElement('div');
        div.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="painter-canvas"></svg>`;
        var canvas = div.children[0];
        this.svg = canvas.cloneNode();
        return canvas;
    }
    init() {
        this.penStyle = {
            fill: "rgba(0,0,0,0)",
            stroke: "red",
            "stroke-width": 5
        };
    }
    getStyle() {
        var s = "";
        for (let k in this.penStyle) {
            let v = this.penStyle[k];
            s += k + ":" + v + ";";
        }
        return s;
    }
    setColor(color) {
        return this.penStyle.stroke = color;
    }
    setStyle(s) {
        if (typeof s === "object") {
            Object.assign(this.penStyle, s);
        } else if (typeof s === "string") {
            for (let item of s.split(";")) {
                let ss = item.split(":");
                if (ss.length > 1) {
                    this.penStyle[ss[0].trim()] = ss[1].trim();
                }
            }
        }
    }
    append(canvas, html) {
        if (!html) return;
        try {
            this.svg.innerHTML = html;
        } catch (error) {
            console.log(error);
            return; 
        }
        var svg = this.svg.children[0];
        // this.svg.removeChild(svg)
        if (this.currentDom) {
            canvas.insertBefore(svg, this.currentDom);
        } else {
            canvas.appendChild(svg);
        }
        return svg;
    }
    update(force) {
        this.resize();
        var { canvas, config } = this;
        // 清除画布
        this.dispatchEvent('beforeupdate');
        if (force) {
            canvas.innerHTML = "";
            this.currentDom = false;
        }
        // 画当前画笔数据
        if (typeof config.penData != "undefined") {
            var html = config.penClass.renderSvg(this.warpData(config.penData), this);
            if (this.currentDom) {
                canvas.removeChild(this.currentDom);
                this.currentDom = false;
            }
            this.currentDom = this.append(canvas, html);
        }
        var i = canvas.children.length;
        if (this.currentDom) {
            i--;
        }
        // 画历史数据
        for (; i < config.history.length; i++) {
            const item = config.history[i];
            this.append(canvas, this.paintItem(item, i));
        }
        this.dispatchEvent('update');
    }
    resize() {
        var modify = false;
        var { canvas, config, dom } = this;
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
    }
    // add function
    paintItem(item, i) {
        if (typeof item != "object") return;
        var pen = pens.get(item.key);
        var s = "";
        if (pen && pen.renderSvg) {
            var style = this.getStyle();
            this.setStyle(item.style);
            s = pen.renderSvg(this.warpData(item.data), this);
            this.setStyle(style);
        }
        return s;
    }
}

export default DrawerSvg;