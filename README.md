# easy-painter

轻松地构建一个画板或批注功能，在现有的dom的基础上

# features

1. 支持自定义画笔
2. 支持设置颜色
3. 支持撤消和重做
4. 支持序列化和反序列化
5. 内置铅笔、直线、矩形、椭圆、橡皮擦等画笔

[查看示例]()

## get start

``` javascript
var div = document.getElementById("root")
// 在div上添加画板，画板会自动适应div的位置和大小
var drawer = new paint.Drawer(div)
// 为画板添加菜单，你也可以用自己的菜单
var menu = new paint.Menu(drawer).addPens().undo().scale().moveable()
```

## Api

### paint.Drawer 画板类

#### paint.Drawer(dom, config) 构造函数

*`dom`: 要添加到哪个元素上,实际上会: dom.appendChild(canvas)  
`config`: 
``` js
{
    penClass,// 默认画笔
    initStyle: { // 初始画板属性
        fillStyle: "red",
        strokeStyle: "red"
    }
}
```

#### paint.Drawer.disable()
禁用画板，预览模式，不能编辑

#### paint.Drawer.enable()
启用画板

#### paint.Drawer.setPen(pen:String|penClass|undefined)
设置画笔  
`pen`: 画笔类或者画笔名，不传参数启用默认画笔

#### paint.Drawer.getCtx()
获取画板的Context2D

#### paint.Drawer.getCanvas()
获取画板的canvas

#### paint.Drawer.setColor(color)
设置画笔颜色  
*`color`: 颜色 red #f00 rgba(0,0,0,0)  
相当于  
``` js
var ctx = drawer.getCtx()
ctx.fillStyle=color  
ctx.strokeStyle=color  
```
#### paint.Drawer.offset()
获取画板在页面中的位置  
return: {top,left,bottom,right}

#### paint.Drawer.stringify()
将画板数据序列化为json字符串

#### paint.Drawer.parse(json)
从json字符串中恢复画板数据
*`json`: json字符串或数据数组

#### paint.Drawer.undo
撤销
`test`: test为true时，不会实际操作, 返回是否可以撤销

#### paint.Drawer.redo(test)
重做
`test`: test为true时，不会实际操作, 返回是否可以重做

#### paint.Drawer.update()
刷新画板，强制重绘

#### paint.Drawer.scale(n)
缩放dom和画板，实际上会修改dom.style.transform
*`n`: 缩放倍数

#### paint.Drawer.toDataURL
相当于canvas.toDataURL()

### paint.pens 画笔盒

#### paint.pens.get(key)
通过画笔名,获取画笔，不存在时返回铅笔  
*`key`: 画笔名

#### paint.pens.set(key,penClass)
添加或修改画笔  
*`key`: 画笔名  
*`penClass`: 画笔类,参见下面penClass介绍   

#### paint.pens.key(penClass)
获取画笔类的画笔名

#### paint.pens.keys()
获取所有画笔的画笔名

### penClass 画笔类
可以通过创建画笔类来创建自定义画笔

下面以自定义一个打勾的画笔为例
``` js
/**
 * 画笔构造函数
 * @param {function} render 渲染当前作画数据
 * @param {function} resolve 作画完成，提交本次作画数据
 */
function oPen(render, resolve) {
    // 当鼠标按下时触发，bx,by 起点相对于画板的坐标
    this.begin = function(bx, by) {
        render([bx, by]);
    };
    // 当鼠标按下移动时触发，ex,ey 终点相对于画板的坐标
    this.move = function(bx, by, ex, ey) {
        render([bx, by, ex, ey]);
    };
    // 当鼠标释放时触发
    this.end = function(bx, by, ex, ey) {
        resolve([bx, by, ex, ey]);
    };
}
// 鼠标按下时进入画板区域触发this.begin
oPen.moveBegin = true;
// 鼠标移出画板区域触发this.end
oPen.outEnd = false;
// 鼠标在画板区域时的光标样式
oPen.cursor = 'auto';
// 重点：将数据绘制到画板上
oPen.render = function(ctx, data) {
    if (data && data.length >= 2) {
        // 起点与终点距离越大，字体越大
        var dis = 16 + (data.length === 4 ? Math.sqrt(pow2(data[0] - data[2]) + pow2(data[1] - data[3])) : 0)
        ctx.font = `${dis}px serif`
        ctx.fillText("√", data[0], data[1] + dis / 2);
    }
};
```
**提示1**: 为了序列化时节省空间，**render和resolve返回的数据必须是数组**,数组中可以有其它类型的数据  
**提示2**: 为了缩放后作画位置不变，bx,by,ex,ey实际为相对于画板万分比，在penClass.render时data中恢复为实际坐标；为了正确地恢复数据，**请保证render和resolve返回的数据中x轴的下标为偶数，y轴的下标为奇数**