/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let numsFound = false;
  let idx = [];

  while (!numsFound) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      numsFound = true;
      idx = [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return idx;
};
