/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function quickSort(left=0, right=nums.length - 1) {
        if(left >= right) return;
        const sortedIdx = sort(left, right);
        quickSort(left, sortedIdx - 1);
        quickSort(sortedIdx + 1, right);
    }

    function sort(left, right) {
        const pivotNum = nums[left];
        let pointer = left;
        for(let i = left + 1; i <= right; i++) {
            if(pivotNum >= nums[i]) {
                pointer++;
                [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
            }
        }
        [nums[left], nums[pointer]] = [nums[pointer], nums[left]];
        return pointer;
    }
    quickSort()
    return nums;
};