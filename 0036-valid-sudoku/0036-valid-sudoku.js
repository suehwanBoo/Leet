/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const leftToRight = Array.from({length : 9}, () => ({}))
    const topToBottom = Array.from({length : 9}, () => ({}))
    const subBox = Array.from({length : 9}, () => ({}))
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const elem = board[i][j];
            if(+elem) {
                const subIdx = Math.floor(j / 3) + (Math.floor(i / 3) * 3);
                if(leftToRight[i][elem] || topToBottom[j][elem] || subBox[subIdx][elem]) return false;
                leftToRight[i][elem] = true;
                topToBottom[j][elem] = true;
                subBox[subIdx][elem] = true;
            }
        }
    }
    return true;
};