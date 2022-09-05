/**
 *
 * @param {*} h 时
 * @param {*} m 分
 * @param {*} s 秒
 */
function Run(h, m, s) {
  this.h = h;
  this.m = m;
  this.s = s;
}
Run.prototype.running = function () {
  // 创建时间对象
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  // var hour = 0;
  // var minute = 0;
  // var second = 30;
  // 需要旋转的角度
  var sDeg = (second / 60) * 360;
  // 00:01:01
  var mDeg = ((minute * 60 + second) / (60 * 60)) * 360;
  // 01:02:03
  var hDeg = ((hour * 60 * 60 + minute * 60 + second) / (60 * 60 * 12)) * 360;
  // 旋转指针
  this.h.style.transform = `rotate(${hDeg + 90}deg)`;
  this.m.style.transform = `rotate(${mDeg + 90}deg)`;
  this.s.style.transform = `rotate(${sDeg + 90}deg)`;
};
