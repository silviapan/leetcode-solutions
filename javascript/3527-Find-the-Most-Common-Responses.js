/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function (responses) {
  let responseCount = {};
  let highestCount = 0;

  for (const response of responses) {
    const set = new Set(response);
    let count = 0;
    set.forEach((key) => {
      if (responseCount[key]) {
        count = responseCount[key] + 1;
      } else {
        count = 1;
      }
      responseCount[key] = count;
      if (count > highestCount) {
        highestCount = count;
      }
    });
  }

  let highestCountResponses = Object.keys(responseCount).filter(
    (key) => responseCount[key] === highestCount,
  );
  highestCountResponses.sort((a, b) => a.localeCompare(b));
  return highestCountResponses[0];
};
