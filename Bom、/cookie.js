// 封装 ------ 服用
// 设置cookie -- setCookie
// 获取cookie --- getCookie
// 删除cookie --- removeCookie

// 设置cookie;
function setCookie(key, val, maxAge) {
  document.cookie = `${key}=${val};max-age=${maxAge}`;
}

// 删除cookie
function removeCookie(key) {
  setCookie(key, 0, -1); // 时间过期
}

// 获取cookie
function getCookie(key) {
  // 结果
  let v = null;
  // 读取 cookie
  let cookieStr = document.cookie;
  let cookieArr = cookieStr.split("; ");
  cookieArr.forEach((c) => {
    let keyVal = c.split("=");
    if (keyVal[0] == key) {
      v = keyVal[1];
    }
  });
  return v;
}
