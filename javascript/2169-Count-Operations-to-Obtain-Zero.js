/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;

  let reachedZero = false;
  let count = 0;

  while (!reachedZero) {
    if (num1 >= num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
    count++;
    if (num1 === 0 || num2 === 0) {
      reachedZero = true;
      return count;
    }
  }
};
