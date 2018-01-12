function linePen(render, resolve) {
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function(bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
linePen.moveBegin = true;
linePen.render = function(data, drawer) {
    if (data && data.length === 4) {
        let ctx = drawer.ctx;
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        ctx.lineTo(data[2], data[3]);
        ctx.stroke();
    }
};
linePen.renderSvg = function(data, drawer) {
    if (data && data.length === 4) {
        return `<line x1="${data[0]}" y1="${data[1]}" x2="${data[2]}" y2="${data[3]}" style="${drawer.getStyle()}"/>`;
    }
    return "";
};

export default linePen;