/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let result = 0;
    let value = 0;
    let stack = [];
    const arr = Array(s.length).fill(false);
    for(let i = 0; i < s.length; i++) {
        const p = s[i];
        if(p === "(") stack.push([p, i]);
        else {
            if(stack.length === 0) continue;
            const prev = stack.pop();
            if(prev[0] === "(") {
                arr[prev[1]] = true;
                arr[i] = true;
            }
        }
    }

    result = arr.reduce((cur,elem)=>{
        if(elem === true) cur[1] += 1;
        else cur[1] = 0;
        cur[0] = Math.max(cur[0], cur[1]);
        return cur;
    },[0,0])
    return result[0];
};