/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);

  let nums1Unique = [],
    nums2Unique = [];

  nums1Set.forEach((num) => {
    if (!nums2Set.has(num)) {
      nums1Unique.push(num);
    }
  });

  nums2Set.forEach((num) => {
    if (!nums1Set.has(num)) {
      nums2Unique.push(num);
    }
  });

  return [nums1Unique, nums2Unique];
};
