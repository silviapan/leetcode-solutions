/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];

  let arr = [];

  for (let i = 0; i < original.length; i += n) {
    let sub = original.slice(i, i + n);
    arr.push(sub);
  }
  return arr;
};
