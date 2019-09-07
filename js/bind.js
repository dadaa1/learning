/* eslint-disable no-extend-native */
// 我想去实现一个bind的功能~
// apply的参数是数组形式的~
Function.prototype.bind = function () {
  // console.log(this);
  const self = this;
  const needThis = [...arguments][0]; // 获取需要指向的this值
  return function () {
    return self.apply(needThis, [...arguments]);
  };
};

const name = 'top';
const obj1 = {
  name: 'privte',
};
const obj2 = {
  name: 'objjjjjjjj',
};
function aa() {
  return this.name;
}

const hh1 = aa.bind(obj1)();
const hh2 = aa.bind(obj2)();
const hh3 = aa.bind(this)();
console.log(hh1);
console.log(hh2);
console.log(hh3);
