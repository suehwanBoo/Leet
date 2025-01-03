/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const zeroIdx = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroIdx.push(i);
            break;
        }
    }
    let startIdx = 0;
    let end = zeroIdx[0] + 1;
    while(end < nums.length) {
        if(nums[end] === 0) zeroIdx.push(end);
        else {
            const start = zeroIdx[startIdx];
            [nums[end], nums[start]] = [nums[start], nums[end]];
            startIdx++;
            zeroIdx.push(end);
        }
        end++;
    }
};