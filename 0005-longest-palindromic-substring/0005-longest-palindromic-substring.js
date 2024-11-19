/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = Array.from({length : s.length + 1}, () => []);
    for(let i = 0; i < s.length; i++) {
        dp[1].push(i);
    }
    let maxLength = 1;
    for(let idx of dp[1]) {
        if(idx + 1 < s.length && s[idx] === s[idx + 1]) dp[2].push(idx) ;
    }

    if(dp[2] && dp[2].length) maxLength = 2;

    for(let i = 3; i <= s.length; i++){
        // 3개 짜리 palindrom은 1개에서 끝에 2개가 같은것
        // 4개 짜리는 완성된 2개에서 끝에 2개가 같은것이기에 i - 2;
        const prev = i - 2;
        const target = dp[prev];
        for(let idx of target) {
            const left = idx - 1;
            const right = idx + prev;
            if(s[left] === s[right]) dp[i].push(left);
        }
        if(dp[i].length) maxLength = i;
       
    }
    const maxStartIdx = dp[maxLength][0];

    return s.slice(maxStartIdx, maxStartIdx + maxLength);
};