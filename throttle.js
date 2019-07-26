// 定时器实现，缺点：当停止后最后还会调用一次，不好
function throttle(method, wait) {
  let timeout = null;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        method.apply(this, arguments);
        timeout = null;
      }, wait);
    }
  };
}
// 时间戳实现
function throttle1(method, wait) {
  let prev = new Date().getTime();
  return function() {
    const now = new Date().getTime();
    if (now - prev >= wait) {
      method.apply(this, arguments);
      prev = new Date().getTime();
    }
  };
}

// 保证触发第一次
let throttle3 = function(fn, interval) {
  let self = fn,
    timer,
    firstTime = true;
  return function() {
    let arg = arguments,
      me = this;
    if (firstTime) {
      self.apply(me, arg);
      firstTime = false;
      return;
    }
    if (timer) {
      //定时器在的话，不执行
      return;
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      self.apply(me, arg);
    }, interval || 500);
  };
};
