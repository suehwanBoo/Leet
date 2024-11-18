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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];

    const search = (node, point = 0) => {
        if(node === null) return;
        result[point] = result[point] !== undefined ? result[point] : node.val;
        search(node.right, point + 1);
        search(node.left, point + 1);
    }
    search(root);
    return result;
};