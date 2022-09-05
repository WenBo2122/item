/**
 *
 * @param {*} _className
 */
function Line(_className) {
  Box.call(this, _className);
}
Line.prototype = Object.create(Box.prototype);
Line.prototype.constructor = Line;
Line.prototype.render = function () {
  var $div = document.createElement("div");
  $div.className = this._className;
  $div.innerHTML = `<span></span>`;
  var $box = document.querySelector(".box");
  $box.appendChild($div);
};
