// function getUserInfo() {
//   return (() => {
//     const url = "xxxx";
//     let res = null;
//     return async () => {
//       if (!res) {
//         res = await fetch(url);
//         return res;
//       }
//       return res;
//     };
//   })();
// }

const getUserInfo = (() => {
  const url = 'xxxx';
  let res = null;
  return async () => {
    if (!res) {
      res = await fetch(url);
      return res;
    }
    return res;
  };
})();
