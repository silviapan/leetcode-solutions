/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArr = [];
  arr.map((n, idx) => newArr.push(fn(n, idx)));
  return newArr;
};
