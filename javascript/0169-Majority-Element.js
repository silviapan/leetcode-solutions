/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let threshold = nums.length / 2;
  let numObj = {};
  for (let num of nums) {
    if (numObj[num]) {
      const newCount = numObj[num] + 1;
      if (newCount > threshold) {
        return num;
      } else {
        numObj[num] = numObj[num] + 1;
      }
    } else {
      numObj[num] = 1;
    }
  }
};
