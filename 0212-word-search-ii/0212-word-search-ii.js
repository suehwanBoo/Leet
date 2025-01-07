/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const tree = {};
    for(let word of words) {
        let idx = 0;
        let obj = tree;
        while(idx < word.length) {
            obj[word[idx]] = obj[word[idx]] || {};
            obj = obj[word[idx]];
            idx++;
        }
        obj.end = true;
    }

    const DIRECT = [[0,1],[1,0],[-1,0],[0,-1]];
    const result = new Set();
    function dfs(i,j,tree,path) {
        if(tree.end) {
            result.add(path);
            return;
        }
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || !tree[board[i][j]]) return;
        let char = board[i][j]
        board[i][j] = "#";
        for(let [di,dj] of DIRECT) {
            const ni = di + i, nj = dj + j;
            dfs(ni,nj,tree[char], path + char);
        }
        board[i][j] = char;
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(tree[board[i][j]]) dfs(i,j,tree,"")
        }
    }
    return [...result.values()];
};