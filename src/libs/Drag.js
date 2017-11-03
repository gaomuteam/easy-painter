import offset from './Offset';
import Event from './Event.js';

function Drag(lis, aim) {
    Event.call(this);
    aim = aim || lis;
    this.state = { end: offset(aim) };
    this.setBegin = function(x, y) {
        this.state.begin = { left: x, top: y };
    };
    this.warpEvent = function(e) {
        e.preventDefault();
        if (e instanceof TouchEvent) {
            if (e.type === "touchend") {
                e.pageX = e.changedTouches[0].pageX;
                e.pageY = e.changedTouches[0].pageY;
            } else {
                e.pageX = e.touches[0].pageX;
                e.pageY = e.touches[0].pageY;
            }
        }
        return e;
    };
    this.getMoved = function(x, y) {
        let { left, top } = this.state.begin;
        left = x - left;
        top = y - top;
        left += this.state.end.left || 0;
        top += this.state.end.top || 0;
        this.state.move = { left, top };
        return this.state.move;
    };
    this.begin = (e) => {
        if (!this.state.begin) {
            e = this.warpEvent(e);
            this.setBegin(e.pageX, e.pageY);
            this.dispatchEvent("begin");
        }
    };
    this.move = (e) => {
        if (this.state.begin) {
            e = this.warpEvent(e);
            let { left, top } = this.getMoved(e.pageX, e.pageY);
            aim.style.left = left + "px";
            aim.style.top = top + "px";
        }
    };
    this.end = (e) => {
        if (this.state.begin) {
            e = this.warpEvent(e);
            let { left, top } = this.getMoved(e.pageX, e.pageY);
            this.state.begin = false;
            this.state.end = { left, top };
            this.dispatchEvent("end", { left, top });
        }
    };
    this.start = function() {
        lis.addEventListener("mousedown", this.begin);
        document.addEventListener("mousemove", this.move);
        document.addEventListener("mouseup", this.end);
        lis.addEventListener("touchstart", this.begin);
        document.addEventListener("touchmove", this.move);
        document.addEventListener("touchend", this.end);
        return this;
    };
    this.stop = function() {
        lis.removeEventListener("mousedown", this.begin);
        document.removeEventListener("mousemove", this.move);
        document.removeEventListener("mouseup", this.end);
        lis.removeEventListener("touchstart", this.begin);
        document.removeEventListener("touchmove", this.move);
        document.removeEventListener("touchend", this.end);
        return this;
    };
}

export default Drag;