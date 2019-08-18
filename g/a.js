/* eslint-disable no-param-reassign */
function changeData(data, list) {
  if (!list.length) {
    return;
  }
  const head = [];
  data.forEach((item) => {
    Object.values(item).forEach((el) => {
      el.forEach((obj) => {
        head[obj.id] = obj;
      });
    });
  });
  list.forEach((item) => {
    head[item].checked = true;
  });
}

function changeData1(data, list) {
  const map = {
    1: 'columnA',
    2: 'columnB',
    3: 'columnC',
    4: 'columnC',
    5: 'columnA',
    6: 'columnB',
    7: 'columnB',
    8: 'columnC',
  };
  list.forEach((item) => {
    const j = item > 4 ? 1 : 0;
    let n = 0;
    if (item === 4 || item === 7) {
      n = 1;
    }
    data[j][map[item]][n].checked = true;
    n = 0;
  });
}

const ids = [1, 2, 3, 4, 5, 6, 7, 8];
const data = [
  {
    columnA: [{ name: '物品类别', id: 1, checked: false }],
    columnB: [{ name: '物品', id: 2, checked: false }],
    columnC: [{ name: '模板', id: 3, checked: false }, { name: '价格', id: 4, checked: false }],
  },
  {
    columnA: [{ name: '关系', id: 5, checked: false }],
    columnB: [{ name: '档口', id: 6, checked: false }, { name: '物品', id: 7, checked: false }],
    columnC: [{ name: '仓库', id: 8, checked: false }],
  },
];

changeData1(data, ids);

console.log(data);
