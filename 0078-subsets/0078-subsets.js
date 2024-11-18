/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

    const select = (arr=[], idx=0) => {
        result.push(arr);
        if(idx === nums.length) return;
        for(let i = idx; i < nums.length; i++) {
            select([...arr, nums[i]], i + 1);
        }
    }
    select();
    return result;
};