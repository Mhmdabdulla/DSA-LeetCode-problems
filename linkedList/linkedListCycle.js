//leetcode 141. Linked List Cycle
//Idea here is to use two pointers, one moving twice as fast as the other.
//If there is a cycle, the fast pointer will eventually meet the slow pointer.

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
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)return true;
    }
    return false;
};