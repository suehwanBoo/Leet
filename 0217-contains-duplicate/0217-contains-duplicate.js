/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const obj = {};
    for(let num of nums) {
        if(obj[num]) return true;
        else obj[num] = true;
    }
    return false;
};