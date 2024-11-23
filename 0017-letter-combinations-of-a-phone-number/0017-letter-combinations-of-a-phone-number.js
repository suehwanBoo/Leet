/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const obj = {
        "2" : ['a','b','c'],
        "3" : ['d','e','f'],
        '4' : ['g','h','i'],
        '5' : ['j','k','l'],
        '6' : ['m','n','o'],
        '7' : ['p','q','r','s'],
        '8' : ['t','u','v'],
        '9' : ['w','x','y','z'],
    }
    const arr = [];
    function recur(len, points=0, save="") {
        if(len === points) {
            save.length && arr.push(save);
            return;
        }
        const target = obj[digits[points]]
        for(let i = 0; i < target.length; i++) {
            recur(len, points+1, save + target[i]);
        }
    }
    recur(digits.length)
    return arr
};