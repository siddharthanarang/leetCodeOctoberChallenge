// Best Time to Buy and Sell Stock IV
//
//
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
//
//   Design an algorithm to find the maximum profit. You may complete at most k transactions.
//
//   Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
//
// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.


/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

  if(prices.length == 0) return 0;

  if(k > (prices.length / 2) ){
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
      if(prices[i] > prices[i - 1]){
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }
  else{
    let storage = new Array(prices.length).fill(0);
    let size = prices.length;
    for(let j = 1; j <= k; j++){
      let min = prices[0];
      let max = 0;
      for(let i = 0; i < size; i++){
        min = Math.min(min, prices[i] - storage[i]);
        max = Math.max(max, prices[i] - min);
        storage[i] = max
      }
    }
    return storage.pop();
  }
};

console.log(`Max profit is `, maxProfit(2, [2,4,1]));