/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pointer = 0;
    let result = ""
    while(true) {
        let word = strs[0][pointer];
        let flag = true;
        for(let str of strs) {
            if(str.length <= pointer || str[pointer] !== word) {
                flag = false;
                break;
            }
        }
        if(flag) {
            result += word;
            pointer++;
        } else break;
    }
    return result;
};