/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const words = sentence.split(" ");
  let isCircular = true;

  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];
    const nextWord = words[i + 1] || words[0];

    if (currWord.at(-1) !== nextWord.at(0)) {
      isCircular = false;
    }
  }
  return isCircular;
};
