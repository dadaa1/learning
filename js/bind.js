//我想去实现一个bind的功能~
//apply的参数是数组形式的~
Function.prototype.bind = function() {
  //console.log(this);
  let self = this;
  let needThis = [...arguments][0]; //获取需要指向的this值
  return function() {
    return self.apply(needThis, [...arguments]);
  };
};

let name = 'top';
let obj1 = {
  name: 'privte'
};
let obj2 = {
  name: 'objjjjjjjj'
};
function aa() {
  return this.name;
}

let hh1 = aa.bind(obj1)();
let hh2 = aa.bind(obj2)();
let hh3 = aa.bind(this)();
console.log(hh1);
console.log(hh2);
console.log(hh3);
