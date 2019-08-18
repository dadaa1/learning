// input
const data = {
  aa: {
    aa1: {
      aaa1: 1,
      aaa2: '2',
    },
    aa2: {
      aaa3: 3,
      aaa4: 4,
    },
  },
  bb: {
    bb1: {
      bbb1: 'aaa',
      bbb2: 6,
    },
    bb2: {
      bbb3: 7,
      bbb4: true,
    },
  },
};
// output: [1, "2", 3, 4, "aaa", 6, 7, true]

function pipe(input) {
  const arr = [];
  if (typeof input === 'object' && input !== null) {
    const objArr = Object.values(input);
    objArr.forEach((item) => {
      arr.push(...pipe(item));
    });
  } else {
    arr.push(input);
  }
  return arr;
}

const a = pipe(data);
console.log(a);
