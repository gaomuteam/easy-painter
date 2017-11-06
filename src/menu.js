import pens from './pens';
import Drag from './libs/Drag';

var body = document.body || document.documentElement;

function Menu(drawer) {
    var menu = document.createElement("div");
    menu.className = "painter-menu";
    var offset = drawer.offset();
    menu.style.top = offset.top + "px";
    menu.style.left = offset.left + "px";
    document.body.appendChild(menu);
    this.addButton = function(html, cb) {
        if (html && cb) {
            var btn = document.createElement("div");
            btn.className = "painter-menu__btn";
            btn.innerText = html;
            btn.addEventListener("click", cb);
            menu.appendChild(btn);
            return btn;
        }
    };
    this.addPens = function(keys) {
        keys = keys || pens.keys();
        keys.forEach(item => {
            if (!item) return;
            if (!item.html) {
                item = { html: item, key: item };
            }
            var btn = document.createElement("div");
            btn.className = "painter-menu__btn painter-menu__pen";
            btn.innerHTML = item.html.replace(/pen$/i, "");
            btn.addEventListener("click", () => {
                btn.className += " active";
                drawer.setPen(item.key);
                if (this.addPens.prev) {
                    this.addPens.prev.className = this.addPens.prev.className.replace(" active", "");
                }
                this.addPens.prev = btn;
            });
            menu.appendChild(btn);
            if (!this.addPens.prev) {
                this.addPens.prev = btn;
                btn.className += " active";
            }
        });
        return this;
    };
    this.moveable = function() {
        var btn = document.createElement("div");
        btn.className = "painter-menu__move";
        var drag = new Drag(btn, menu).moveTo(offset).start();
        drag.addEventListener("begin", function() {
            drawer.disable();
        });
        drag.addEventListener("end", function() {
            drawer.enable();
        });
        menu.appendChild(btn);
        return this;
    };
    this.undo = function() {
        this.addButton("撤销", function() {
            drawer.undo();
        });
        this.addButton("重做", function() {
            drawer.redo();
        });
        return this;
    };
    this.scale = function() {
        var scale = 1;
        this.addButton("放大", function() {
            scale *= 1.1;
            drawer.scale(scale);
        });
        this.addButton("缩小", function() {
            scale /= 1.1;
            drawer.scale(scale);
        });
        return this;
    };
    this.color = function(colors) {
        colors = colors || [
            ["red", "红色"],
            ["yellow", "黄色"],
            ["blue", "蓝色"]
        ];
        colors.forEach(item => {
            var btn = this.addButton(item[1], () => {
                drawer.setColor(item[0]);
                btn.className += " active";
                if (this.color.prev) {
                    this.color.prev.className = this.color.prev.className.replace(" active", "");
                }
                this.color.prev = btn;
            });
            btn.style.color = item[0];
            if (!this.color.prev) {
                this.color.prev = btn;
                btn.className += " active";
            }
        });
        return this;
    };
    this.clear = function() {
        this.addButton("清空", function() {
            drawer.parse([]);
        });
        return this;
    };
    this.restore = function(s) {
        this.restore.count++;
        this.addButton("恢复" + this.restore.count, function() {
            drawer.parse(s);
        });
        return this;
    };
    this.restore.count = 0;
    this.save = function() {
        this.addButton("保存", () => {
            this.restore(drawer.stringify());
            drawer.parse([]);
        });
        return this;
    };
    this.disable = function() {
        document.body.removeChild(menu);
        return this;
    };
    this.enable = function() {
        document.body.appendChild(menu);
        return this;
    };
}

export default Menu;