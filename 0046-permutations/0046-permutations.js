/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var permute = function(nums) {
    const result = [];
    function getPermutate(nums, save=[], visit={}) {
        if(save.length === nums.length) {
            result.push(save);
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(!visit[i]) {
                getPermutate(nums, [...save, nums[i]], {...visit, [i] : true});
            }
        }
    }
    getPermutate(nums);
    return result;
};