/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);
    for(let i = temperatures.length - 1 ; i >= 0; i--) {
        if(stack.length === 0) {
            result[i] = 0;
            stack.push([temperatures[i], i]);
        } else {
            while(stack.length && stack[stack.length - 1][0] <= temperatures[i]) {
                stack.pop();
            }
            result[i] = stack.length > 0 ? stack[stack.length - 1][1] - i : 0;
            stack.push([temperatures[i],i]);
        }
    }
    return result;
};