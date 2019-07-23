const bus = {
  list: [],
  on(func) {
    this.list.push(func);
  },
  emit(...arg) {
    this.list.forEach(item => {
      item(...arg);
    });
  }
};

function ps() {
  return new Promise((res, rej) => {
    bus.on(res);
  });
}

async function init() {
  const data = await ps();
  console.log(data);
}
