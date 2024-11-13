
var TimeMap = function() {
    this.store = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const store = this.store;
    if(!store[key]) {
        store[key] = []
    }
    store[key].push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const store = this.store;
    if(store[key]) {
        const arr = store[key];
        let left = 0;
        let right = arr.length - 1;
        let temp = null;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midstamp = arr[mid][0];
            if(midstamp === timestamp) return arr[mid][1];
            else if(midstamp < timestamp) {
                temp = arr[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return temp || "";
    }
    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */