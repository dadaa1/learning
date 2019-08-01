function getValue(obj, str, defaultValue = undefined) {
  const arr = str.split('.');
  return arr.reduce((pre, item) => {
    if (typeof pre === 'object' && pre !== null) {
      return pre[item];
    }
    return defaultValue;
  }, obj);
}

function setValue(obj, str, value) {
  const arr = str.split('.');
  const len = arr.length;
  console.log(arr);
  arr.reduce((pre, item, index) => {
    if (typeof pre === 'object' && pre !== null) {
      if (len - 1 === index) {
        pre[item] = value;
      }
      return pre[item];
    }
    return undefined;
  }, obj);
}

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};
console.log(getValue(obj, 'a.b.c', 23));
setValue(obj, 'a.b.d.d', 22);
console.log(obj);
