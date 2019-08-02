function indexof(str) {
  const map = {};
  for (let i = 0; i < str.length; i += 1) {
    const val = str[i];
    if (map[val]) {
      return i;
    }
    map[val] = true;
  }
  return -1;
}

const a = indexof('p1p');
console.log(a);
