/**1轮播 */
window.md1 = (function () {
    let count = 0

    // 利用闭包结构将后续需要使用的数据传递出去
    let getCount = function () {
        return count
    }

    return {
        c: getCount()
    }

})()

// 在作用域外访问内部数据，
// console.log(md1.count);
// console.log(md1.c)