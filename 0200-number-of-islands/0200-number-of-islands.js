/**
 * @param {character[][]} grid
 * @return {number}
 */

const search = (grid, i, j, visit) => {
    const q = [[i,j]];
    const DIRECT = [[0,1],[1,0],[-1,0],[0,-1]];
    visit[i][j] = 1;
    while(q.length) {
        const [ni, nj] = q.pop();
        for(let direct of DIRECT) {
            const di = ni + direct[0];
            const dj = nj + direct[1];
            if(0<= di && di < grid.length && 0 <= dj && dj < grid[di].length && visit[di][dj] === 0 && grid[di][dj] === "1") {
                visit[di][dj] = 1;
                q.push([di,dj]);
            }
        }
    }
}

var numIslands = function(grid) {
    const islands = [];
    const maxI = grid.length;
    const maxJ = grid[0].length;
    for(let i = 0; i < maxI; i++) {
        for(let j = 0; j < maxJ; j++) {
            if(grid[i][j] === '1') islands.push([i,j]);
        }
    }
    let result = 0;
    const visit = Array.from({length : maxI}, () => Array.from({length : maxJ}, () => 0));
    for(let island of islands) {
        const [i,j] = island;
        if(visit[i][j] === 0) {
            search(grid, i, j, visit);
            result++;
        }
    }
    return result;
};