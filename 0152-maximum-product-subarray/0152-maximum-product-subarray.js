/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const dp = Array.from({length : nums.length + 1}, () => [1,1]);
    let result = -Infinity;
    for(let i = 1; i < dp.length; i++) {
        const num = nums[i - 1];
        dp[i][0] = Math.max(dp[i - 1][0] * num, dp[i - 1][1] * num, num);
        dp[i][1] = Math.min(dp[i - 1][0] * num, dp[i - 1][1] * num, num);
        result = Math.max(result, dp[i][0])
    }
    return result;
};