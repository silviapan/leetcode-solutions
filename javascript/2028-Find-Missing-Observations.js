/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const totalSum = mean * (rolls.length + n);
  const rollsSum = rolls.reduce((accum, curr) => accum + curr, 0);
  const diff = totalSum - rollsSum;

  if (6 * n < diff || diff < n) {
    return [];
  }

  const avgNum = Math.floor(diff / n);
  let missing = new Array(n);
  missing.fill(avgNum);

  let remainder = diff % (avgNum * n);

  if (remainder === 0) return missing;

  for (let i = 0; i < remainder; i++) {
    missing[i]++;
  }

  return missing;
};
