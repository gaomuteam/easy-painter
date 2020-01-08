// 笔迹优化
var _FIRE_ON_ = true;
function Optim() {
    var filter_path__detal_k = 0.1;// 过滤的斜率差
    this.filter = function (arr) {
        if(!_FIRE_ON_) {
            return arr;
        }
        if(!Array.isArray(arr)) {
            console.error("参数必须是数组：", arr);
            return arr;
        }
        var list = JSON.parse(JSON.stringify(arr));
        // var startLen = list.length, startTime = new Date().getTime();
        // console.log("=============filter befroe start len:", startLen);
        for (var i = 1; i < list.length;i=i+2) {
            if(i<3) continue;
            var _ax = list[i-3], _ay = list[i-2],
                _bx = list[i-1], _by = list[i];
            if(_ax===_bx && _ay===_by){
                var delList = list.splice(i-1,2);
                // console.log("filter delList:", delList);
                i=i-2;
                continue;
            }
            if(i<5) continue;
            _ax = list[i-5], _ay = list[i-4],
            _bx = list[i-3], _by = list[i-2];
            var _cx = list[i-1], _cy = list[i];
            var _cbk = (_cx - _bx) ? (_cy - _by) / (_cx - _bx) : 0,
                _bak = (_bx - _ax) ? (_by - _ay) / (_bx - _ax) : 0;
            if(Math.abs(_cbk - _bak) <= filter_path__detal_k){
                // console.log("_cx :", _cx, "_cy :", _cy, "_bx :", _bx, "_by :", _by, "_ax :", _ax, "_ay :", _ay);
                // console.log("_cbk :", _cbk, "_bak :", _bak, " detal k:", Math.abs(_cbk - _bak));
                var delList = list.splice(i-3,2);
                // console.log("filter delList:", delList);
                i=i-2;
                continue;
            }
        }
        // var endTime = new Date().getTime();
        // console.log("=============filter after spend time:", new Date().getTime()-startTime, "del len:", startLen - list.length, " list:", list);
        return list;
    };
}

export default Optim;