/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((a, b) => a + b, 0);

    // 총합이 홀수라면 절반으로 나눌 수 없으므로 false
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const dp = Array(target + 1).fill(false); // 0부터 target까지의 DP 테이블
    dp[0] = true; // 합이 0인 경우는 항상 가능

    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num]; // 현재 수를 포함하거나 포함하지 않는 경우
        }
    }

    return dp[target];
};