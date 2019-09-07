/* eslint-disable no-param-reassign */
// 链表反转
function likelist(list) {
  let pre = { next: null };
  while (list) {
    pre.value = list.value;
    pre = { next: pre };
    list = list.next;
  }
  return pre.next;
}

function likelist2(list) {
  if (!list || !list.next) {
    return list;
  }
  const head = likelist2(list.next);
  list.next.next = list;
  list.next = null;
  return head;
}

function likelist3(list) {
  let obj = null;
  while (list) {
    const { next } = list;
    list.next = obj;
    obj = list;
    list = next;
  }
  return obj;
}

function ArrayToList(arr) {
  const createList = (val, next, pre) => {
    const obj = {
      value: val,
      next: next || null,
    };
    if (pre) {
      pre.next = obj;
    }
    return obj;
  };
  // return arr.reduce((pre, item) => createList(item, pre), null);
  const head = {};
  arr.reduce((pre, item) => createList(item, null, pre), head);
  return head.next;
}

function listToArray(list) {
  const arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  return arr;
}
console.log(ArrayToList([1, 2, 3]));
const likeList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};
// console.log(listToArray(likeList));
// console.log(JSON.stringify(likelist3(likeList), null, '\t'));
// 括号的有效性
function vality(str) {
  const arr = str.split('');
  const list = [];
  while (arr.length) {
    const item = arr.shift();
    if (item === '(') {
      list.unshift(item);
    } else {
      if (!list.length) {
        return false;
      }
      list.shift();
    }
  }
  if (list.length) {
    return false;
  }
  return true;
}

// const a = ['(((((', '(())', '((()'];
// a.forEach((item) => {
//   console.log(vality(item));
// });
