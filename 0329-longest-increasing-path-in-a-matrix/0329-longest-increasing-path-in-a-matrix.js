/**
 * @param {number[][]} matrix
 * @return {number}
 */


var longestIncreasingPath = function(matrix) {
    const DIRECT = [[0,1],[1,0],[0,-1],[-1,0]];
    const visit = Array.from({length : matrix.length}, () => Array.from({length : matrix[0].length}, () => 0));
    function dfs(i,j) {
        if(visit[i][j]) return visit[i][j];
        const value = visit[i][j]
        for(let [di,dj] of DIRECT) {
            const ni = di + i, nj = dj + j;
            if(0<= ni && ni < matrix.length && 0<= nj && nj < matrix[ni].length && matrix[i][j] < matrix[ni][nj]) {
                visit[i][j] = Math.max(visit[i][j], 1 + dfs(ni,nj));
            }
        }
        return visit[i][j];
    }
    let result = 1;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            let value = 1;
            if(!visit[i][j]) value = dfs(i,j) + 1;
            result = Math.max(result, value);
        }
    }

    return result;
};
