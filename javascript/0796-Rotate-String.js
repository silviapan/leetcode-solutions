/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  let rotateCount = 0;
  let rotatedStr = s;

  while (rotateCount < s.length) {
    rotatedStr = rotatedStr.slice(1) + rotatedStr.at(0);
    if (rotatedStr === goal) {
      return true;
    }
    rotateCount++;
  }
  return false;
};
