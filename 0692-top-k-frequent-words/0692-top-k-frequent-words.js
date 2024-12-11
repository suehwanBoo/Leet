/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
class HeapQ {
    constructor() {
        this.store = [];
    }

    push(arr) {
        const store = this.store;
        store.push(arr);
        this.bubbleUp();
        console.log(store)
    }

    pop() {
        const store = this.store;
        [store[0], store[store.length - 1]] = [store[store.length - 1], store[0]];
        const removeElem = store.pop();
        this.bubbleDown();
        return removeElem[0];

    }

    bubbleUp() {
        const store = this.store;
        let pointer = this.store.length - 1;
        let parent = this.getParent(pointer);
        while(parent >= 0) {
            console.log(store[pointer][1], store[parent][1])
            if(store[pointer][1] > store[parent][1] || (store[pointer][1] === store[parent][1] && store[pointer][0] < store[parent][0])) {
                [store[parent],store[pointer]] = [store[pointer], store[parent]];
                pointer = parent;
                parent = this.getParent(pointer);
            } else break;
        }
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    bubbleDown() {
        const store = this.store;
        let pointer = 0;
        let child = this.getChild(pointer);
        while(child) {
            if(store[child][1] > store[pointer][1] || (store[child][1] === store[pointer][1] && store[child][0] < store[pointer][0])) {
                [store[child], store[pointer]] = [store[pointer], store[child]];
                pointer = child
                child = this.getChild(pointer);
            } else break;
        }
    }

    getChild(idx) {
        const store = this.store;
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        if(left >= store.length) return null;
        else if (right >= store.length) return left;
        else {
            if(store[left][1] > store[right][1] || (store[left][1] === store[right][1] && store[left][0] < store[right][0])) return left;
            else return right;
        }
    }
}


var topKFrequent = function(words, k) {
    const saveWord = {};
    for(let word of words) {
        saveWord[word] = (saveWord[word] || 0) + 1;
    }
    const heap = new HeapQ();
    for(let word in saveWord) {
        heap.push([word, saveWord[word]]);
    }
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(heap.pop());
    }
    return result;
};