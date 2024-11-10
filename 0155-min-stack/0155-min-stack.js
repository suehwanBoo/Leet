
var MinStack = function() {
    this.store = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.store.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.store.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.store[this.store.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.store);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */