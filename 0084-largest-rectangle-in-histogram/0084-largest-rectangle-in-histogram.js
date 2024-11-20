/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [-1];
    let result = 0;
    for(let i = 0; i < heights.length; i++) {
        while(stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > heights[i]) {
            const idx = stack.pop();
            const height = heights[idx];
            const width = i - stack[stack.length - 1] - 1;
            result = Math.max(result, height * width);
        }
        stack.push(i)
    }

    while(stack[stack.length - 1] !== -1) {
        const idx = stack.pop();
        const height = heights[idx];
        const width = heights.length - stack[stack.length - 1] - 1;
        result = Math.max(result, height * width);
    }
    return result;
};