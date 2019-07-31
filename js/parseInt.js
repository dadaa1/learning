// 提取最长有效数字
// '1024word'=>1024
// ' -1024word'=> -1024
// '10ww111' => 10

function parseInt(str) {
  const reg = /^\s*([-+]|\d)\d*/g;
  const num = str.match(reg);
  if (num && num.length) {
    return num[0] * 1;
  }
  return 0;
}

// test
const arr = ['+1024word', '    -1024word', '0000word1024', '10word24'];
arr.forEach(item => {
  const ps = parseInt(item);
  console.log(ps, typeof ps);
  console.log('------------------------------------');
});
