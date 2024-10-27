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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function invert(root) {
        if(root === null) return;
        else {
            invertTree(root.left);
            invertTree(root.right);
            [root.left, root.right] = [root.right, root.left]
        }
    }
    invert(root);
    return root
};