/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(s.length < 2) return s.length;
    let result = 1;
    let pointer = 0;
    let obj = {};
    let mostFreq = 0;
    for(let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        mostFreq = Math.max(mostFreq, obj[s[i]])
        while((i - pointer + 1) - mostFreq > k) {
            obj[s[pointer]] -= 1;
            pointer += 1;
        }
        result = Math.max(result, i - pointer + 1);
    }
    return result;
};