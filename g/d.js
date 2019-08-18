function flat(arr) {
  const list = arr.reduce((pre, item) => {
    if (Array.isArray(item)) {
      pre.push(...flat(item));
    } else {
      pre.push(item);
    }
    return pre;
  }, []);
  return [...new Set(list)].sort((a, b) => a - b);
}

const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// const a = flat(arr);
// console.log(a);

function flat1(array) {
  const list = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flat1(item).forEach((_item) => {
        list[_item] = _item;
      });
    } else {
      list[item] = item;
    }
  });
  return list.filter(item => item);
}

const a = flat1(arr);
console.log(a);
