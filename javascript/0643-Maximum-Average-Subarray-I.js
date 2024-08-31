/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let right = k - 1;
  let prevSum = null;
  let max = null;

  while (right < nums.length) {
    let sum;
    if (prevSum !== null) {
      sum = prevSum - nums[left - 1] + nums[right];
      if (sum > max) {
        max = sum;
      }
    } else {
      let arr = nums.slice(left, right + 1);
      sum = arr.reduce((a, b) => a + b);
      max = sum;
    }
    prevSum = sum;
    left++;
    right++;
  }

  const avg = max / k;
  return avg;
};
