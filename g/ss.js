function a(obj) {
  const arr = [];
  const { key } = obj;
  obj.datas.forEach((item) => {
    const o = {};
    item.forEach((el, index) => {
      o[key[index]] = el;
    });
    arr.push(o);
  });
  return arr;
}

const obj = {
  key: ['name', 'age', 'address', 'date'],
  datas: [['1', '2', '3', '4'], ['11', '22', '33', '44']],
};

// console.log(a(obj));
const res = a(obj);
