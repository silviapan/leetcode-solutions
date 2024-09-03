/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let dupes = {};
  for (let i = 0; i < nums.length; i++) {
    const numInDupes = dupes[nums[i]];
    if (numInDupes !== null) {
      if (i - numInDupes <= k) {
        return true;
      }
    }
    dupes[nums[i]] = i;
  }
  return false;
};
