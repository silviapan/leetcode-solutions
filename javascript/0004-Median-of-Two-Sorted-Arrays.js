/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = nums1.concat(nums2);
  merged.sort((a, b) => a - b);

  let middleIdx = merged.length / 2;
  let median = 0;

  if (middleIdx % 1 === 0.5) {
    const idx = Math.floor(middleIdx);
    median = merged[idx];
  } else {
    // Get the middle and following number
    let sum = merged[middleIdx - 1] + merged[middleIdx];
    let average = sum / 2;
    median = average;
  }

  return median;
};
