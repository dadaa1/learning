// function add(...arg) {
//   function add1(list) {
//     return list.reduce((pre, item) => {
//       return pre + item;
//     }, 0);
//   }
//   const list = [];
//   const func = (...arg) => {
//     const len = arg.length;
//     list.push(...arg);
//     if (len === 0 || len > 1) {
//       return add1(list);
//     }
//     return func;
//   };
//   return func(...arg);
// }

function createCurry(funct) {
  return (...arg) => {
    const list = [];
    const func = (...arg) => {
      const len = arg.length;
      list.push(...arg);
      if (len === 0 || len > 1) {
        return funct(...list);
      }
      return func;
    };
    return func(...arg);
  };
}

const add = createCurry((...arg) => {
  console.log('w-w', arg);
});
console.log(add);
console.log(add(1, 2, 3, 4));
console.log(add(1)(2)(3)(4)());
