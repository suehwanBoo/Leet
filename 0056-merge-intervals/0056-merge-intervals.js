/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const result = [intervals[0]];
    for(let i = 1; i < intervals.length; i++) {
        const prev = result.pop();
        const newPrev = [];
        if(prev[0] <= intervals[i][0] && intervals[i][0] <= prev[1]) {
            result.push([prev[0], Math.max(prev[1],intervals[i][1]));
        } else {
            result.push(prev);
            result.push(intervals[i])
        }
    }
    return result;
};