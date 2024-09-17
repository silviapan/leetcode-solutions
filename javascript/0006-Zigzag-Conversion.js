/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s;

  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }

  let column = 0;
  let row = 0;
  let dir = "down";
  const lastRow = numRows - 1;

  for (let i = 0; i < s.length; i++) {
    arr[row][column] = s[i];
    if (row === lastRow) {
      column++;
      dir = "up";
    } else if (row === 0) {
      dir = "down";
    }

    if (dir === "down") {
      row++;
    } else {
      row--;
      column++;
    }
  }

  return arr.flat().join("");
};
