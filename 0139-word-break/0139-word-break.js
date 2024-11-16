/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = Array.from({length : s.length + 1}, () => "")
    for(let i = 1; i <= s.length; i++) {
        for(let word of wordDict) {
            if(i - word.length >= 0) {
                const c = dp[i - word.length];
                const newOne = c + word;
                if(newOne === s.slice(0, i)) {
                    dp[i] = newOne;
                    break;
                };
            }
        }
    }
    return dp[s.length] === s;
};