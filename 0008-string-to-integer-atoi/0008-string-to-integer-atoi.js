/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = "";
    s = s.trim()
    for(let i = 0; i < s.length; i++) {
        const word = s[i];
        if(i === 0 && (word === "+" || word === "-")) {
            result += word;
            continue;
        }
        let next = result + word;
        if(isNaN(+next)) {
            if(result > (2 ** 31) - 1) return (2 ** 31) -1;
            else if(+result < (2 ** 31) * -1) return (2 ** 31) * -1
            else return parseInt(result) || 0;
        }
        else result = next;
    }
    if(result > (2 ** 31) - 1) return (2 ** 31) -1;
    else if(+result < (2 ** 31) * -1) return (2 ** 31) * -1
    else return parseInt(result) || 0;
};