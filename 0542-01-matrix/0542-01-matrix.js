/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    // 초반에 1에서 시작해서 0을 찾는 형태로 시도했지만 time exceed, save 객체를 활용해서 visit 표시 해줘도 exceed
    // 0을 queue에 미리 넣어놓고, result 배열에 0일 시는 다 0, 다른 값이면 Infinity 넣어놓고 최소치를 구해야 할듯
    const result = Array.from({length : mat.length}, () => []);
    const queue = []
    const maxI = mat.length;
    const maxJ = mat[0].length;
    for(let i = 0; i< maxI; i++) {
        for(let j = 0; j<maxJ; j++) {
            const value = mat[i][j];
            if(value){
                result[i][j] = Infinity
            } else {
                result[i][j] = 0;
                queue.push([i, j, 0])
            }
        }
    }

    const DIRECT = [[-1,0],[0,-1],[1,0],[0,1]]
    while(queue.length) {
        const [i,j, cnt] = queue.shift()
        for(const [di, dj] of DIRECT) {
            let nextI = i + di, nextJ = j + dj
            if(0 <= nextI && nextI < maxI && 0 <= nextJ && nextJ < maxJ && cnt + 1 < result[nextI][nextJ]) {
                result[nextI][nextJ] = cnt + 1
                queue.push([nextI, nextJ, cnt +1])
            }
        }
    }

    return result
};


