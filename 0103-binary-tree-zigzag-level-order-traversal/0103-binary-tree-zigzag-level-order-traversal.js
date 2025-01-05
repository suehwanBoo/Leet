/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const q = [];
    const result = [];
    q.push([root,0])
    while(q.length) {
        const [node, level] = q.shift();
        if(node) {
            result[level] = result[level] || [];
            result[level].push(node.val);
            if(node.left) q.push([node.left, level + 1]);
            if(node.right) q.push([node.right, level + 1]);
        }
    }
    for(let i = 0; i < result.length; i++) {
        if(i % 2) result[i].reverse();
    }
    return result;
};