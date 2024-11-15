/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let pointer = 0;
    const stack = [];
    let save = 0;
    while(pointer < Math.max(a.length, b.length) + 1) {
        const valueA = (+a[a.length - pointer - 1]) || 0;
        const valueB = (+b[b.length - pointer - 1]) || 0;
        const nowValue = valueA + valueB + save;
        save = Math.floor(nowValue / 2);
        stack.push(nowValue % 2);
        pointer++;
    }
    return stack.reverse().join('');
};