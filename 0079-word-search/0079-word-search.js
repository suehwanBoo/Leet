/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */



var exist = function(board, word) {
    function dfs(i,j,visit,char) {
        if(char.length === word.length){
            if(char === word) return true;
            else return false;
        } 
        for(let [ni,nj] of [[0,1],[1,0],[-1,0],[0,-1]]) {
            const xi = ni + i
            const xj = nj + j;
            if(0<= xi && xi < board.length && 0<= xj && xj < board[xi].length && !visit[`${xi}-${xj}`]) {
                if(word[char.length] === board[xi][xj]) {
                    visit[`${xi}-${xj}`] = true
                    const result = dfs(xi, xj, visit, char + board[xi][xj]);
                    if(result) return true;
                    visit[`${xi}-${xj}`] = false;
                }
            }
        }
        return false;
    }
    let result = false;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === word[0]) {
                result = dfs(i, j, {[`${i}-${j}`]: true}, word[0]);}
            if(result) return true;
        }
    }

    return false;
};