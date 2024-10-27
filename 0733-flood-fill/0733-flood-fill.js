/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let original = image[sr][sc]
    let visit = {}
    let stack = [[sr,sc]];
    let directs = [[0,1],[1,0],[-1,0],[0,-1]]
    while(stack.length) {
        let [pr,pc] = stack.pop();
        image[pr][pc] = color;
        for(let direct of directs) {
            const nr = pr + direct[0]
            const nc = pc + direct[1]
            if( nr >= 0 && nr < image.length && nc >= 0 && nc < image[nr].length && image[nr][nc] === original) {
                !visit[`${nr}${nc}`] && stack.push([nr,nc])
                visit[`${nr}${nc}`] = true
                }
        }
    }

    return image
};