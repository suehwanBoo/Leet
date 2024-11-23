/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while(left < right) {
        let max = 0;
        for(let i = right; i > left && max < height[left] * (i - left); i--) {
            let sum = Math.min(height[left], height[i]) * (i - left)
            max = Math.max(sum, max);
        }
        result = Math.max(result, max);
        left += 1;
    }

    return result;
};