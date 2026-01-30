/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const chars = s.split("");
  const uniqueChars = new Set();
  for (const char of chars) {
    if (uniqueChars.has(char)) {
      return char;
    }
    uniqueChars.add(char);
  }
};
