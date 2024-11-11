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

const search = (node, less=[], great=[]) => {
    if(!node) return true;
    const value = node.val;
    let leftReturn = true;
    let rightReturn = true;

    if(node.left) {
        const newLess = [...less, node.val];
        let isAccess = true;
        for(let value of newLess) {
            if(node.left.val >= value) isAccess = false;
        }
        for(let value of great) {
            if(node.left.val <= value) isAccess = false;
        }
        if(isAccess) leftReturn = search(node.left, newLess, great);
        else return false;
    } 
    if(node.right) {
        const newGreat = [...great, node.val];
        let isAccess = true;
        for(let value of less) {
            if(node.right.val >= value) isAccess = false;
        }
        for(let value of newGreat) {
            if(node.right.val <= value) isAccess = false;
        }
        if(isAccess) rightReturn = search(node.right, less, newGreat);
        else return false;
    }
    return leftReturn && rightReturn
}

var isValidBST = function(root) {
    return search(root)
};