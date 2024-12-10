/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    while(true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) break;
    }
    let result = nums[0];
    while(result !== slow) {
        slow = nums[slow];
        result = nums[result];
    }
    return result;
};