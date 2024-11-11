/**
 * @param {number[][]} grid
 * @return {number}
 */

const checkGrid = (grid) => {
    const maxI = grid.length;
    const maxJ = grid[0].length;
    const roten = [];
    let fresh = 0;
    for(let i = 0; i < maxI; i++) {
        for(let j = 0; j < maxJ; j++) {
            if(grid[i][j] === 2) roten.push([i, j, 0]);
            else if(grid[i][j] === 1) fresh++;
        }
    }
    return { fresh, roten}
}


var orangesRotting = function(grid) {
    const {fresh, roten} = checkGrid(grid);
    if(fresh === 0) return 0;
    else if(roten.length === 0) return -1;

    const DIRECT = [[0,1],[1,0],[-1,0],[0,-1]];
    let result = 0;
    while(roten.length) {
        const [i, j, min] = roten.shift();
        grid[i][j] = 2;
        result = Math.max(result, min);
        for(let direct of DIRECT) {
            const ni = i + direct[0];
            const nj = j + direct[1];
            if(0<= ni && ni < grid.length && 0<= nj && nj < grid[ni].length && grid[ni][nj] === 1) {
                roten.push([ni, nj, min + 1]);
            }
        }
    }

    const newGrid = checkGrid(grid);
    if(newGrid.fresh !== 0) return -1;
    else return result;

};