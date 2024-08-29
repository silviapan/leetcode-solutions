/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Inner and outer pointers
  let outerLeft = 0;
  let outerRight = matrix.length - 1;

  while (outerLeft <= outerRight) {
    let outerMid = Math.floor((outerLeft + outerRight) / 2);

    let curr = matrix[outerMid];
    let innerLeft = 0;
    let innerRight = curr.length - 1;

    while (innerLeft <= innerRight) {
      let innerMid = Math.floor((innerLeft + innerRight) / 2);

      if (target > curr[innerMid]) {
        innerLeft = innerMid + 1;
      } else if (target < curr[innerMid]) {
        innerRight = innerMid - 1;
      } else {
        return true;
      }
    }

    if (innerRight < 0) {
      outerRight = outerMid - 1;
    } else {
      outerLeft = outerMid + 1;
    }
  }
  return false;
};
