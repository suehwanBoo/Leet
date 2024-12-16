/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const nextNode = head?.next;
    const nextCall = nextNode?.next;
    if(nextNode) {
        nextNode.next = head;
    } else return head;
    if(nextCall) head.next = swapPairs(nextCall);
    else head.next = null;
    return nextNode;
};