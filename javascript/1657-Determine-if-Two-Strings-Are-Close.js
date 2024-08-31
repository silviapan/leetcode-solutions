/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1Map = {};
  let word2Map = {};

  for (let i = 0; i < word1.length; i++) {
    if (word1Map[word1[i]]) {
      word1Map[word1[i]] += 1;
    } else {
      word1Map[word1[i]] = 1;
    }

    if (word2Map[word2[i]]) {
      word2Map[word2[i]] += 1;
    } else {
      word2Map[word2[i]] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    if (!word1Map[word2[i]] || !word2Map[word1[i]]) {
      return false;
    }
  }

  // Compare frequencies
  let word1Freq = Object.values(word1Map).sort();
  let word2Freq = Object.values(word2Map).sort();

  for (let i = 0; i < word1Freq.length; i++) {
    if (word1Freq[i] !== word2Freq[i]) {
      return false;
    }
  }
  return true;
};
