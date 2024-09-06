/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  let pointer = 0;
  let zeroPointer = null;

  while (pointer < nums.length) {
    if (nums[pointer] !== 0 && zeroPointer !== null) {
      nums[zeroPointer] = nums[pointer];
      nums[pointer] = 0;
      zeroPointer++;
    }
    if (nums[pointer] === 0 && zeroPointer === null) {
      zeroPointer = pointer;
    }
    pointer++;
  }
};
