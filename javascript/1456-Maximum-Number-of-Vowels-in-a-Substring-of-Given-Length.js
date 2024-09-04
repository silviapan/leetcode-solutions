/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0;
  let right = k - 1;
  let max = 0;

  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let prevCount = 0;

  while (right < s.length) {
    let count = 0;
    if (!prevCount) {
      const sub = s.substring(left, right + 1);
      for (char of sub) {
        if (vowels.has(char)) {
          count++;
        }
      }
    } else {
      count = prevCount;
      if (vowels.has(s[left - 1])) {
        count--;
      }
      if (vowels.has(s[right])) {
        count++;
      }
    }

    if (count === k) return k;
    if (count > max) {
      max = count;
    }
    prevCount = count;
    left++;
    right++;
  }

  return max;
};
