/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const jobs = startTime.map((start,idx) => [start, endTime[idx], profit[idx]]);
    jobs.sort((a,b) => a[1] - b[1]);
    const dp = Array.from({length : startTime.length}, () => 0);
    dp[0] = jobs[0][2];
    for(let i = 1; i < dp.length; i++) {
        let [start, end, money] = jobs[i];
        const idx = findMergeIdx(i-1, start);
        if(idx !== -1) money += dp[idx]
        // start보다 작은 최대 이전의 dp idx값을 찾아야함
        dp[i] = Math.max(dp[i - 1], money);
    }
    function findMergeIdx(right, target) {
        let left = 0;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(jobs[mid][1] <= target) {
                if(jobs[mid + 1][1] <= target) left = mid + 1;
                else return mid;
            } else right = mid - 1;
        }
        return -1;
    }

    return dp[dp.length - 1];
};