/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Start with two pointers, one at the beginning and one at the end and then they meet in the middle
  // Calculate the area at each interval and store the area if it's larger than what's already stored
  // Return the maximum area

  let leftPointer = 0;
  let rightPointer = height.length - 1;

  let maxArea = 0;

  while (rightPointer > leftPointer) {
    let leftHeight = height[leftPointer];
    let rightHeight = height[rightPointer];

    let width = rightPointer - leftPointer;
    let minHeight = Math.min(leftHeight, rightHeight);
    let area = width * minHeight;

    if (area > maxArea) {
      maxArea = area;
    }

    if (leftHeight < rightHeight) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return maxArea;
};
