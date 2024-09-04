/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    let idKey = arr1[i].id;
    obj[idKey] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    let idKey = arr2[i].id;
    obj[idKey] = { ...obj[idKey], ...arr2[i] };
  }

  return Object.values(obj);
};
