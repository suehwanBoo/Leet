/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    push(val) {
        const newNode = new ListNode(val)
        if(!this.length) {
            this.head = newNode
            this.tail = newNode
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
 }


const mergeTwoLists = function(list1, list2) {
    const result = new LinkedList();
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            result.push(list1.val);
            list1 = list1.next;
        } else {
            result.push(list2.val);
            list2 = list2.next;
        }
    }
    while(list1){
        result.push(list1.val);
        list1 = list1.next;
    }
    while(list2){
        result.push(list2.val);
        list2 = list2.next;
    }
    return result.head;
};