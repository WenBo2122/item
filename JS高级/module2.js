/**2切换 */

// 继承 
// IIFE 放大模式

let md2 = (function (obj) {
    console.log(md1.c)
    let str = 'world'
    return {
        c: obj.c,
        d: 'Hello',
        e: function () {
            return str
        }
    }
})(md1)

console.log(md2.c)
console.log(md2.d)
console.log(md2.e())