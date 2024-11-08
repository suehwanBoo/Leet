/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

function clone(node, visit={}) {
    if(!node?.val) return null;
    if(visit[node.val]) return visit[node.val];
    else {
        const cloneNode = {
            val : node.val
        }
        visit[node.val] = cloneNode;
        cloneNode.neighbors = [];
        for(let neighbor of node.neighbors) {
            const cloneNeighbor = clone(neighbor, visit);
            cloneNode.neighbors.push(cloneNeighbor);
        }
        return cloneNode
    }

}

var cloneGraph = function(node) {
    return clone(node)
};