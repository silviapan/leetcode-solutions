/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  let copy = [...nums];
  for (let i = 0; i < len; i++) {
    let newIdx = (i + k) % len;
    nums[newIdx] = copy[i];
  }
};
