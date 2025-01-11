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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true;
    if(!root.left || !root.right) return false;
    function search(left, right) {
        if(!left && !right) return true;
        if(!left || !right) return false;
        if(left.val === right.val) return search(left.left, right.right) && search(left.right, right.left);
        else return false;
    }
    return search(root.left, root.right);
};