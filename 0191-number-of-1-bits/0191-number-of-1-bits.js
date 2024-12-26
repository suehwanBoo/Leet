/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = n.toString(2);
    let result = 0;
    for(let num of binary) {
        if(num === '1') result += 1;
    }
    return result;
};