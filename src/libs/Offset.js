function offset(who) {
    var box = who.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft,
        right: box.right,
        bottom: box.bottom
    };
}

export default offset;