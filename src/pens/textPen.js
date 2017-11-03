function textPen(render, resolve, append) {
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    this.end = function(bx, by, ex, ey) {
        var input = document.createElement("textarea");
        input.addEventListener("blur", function() {
            resolve([bx, by, ex, ey, input.value]);
            try { dom.removeChild(input); } catch (error) {}
        });
        input.addEventListener("keyup", function(e) {
            if (e.ctrlKey && e.keyCode == 13) {
                resolve([bx, by, ex, ey, input.value]);
                try { dom.removeChild(input); } catch (error) {}
            } else {
                render([bx, by, ex, ey, input.value]);
            }
        });
        var dom = append(input, bx, by);
        input.focus();
    };
}
textPen.font = "16px serif";
textPen.render = function(ctx, data) {
    if (data && data.length >= 4) {
        ctx.beginPath();
        var bx = data[0],
            by = data[1],
            ex = data[2],
            ey = data[3];
        var xei = Math.atan((ey - by) / (ex - bx));
        var deg = 0.5;
        ctx.moveTo(bx, by);
        ctx.lineTo(ex, ey);
        if (ex > bx) {
            ctx.lineTo(ex - 10 * Math.cos(deg - xei), ey + 10 * Math.sin(deg - xei));
            ctx.lineTo(ex - 10 * Math.cos(deg + xei), ey - 10 * Math.sin(deg + xei));
        } else {
            ctx.lineTo(ex + 10 * Math.cos(deg - xei), ey - 10 * Math.sin(deg - xei));
            ctx.lineTo(ex + 10 * Math.cos(deg + xei), ey + 10 * Math.sin(deg + xei));
        }
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.fill();
        ctx.font = textPen.font;
        var text = data[4] || "";
        var x = data[2];
        var y = data[3];
        var size = parseInt(textPen.font);
        if (data[3] > data[1]) y += size;
        text.split("\n").forEach(function(item, i) {
            ctx.fillText(item, x, y + i * size);
        });
    }
};

export default textPen;