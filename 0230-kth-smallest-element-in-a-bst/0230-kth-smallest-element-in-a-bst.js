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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const smallArr = [];
    function search(node) {
        if(smallArr.length >= k) return;
        if(node === null) return;
        search(node.left);
        smallArr.push(node.val);
        console.log(node.val)
        search(node.right);
    }
    search(root);
    return smallArr[k - 1]
};