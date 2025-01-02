/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for(let [key, cnt] of map) if(cnt === 1) return key;
    return -1;
};