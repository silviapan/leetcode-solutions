/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  if (temperatures.length === 0) return [0];

  let tempStack = [temperatures[0]];
  let indexStack = [0];
  let arr = [];

  for (let i = 1; i < temperatures.length; i++) {
    const tempAtTop = tempStack.at(-1);

    if (temperatures[i] > tempAtTop) {
      for (let j = tempStack.length - 1; j >= 0; j--) {
        if (temperatures[i] > tempStack[j]) {
          let diff = i - indexStack[j];
          arr[indexStack[j]] = diff;
          tempStack.pop();
          indexStack.pop();
        }
      }
    }
    tempStack.push(temperatures[i]);
    indexStack.push(i);
  }

  for (const idx of indexStack) {
    arr[idx] = 0;
  }
  return arr;
};
