function rectPen(render, resolve) {
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function(bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
rectPen.moveBegin = true;
rectPen.render = function(data, drawer) {
    if (data && data.length === 4) {
        let ctx = drawer.ctx;
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        ctx.lineTo(data[2], data[1]);
        ctx.lineTo(data[2], data[3]);
        ctx.lineTo(data[0], data[3]);
        ctx.lineTo(data[0], data[1]);
        ctx.stroke();
    }
};
rectPen.renderSvg = function(data, drawer) {
    if (data && data.length === 4) {
        var x = Math.min(data[0], data[2]);
        var y = Math.min(data[1], data[3]);
        var width = Math.abs(data[2] - data[0]);
        var height = Math.abs(data[3] - data[1]);

        return `<rect x="${x}" y="${y}" width="${width}" height="${height}" style="${drawer.getStyle()}"/>`;
    }
};


export default rectPen;