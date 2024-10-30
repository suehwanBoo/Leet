/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let pointer = head;
    while(pointer?.next) {
        if(pointer.visit) return true;
        pointer.visit = true;
        pointer = pointer.next;
    }
    return false;
};