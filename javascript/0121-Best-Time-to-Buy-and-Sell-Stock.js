/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let lowestPrice = prices[0];

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    }
    let diff = prices[i + 1] - lowestPrice;
    if (diff > profit) {
      profit = diff;
    }
  }
  return profit;
};
