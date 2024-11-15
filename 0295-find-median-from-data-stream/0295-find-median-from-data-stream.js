function Heap() {
    this.store = [];
    this.push = (value) => {
        const store = this.store;
        store.push(value);
        this.bubbleUp();
    }
    this.bubbleUp =() => {
        const store = this.store;
        let pointer = store.length - 1;
        while(this.getParent(pointer) >= 0) {
            const parent = this.getParent(pointer);
            if(store[parent] > store[pointer]) [store[parent], store[pointer]] = [store[pointer], store[parent]];
            pointer = parent;
        }
    }
    this.getParent = (idx) => {
        return Math.floor((idx - 1) / 2);
    }
    this.pop = () => {
        const store = this.store;
        [store[0], store[store.length - 1]] = [store[store.length - 1], store[0]];
        const value = store.pop();
        this.bubbleDown();
        return value;
    }
    this.bubbleDown = () => {
        let pointer = 0;
        const store = this.store
        while(this.getChild(pointer) < store.length) {
            const child = this.getChild(pointer);
            if(store[child] < store[pointer]) [store[pointer], store[child]] = [store[child], store[pointer]];
            pointer = child;
        }
    }
    this.getChild = (idx) => {
        const store = this.store;
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        if(left >= store.length) return store.length;
        else if (right >= store.length) return left;
        else return store[left] < store[right] ? left : right;
    }
    this.peek=()=> {
        return this.store[0];
    }
    this.size=()=> {
        return this.store.length;
    }
}



var MedianFinder = function() {
    this.minHeap = new Heap();
    this.maxHeap = new Heap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() === 0 || -1 * this.maxHeap.peek() >= num) {
        this.maxHeap.push(-1 * num);
    } else {
        this.minHeap.push(num);
    }

    if(this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.push(this.maxHeap.pop() * -1);
    } else if(this.minHeap.size() > this.maxHeap.size()) this.maxHeap.push(this.minHeap.pop() * -1);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.minHeap.size() === this.maxHeap.size()) {
        const maxPeek = this.maxHeap.peek() * -1;
        const minPeek = this.minHeap.peek();
        return (maxPeek + minPeek) / 2
    } else {
        const maxPeek = this.maxHeap.peek() * -1;
        return maxPeek;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */