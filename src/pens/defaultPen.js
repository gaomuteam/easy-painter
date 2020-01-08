// import pencil from './defaultPen.cur';


import Optim from '../libs/Optim.js';
const optimObj = new Optim();

/**
 * 画笔构造函数
 * @param {function} render 渲染当前作画数据
 * @param {function} resolve 作画完成，提交本次作画数据
 */
function defaultPen(render, resolve) {
    var li = [];
    this.begin = function(bx, by) {
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
        li = optimObj.filter(li);
        resolve(li);
    };
}
// 鼠标move时触发this.begin
defaultPen.moveBegin = true;
// 鼠标out时触发this.end
defaultPen.outEnd = true;
// defaultPen.cursor = 'url(' + pencil + '),pointer';
defaultPen.render = function(data, drawer) {
    if (data instanceof Array && data.length > 0) {
        var ctx = drawer.ctx;
        ctx.beginPath();
        ctx.moveTo(data[0], data[1]);
        for (var i = 2; i < data.length; i += 2) {
            ctx.lineTo(data[i], data[i + 1]);
        }
        ctx.stroke();
    }
};
defaultPen.renderSvg = function(data, drawer) {
    if (data instanceof Array && data.length > 0) {
        var path = "";
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (i % 2 == 0) {
                path += i == 0 ? "M" : "L";
            }
            path += item + " ";
        }
        return `<path d="${path}" style="${drawer.getStyle()}"/>`;
    }
};


export default defaultPen;