/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let isPositive = x >= 0;
    x *= isPositive ? 1 : -1;
    while(x) {
        result *= 10;
        result += x % 10;
        x = Math.floor(x / 10);
    }
    if(result > 2 ** 31 - 1) return 0;
    return isPositive ? result : -1 * result;
    
};