function createCurry(funct) {
  const list = [];
  return function fun(...arg) {
    const len = arg.length;
    if (!len) {
      return funct(...list);
    }
    list.push(...arg);
    return fun;
  };
}

const add = createCurry((...arg) => {
  console.log('w-w', arg);
});
console.log(add);
console.log(add(1, 2, 3, 4));
console.log(add(1)(2)(3)(4)());
