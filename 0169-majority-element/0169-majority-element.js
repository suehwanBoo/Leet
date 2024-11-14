/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    for(let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
        if(obj[num] >= nums.length / 2) return num;
    }
};