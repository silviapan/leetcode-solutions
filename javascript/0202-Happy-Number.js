/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sumsSet = new Set();

  function calc(num) {
    if (num === 1 || num === 7) return true;
    if (num <= 3) return false;

    if (sumsSet.has(num)) return false;

    let sum = 0;
    sumsSet.add(num);

    let arr = num.toString().split("");

    for (const digit of arr) {
      const val = Math.pow(parseInt(digit), 2);
      sum += val;
    }
    return calc(sum);
  }
  return calc(n);
};
