function ellipsePen(render, resolve) {
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function(bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
ellipsePen.moveBegin = true;
ellipsePen.render = function(data, drawer) {
    if (data && data.length === 4) {
        let ctx = drawer.ctx;
        var x = (data[0] + data[2]) / 2;
        var y = (data[1] + data[3]) / 2;
        var a = (data[2] - data[0]) / 2;
        var b = (data[3] - data[1]) / 2;

        var r = (a > b) ? a : b;
        var ratioX = a / r;
        var ratioY = b / r;
        ctx.scale(ratioX, ratioY);
        ctx.beginPath();
        ctx.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.stroke();
    }
};
ellipsePen.renderSvg = function(data, drawer) {
    if (data && data.length === 4) {
        var x = (data[0] + data[2]) / 2;
        var y = (data[1] + data[3]) / 2;
        var a = Math.abs((data[2] - data[0]) / 2);
        var b = Math.abs((data[3] - data[1]) / 2);

        return `<ellipse cx="${x}" cy="${y}" rx="${a}" ry="${b}" style="${drawer.getStyle()}"/>`;
    }
    return "";
};

export default ellipsePen;