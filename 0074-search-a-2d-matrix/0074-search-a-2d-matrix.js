/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix[0].length;
    function searchRow() {
        let start = 0;
        let end = matrix.length - 1;
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            const value = matrix[mid][n - 1];
            const prevValue = mid - 1 >= 0 ? matrix[mid - 1][n - 1] : -10001;
            if(prevValue < target && target <= value) return mid;
            else if (target > value) start = mid + 1;
            else end = mid - 1;
            console.log(end)
        }
        return null;
    }

    function searchCol(r) {
        let start = 0;
        let end = matrix[r].length - 1;
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            const value = matrix[r][mid];
            if(value === target) return mid;
            else if (value > target) end = mid - 1;
            else start = mid + 1;
        }
        return null;
    }

    const r = searchRow();
    if(r === null) return false;
    const c = searchCol(r);
    if(c === null) return false;

    return true;
};