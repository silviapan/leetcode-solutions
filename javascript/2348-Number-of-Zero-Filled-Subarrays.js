/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let zeroCount = 0;
  let currCount = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 0) {
      currCount++;
    } else {
      const occurrences = (currCount * (currCount + 1)) / 2;
      zeroCount += occurrences;
      currCount = 0;
    }
  }

  return zeroCount;
};
