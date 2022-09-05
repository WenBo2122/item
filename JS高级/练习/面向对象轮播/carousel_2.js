// 轮播对象
function CreateCarousel(options) {
  this.box = options.box || document.querySelector(".slider-box");
  this.images = options.images || document.querySelectorAll(".images a");
  this.prev = options.prev || document.querySelector(".navs .prev");
  this.next = options.next || document.querySelector(".navs .next");
  this.dots = options.dots || document.querySelectorAll(".pages .dot");
  this.activeIndex = 0; //触发索引
  this.timer = null; //定时器 id

  // 下一张
  this.next.addEventListener("click", this.goNext.bind(this)); // 事件执行函数的 this 指向被转换成当前构造函数的this
  // 上一张
  this.prev.addEventListener("click", this.goPrev.bind(this));
  // 点切换
  this.dots.forEach((dot, i) => {
    dot.onclick = this.goDot.bind(this, i);
  });

  // 自动轮播
  this.timer = setInterval(() => {
    this.next.click();
  }, 3000);

  // 随时清楚继续
  this.box.onmouseenter = function () {
    clearInterval(this.timer);
    this.timer = null;
  }.bind(this);
  this.box.onmouseleave = function () {
    this.timer = setInterval(() => {
      this.next.click();
    }, 3000);
  }.bind(this);
}

CreateCarousel.prototype = {
  // 切换下一页
  goNext() {
    let oidI = this.activeIndex;
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    // 切换图片
    this.tabImg(oidI, this.activeIndex);
  },

  // 切换上一页
  goPrev() {
    let oidI = this.activeIndex;
    if (this.activeIndex == 0) {
      this.activeIndex = this.images.length - 1;
    } else {
      this.activeIndex--;
    }
    // 切换图片
    this.tabImg(oidI, this.activeIndex);
  },

  // 圆点切换
  goDot(i) {
    this.tabImg(this.activeIndex, i);
    this.activeIndex = i; // 更新索引
  },

  tabImg(oldInd, newInd) {
    // 上一张图隐藏
    this.images[oldInd].classList.remove("active");
    this.dots[oldInd].classList.remove("active");
    // 下一张图显示
    this.images[newInd].classList.add("active");
    this.dots[newInd].classList.add("active");
  },
};
