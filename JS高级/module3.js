/**3楼层滚动 */
// 为了解决调用模块不确定精准的顺序而报错
// IIFE 宽放大模式 
; (function (o) {
    console.log(o.c)
})(window.md1 || {})