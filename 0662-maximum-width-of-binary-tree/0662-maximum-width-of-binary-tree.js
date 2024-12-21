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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
   const arr = [];
    
    function search(node, level = BigInt(0), layer = 0) {
        if (node === null) return;
        if (!arr[layer]) {
            arr[layer] = [level, level];
        } else {
            arr[layer][1] = level;
        }

        search(node.left, level * BigInt(2), layer + 1); 
        search(node.right, level * BigInt(2) + BigInt(1), layer + 1);
    }

    search(root);
    
    let result = BigInt(1);

    for (let nums of arr) {
        if (typeof nums[0] === 'bigint' && typeof nums[1] === 'bigint') {
            result = BigInt(Math.max(Number(result), Number(nums[1] - nums[0] + BigInt(1))));
        }
    }

    return Number(result);  // BigInt를 숫자로 반환
};