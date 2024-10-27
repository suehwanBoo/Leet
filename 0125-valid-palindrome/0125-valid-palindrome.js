/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const word = s.toLowerCase().trim();
    let left = 0;
    let right = word.length - 1;
    let startCode = "a".charCodeAt();
    let numberStart = "0".charCodeAt()
    let endCode = "z".charCodeAt();
    let numberEnd = "9".charCodeAt();
    while(left < right) {
        let leftCode = word[left].charCodeAt();
        let rightCode = word[right].charCodeAt();
        if((leftCode < numberStart || leftCode > numberEnd) && (leftCode < startCode || leftCode > endCode)) left += 1;
        else if( (rightCode < numberStart || rightCode > numberEnd) && (rightCode < startCode || rightCode > endCode)) right -=1;
        else if(word[left] !== word[right]) return false;
        else {
            left += 1;
            right -= 1;
        }
    }
    return true;
};