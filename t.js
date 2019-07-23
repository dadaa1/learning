function add() {
  let args = [].slice.call(arguments);
  let fn = function() {
    let fn_args = [].slice.call(arguments);
    return add.apply(null, args.concat(fn_args));
  };
  fn.toString = function() {
    return args.reduce((a, b) => a + b);
  };
  return fn;
}
// console.log(add(1));
// console.log(add(1)(2));
// console.log(add(1)(2)(3));
// console.log(add(1)(2, 3));
// console.log(add(1, 2)(3));
// console.log(add(1, 2, 3));

let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];

function convert(list) {
  const res = [];
  const map = list.reduce((res, v) => ((res[v.id] = v), res), {});
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item);
      continue;
    }
    if (item.parentId in map) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}
const a = convert(list);
// console.log(JSON.stringify(a, null, '\t'));

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flat(array) {
  const arr = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      arr.push(...flat(item));
    } else {
      arr.push(item);
    }
  });
  return arr;
}

function sortAndunique(array) {
  array = [...new Set(array)];
  array.sort((a, b) => a - b);
  return array;
}

const b = sortAndunique(flat(arr));
console.log(b);
