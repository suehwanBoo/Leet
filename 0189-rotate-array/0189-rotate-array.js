/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const REST = k % nums.length;
    const restArr = [];
    const otherArr = [];
    const N = nums.length;
    for(let i = 0; i < N; i++) {
        if(i < REST) restArr.push(nums.pop());
        else otherArr.push(nums.pop());
    }
    while(restArr.length) nums.push(restArr.pop());
    while(otherArr.length) nums.push(otherArr.pop());
};