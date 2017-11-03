import url from './eraser.png';

function eraser(render, resolve) {
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
eraser.cursor = 'url(' + url + '),pointer';
eraser.render = function(ctx, data) {
    if (data instanceof Array && data.length > 0) {
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

export default eraser;