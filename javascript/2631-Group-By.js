/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let obj = {};
  this.map((n) => {
    if (obj[fn(n)]) {
      obj[fn(n)].push(n);
    } else {
      obj[fn(n)] = [n];
    }
  });
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
