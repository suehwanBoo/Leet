/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function heapQ() {
    // store의 갯수 k를 유지한 최소힙상태 
    this.store = [];
    this.length = 0;
    this.push = function(elem) {
        const store = this.store;
        store.push(elem);
        this._bubbleUp();
    }
    this._bubbleUp = function() {
        const store = this.store;
        let pointer = store.length - 1;
        let parent = this._getParent(pointer);
        while(parent >= 0) {
            if(store[pointer] < store[parent]) {
                [store[parent], store[pointer]] = [store[pointer], store[parent]];
                pointer = parent;
                parent = this._getParent(pointer);
            } else break;
        }
    }

    this._getParent = function(idx) {
        return Math.floor((idx - 1) / 2);
    }

    this.pop = function() {
        const store = this.store;
        [store[0], store[store.length - 1]] = [store[store.length - 1], store[0]];
        store.pop();
        this._bubbleDown();
    }
    this._bubbleDown = function() {
        const store = this.store;
        let pointer = 0;
        let child = this._getChild(pointer);
        while(child) {
            if(store[child] < store[pointer]) {
                [store[child], store[pointer]] = [store[pointer], store[child]];
                pointer = child;
                child = this._getChild(pointer);
            } else break;
        }
    }

    this._getChild = function(idx) {
        const store = this.store;
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        if(left >= store.length) return null;
        else if(right >= store.length) return left;
        else return store[left] > store[right] ? right : left;
    }
}

var findKthLargest = function(nums, k) {
    const h = new heapQ(k);
    for(let num of nums) {
        h.push(num);
        if(h.store.length > k) h.pop();
    };
    return h.store[0];
};