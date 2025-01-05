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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let result = 0;
    if(!root) return result;
    function search(node=root, path=[]) {
        if(!node) return;
        path.push(node.val);
        let sum = 0;
        for(let i = path.length - 1; i >=0; i--) {
            sum += path[i];
            if(sum === targetSum) result++;
        }
        search(node.left, path);
        search(node.right, path);
        path.pop();
    }
    search();
    return result;
};