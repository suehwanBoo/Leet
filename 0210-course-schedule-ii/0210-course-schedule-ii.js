/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */



var findOrder = function(numCourses, prerequisites) {
    const result = [];
    const degree = new Array(numCourses).fill(0);
    const path = {};
    for(let [p1,p2] of prerequisites) {
        path[p2] = (path[p2] || [])
        path[p2].push(p1);
        degree[p1]+=1;
    }
    const queue = [];
    for(let i = 0; i < numCourses; i++) {
        if(degree[i] === 0) queue.push(i);
    }

    while(queue.length) {
        const go = queue.shift();
        result.push(go)
        if(path[go]){
            for(let p of path[go]) {
                degree[p] -= 1;
                if(degree[p] === 0) queue.push(p);
            }
        }
    }
    return result.length === numCourses ? result : [];
};