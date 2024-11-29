/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

function prev(idx, length) {
    if(idx === 0) return length - 1;
    else return idx - 1
}

function next(idx ,length) {
    if(idx === length - 1) return 0;
    else return idx + 1;
}

var canCompleteCircuit = function(gas, cost) {
    for(let i = 0; i < gas.length; i++) {
        if(gas[i] <= cost[i]) continue;
        let store = gas[i];
        let j = i
        let flag = true;
        do {
            store -= cost[j];
            if(store < 0) {
                flag = false;
                break;
            }
            store += gas[next(j,gas.length)];
            j = next(j, gas.length)
        } while(j !== i)
        if(flag) return i;
    }
    return -1;
};