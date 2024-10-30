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
var isBalanced = function(root) {
    let result = true;
    function count(node=root, cnt = 0) {
        if(!node) return cnt;
        const leftCnt = count(node.left, cnt + 1)
        const rightCnt = count(node.right, cnt + 1)
        if(Math.abs(leftCnt - rightCnt) > 1) result = false;
        return leftCnt > rightCnt ? leftCnt : rightCnt
    }
    count()
    return result
};