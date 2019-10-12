function textPen(render, resolve, append) {
    var input, dom, tmp;

    this.close = this.begin = function() {
        if(tmp) {
            resolve(tmp);
            tmp = null;
        }
        if(dom) try { dom.removeChild(input); } catch (error) {}
    }
    this.end = function(bx, by, ex, ey) {
        tmp = [bx, by]
        input = document.createElement("textarea");
        input.addEventListener("keyup", (e)=> {
            if (e.ctrlKey && e.keyCode == 13) {
                this.close()
            } else {
                tmp[2] = input.value
                render(tmp);
            }
        });
        dom = append(input, ex, ey);
        input.focus();
    };
}
textPen.render = function(data, drawer) {
    if (data && data.length >= 4) {
        let ctx = drawer.ctx;
        ctx.font = textPen.font;
        var text = data[2] || "";
        var x = data[0];
        var y = data[1];
        var size = parseInt(textPen.font);
        text.split("\n").forEach(function(item, i) {
            ctx.fillText(item, x, y + i * size);
        });
    }
};
textPen.renderSvg = function(data, drawer) {
    if (data && data.length === 3) {
        var x = data[0];
        var y = data[1];
        var size = parseInt(drawer.penStyle['font-size']);
        var texts = "";
        for(let text of (data[2]||'').split('\n')){
            texts += `<text x="${x}" y="${y}" style="${drawer.getStyle()}">${text}</text>`
            y += size;
        }
        return `<g>${texts}</g>`;
    }
    return "";
};

export default textPen;