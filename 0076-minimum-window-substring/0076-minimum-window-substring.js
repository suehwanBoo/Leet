/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function node(value) {
    this.val = value;
    this.next = null;
}
function queue() {
    this.head = null;
    this.tail = null;
    this.shift = () => {
        const remove = this.head;
        this.head = this.head.next;
        remove.next = null;
        return remove.val;
    }
    this.push = (value) => {
        const newNode = new node(value);
        if(!this.head) this.head = newNode;
        else this.tail.next = newNode;
        this.tail = newNode;
    }
}

var minWindow = function(s, t) {
    if(s.length < t.length) return "";
    const pattern = {};
    for(let word of t) pattern[word] = (pattern[word] || 0) + 1;
    let save = new queue();
    let pointer = 0;
    let len = 0;
    let result = "";
    while(pointer <= s.length) {
        if(len === t.length) {
            const [word, idx] = save.shift();
            const tempLength = pointer - idx;
            if(!result || result.length > tempLength) result = s.slice(idx, pointer);
            pattern[word] += 1;
            len = pattern[word] <= 0 ? len : len - 1;
        } else {
            const word = s[pointer]
            if(pattern[word] !== undefined) {
                if(pattern[word] > 0) len += 1;
                pattern[word] -= 1;
                save.push([word, pointer]);
            }
            pointer += 1;
        }
    }

    return result;
 
};