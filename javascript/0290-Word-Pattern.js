/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  if (pattern.length !== words.length) return false;

  let obj = {};
  let uniqueWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern[i];
    if (obj[patternChar] && obj[patternChar] !== words[i]) {
      return false;
    }
    if (!obj[patternChar]) {
      if (uniqueWords.has(words[i])) {
        return false;
      } else {
        obj[patternChar] = words[i];
        uniqueWords.add(words[i]);
      }
    }
  }
  return true;
};
