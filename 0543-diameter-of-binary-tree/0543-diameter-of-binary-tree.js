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
var diameterOfBinaryTree = function(root) {
    let result = 0;
    function find(node) {
        if(node === null) return 0;
        const left = find(node.left);
        const right = find(node.right);
        result = Math.max(result, left + right);
        return Math.max(left, right) + 1;
    }
    find(root);
    return result;
};