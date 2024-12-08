
var WordDictionary = function() {
    this.store = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let pointer = this.store;
    for(let i = 0; i < word.length; i++) {
        pointer[word[i]] = pointer[word[i]] || {};
        pointer = pointer[word[i]];
    }
    pointer["isValue"] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, pointer=this.store, idx=0) {
    if(word.length === idx) return pointer["isValue"] || false;
    else if (word[idx] !== ".") {
        if(pointer[word[idx]]) return this.search(word, pointer[word[idx]], idx + 1);
        return false;
    } else {
        let result = false;
        for(let key in pointer) {
            if(result) break;
            else result = this.search(word, pointer[key], idx + 1);
        }
        return result;
    }
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */