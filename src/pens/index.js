import defaultPen from './defaultPen.js';
import linePen from './linePen.js';
import ellipsePen from './ellipsePen.js';
import circlePen from './circlePen.js';
import rectPen from './rectPen.js';
import textPen from './textPen.js';
import eraser from './eraser.js';

var map = {
    defaultPen,
    linePen,
    ellipsePen,
    circlePen,
    rectPen,
    textPen,
    eraser,

};

function get(key) {
    return map[key] || defaultPen;
};

function key(pen) {
    if (typeof pen == "object")
        pen = pen.constuctor;
    if (typeof pen == "function" && typeof pen.render == "function") {
        for (var k in map) {
            var v = map[k];
            if (pen == v) {
                return k;
            }
        }
    }
};

function set(key, pen) {
    if (typeof pen == "function" && typeof pen.render == "function") {
        map[key] = pen;
        return true;
    }
    return false;
}

function keys() {
    var ks = [];
    for (var k in map) {
        ks.push(k);
    }
    return ks;
}

export default {
    get,
    key,
    set,
    keys
};