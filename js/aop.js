Function.prototype.before = function (beforefn) {
  const self = this;
  return function () {
    beforefn(this, arguments); // 修正this
    return self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterfn) {
  const self = this;
  return function () {
    const ret = self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
let aa = function () {
  console.log('我是真正的函数');
};

aa = aa
  .before(() => {
    console.log('我是before函数');
  })
  .after(() => {
    console.log('我是after函数~');
  });

aa();
console.log('我执行完了~');
