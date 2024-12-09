/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    function isBoth(i,j) {
        const save = [false,false];
        const DIRECT = [[0,1], [1,0], [-1,0], [0,-1]];
        const M = heights.length;
        const N = heights[0].length;
        const visit = {[`${i}-${j}`] : true}
        function dfs(i,j) {
            if(i === 0 || j === 0) save[0] = true;
            if(i === M - 1 || j === N - 1) save[1] = true;
            if(save[0] === true && save[1] === true) return true;
            for(let [ai, aj] of DIRECT) {
                const ni = ai + i;
                const nj = aj + j;
                if(0 <= ni && ni < M && 0<= nj && nj < N && !visit[`${ni}-${nj}`] && heights[i][j] >= heights[ni][nj]) {
                    visit[`${ni}-${nj}`] = true;
                    dfs(ni,nj);
                }
            }
        }
        dfs(i,j);
        return save[0] === true && save[1] === true;
    }
    const result = [];
    for(let i = 0; i < heights.length; i++) {
        for(let j = 0; j< heights[i].length; j++) {
            if(isBoth(i,j)) result.push([i,j]);
        }
    }
    return result;
};