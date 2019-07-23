const arr = [0, 1, 2, 4, 5, 7, 13, 15, 16];

function rangeArray(array) {
  return array.reduce((pre, item, index) => {
    let preItem = null;
    if (index === 0) {
      preItem = String(item);
    }
    if (array[index - 1] + 1 === item) {
      preItem = pre[pre.length - 1].split('->')[0] + '->' + item;
      pre.pop();
    } else {
      preItem = String(item);
    }
    pre.push(preItem);
    return pre;
  }, []);
}

const a = rangeArray(arr);
console.log(a);
// ["0->2", "4->5", "7", "13", "15->16"]
