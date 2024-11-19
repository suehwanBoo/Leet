/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

function Node(value) {
    this.val = value;
    this.next = null;
}
function Q() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.push = function(value) {
        const newNode = new Node(value)
        if(this.length === 0) this.head = newNode;
        else this.tail.next = newNode;
        this.length+=1;
        this.tail = newNode;
    }
    this.pop = function() {
        const remove = this.head;
        this.head = this.head.next;
        remove.next = null;
        this.length-=1;
        return remove.val;
    }
}

function findCnt(word1, word2) {
    let result = 0;
    for(let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) result++;
    }
    return result;
}

function search(start, end, path) {
    const queue = new Q();
    const visit = {[start] : true};
    queue.push([start, 1]);
    while(queue.length) {
        const [word, cnt] = queue.pop();
        for(let nextWord of path[word]) {
            if(nextWord === end) return cnt + 1;
            else if(!visit[nextWord]) {
                visit[nextWord] = true;
                queue.push([nextWord, cnt + 1]);
            }
        }
    }
    return 0;
}

var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord === endWord) return 1;
    const path = {};
    const registerEach = (key1, key2) => {
            if(path[key1]) path[key1].push(key2);
            else path[key1] = [key2];
            if(path[key2]) path[key2].push(key1);
            else path[key2] = [key1];
    }
    for(let i = 0; i < wordList.length; i++) {
        const baseWord = wordList[i];
        const cnt = findCnt(beginWord, baseWord)
        if(cnt === 1) registerEach(beginWord, baseWord);
        for(let j = i + 1; j < wordList.length; j++) {
            const otherWord = wordList[j]
            const cnt = findCnt(otherWord, baseWord);
            if(cnt === 1) registerEach(otherWord, baseWord);
        }
    }
    console.log(path)
    if(!path[endWord]) return 0;
    else return search(beginWord, endWord, path);
    
};