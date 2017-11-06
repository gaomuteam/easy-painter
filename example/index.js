(function(paint) {
    function pow2(x) {
        return x * x;
    }

    function oPen(render, resolve) {
        this.begin = function(bx, by) {
            render([bx, by]);
        };
        this.move = function(bx, by, ex, ey) {
            render([bx, by, ex, ey]);
        };
        this.end = function(bx, by, ex, ey) {
            resolve([bx, by, ex, ey]);
        };
    }
    oPen.moveBegin = true;
    oPen.render = function(ctx, data) {
        if (data && data.length >= 2) {
            var dis = 16 + (data.length === 4 ? Math.sqrt(pow2(data[0] - data[2]) + pow2(data[1] - data[3])) : 0);
            ctx.font = `${dis}px serif`;
            ctx.fillText("√", data[0], data[1] + dis / 2);
        }
    };

    function xPen(render, resolve) {
        this.begin = function(bx, by) {
            render([bx, by]);
        };
        this.move = function(bx, by, ex, ey) {
            render([bx, by, ex, ey]);
        };
        this.end = function(bx, by, ex, ey) {
            resolve([bx, by, ex, ey]);
        };
    }
    xPen.moveBegin = true;
    xPen.render = function(ctx, data) {
        if (data && data.length >= 2) {
            var dis = 16 + (data.length === 4 ? Math.sqrt(pow2(data[0] - data[2]) + pow2(data[1] - data[3])) : 0);
            ctx.font = `${dis}px serif`;
            ctx.fillText("×", data[0], data[1] + dis / 2);
        }
    };
    paint.pens.set("oPen", oPen);
    paint.pens.set("xPen", xPen);

    const ppap = [{
        "html": "铅笔",
        "key": "defaultPen"
    }, {
        "html": "直线",
        "key": "linePen"
    }, {
        "html": "椭圆",
        "key": "ellipsePen"
    }, {
        "html": "矩形",
        "key": "rectPen"
    }, {
        "html": "文字",
        "key": "textPen"
    }, {
        "html": "橡皮",
        "key": "eraser"
    }, {
        "html": "打勾",
        "key": "oPen"
    }, {
        "html": "打叉",
        "key": "xPen"
    }];

    paint.Paint = function(dom, history) {
        var drawer = new paint.Drawer(dom);
        drawer.preview = function() {
            drawer.disable();
            if (drawer.menu) drawer.menu.disable();
        };
        drawer.edit = function() {
            drawer.enable();
            if (!drawer.menu) {
                drawer.menu = new paint.Menu(drawer).addPens(ppap).color().undo().scale().clear().save().moveable();
            }
            drawer.menu.enable();
        };
        if (history) {
            drawer.parse(history);
            drawer.preview();
        } else {
            drawer.edit();
        }
        return drawer;
    };
})(paint);