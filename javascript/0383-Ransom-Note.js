/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  let noteMap = {};

  for (const char of ransomNote) {
    if (noteMap[char]) {
      noteMap[char]++;
    } else {
      noteMap[char] = 1;
    }
  }

  let magazineMap = {};

  for (const char of magazine) {
    if (magazineMap[char]) {
      magazineMap[char]++;
    } else {
      magazineMap[char] = 1;
    }
  }

  // Get all the characters in the ransomNote and see if they appear in the magazine
  // the same or more number of times

  let noteChars = Object.keys(noteMap);

  for (const char of noteChars) {
    if (!magazineMap[char] || magazineMap[char] < noteMap[char]) {
      return false;
    }
  }
  return true;
};
