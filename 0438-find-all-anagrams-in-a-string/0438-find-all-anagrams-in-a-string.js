/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    const obj = {};
    for(let char of p) obj[char] = (obj[char] || 0) + 1;
    let left = 0;
    let right = left;
    let temp = {...obj}
    while(left < s.length && right < s.length) {
        let char = s[right]
        console.log(left, right, temp)
        if(temp[char] === 0) {
            temp[s[left]] += 1;
            left += 1;
        } else if(temp[char] > 0) {
            temp[char] -= 1;
            if(temp[char] === 0) {
                let flag = false;
                for(let key in temp) {
                    if(temp[key] !== 0) flag = true;
                }
                if(!flag) {
                    result.push(left);
                    temp[s[left]] += 1;
                    left++;
                }
                right++;
            }
        } else {
            right++;
            left = right;
            temp = {...obj};
        }
    }

    return result;
};