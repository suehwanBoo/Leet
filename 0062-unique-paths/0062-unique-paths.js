/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const path = Array.from({length : m }, () => Array.from({length : n}, () => 0));
    path[0][0] = 1;

    const PREV_DIRECT = [[-1,0],[0,-1]];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            for(let [pi, pj] of PREV_DIRECT) {
                const ni = pi + i, nj = pj + j;
                if(0<= ni && ni < m && 0 <= nj && nj < n) {
                    path[i][j] += path[ni][nj];
                }
            }
        }
    }

    return path[m-1][n-1];
};