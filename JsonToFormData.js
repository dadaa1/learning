function JsonToFormData(json) {
  let formdata = new FormData();
  for (let key in json) {
    formdata.append(key, json[key]);
  }
  return formdata;
}
function formDataToJson(formdata) {
  let arr = formdata.entries();
  let obj = {};
  for (let [key, value] of arr) {
    console.log(key, value);
    obj[key] = value;
  }
  return obj;
}

// // let accc=JsonToFormData({
// // 	a:1,
// // 	b:2,
// // 	c:3
// // })

// // let bccc=formDataToJson(accc);

// // console.log('我是bccc',bccc)

// // console.log(accc);
// // for (var [key, value] of accc.entries()) {
// //   console.log(key, value);
// // }
// function aa(){
// 	let f=new FormData(document.getElementById('form'));
// 	let f1=formDataToJson(f);
// 	console.log(f1);
// 	let f2=JsonToFormData(f1);
// 	console.log(f2);
// 	for (var [key, value] of f2.entries()) {
// 	  console.log('iiiiii',key, value);
// 	}
// }
