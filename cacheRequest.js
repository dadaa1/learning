// 请实现一个cacheRequest方法，保证当前ajax请求相同资源时，
// 真实网络层中，实际只发出一次请求（假设已经存在request方法用于封装ajax请求，
// 调用格式为request(url, successCallback, failCallback)）
// 比如调用方代码如下：

cacheRequest('/user', data => {
  console.log('我是从A请求的user, 数据为' + data);
});

const cacheRequest = (() => {
  const cache = {};
  return (url, successCallback, failCallback) => {
    if (cache[url]) {
      successCallback(cache[url]);
      return;
    }
    fetch(url)
      .then(data => {
        cache[url] = data;
        successCallback(data);
      })
      .catch(e => {
        failCallback(e);
      });
  };
})();

// 另外一个题目
function add(a) {
  return b => {
    return a + b;
  };
}
function sub(a) {
  return b => {
    return b - a;
  };
}
function createNumberFunction(num) {
  return func => {
    if (func) {
      return func(num);
    }
    return num;
  };
}
const one = createNumberFunction(1);
const two = createNumberFunction(2);

console.log(one(add(two()))); //3
console.log(two(sub(one()))); //1
