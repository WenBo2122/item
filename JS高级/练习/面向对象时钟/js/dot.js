/**
 *
 * @param {*} _className
 */
function Dot(_className) {
  Box.call(this, _className);
}

Dot.prototype = Object.create(Box.prototype);
Dot.prototype.constructor = Dot;

Dot.prototype.render = function () {
  var $div = document.createElement("div");
  $div.className = this._className;
  // $div.innerHTML=`<span></span>`
  var $span = document.createElement("span");
  $div.appendChild($span);
  // 新增div添加到box里
  var $box = document.querySelector(".box");
  $box.appendChild($div);
};
