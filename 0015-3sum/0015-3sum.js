/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function parseArr(res) {
    return [...res.values()].map(item => item.split(',').map(str => +str));
}

var threeSum = function(nums) {
    const GOAL = 0;
    const numArr = nums.sort((a,b) => a-b);
    const result = new Set();
    for(let i = 0; i < numArr.length - 2; i++) {
        const target = (GOAL + numArr[i]) * -1;
        let left = i + 1;
        let right = numArr.length - 1;
        while(left < right) {
            const sum = numArr[left] + numArr[right];
            if(sum === target) {
                const newOne = `${numArr[i]},${numArr[left]},${numArr[right]}`;
                result.add(newOne);
                left++;
                right--;
            } 
            else if(sum > target) right--;
            else left++;
        }
    }
    return parseArr(result);
};