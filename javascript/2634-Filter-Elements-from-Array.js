/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];
  arr.filter((n, idx) => {
    if (fn(n, idx)) {
      filteredArr.push(n);
    }
  });
  return filteredArr;
};
