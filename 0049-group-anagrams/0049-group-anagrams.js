/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const save = {};
    const result = [];
    for(let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if(save[sortedStr] === undefined) {
            save[sortedStr] = result.length;
            result[save[sortedStr]] = [str];
        }
        else result[save[sortedStr]].push(str);
    }
    return result;
};