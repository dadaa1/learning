function find(arr1, arr2) {
  const newArr2 = [...arr2];
  const map = {};
  arr1.forEach((item) => {
    map[item.id] = true;
  });
  while (newArr2.length) {
    const item = newArr2.pop();
    if (!map[item.id]) {
      return true;
    }
  }
  return false;
}

const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
const arr2 = [{ id: 1 }, { id: 3 }];

console.log(find(arr1, arr2));
