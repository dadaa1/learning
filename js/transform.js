/* eslint-disable prefer-spread */
// transform.js
// 特定语法匹配替换
// 说明：匹配字符串中形如 =g文字文字= 的语法，并将相应部分转化为对应的标签文字文字
// 示例：
// transform('=g1.18 进入开发=');  // <g>1.18 进入开发</g>
// transform('=g1.23 联调(-1)=，=g1.25 发布(+1)=');//  <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
// transform('1.25 发布'); // 1.25 发布

const str = '1.23 联调(-1)';
function transform(str) {
  return str.replace(/=g/g, '<g>').replace(/=/g, '</g>');
}

const a = transform(str);
console.log(a);

// 合并数组中相邻且重复的元素
// 说明：请实现一个函数 merge，传入一个数组，合并数组中【相邻且重复】的元素。
// 示例：
// merge([3,2,2,4,5,5,6,2,1]); // 输出[3,2,4,5,6,2,1]
// merge([3,2,3]); // 输出[3,2,3]
// merge([2,2,3]); // 输出[2,3]

function merge(array) {
  return array.reduce((arr, item, index) => {
    if (!index || item !== arr[index - 1]) {
      arr.push(item);
      return arr;
    }
    return arr;
  }, []);
}

const b = merge([3, 2, 2, 4, 5, 5, 6, 2, 1]);
console.log(b);

// 函数组合运行
// 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
// 如composeFunctions(fn1,fn2,fn3,fn4)等价于fn4(fn3(fn2(fn1))。
// 示例：
// const add = x => x + 1;
// const multiply = (x, y) => x * y;
// const multiplyAdd = composeFunctions(multiply, add);
// multiplyAdd(3, 4) // 返回 13

function composeFunctions(...arg) {
  return (...newFuncArg) => arg.reduce((str, item, index) => {
    if (!index) {
      return item.apply(null, newFuncArg);
    }
    return item.call(null, str);
  }, '');
}

const sss = x => x * x;
const add = x => x + 1;
const multiply = (x, y) => x * y;
const multiplyAdd = composeFunctions(multiply, add, sss);
const c = multiplyAdd(3, 4); // 返回 13
console.log(c);

// function machine() {

// }
// machine('ygy').execute()
// // start ygy
// machine('ygy').do('eat').execute();
// // start ygy
// // ygy eat
// machine('ygy').wait(5).do('eat').execute();
// // start ygy
// // wait 5s（这里等待了5s）
// // ygy eat
// machine('ygy').waitFirst(5).do('eat').execute();
// // wait 5s
// // start ygy
// ygy eat

function machine(str) {
  function wait(time) {
    return new Promise((res) => {
      setTimeout(() => {
        console.log(`wait ${time}s`);
        res();
      }, Number(time) * 1000);
    });
  }
  const arr = [{ key: 'start', value: str }];
  const obj = {
    execute: () => {
      arr.reduce((promise, item) => {
        if (item.key === 'waitFirst' || item.key === 'wait') {
          return promise.then(() => wait(item.value));
        }
        if (item.key === 'start' || item.key === 'do') {
          return promise.then(() => {
            console.log(item.value);
            return Promise.resolve();
          });
        }
        return promise;
      }, Promise.resolve());
    },
    do: (_str) => {
      arr.push({ key: 'do', value: `${str}${_str}` });
      return obj;
    },
    wait: (time) => {
      arr.push({ key: 'wait', value: time });
      return obj;
    },
    waitFirst: (time) => {
      arr.unshift({ key: 'waitFirst', value: time });
      return obj;
    },
  };
  return obj;
}
// function machine(str1) {
//   let queue = [];
//   queue.push(`start ${str1}`);

//   let make = () => ({
//     execute() {
//       queue.reduce((pre, cur) => {
//         if (typeof cur === 'string') {
//           return pre.then(() => console.log(cur));
//         } else {
//           return pre.then(
//             () => new Promise(res => setTimeout(() => res(), cur * 1000))
//           );
//         }
//       }, Promise.resolve());
//     },
//     do(str2) {
//       queue.push(str1 + ' ' + str2);
//       return make();
//     },
//     wait(sec) {
//       queue.push(sec);
//       return make();
//     },
//     waitFirst(sec) {
//       queue.unshift(sec);
//       return make();
//     }
//   });

//   return make();
// }
machine('ygy')
  .waitFirst(5)
  .do('eat')
  .execute();
