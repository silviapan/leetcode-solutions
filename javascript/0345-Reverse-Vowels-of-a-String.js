/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let str = s.split("");

  let left = 0;
  let right = str.length - 1;

  function isVowel(char) {
    return vowels.has(char.toLowerCase());
  }

  while (left < right) {
    const isLeftLowercase = isVowel(str[left]);
    const isRightLowercase = isVowel(str[right]);

    if (isLeftLowercase && isRightLowercase) {
      const tempLeft = str[left];
      str[left] = str[right];
      str[right] = tempLeft;
      left++;
      right--;
    } else if (isLeftLowercase) {
      right--;
    } else if (isRightLowercase) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return str.join("");
};
