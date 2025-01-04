/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = Array.from({length : matrix.length}, () => Array(matrix[0].length).fill(0));
    let result = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            dp[i][j] = 0;
            if(matrix[i][j] == 0) continue;
            const top = dp[i - 1]?.[j] || 0;
            const left = dp[i]?.[j - 1] || 0;
            const corner = dp[i-1]?.[j-1] || 0;
            dp[i][j] = Math.min(top, left, corner) + 1;
            result = Math.max(result, dp[i][j] * dp[i][j]);
        }
    }
    console.log(dp)
    return result;
};