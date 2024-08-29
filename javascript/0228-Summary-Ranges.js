/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let prev = nums[0];
  let curr = [prev];
  let ranges = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === prev + 1) {
      curr.push(nums[i]);
    } else {
      ranges.push(curr);
      curr = [nums[i]];
    }
    prev = nums[i];
  }

  let stringRanges = [];

  for (const range of ranges) {
    let str = `${range[0]}`;
    if (range.length > 1) {
      str += `->${range.at(-1)}`;
    }
    stringRanges.push(str);
  }

  return stringRanges;
};
