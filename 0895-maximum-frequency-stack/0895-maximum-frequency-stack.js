
var FreqStack = function() {
    this.freq = {};
    this.store = [];    
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    const freq = this.freq;
    const store = this.store;
    freq[val] = (freq[val] || 0) + 1;
    const idx = freq[val] - 1;
    if(!store[idx]) store.push([]);
    store[idx].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const store = this.store;
    const lastIdx = store.length - 1;
    const elem = store[lastIdx].pop();
    this.freq[elem] -= 1;
    if(store[lastIdx].length === 0) store.pop();
    return elem;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */