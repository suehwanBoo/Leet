/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let lastIncIdx = -1;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < nums[i + 1]) lastIncIdx = i;
    }
    if(lastIncIdx === -1) nums.sort((a,b) => a-b);
    else {
        let min = lastIncIdx + 1;
        for(let i = lastIncIdx + 2; i < nums.length; i++) {
            if(nums[min] > nums[i] && nums[i] < nums[lastIncIdx]) min = i;
        }
        [nums[min], nums[lastIncIdx]] = [nums[lastIncIdx], nums[min]];
        const last = nums.splice(lastIncIdx + 1);
        last.sort((a,b) => a-b);
        last.forEach(elem => nums.push(elem));
    }
    return nums;
};