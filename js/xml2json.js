function qxml2json(str) {
  const json = {};
  const keys = str.match(/(?<=<)([^>\/]*)(?=>)/g);
  const key = keys[0];
  // const value=
  const arr = str.match(/<([^>]*)>.*<\/\1>/g);
  console.log(key, arr);
  json[key] = 1;
  return json;
}

function xml2json(str) {
  const json = {};
  const arr = str.split(/<[^>]*>+?/).filter(item => !!item && item !== '\n');
  return arr;
}
function json2xml(json) {
  if (typeof json !== 'object') {
    return json;
  }
  let xml = '';
  Object.entries(json).forEach(([k, v]) => {
    let content = v;
    if (Array.isArray(content)) {
      const xmlArr = content
        .map((item) => {
          const value = typeof item === 'string' ? item : json2xml(item);
          return `<${k}>${value}</${k}>`;
        })
        .join('');
      xml += xmlArr;
      return;
    }
    if (typeof v === 'object' && !Array.isArray(content)) {
      content = json2xml(v);
    }
    xml += `<${k}>${content}</${k}>`;
  });
  return xml;
}

const json = {
  a: 1,
  b: {
    c: 2,
  },
  c: [
    {
      h: '一',
      j: '二',
    },
    {
      h: '一',
      j: '二',
    },
    {
      h: 1,
      j: '二',
    },
  ],
};
const xml = `
<json><a>1</a><b>2</b><c><d>123</d><d>465</d></c></json>
`;
const str = json2xml(json);
console.log(str);
const str2 = xml2json(xml);
// console.log(str2);
