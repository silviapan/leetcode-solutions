/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  let sortedArr = [...arr];
  return sortedArr.sort((a, b) => fn(a) - fn(b));
};
