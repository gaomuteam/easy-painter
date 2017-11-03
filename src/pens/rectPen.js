function ellipsePen(render, resolve) {
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function(bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
ellipsePen.moveBegin = true;
ellipsePen.render = function(ctx, data) {
    if (data && data.length === 4) {
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        ctx.lineTo(data[2], data[1]);
        ctx.lineTo(data[2], data[3]);
        ctx.lineTo(data[0], data[3]);
        ctx.lineTo(data[0], data[1]);
        ctx.stroke();
    }
};

export default ellipsePen;