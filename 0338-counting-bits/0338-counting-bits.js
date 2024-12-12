/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let limit = 2;
    const result = [0];
    for(let i = 1; i <= n; i++) {
        if(i === limit) {
            result.push(1);
            limit *= 2;
        } else result.push(1 + result[i - (limit / 2)]);
    }
    return result;
};