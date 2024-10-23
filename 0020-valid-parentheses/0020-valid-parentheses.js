/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const CLOSE_BRACKETS = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }
    for(let bracket of s) {
        if(CLOSE_BRACKETS[bracket]) {
            const lastBrack = stack.pop();
            if(lastBrack !== CLOSE_BRACKETS[bracket]) return false;
        }
        else stack.push(bracket)
    }
    return stack.length === 0
};