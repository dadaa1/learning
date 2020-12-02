const entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd',
      },
    },
    d: {
      xx: 'adxx',
    },
    e: 'ae',
  },
};

// 要求转换成如下对象
const output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae',
};
function t(input) {
  const res = {};
  function loop(e, str) {
    Object.keys(e).forEach((item) => {
      let key = `${str}.${item}`;
      if (!str) {
        key = `${item}`;
      }
      if (typeof e[item] === 'object') {
        loop(e[item], key);
      } else {
        res[key] = e[item];
      }
    });
  }
  loop(input, '');
  return res;
}

// console.log(t(entry));

const nums1 = [1, 2, 3, 5, 7, 8, 10];

const arr = nums1.reduce((pre, item) => {
  const pArr = pre.pop();
  if (Array.isArray(pArr)) {
    const pItem = pArr.pop();
    if (pItem) {
      if (pItem + 1 === item) {
        pArr.push(pItem, item);
        pre.push(pArr);
      } else {
        pArr.push(pItem);
        pre.push(pArr, [item]);
      }
    }
  } else {
    pre.push([item]);
  }
  return pre;
}, []).map(item => item.join('~')).join(',');
console.log(arr);
