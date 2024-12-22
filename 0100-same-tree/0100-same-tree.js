/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function search(node, arr) {
        if(!node) {
            arr.push(null);
            return
        };
        arr.push(node.val);
        search(node.left, arr);
        search(node.right, arr);
    }
    const pArr = [], qArr= [];
    search(p,pArr);
    search(q,qArr);
    if(pArr.length !== qArr.length) return false;
    for(let i=0; i < pArr.length; i++) {
        if(pArr[i] !== qArr[i]) return false;
    }
    return true
};