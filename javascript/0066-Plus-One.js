/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Add one to the last digit
  const lastIdx = digits.length - 1;
  const lastNum = digits[lastIdx] + 1;
  digits[lastIdx] = lastNum;

  if (lastNum < 10) {
    return digits;
  }

  // Loop through from the back and update the numbers until there's a number
  // that's less than 10 and return digits
  for (let i = lastIdx; i >= 0; i--) {
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
    } else {
      digits[i - 1] += 1;
    }
  }

  return digits;
};
