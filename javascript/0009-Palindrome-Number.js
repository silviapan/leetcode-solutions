/**
 * @param {number} x
 * @return {boolean}
 */

// Solution that converts integer to string

var isPalindrome = function(x) {
    if (x < 0) return false;

    let str = x.toString();
    let reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
    
};

// Solution that doesn't convert integer to string

var isPalindrome = function(x) {
  if (x < 0) return false;

  let 

  const quotient = Math.floor(x / 10);
  console.log('q', quotient)
  const remainder = x % 10;
  console.log('r', remainder)
  const sum = (quotient * 10) + remainder;
  console.log('s', sum)

  return sum === x
};

