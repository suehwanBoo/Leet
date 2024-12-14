/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = Array.from({length : nums.length}, () => 1);
    for(let i = 0; i< nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);
};