/* eslint-disable no-unused-expressions */
function transformObj(input) {
  const obj = {};
  Object.keys(input).forEach((item) => {
    const arr = item.split('.');
    let head = obj;
    let pre = null;
    let preTarget = '';
    while (arr.length) {
      const target = arr.shift();
      pre = head;
      preTarget = target;
      if (!head[target] || typeof head[target] !== 'object') {
        head[target] = {};
      }
      head = head[target];
    }
    pre[preTarget] = input[item];
    preTarget = '';
    pre = null;
    head = obj;
  });
  return obj;
}

// 不是我写的方法
function toDeepObj(obj) {
  const o = {};
  Object.keys(obj).forEach((key) => {
    const keys = key.split('.');
    let temp;
    for (let i = 0, len = keys.length; i < len; i += 1) {
      const k = keys[i];
      if (i === 0) {
        !o[k] && (o[k] = {});
        temp = o[k];
      } else if (i === len - 1) {
        temp[k] = obj[key];
      } else {
        !temp[k] && (temp[k] = {});
        temp = temp[k];
      }
    }
  });
  return o;
}
const obj = {
  'a.b.c': '1111',
  'a.b.d.d.e.d': '2222',
};
const n = 1;
function test(num) {
  console.log(`--------------------${num}---------------------`);
  console.time('toDeepObj');
  for (let i = 0; i < num; i++) toDeepObj(obj);
  console.timeEnd('toDeepObj');

  console.time('transformObj');
  for (let i = 0; i < num; i++) transformObj(obj);
  console.timeEnd('transformObj');
}

test(1);
test(10);
test(50);
test(100);
// console.log(JSON.stringify(a, null, '\t'));cl
