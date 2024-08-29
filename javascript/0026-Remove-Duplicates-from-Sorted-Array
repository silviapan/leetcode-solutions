/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // First number will always be unique, so start from index 1
  let leftPointer = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[leftPointer] = nums[i];
      leftPointer++;
    }
  }
  return leftPointer;
};
