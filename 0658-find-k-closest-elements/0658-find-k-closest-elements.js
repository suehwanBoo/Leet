/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

class HeapQ {
    constructor(closet, limit) {
        this.store = [];
        this.length = 0;
        this.closet = closet;
        this.limit = limit;
    }

    push(elem) {
        const store = this.store;
        if(store.length < this.limit) {
            store.push(elem);
            this._bubbleUp();
            return;
        } else {
            const elemPoint = Math.abs(elem - this.closet);
            const headPoint = this.getPoint(0)
            if(elemPoint < headPoint || (elemPoint === headPoint && elem < store[0])) {
                store[0] = elem;
                this._bubbleDown();
            }
        }
    }
    _bubbleUp() {
        const store = this.store;
        const closet = this.closet;
        let pointer = store.length - 1;
        let parent = this._getParent(pointer);
        while(pointer > parent && parent >= 0) {
            const nowPoint = this.getPoint(pointer);
            const parentPoint = this.getPoint(parent);
            if(nowPoint > parentPoint || (nowPoint === parentPoint && store[pointer] > store[parent])) {
                [store[pointer], store[parent]] = [store[parent], store[pointer]];
                pointer = parent;
                parent = this._getParent(parent);
            }
            else break;
        }
    }

    _bubbleDown() {
        const store = this.store;
        let pointer = 0;
        let child = this._getChild(pointer);
        while(child) {
            const nowPoint = this.getPoint(pointer);
            const childPoint = this.getPoint(child);
            if(nowPoint < childPoint || (nowPoint === childPoint && store[pointer] < store[child])) {
                [store[pointer], store[child]] = [store[child], store[pointer]];
                pointer = child;
                child = this._getChild(child);
            }
        }
    }

    _getChild(idx) {
        const store = this.store;
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        if(store.length <= left && store.length <= right) return null;
        else if (store.length <= right) return left;
        else return this.getPoint(left) > this.getPoint(right) || (this.getPoint(left) === this.getPoint(right) && store[left] > store[right]) ? left : right;
    }
    
    _getParent(idx) {
        return Math.floor((idx - 1) / 2)
    }

    getPoint(idx) {
        return Math.abs(this.store[idx] - this.closet);
    }

}


var findClosestElements = function(arr, k, x) {
    const heap = new HeapQ(x, k);
    for(let num of arr) {
        heap.push(num);
    }
    const result = heap.store.sort((a,b) => a-b);
    return result;
};