// 2.请实现如下的函数，可以批量请求数据，所有的URL地址在urls参数中，
// 同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，
// 需要执行callback回调函数。发请求的函数可以使用fetch.

// function sendRequest(url: string[],max: number,callback: ()=>void);

function delay(url) {
  return new Promise((res) => {
    setTimeout(() => {
      res(url);
    }, Math.random() * 4000);
  });
}

function sendRequest(url, max, cb) {
  const len = url.length;
  if (len <= max) {
    Promise.all(url.map(item => delay(item))).then(data => cb(data));
    return;
  }
  const result = [];
  let run = 0;
  function add(num) {
    delay(url[num]).then((data) => {
      result.push(data);
      if (result.length === len) {
        cb(result);
        return;
      }
      if (max + run < len) {
        add(max + run);
        run += 1;
      }
    });
  }
  for (let i = 0; i < max; i += 1) {
    add(i);
  }
}

sendRequest(['a', 'b', 'c', 'd', 'e', 'f'], 11, (data) => {
  console.log(data);
});
