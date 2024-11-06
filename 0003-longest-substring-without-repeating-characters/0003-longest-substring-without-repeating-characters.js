/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    let left = 0;
    let right = 1;
    let save = new Set();
    save.add(s[left]);
    let result = 1;
    while(right < s.length) {
        if(save.has(s[right])) {
            save.delete(s[left]);
            left++;
        } else {
            save.add(s[right])
            result = Math.max(result, [...save].length);
            right++;
        }
    }
    return result;
};