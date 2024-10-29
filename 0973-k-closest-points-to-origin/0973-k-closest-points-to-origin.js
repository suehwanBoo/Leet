/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  // 일단 O(n)은 무조건 돌아야함
  // 우선순위큐? 우선순위큐 크기를 k로 저장하고 [x,y,sqrt]값으로 저장한담에 sqrt를 기준으로 최대힙으로 저장

  function getDistance(x,y) {
    return x ** 2 + y ** 2
  }

  class PriorityQueue {
    constructor(k) {
        this.maxSize = k;
        this.store = [];
    }

    enqueue(x,y) {
        const store = this.store
        if(store.length === 0) store.push([x,y]);
        else if(store.length < this.maxSize) {
            store.push([x,y]);
            this.bubbleUp();
        } else if(getDistance(store[0][0],store[0][1]) > getDistance(x,y)){
            this.dequeue();
            store.push([x,y]);
            this.bubbleUp();
        }
    }

    bubbleUp() {
        const store = this.store;
        let pointer = store.length - 1;
        let parent = this.getParent(pointer);
        while(parent >= 0 && getDistance(...store[pointer]) > getDistance(...store[parent])) {
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
        while(child && getDistance(...store[pointer]) < getDistance(...store[child])) {
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
        else return getDistance(...store[left]) > getDistance(...store[right]) ? left : right;
    }


  }
  const pq = new PriorityQueue(k)
  for(let [x,y] of points) {
    pq.enqueue(x,y)
  }
    return pq.store
};