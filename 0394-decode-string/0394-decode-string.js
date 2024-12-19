/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const count = [];
    const stack = [];
    let isNum = false;
    for(let i = 0; i < s.length; i++) {
        if(!isNaN(+s[i])) {
            if(isNum) {
                let last = count.pop();
                count.push(last + s[i]);
            }
            else count.push(s[i]);
            isNum = true;
        }
        else if(s[i] !== "]") {
            stack.push(s[i]);
            isNum = false;
        }
        else {
            let word = [];
            while(true) {
                const elem = stack.pop();
                if(elem === "[") {
                    const cnt = count.pop();
                    for(let i = 0; i < cnt; i++) {
                        for(let j = word.length - 1; j >= 0; j--) {
                            stack.push(word[j]);
                        }
                    }
                    break;
                } else {
                    word.push(elem)
                }
            }
            isNum = false;
        }
    }
    return stack.join('')
};