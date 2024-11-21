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
 * @return {number}
 */

function search(node, depth=0) {
    if(node === null) return depth;
    const leftDepth = search(node.left, depth+1);
    const rightDepth = search(node.right, depth+1);
    return Math.max(leftDepth, rightDepth);
}

var maxDepth = function(root) {
    return search(root);
};