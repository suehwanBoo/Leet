/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = -Infinity;
    const dp = Array.from({length : nums.length + 1});
    dp[0] = -Infinity;

    for(let i = 1; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i -1], nums[i -1]);
        result = Math.max(dp[i], result);
    }

    return result;
};