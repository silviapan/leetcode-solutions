/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  const uniqueNums = new Set(nums);
  let lookForNum = true;
  let num = original;

  while (lookForNum) {
    if (uniqueNums.has(num)) {
      num *= 2;
    } else {
      lookforNum = false;
      return num;
    }
  }
};
