/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const result = [], M = heights.length, N = heights[0].length;
    const dp = Array.from({length : M}, () => Array.from({length : N}).fill(0));
    const DIRECT = [[0,1],[1,0],[-1,0],[0,-1]];
    function mark(i,j, color) {
        if(dp[i][j] === 0) dp[i][j] = color;
        else if(dp[i][j] !== color && dp[i][j] !== 3) {
            result.push([i,j]);
            dp[i][j] = 3;
        }
        for(let [ai,aj] of DIRECT) {
            const ni = ai + i;
            const nj = aj + j;
            if(0<= ni && ni < M && 0<= nj && nj < N && heights[i][j] <= heights[ni][nj]) {
                if(dp[ni][nj] !== 3 && dp[ni][nj] !== color) {
                    mark(ni,nj,color);
                }
            }
        }

    }

    for(let i = 0; i < M; i++) {
        mark(i, 0, 1);
        mark(i, N - 1, 2);
    }
    for(let j = 0; j < N; j++) {
        mark(0, j, 1);
        mark(M -1 , j, 2);
    }
    return result;
};