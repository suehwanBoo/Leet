/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 구간합 문제, 시간복잡도 O(n)
    let nowSum = 0;
    let table = {0 : 1};
    let result = 0;
    for(let num of nums) {
        nowSum += num;
        result += table[nowSum - k] || 0;
        table[nowSum] = (table[nowSum] ||  0) + 1;
    }
    return result;

};