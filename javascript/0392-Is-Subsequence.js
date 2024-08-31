/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (t.length < s.length) return false;
  if (t.length === 1 && s.length === 1 && t === s) return true;
  if (s === "") return true;

  let sPointer = 0;
  let tPointer = 0;

  while (tPointer < t.length) {
    if (s[sPointer] === s.length - 1) {
      return true;
    }
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }
  if (sPointer === s.length) {
    return true;
  }
  return false;
};
