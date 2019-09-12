new 操作符做了什么

<!-- 创建一个新对象
把该对象的原型指向构造函数的原型
将构造函数的作用域赋给新对象(因此this就指向了这个新对象)
执行构造函数中的代码(为这个对象添加属性)
返回新对象 -->

```js
function myNew(fn, ...arg) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, arg);
  return obj;
}
```
