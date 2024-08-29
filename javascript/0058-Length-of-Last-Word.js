/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Trim the string and start from the end of the string
  // Keep count until it's a space and then return the count
  let str = s.trim();
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    console.log(char);
    if (char !== " ") {
      count++;
    } else {
      return count;
    }
  }
  return count;
};
