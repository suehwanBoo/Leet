/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const save = {};
    for(let word of s) {
        save[word] = (save[word] || 0) + 1;
    }
    let isOddExist = false;
    let result = 0;
    for(let key in save) {
        if(save[key] % 2 === 1) isOddExist = true;
        result += Math.floor(save[key] / 2);
    }
    return isOddExist ? result * 2 + 1 : result * 2;
};