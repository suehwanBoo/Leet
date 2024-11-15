/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const left = Array.from({length : height.length}, () => 0);
    const right = Array.from({length : height.length}, () => 0);
    for(let i = 0; i < height.length; i++) {
        if(i > 0) left[i] = Math.max(left[i - 1], height[i - 1]);
    }
    for(let i = height.length - 1; i >= 0; i--) {
        if(i < height.length - 1) right[i] = Math.max(right[i + 1], height[i + 1]);
    }

    let result = 0;
    for(let i = 0; i < height.length; i++) {
        const value = Math.min(left[i], right[i]);
        if(value > height[i]) result += value - height[i];
    }


    return result;
};