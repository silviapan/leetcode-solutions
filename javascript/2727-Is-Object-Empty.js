/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  const objKeys = Object.keys(obj);

  return objKeys.length === 0;
};
