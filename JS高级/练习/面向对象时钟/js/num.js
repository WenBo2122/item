/**
 * 创建数字的构造函数
 * @param {String} _className 类名
 * @param {Number} num 时钟数字
 */
function Num(_className, num) {
  Box.call(this, _className);
  this.num = num;
}
Num.prototype = Object.create(Box.prototype);
Num.prototype.constructor = Num;
Num.prototype.render = function () {
  var $div = document.createElement("div");
  $div.className = this._className;
  $div.innerHTML = `<span>${this.num}</span>`;
  // 添加到盒子里
  var $box = document.querySelector(".box");
  $box.appendChild($div);
};
