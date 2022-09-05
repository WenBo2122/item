// 获取元素
let $box = document.querySelector(".slider-box");
let $images = document.querySelectorAll(".images a");
let $prev = document.querySelector(".navs .prev");
let $next = document.querySelector(".navs .next");
let $dots = document.querySelectorAll(".pages .dot");

let activeIndex = 0; // 被触发的索引

// 点及下一张、切换下一张
$next.addEventListener("click", function () {
  let oidI = activeIndex;
  if (activeIndex < $images.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }
  // 切换图片
  tabImg(oidI, activeIndex);
});

// tabImg() 切换图片
function tabImg(oldInd, newInd) {
  // 上一张图隐藏
  $images[oldInd].classList.remove("active");
  $dots[oldInd].classList.remove("active");
  // 下一张图显示
  $images[newInd].classList.add("active");
  $dots[newInd].classList.add("active");
}

// 点及上一张、切换上一张
$prev.addEventListener("click", function () {
  let oidI = activeIndex;
  if (activeIndex == 0) {
    activeIndex = $images.length - 1;
  } else {
    activeIndex--;
  }
  // 切换图片
  tabImg(oidI, activeIndex);
});

// 圆点切换
$dots.forEach((dot, i) => {
  dot.addEventListener("click", function () {
    tabImg(activeIndex, i);
    activeIndex = i; // 更新索引
  });
});

// 自动
let timer = setInterval(() => {
  $next.click();
}, 3000);

// 鼠标在控制的时候不自动轮播
$box.addEventListener("mouseenter", function () {
  clearInterval(timer);
  timer = null; // 避免定时器没清理干净
});

$box.addEventListener("mouseleave", function () {
  timer = setInterval(() => {
    $next.click();
  }, 3000);
});
