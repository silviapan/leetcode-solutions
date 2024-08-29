/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let charMap = {};
  let valSet = new Set();

  for (let i = 0; i < s.length; i++) {
    const k = s[i];
    const v = t[i];

    const alreadyExists = valSet.has(v);

    if (!alreadyExists) {
      charMap[k] = v;
    }
    valSet.add(v);
  }

  let newS = "";
  for (const char of s) {
    newS += charMap[char];
  }
  return newS === t;
};
