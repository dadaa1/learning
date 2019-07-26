// 防抖
function debounce(method, wait) {
  let timeout = null;
  return function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      method.apply(this, arguments);
    }, wait);
  };
}

const aa = debounce((...arg) => {
  console.log(arg);
}, 3000);
