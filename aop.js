Function.prototype.before = function(beforefn) {
  let self = this;
  return function() {
    beforefn(this, arguments); //修正this
    return self.apply(this, arguments);
  };
};

Function.prototype.after = function(afterfn) {
  let self = this;
  return function() {
    let ret = self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
let aa = function() {
  console.log('我是真正的函数');
};

aa = aa
  .before(function() {
    console.log('我是before函数');
  })
  .after(function() {
    console.log('我是after函数~');
  });

aa();
console.log('我执行完了~');
