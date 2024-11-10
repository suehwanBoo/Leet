/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCnt = 0;
    const exceptZeroSum = nums.reduce((pre, cur)=>{
        let next = pre;
        if(cur === 0) zeroCnt += 1;
        else next *= cur;
        return next;
    },1)
    const result = Array.from({length: nums.length}, () => 0);
    if(zeroCnt >= 2) return result;
    for(let i = 0; i < nums.length; i++) {
        if(zeroCnt === 1) result[i] = nums[i] === 0 ? exceptZeroSum : 0
        else result[i] = Math.floor(exceptZeroSum / nums[i]) 
    }
    return result;
};