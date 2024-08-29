/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create hash map of the number and index
  // A number may show up more than once so the index positions are stored in array
  const numObj = {};
  nums.forEach((elem, i) => {
    if (numObj[elem]) {
      numObj[elem] = [...numObj[elem], i];
    } else {
      numObj[elem] = [i];
    }
  });

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    let diffIndex = numObj[diff];

    /* 
    If the diff appears more than once
    then it means the two numbers are identical.
    If the numbers aren't identical look for the diff in 
    the hash map and return the two indices 
    */

    if (diffIndex) {
      if (diffIndex.length > 1) {
        return diffIndex;
      } else if (diffIndex[0] != i) {
        return [...diffIndex, i];
      }
    }
  }
};
