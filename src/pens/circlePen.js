function circlePen(render, resolve) {
	this.move = function(bx, by, ex, ey) {
		render([bx, by, ex, ey]);
	};
	this.end = function(bx, by, ex, ey) {
		resolve([bx, by, ex, ey]);
	};
}
circlePen.moveBegin = true;
circlePen.render = function(data, drawer) {
	return console.error("暂未实现画canvas的圆形");
};
circlePen.renderSvg = function(data, drawer) {
	if (data && data.length === 4) {
		var x = data[0];
		var y = data[1];
		var a = Math.pow(Math.abs(data[2] - data[0]),2);
		var b = Math.pow(Math.abs((data[3] - data[1])),2);
		var r = Math.sqrt(a + b);
		return `<circle cx="${x}" cy="${y}" r="${r}" style="${drawer.getStyle()}"/>`;
	}
	return "";
};

export default circlePen;