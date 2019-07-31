// 数组压平

function flatten(arr) {
  return arr.reduce((pre, item) => {
    if (Array.isArray(item)) {
      pre.push(...flatten(item));
    } else {
      pre.push(item);
    }
    return pre;
  }, []);
}
