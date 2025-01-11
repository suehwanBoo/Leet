/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = (nums.length + 1) * Math.floor(nums.length / 2);
    sum += nums.length % 2 ? Math.floor(nums.length/2) + 1 : 0;
    return nums.reduce((acc,cur) => acc - cur,sum);
};