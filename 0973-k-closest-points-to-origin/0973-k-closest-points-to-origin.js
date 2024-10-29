/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  // 일단 O(n)은 무조건 돌아야함
  // 우선순위큐? 우선순위큐 크기를 k로 저장하고 [x,y,sqrt]값으로 저장한담에 sqrt를 기준으로 최대힙으로 저장
  class PriorityQueue {
    constructor(k) {
        this.maxSize = k;
        this.store = [];
    }

    enqueue(x,y,value) {
        const store = this.store
        if(store.length === 0) store.push([x,y,value]);
        else if(store.length < this.maxSize) {
            store.push([x,y,value]);
            this.bubbleUp();
        } else if(store[0][2] > value){
            this.dequeue();
            store.push([x,y,value]);
            this.bubbleUp();
        }
    }

    bubbleUp() {
        const store = this.store;
        let pointer = store.length - 1;
        let parent = this.getParent(pointer);
        while(parent >= 0 && store[pointer][2] > store[parent][2]) {
            [store[pointer], store[parent]] = [store[parent], store[pointer]];
            pointer = parent;
            parent = this.getParent(parent);
        }
    }

    getParent(idx) {
        return Math.floor((idx - 1) / 2)
    }

    dequeue() {
        const store = this.store;
        [store[0], store[store.length - 1]] = [store[store.length - 1], store[0]];
        store.pop();
        this.bubbleDown();
    }

    bubbleDown() {
        const store = this.store
        let pointer = 0;
        let child = this.getChild(pointer);
        while(child && store[pointer][2] > store[child][2]) {
            [store[child], store[pointer]] = [store[pointer], store[child]];
            pointer = child;
            child = this.getChild(child);
        }
    }

    getChild(idx) {
        const store = this.store;
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        if(!store?.[left]) return null;
        else if(!store?.[right]) return left;
        else return store[left][2] > store[right][2] ? left : right;
    }


  }
  const pq = new PriorityQueue(k)
  for(let [x,y] of points) {
    let value = (x **2) + (y **2)
    pq.enqueue(x,y,value)
  }
    return pq.store.map(item => [item[0],item[1]])
};