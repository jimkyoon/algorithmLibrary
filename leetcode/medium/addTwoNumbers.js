// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// first version / run: 128ms memory: 38.5mb
const addTwoNumbers = (l1, l2) => {
  let pointer1 = l1;
  let pointer2 = l2;
  let returnLL;
  let pointer3 = returnLL;
  let carryover = 0;
  while (pointer1 || pointer2 || carryover > 0) {
    let sum = 0;
    if (pointer1 !== null) {
      sum += pointer1.val;
      pointer1 = pointer1.next;
    }
    if (pointer2 !== null) {
      sum += pointer2.val;
      pointer2 = pointer2.next;
    }
    sum += carryover;
    carryover = 0;
    if (sum > 9) {
      carryover = Math.floor(sum / 10);
      sum = sum % 10;
    }
    if (returnLL === undefined) {
      returnLL = new ListNode(sum);
      pointer3 = returnLL;
    } else {
      pointer3.next = new ListNode(sum);
      pointer3 = pointer3.next;
    }
  }
  return returnLL;
}