/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let nums1Max = m - 1;
  let nums2Pointer = n - 1;
  let insertPointer = m + n - 1;

  while (nums2Pointer >= 0) {
    const num = nums2[nums2Pointer];
    if (num > nums1[nums1Max] || nums1Max < 0) {
      nums1[insertPointer] = num;
      nums2Pointer--;
    } else {
      nums1[insertPointer] = nums1[nums1Max];
      nums1Max--;
    }
    insertPointer--;
  }
};
