Array.prototype.map2 = function (func, that) {
  if (typeof func !== 'function') {
    throw new Error('参数是函数');
  }
  return this.reduce((pre, item, index, arr) => {
    pre.push(func.call(that, item, index, arr));
    return pre;
  }, []);
};
