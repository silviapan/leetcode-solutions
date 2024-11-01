/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let newString = s[0];
  let charCount = 1;

  for (let i = 1; i < s.length; i++) {
    const prevChar = s[i - 1];
    const currChar = s[i];

    if (prevChar !== currChar) {
      newString += currChar;
      charCount = 1;
    } else {
      if (charCount < 2) {
        newString += currChar;
      }
      charCount++;
    }
  }
  return newString;
};
