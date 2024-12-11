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
var maxPathSum = function(root) {
    let result = -Infinity;
    function dfs(node) {
        if(!node) return 0;
        let leftValue = dfs(node.left);
        let rightValue = dfs(node.right);
        let sum = Math.max(node.val, node.val + leftValue, node.val + rightValue, node.val + leftValue + rightValue);
        if(result < sum) result = sum;
        return Math.max(node.val + leftValue, node.val + rightValue, node.val);
    }
    dfs(root);
    console.log(result);
    return result;
};