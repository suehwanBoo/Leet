/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array.from({length : n+1}, () => 0);
    dp[0] = 1;
    for(let i = 1; i <= n; i++) {
        for(let j of [1,2]) {
            if(i - j >= 0) {
                dp[i] += dp[i - j];
            }
        }
    }
    return dp[n]
};