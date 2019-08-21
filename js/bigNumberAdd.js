// 大数相加
function add(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  let d = 0; // 余数
  const result = [];
  while (arr1.length && arr2.length) {
    let num = Number(arr1.pop()) + Number(arr2.pop()) + d;
    d = parseInt(num / 10, 10);
    num %= 10;
    result.unshift(num);
  }
  while (arr1.length) {
    let num = Number(arr1.pop()) + d;
    d = parseInt(num / 10, 10);
    num %= 10;
    result.unshift(num);
  }
  while (arr2.length) {
    let num = Number(arr2.pop()) + d;
    d = parseInt(num / 10, 10);
    num %= 10;
    result.unshift(num);
  }
  if (d) {
    result.unshift(1);
  }
  return result.join('');
}

const a = add('11', '1999');
console.log(a);

function sub(str1, str2) {
  // str1-str2
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const result = [];
}
