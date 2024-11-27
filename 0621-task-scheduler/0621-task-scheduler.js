/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

function Heap() {
    this.store = [];
    this.peek = () => {
        return this.store[0];
    }
    this.getLength = () => this.store.length;
    this.push = (task) => {
        this.store.push(task);
        this.bubbleUp();
    }
    this.bubbleUp = () => {
        const store = this.store;
        let pointer = store.length - 1;
        let parent = this.getParent(pointer);
        while(parent >= 0) {
            if(store[pointer][0] >= store[parent][0]) {
                [store[pointer], store[parent]] = [store[parent], store[pointer]];
                pointer = parent;
                parent = this.getParent(pointer);
            } else break;
        }
    }
    this.getParent = (idx) => {
        return Math.floor((idx - 1) / 2);
    }
    this.pop = () => {
        const store = this.store;
        [store[0],store[store.length - 1]] = [store[store.length - 1], store[0]];
        const elem = store.pop();
        this.bubbleDown();
        return elem;
    }
    this.bubbleDown = () => {
        const store = this.store;
        let pointer = 0;
        let child = this.getChild(pointer);
        while(child < store.length) {
            if(store[pointer][0] < store[child][0]) {
                [store[pointer], store[child]] = [store[child], store[pointer]];
                pointer = child
                child = this.getChild(pointer);
            } else break;
        }
    }
    this.getChild = (idx) => {
        const store = this.store;
        const left = idx * 2 + 1;
        const right = idx * 2 + 2;
        if(!store[left]) return store.length;
        else if(!store[right]) return left;
        else return store[left][0] > store[right][0] ? left : right;
    }
}

var leastInterval = function(tasks, n) {
    const obj = {};
    for(let task of tasks) {
        obj[task] = (obj[task] || 0) + 1;
    }
    const heap = new Heap();
    for(let task in obj) {
        const taskInfo = [obj[task], task];
        heap.push(taskInfo);
    }
    let result = 0;
    let save = [];
    while(heap.getLength() > 0 || save.length > 0) {
        result++;
        if(heap.getLength() > 0) {
            const task = heap.pop();
            if(task[0] > 1){
                save.push([task[0]-1, task[1], result + n]);
            }
        }
        if(save.length > 0 && save[0][2] === result) {
            const task = save.shift();
            heap.push([task[0],task[1]]);
        }
    }
    return result;
};