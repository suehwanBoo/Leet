/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function getCommon(node, p, q) {
        if(!node || node === p || node === q) return node;
        const left = getCommon(node.left, p, q);
        const right = getCommon(node.right, p, q);
        return left && right ? node : (left || right);
    }
    return getCommon(root,p, q);
};