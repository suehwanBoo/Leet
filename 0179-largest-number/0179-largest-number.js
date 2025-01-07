/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let flag = false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            flag = true;
            break;
        }
    }
    if(!flag) return "0";
    function compare(num1, num2) {
        if(num1 === num2) return 0;
        while(num1.length <= num2.length) num1 += num1[num1.length - 1];
        while(num2.length <= num1.length) num2 += num2[num2.length - 1];
        return num1 > num2 ? -1 : 1;
    }
    const newNum = nums.map(e => ""+e);
    const result = newNum.sort((a,b) => compare(a,b)).join('')
    return newNum.sort((a,b) => compare(a,b)).join('')
};