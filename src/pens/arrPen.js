function arrPen(render, resolve) {
	this.move = function(bx, by, ex, ey) {
		render([bx, by, ex, ey]);
	};
	this.end = function(bx, by, ex, ey) {
		resolve([bx, by, ex, ey]);
	};
}
arrPen.font = "16px serif";
arrPen.render = function(data, drawer) {
	if (data && data.length >= 4) {
		let ctx = drawer.ctx;
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
	}
};

export default arrPen;