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
    let arrLeft = [], arrRight = [];
    function search(node, isLeft) {
        const target = isLeft ? arrLeft : arrRight;
        if(node === null) {
            target.push(null)
            return;
        }
        target.push(node.val);
        if(isLeft) {
            search(node.left, isLeft);
            search(node.right, isLeft);
        } else {
            search(node.right, isLeft);
            search(node.left, isLeft);
        }
    }
    search(root.left, true);
    search(root.right, false);
    if(arrLeft.length !== arrRight.length) return false;
    for(let i = 0; i < arrLeft.length; i++) {
        if(arrLeft[i] !== arrRight[i]) return false;
    }
    return true;
};