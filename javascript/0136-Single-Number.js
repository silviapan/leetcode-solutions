/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    let currentNum = nums[i];
    let nextNum = nums[i + 1];
    if (currentNum !== nextNum) {
      return currentNum;
    }
  }
};
