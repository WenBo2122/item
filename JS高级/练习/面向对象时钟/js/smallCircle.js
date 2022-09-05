/**
 * 创建小圈的构造函数
 * @param {String} _className 类型
 */
function SmallCircle(_className) {
  // 继承属性
  BigCircle.call(this, _className);
}

// 继承方法
SmallCircle.prototype = Object.create(BigCircle.prototype);
SmallCircle.prototype.constructor = SmallCircle;

// 重写render方法
SmallCircle.prototype.render = function () {
  var $div = document.createElement("div");
  $div.className = this._className;
  // 获取大盒子
  var $bigCircle = document.querySelector(".outer");
  $bigCircle.appendChild($div);
};
