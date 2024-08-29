/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.replace(/\s+/g, " ").trim();
  let arr = str.split(" ");

  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    const leftWord = arr[left];
    const rightWord = arr[right];
    arr[left] = rightWord;
    arr[right] = leftWord;
    left++;
    right--;
  }

  let reversedString = arr.join(" ");
  return reversedString;
};
