/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        let current = 1;
        for(let j = i; j < nums.length; j++) {
            current *= nums[j];
            if(result < current) result = current;
        }
    }
    return result;
};