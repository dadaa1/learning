function formatNumber(str) {
  return str.replace(/(?!^)(?!\.)(?=(\d{3})+($))/g, ',');
}

const strs = [
  '1',
  '12',
  '123',
  '1234',
  '12345',
  '123456',
  '1234567',
  '1234568',
  '1234569',
  '1.23456',
  '12.3456',
  '123.456',
  '1234.56',
  '12345.6',
];
console.clear();
const formatNumberList = strs.map(formatNumber);
console.log(formatNumberList);
