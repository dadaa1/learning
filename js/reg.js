// const str = '<div><p>1234<p><div>';

// const reg = str.match(/(?<=(?<title><p>)).*(?=\k<title>)/g);
// // console.log(reg);

// const str1 = `
// 1,
// 2,
// 3,
// `;

// const reg1 = str1.replace(/^|$/g, '#');
// // console.log(reg1);

// const str2 = 'danding1111111111111';
// const reg2 = str2.match(/(?<=ing)\w??/g);
// console.log(reg2);

const a = '123456789';
const b = a.replace(/(?!^)(?=(\d{3})+$)/g, ',');
console.log(b);

const c = 'hello world';
const d = c.replace(/(?!\s)\b./g, (str) => {
  console.log(`${str}1`);
  return str.toLocaleUpperCase();
});
console.log(d);

const e = '1244abc6548ds';
const f = e.replace(/\d/g, '').replace(/^./, str => str.toLocaleUpperCase());
console.log(f);

const g = 'abccba';
const h = g.test(/(.)/);
