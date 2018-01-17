import Drawer from './drawer.js';
import pens from './pens';

class DrawerSvg extends Drawer {
    createCanvas() {
        var div = document.createElement('div');
        div.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="painter-canvas"></svg>`;
        var canvas = div.childNodes[0];
        return canvas;
    }
    init() {
        this.current_indx = 0;
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
            s.split(";").forEach((item) => {
                let ss = item.split(":");
                if (ss.length > 1) {
                    this.penStyle[ss[0].trim()] = ss[1].trim();
                }
            });
        }
    }
    append(canvas, html) {
        if (!html) return;
        var svg;
        try {
            svg = document.createElementNS('http://www.w3.org/2000/svg', /<(\w+)/.exec(html)[1]);
            html.replace(/\s+(\w+)=['"]([^'"]+)['"]/g, function(x0, key, value) {
                svg.setAttribute(key, value);
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
    update(force) {
        this.resize();
        var { canvas, config } = this;
        // 清除画布
        this.dispatchEvent('beforeupdate');
        if (force) {
            this.current_indx = 0;
            while (canvas.hasChildNodes())
                canvas.removeChild(canvas.firstChild);
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
        } else if (this.currentDom) {
            canvas.removeChild(this.currentDom);
            this.currentDom = false;
        }
        // 画历史数据
        for (; this.current_indx < config.history.length; this.current_indx++) {
            const item = config.history[this.current_indx];
            this.append(canvas, this.paintItem(item, this.current_indx));
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
    toSvg() {
        var svg = this.canvas.cloneNode();
        svg.innerHTML = this.canvas.innerHTML;
        for (let i = svg.childNodes.length - 1; i >= 0; i--) {
            const item = svg.childNodes[i];
            if (item.style.display === "none") {
                svg.removeChild(item);
            }
        }
        svg.removeAttribute("class");
        svg.removeAttribute("style");
        return svg.outerHTML;
    }
}

export default DrawerSvg;