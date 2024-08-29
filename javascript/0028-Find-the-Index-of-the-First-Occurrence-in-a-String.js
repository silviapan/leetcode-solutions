/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let firstChar = needle[0];
  let needleLen = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === firstChar) {
      const substr = haystack.substring(i, i + needleLen);
      if (substr === needle) {
        return i;
      }
    }
  }
  return -1;
};
