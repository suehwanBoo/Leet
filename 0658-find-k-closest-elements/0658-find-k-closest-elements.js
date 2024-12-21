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
        if (store.length < this.limit) {
            store.push(elem);
            this._bubbleUp();
        } else {
            const elemPoint = Math.abs(elem - this.closet);
            const headPoint = this.getPoint(0);
            if (elemPoint < headPoint || (elemPoint === headPoint && elem < store[0])) {
                store[0] = elem;
                this._bubbleDown();
            }
        }
    }

    _bubbleUp() {
        const store = this.store;
        let pointer = store.length - 1;
        while (pointer > 0) {
            const parent = this._getParent(pointer);
            if (this._compare(pointer, parent)) {
                [store[pointer], store[parent]] = [store[parent], store[pointer]];
                pointer = parent;
            } else break;
        }
    }

    _bubbleDown() {
        const store = this.store;
        let pointer = 0;
        let child = this._getChild(pointer);
        while (child !== null) {
            if (this._compare(child, pointer)) {
                [store[pointer], store[child]] = [store[child], store[pointer]];
                pointer = child;
                child = this._getChild(pointer);
            } else break;
        }
    }

    _getChild(idx) {
        const store = this.store;
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        if (left >= store.length) return null;
        if (right >= store.length) return left;
        return this._compare(left, right) ? left : right;
    }

    _getParent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _compare(idx1, idx2) {
        const store = this.store;
        const point1 = this.getPoint(idx1);
        const point2 = this.getPoint(idx2);
        return point1 > point2 || (point1 === point2 && store[idx1] > store[idx2]);
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