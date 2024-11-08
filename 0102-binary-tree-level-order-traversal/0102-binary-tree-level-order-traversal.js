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
 * @return {number[][]}
 */



var levelOrder = function(root) {
    const result = [];
    function travel(node, level= 1) {
        if(node === null) return;
        const left = node.left;
        const right = node.right;
        if(!result[level] && (left || right)) result.push([])
        if(left) result[level].push(left.val);
        if(right) result[level].push(right.val);
        travel(left, level+1);
        travel(right, level+1);
    }
    if(root?.val !== undefined){
        result.push([root.val])
        travel(root);
    }

    return result;
};