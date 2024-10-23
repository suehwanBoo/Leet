/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mutateNums = nums.map((num,idx)=>({value:num, idx:idx}))
    mutateNums.sort((a,b)=>a.value-b.value)
    let left = 0;
    let right = mutateNums.length - 1;
    while(left < right) {
        const sum = mutateNums[left].value + mutateNums[right].value;
        if(sum === target) return [mutateNums[left].idx, mutateNums[right].idx];
        else if(sum > target) right -=1;
        else left += 1;
    }
};