/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const valid = {};
    for (let word of s) {
        valid[word] = valid[word] ? valid[word] + 1 : 1;
    }
    for (let word of t) {
        valid[word] = valid[word] ? valid[word] - 1 : 1;
    }
    for (let key in valid) {
        if(valid[key] !== 0) return false
    }
    return true
};