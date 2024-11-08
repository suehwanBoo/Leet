/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const saveNum = [];
    for(let token of tokens) {
        if(!isNaN(+token)) {
            saveNum.push(+token);
        } else {
            const secondNum = saveNum.pop();
            const firstNum = saveNum.pop();
            if(token === "+") saveNum.push(firstNum + secondNum);
            else if(token === "-") saveNum.push(firstNum - secondNum);
            else if(token === "*") saveNum.push(firstNum * secondNum);
            else saveNum.push(Math.trunc(firstNum / secondNum));
        }
        console.log(saveNum)
    }
    return saveNum[0];
};