/**
 * 创建大圈的构造函数
 * @param {String} _className 类名
 */
function BigCircle(_className) {
  this._className = _className;
}
// 给大圈构造函数添加一个渲染div的方法
BigCircle.prototype.render = function () {
  // 创建一个div
  var $div = document.createElement("div");
  // 添加类型
  $div.className = this._className;
  //挂载到body里
  document.body.appendChild($div);
};
