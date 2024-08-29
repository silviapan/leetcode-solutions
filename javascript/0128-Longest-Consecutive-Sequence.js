/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let sortedNums = nums.sort((a, b) => a - b);

  let i = 0;
  let longestSeq = 1;
  let currentSeq = 1;

  while (i < nums.length - 1) {
    if (sortedNums[i + 1] === sortedNums[i] + 1) {
      currentSeq++;
      if (currentSeq > longestSeq) {
        longestSeq = currentSeq;
      }
    } else if (sortedNums[i + 1] !== sortedNums[i]) {
      currentSeq = 1;
    }
    i++;
  }
  return longestSeq;
};
