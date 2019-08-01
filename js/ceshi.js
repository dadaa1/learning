/**
 * 背景是这样的：
 * 进行一些操作，然后到达某个地方，等待点击再继续
 * 点击时间不确定，只能监听，用观察者模式来实现
 * 原理，将reslove存下，等待点击时调用改变promise的状态，然后继续
 */

const bus = {
  list: [],
  on(func) {
    this.list.push(func);
  },
  emit(...arg) {
    this.list.forEach((item) => {
      item(...arg);
    });
  },
};
window.on('click', () => {
  bus.emit('clicked');
});

function ps() {
  return new Promise((res, rej) => {
    bus.on(res);
  });
}

async function init() {
  const data = await ps();
  console.log(data);
}
