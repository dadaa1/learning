/**
* 有效括号
*/

function isValid(str) {
  const list = str.split('');
  const stack = [];
  while (list.length) {
    const item = list.shift();
    if (item === ')') {
      if (stack.shift() === '(') {
        continue;
      } else {
        return false;
      }
    }
    if (item === '(') {
      stack.unshift(item);
    }
  }
  // if (stack.length) {
  //   return false;
  // }
  // return true;
  return !stack.length;
}

const strList = ['()', ')(', '(((()', '()()()()(())', '())('];

strList.forEach((el) => {
  console.log(isValid(el));
});
