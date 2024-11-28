/**
 * @param {number} capacity
 */

var Node = function(key, value) {
    this.value = value;
    this.key = key;
    this.prev = null;
    this.next = null;
}

var LinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.push = (key,value) => {
        const newNode = new Node(key, value)
        if(this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;    
        }
        this.tail = newNode;
        this.length++;
        return newNode;
    }
    this.pop = () => {
        if(this.length === 0) return null;
        const deleteNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            deleteNode.next = null;
        }
        this.length--;
        return deleteNode;
    }
}

var LRUCache = function(capacity) {
    this.store = {};
    this.recent = new LinkedList();
    this.length = 0;
    this.limit = capacity;    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   if(!this.store[key]) return -1;
   else {
        const newNode = this.store[key];
        if(this.recent.tail !== newNode) {
            const prev = newNode.prev;
            const next = newNode.next;
            if(prev) prev.next = next;
            next.prev = prev;
            if(newNode === this.recent.head) {
                this.recent.head = prev ? prev : next;
            }
            this.recent.tail.next = newNode;
            newNode.prev = this.recent.tail;
            this.recent.tail = newNode;
        }
        return newNode.value;
   }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.length >= this.limit && !this.store[key]) {
        this.length--;
        const deleteNode = this.recent.pop();
        this.store[deleteNode.key] = null;
    }
    if(!this.store[key]) {
        const newNode = this.recent.push(key,value);
        this.store[key] = newNode;
        this.length++;
        return null;
    } else {
        const newNode = this.store[key];
        newNode.value = value;
        if(this.recent.tail !== newNode) {
            const prev = newNode.prev;
            const next = newNode.next;
            if(prev) prev.next = next;
            next.prev = prev;
            if(newNode === this.recent.head) {
                this.recent.head = prev ? prev : next;
            }
            this.recent.tail.next = newNode;
            newNode.prev = this.recent.tail;
            this.recent.tail = newNode;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */