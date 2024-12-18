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
var oddEvenList = function(head) {
    const result = head;
    const evenHead = head?.next;
    let oddPointer = head;
    let evenPointer = evenHead;
    while(oddPointer?.next?.next || evenPointer?.next?.next) {
        if(oddPointer?.next?.next) {
            oddPointer.next = oddPointer.next?.next;
            oddPointer = oddPointer.next;
        }
        if(evenPointer?.next?.next) {
            evenPointer.next = evenPointer.next?.next;
            evenPointer = evenPointer.next;
        }
    }
    if(evenPointer) evenPointer.next = null;
    if(oddPointer) oddPointer.next = evenHead;
    return result;
};