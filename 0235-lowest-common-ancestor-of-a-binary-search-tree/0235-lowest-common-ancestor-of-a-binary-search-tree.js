/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 노드의 포인터가 p와 q 같아야함, 찢기는 순간에 있던 포인터가 가장 작은 공통 조상임
    // 즉 같은 방향으로 움직여야하고, 만약 다른 방향으로 움질일 시에 작업을 멈추고 해다 포인터의 숫자를 반환하면 될듯
    let pointer = root;
    while(pointer) {
        if(pointer.val > p.val && pointer.val > q.val) pointer = pointer.left;
        else if(pointer.val < p.val && pointer.val < q.val) pointer = pointer.right;
        else return pointer
    }
    return root
};