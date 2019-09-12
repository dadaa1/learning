// function quick(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const base = arr.pop();
//   const left = [];
//   const right = [];
//   while()
// }

// 打家劫舍题目
const arr = [1, 2, 4, 1, 7, 8, 3];

const map = {};
function dp(list) {
  const len = list.length;
  if (len === 1) {
    return list[0];
  }
  if (len === 2) {
    return Math.max(...list);
  }
  const item = list.pop();
  let A = map[len];
  if (!A) {
    A = dp([...list]);
  }
  // const A = dp([...list]);
  list.pop();
  let B = map[item];
  // const B = dp([...list]);
  if (!B) {
    B = dp([...list]);
  }
  return Math.max(A, B + item);
}

console.log(dp(arr));
