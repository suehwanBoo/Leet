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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];
    function search(node, sum, arr) {
        if(!node.left && !node.right) {
            if(sum === targetSum) result.push(arr);
            return;
        };
        if(node.left)search(node.left, sum + node.left.val, [...arr, node.left.val]);
        if(node.right)search(node.right, sum + node.right.val, [...arr, node.right.val]);
    }
    root && search(root, root.val, [root.val]);
    return result;
};