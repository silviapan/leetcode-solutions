/**
 * @param {string[]} strs
 * @return {string}
 */

/* The longest prefix can only be as long as the shortest word. 
 Check if each character in the shortest word is also present in the
 other words at the same index.
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  const sortedStringArr = strs.sort((a, b) => a.length - b.length);
  const shortestWord = sortedStringArr[0];
  let prefix = "";

  for (let i = 0; i < shortestWord.length; i++) {
    for (let j = 1; j < sortedStringArr.length; j++) {
      let word = sortedStringArr[j];
      if (word[i] != shortestWord[i]) {
        return prefix;
      } else {
        if (j === sortedStringArr.length - 1) {
          prefix += shortestWord[i];
        }
      }
    }
  }
  return prefix;
};
