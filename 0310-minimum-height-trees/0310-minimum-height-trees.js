/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(edges.length === 0) return [0];
    const roots = {};
    const leafs = {};
    for(let [e1,e2] of edges) {
        if(roots[e1]) roots[e1].push(e2);
        else roots[e1] = [e2];
        if(roots[e2]) roots[e2].push(e1);
        else roots[e2] = [e1];
        leafs[e1] = (leafs[e1] || 0) + 1;
        leafs[e2] = (leafs[e2] || 0) + 1;
    }

    let queue = [];
    for(let leaf in leafs) {
        if(leafs[leaf] === 1) {
            queue.push(+leaf);
            leafs[leaf] = 0;
        }
    }
    while(n > 2) {
        n -= queue.length;
        const nextQueue = []
        for(let leaf of queue) {
            for(let nextLeaf of roots[leaf]) {
                leafs[nextLeaf]--
                if(leafs[nextLeaf] === 1) nextQueue.push(+nextLeaf);
            }
        }
        queue = nextQueue;
    }
    
    return queue;
};