/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    function check(node) {
        if(node === null) return null;
        const obj = {value :node.val, left : null, right : null};
        obj.left = check(node.left);
        obj.right = check(node.right);
        return obj;
    }
    return check(root, 0);
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
   function make(pointer) {
        if(pointer && pointer.value !== null) {
            const node = new TreeNode(pointer.value);
            node.left = make(pointer.left);
            node.right = make(pointer.right);
            return node;
        }
        return null;
   }
    return make(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */