// // 元字符和量词
// // http://www.runoob.com/jsref/jsref-obj-regexp.html
// // \w \d \b
// // ? * +

// // 正则表达式方法
// // exec test
// // 字符串中的正则表达式
// // search match replace split

// // 最简单的正则
// // 1，字符的匹配
// const reg1 = /\bhello\b/;
// console.log('1', reg1.test('hello'));

// //2，量词的匹配
// const reg2 = /1{5}/;
// console.log('2', reg2.test(111111));
// console.log(3, '111111'.match(reg2));

// // 3，分支管理
// // 原则：范围重合时，精确匹配在前、
// const strww = 'hello nihao good goodbey';
// const reg3 = /good|goodbye/; // 不正确
// // 颜色匹配
// const str1 = '#aaa #bbb #13d3f2';
const pipe = str => 'rgb(' + str + ')';
// const str2 = str1.replace(/#(([1-9a-fA-F]){3}){1,2}/g, function(arg) {
//   console.log('arg', arg);
//   return pipe(arg);
// });
// console.log(str2);
// // 时间匹配 02:44 18:56
// const reg4 = /([01][0-9]|2[0-3]):[0-5][0-9]/;
// console.log('time', reg4.test('23:59'), reg4.test('29:59'));
// // id匹配
// var str3_1 = '<div id="container" class="main"></div>';
// console.log(str3_1.match(/id=".*?"/g)); // 性能不好
// console.log(str3.match(/id="[^"]*"/));

// // 4，位置匹配
// //es5  ^ $ \b (?=p) (?!p)

// const str4 = 'hello';
// const str5 = str4.replace(/^|$/g, str => {
//   // 这里会有一个多行的概念m
//   return '#';
// });

// console.log(str5);

// // 正向零宽断言   
// const str6 = '11,45,78,79,56,78,68';
// const str6_6 = 'ying,ming,ling';
// // 匹配8前面的7
// const str7 = str6.replace(/7(?=8)/g, () => {
//   return '#';
// });
// console.log(str7);

// 5，分组
const pipe = str => 'rgb(' + str + ')';

const str11 = '#aaa #bbb #13d3f2';
const str22 = str11.replace(/#(([1-9a-fA-F]){6}|\2{3})/g, function(arg) {
  console.log('arg', arg);
  return pipe(arg);
});
console.log(str22);
