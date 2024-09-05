/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  for (const num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  const occurrences = Object.values(obj);
  const occurrencesSet = new Set(occurrences);

  return occurrences.length === occurrencesSet.size;
};
