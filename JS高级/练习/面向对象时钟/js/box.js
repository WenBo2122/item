/**
 * 创建盒子的构造函数
 * @param {String} _className 类名
 */
function Box(_className) {
  SmallCircle.call(this, _className);
}
Box.prototype = Object.create(SmallCircle.prototype);
Box.prototype.constructor = Box;
Box.prototype.render = function () {
  var $div = document.createElement("div");
  $div.className = this._className;
  // 添加到小圈里
  var $smallCircle = document.querySelector(".inner");
  $smallCircle.appendChild($div);
};
