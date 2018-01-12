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
        let li = [];
        const hover = (event) => {
            if (event.target != drawer.canvas && event.buttons == 1) {
                li.push(count(event.target));
                render(li);
            }
        };
        const click = (event) => {
            if (event.target != drawer.canvas) {
                li.push(count(event.target));
                render(li);
            }
        };
        drawer.canvas.addEventListener("mousemove", hover);
        drawer.canvas.addEventListener("click", click);
        this.end = function(bx, by, ex, ey, what) {
            resolve(li.length > 0 ? li : undefined);
        };
        this.unmount = function() {
            drawer.canvas.removeEventListener("mousemove", hover);
            drawer.canvas.removeEventListener("click", click);
        };
    } else {
        var li = [];
        this.begin = function(bx, by, ex, ey) {
            li.push(bx);
            li.push(by);
        };
        this.move = function(bx, by, ex, ey) {
            li.push(ex);
            li.push(ey);
            render(li);
        };
        this.end = function(bx, by, ex, ey) {
            li.push(ex);
            li.push(ey);
            resolve(li);
        };
    }
}
// eraser.cursor = 'url(' + url + '),pointer';
eraser.render = function(data, drawer) {
    if (data instanceof Array && data.length > 0) {
        let ctx = drawer.ctx;
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
eraser.renderSvg = function(data, drawer) {
    if (data instanceof Array && data.length > 0) {
        for (let i of data) {
            var svg = drawer.canvas.children[i];
            if (svg) svg.style.display = "none";
        }
    }
};

export default eraser;