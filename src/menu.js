import pens from './pens';
import Drag from './libs/Drag';

var body = document.body || document.documentElement;

function Menu(drawer) {
    var menu = document.createElement("div");
    menu.className = "painter-menu";
    menu.style.position = "fixed";
    var offset = drawer.offset();
    menu.style.top = offset.top + "px";
    menu.style.left = offset.left + "px";
    document.body.appendChild(menu);
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
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "撤销";
        btn.addEventListener("click", function() {
            drawer.undo();
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "重做";
        btn.addEventListener("click", function() {
            drawer.redo();
        });
        menu.appendChild(btn);
        return this;
    };
    this.scale = function() {
        var scale = 1;
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "放大";
        btn.addEventListener("click", function() {
            scale *= 1.1;
            drawer.scale(scale);
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "缩小";
        btn.addEventListener("click", function() {
            scale /= 1.1;
            drawer.scale(scale);
        });
        menu.appendChild(btn);
        return this;
    };
    this.color = function() {
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.style.color = "red";
        btn.innerText = "红色";
        btn.addEventListener("click", function() {
            drawer.setColor("red");
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.style.color = "yellow";
        btn.innerText = "黄色";
        btn.addEventListener("click", function() {
            drawer.setColor("yellow");
        });
        menu.appendChild(btn);

        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.style.color = "blue";
        btn.innerText = "蓝色";
        btn.addEventListener("click", function() {
            drawer.setColor("blue");
        });
        menu.appendChild(btn);
        return this;
    };
    this.clear = function() {
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "清空";
        btn.addEventListener("click", () => {
            drawer.parse([]);
        });
        menu.appendChild(btn);
        return this;
    };
    this.restore = function(s) {
        this.restore.count++;
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "恢复" + this.restore.count;
        btn.addEventListener("click", () => {
            drawer.parse(s);
        });
        menu.appendChild(btn);
        return this;
    };
    this.restore.count = 0;
    this.save = function() {
        var btn = document.createElement("div");
        btn.className = "painter-menu__btn";
        btn.innerText = "保存";
        btn.addEventListener("click", () => {
            this.restore(drawer.stringify());
            drawer.parse([]);
        });
        menu.appendChild(btn);
        return this;
    };
}

export default Menu;