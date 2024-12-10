/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const arr = new Array(nums.length + 1).fill(0);
    for(let num of nums) {
        arr[num] += 1;
        if(arr[num] === 2) return num;
    }
    return -1;
};