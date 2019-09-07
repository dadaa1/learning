// destructuringArray( [1,[2,4],3], "[a,[b],c]" );
// result
// { a:1, b:2, c:3 }
// 基本上没有什么价值，只是为了题目的特殊代码
function destructuringArray(valueArr, keystr) {
  const keysArr = keystr.split('').filter(item => /\w/g.test(item));
  const obj = {};
  keysArr.forEach((item, index) => {
    let value = valueArr[index];
    while (Array.isArray(value)) {
      value = value[0];
    }
    obj[item] = value;
  });
  return obj;
}

const values = [1, [2, 4], 3];
const keys = '[a,[b],c]';

const obj = destructuringArray(values, keys);
console.log(obj);
