/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while(left < right) {
        const sum = Math.min(height[left], height[right]) * (right - left);
        result = Math.max(sum, result);
        if(height[left] > height[right]) right -= 1;
        else left += 1;
    }

    return result;
};