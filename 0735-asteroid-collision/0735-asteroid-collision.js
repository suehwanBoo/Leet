/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let result = [];
    let stack = [];
    for(let i = 0; i < asteroids.length; i++) {
        if(asteroids[i] > 0) stack.push(asteroids[i]);
        else {
            if(stack.length === 0) result.push(asteroids[i]);
            else {
                let last = stack[stack.length - 1]
                while(Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])) {
                    last = stack.pop();
                }
                if(stack.length === 0) result.push(asteroids[i]);
                if(stack[stack.length - 1] === asteroids[i] * -1) stack.pop();

            }
        }
    }
    for(let elem of stack) result.push(elem);
    return result;
};