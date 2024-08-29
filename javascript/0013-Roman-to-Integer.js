/**
 * @param {string} s
 * @return {number}
 */

const symbolToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/*
If the current symbol is larger than or equal to the next symbol,
add the current value and move over one symbol.
If the current symbol is smaller than the next symbol,
subtract current value from the next value and move over two symbols.
*/
var romanToInt = function (s) {
  let idx = 0;
  let sum = 0;
  while (idx < s.length) {
    let currentSymbol = s[idx];
    let currentNum = symbolToInt[currentSymbol];
    let nextSymbol = s[idx + 1];
    let nextNum = symbolToInt[nextSymbol];

    if (!nextNum || currentNum >= nextNum) {
      sum += currentNum;
      idx++;
    } else {
      let partialSum = nextNum - currentNum;
      sum += partialSum;
      idx += 2;
    }
  }
  return sum;
};
