/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const dp = Array.from({length : target + 1}, () => []);
    for(let i = 1; i <= target; i++) {
        for(let value of candidates) {
            if(i - value >= 0) {
                if(i === value) dp[i].push([value]);
                else {
                    for(let arr of dp[i - value]) {
                        dp[i].push([...arr, value]);
                    }
                }
            }
        }
    }
    const result = new Set();
   for(let value of dp[target]) {
    value.sort((a,b) => a - b);
    result.add(value.join(','));
   }
   const values =[ ...result.values()]
   return values.map(value => value.split(',').map(v => +v))
};