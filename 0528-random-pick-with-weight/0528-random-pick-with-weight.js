/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let sum = 0;
    this.sumArr = w.map((elem) => {
        sum = sum+elem;
        return sum;
    })
    this.maximum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const findValue = Math.ceil(Math.random() * this.maximum);
    const arr = this.sumArr
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === findValue) return mid;
        else if(findValue < arr[mid]) {
            let prev = mid - 1 >= 0 ? arr[mid - 1] : 0;
            if(findValue > prev) return mid;
            else end = mid - 1;
        }
        else start = mid + 1;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */