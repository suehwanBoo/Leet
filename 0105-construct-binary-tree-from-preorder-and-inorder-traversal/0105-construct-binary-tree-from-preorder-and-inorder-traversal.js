/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let idx = 0;
    function build(pointer=0) {
        if(idx >= inorder.length || pointer >= preorder.length) return null;
        let node = new TreeNode();
        node.left = build(pointer + 1);
        if(preorder[pointer] === inorder[idx]) {
            node.val = preorder[pointer];
            idx++;
        }
        node.right = build(pointer + 2);
        return node.val === 0 ? null : node;
    }
    return build()
};