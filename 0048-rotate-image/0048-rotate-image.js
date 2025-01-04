/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let start = 0;
    let end = matrix.length - 1;
    while(start < end) {
        for(let i = 0; i < matrix[start].length; i++) {
            [matrix[start][i], matrix[end][i]] = [matrix[end][i], matrix[start][i]];
        }
        start++;
        end--;
    }
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};