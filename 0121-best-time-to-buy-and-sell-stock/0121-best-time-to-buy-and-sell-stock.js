/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = Array.from({length: prices.length + 1}, () => -Infinity);
    let minBuy = Infinity;
    for(let i = 1; i <= prices.length; i++) {
        dp[i] = Math.max(dp[i-1], prices[i - 1] - minBuy);
        minBuy = Math.min(prices[i - 1], minBuy)
    }

    return dp[prices.length] > 0 ? dp[prices.length] : 0;
    
};