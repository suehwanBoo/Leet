/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = Array.from({length: prices.length + 1}, () => 0);
    let minBuy = prices[0];
    for(let i = 1; i <= prices.length; i++) {
        dp[i] = Math.max(dp[i-1], prices[i - 1] - minBuy);
        minBuy = Math.min(prices[i - 1], minBuy)
    }

    return dp[prices.length];
    
};