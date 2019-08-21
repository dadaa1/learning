// 暂时不考虑重复的情况
function all(arr) {
  const list = [];
  arr.forEach((item) => {
    const other = arr.filter(el => el !== item);
    if (other.length === 1) {
      list.push([item, ...other]);
    } else {
      all(other).forEach((el) => {
        list.push([item, ...el]);
      });
    }
  });
  return list;
}

const input = [1, 2, 3, 4];

const a = all(input);
console.log(a);
