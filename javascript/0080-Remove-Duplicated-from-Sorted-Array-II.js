/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Start from the back of the array
  let i = nums.length - 1;
  let count = 1;

  while (i >= 0) {
    let currentNum = nums[i];
    let previousNum = nums[i - 1];
    // Does the current number equal the number to its left?
    if (currentNum === previousNum) {
      count++;
      if (count > 2) {
        nums.splice(i, 1);
      }
    } else {
      count = 1;
    }
    i--;
  }
};
