/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === "0") return 0;
    const dp = new Array(s.length).fill([]);
    dp[0] = [1, 0];
    for(let i = 1; i < s.length; i++) {
        const newArr = [0, 0];
        if(s[i] !== "0") newArr[0] = dp[i - 1][0];
        if(s[i - 1] !== "0" && s[i -1] + s[i] <= 26) {
            const num = dp[i - 1][0] - dp[i - 1][1];
            newArr[0] += num;
            newArr[1] += num;
        }
        dp[i] = newArr;
    }
    return dp[s.length - 1][0];
}; 