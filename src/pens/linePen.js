function linePen(render, resolve) {
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function(bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
linePen.moveBegin = true;
linePen.render = function(ctx, data) {
    if (data && data.length === 4) {
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        ctx.lineTo(data[2], data[3]);
        ctx.stroke();
    }
};

export default linePen;