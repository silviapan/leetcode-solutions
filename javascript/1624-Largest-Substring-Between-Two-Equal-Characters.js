/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let max = 0;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (obj[char]) {
      obj[char][1] = i;
    } else {
      obj[char] = [i];
    }
  }

  let values = Object.values(obj).filter((arr) => arr.length > 1);

  if (values.length === 0) {
    return -1;
  }

  for (const val of values) {
    const diff = val[1] - val[0] - 1;
    if (diff > max) {
      max = diff;
    }
  }
  return max;
};

/**
 * Second solution - find the difference every time a letter is repeated.
 * Keep track of only the first time a character appears
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let max = -1;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // Subtract current index with first occurence
    if (obj[char] >= 0) {
      const diff = i - obj[char] - 1;
      if (diff > max) {
        max = diff;
      }
    } else {
      // Keep track of the first occurence
      obj[char] = i;
    }
  }

  return max;
};
