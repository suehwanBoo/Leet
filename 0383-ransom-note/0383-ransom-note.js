/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomWords = {};

    for(let char of ransomNote) {
        ransomWords[char] = ransomWords[char] ? ransomWords[char] + 1 : 1;
    }

    for(let char of magazine) {
        if(ransomWords[char]) ransomWords[char] -= 1;
    }

    for(let key in ransomWords) {
        if(ransomWords[key] > 0) return false;
    }

    return true;
};