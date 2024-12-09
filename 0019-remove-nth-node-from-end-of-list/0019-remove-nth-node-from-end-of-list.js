/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const address = [];
    while(head) {
        address.push(head);
        head = head.next;
    }
    const prevIdx = address.length - n - 1;
    if(prevIdx < 0) return address.length > 1 ? address[1] : null;
    const prevNode = address[prevIdx];
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    removeNode.next = null;
    return address[0];
};