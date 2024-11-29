/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const obj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };
    let result = 0, left = 0, right = 1;
    let cnt = 0;
    while(right < s.length) {
        if(s[left] === s[right]) {
            cnt += 1;
            right++;
        } else {
            const leftValue = obj[s[left]];
            const rightValue = obj[s[right]];
            if(leftValue > rightValue) {
                if(cnt !== 0) result += leftValue * (cnt + 1);
                else result += leftValue
                cnt = 0;
                left = right;
                right++;
            } else {
                result += (rightValue - leftValue);
                cnt = 0;
                left = right + 1;
                right += 2;
            }
        }
    }
    if(cnt !== 0) result += obj[s[left]] * (cnt + 1);
    else if(left < s.length) result += obj[s[left]];

    return result;

};