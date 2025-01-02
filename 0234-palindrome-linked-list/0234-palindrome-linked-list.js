/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        if(arr[left] !== arr[right]) return false;
        left ++;
        right --;
    }
    return true;
};