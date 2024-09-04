/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return arr;

  let left = 0;
  let right = left + size;
  let chunkArr = [];

  while (left < arr.length) {
    let chunk = arr.slice(left, right);
    chunkArr.push(chunk);
    left += size;
    right += size;
  }

  return chunkArr;
};
