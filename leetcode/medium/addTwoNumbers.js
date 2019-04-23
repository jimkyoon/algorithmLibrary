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

// first version
// run: 128ms, memory: 38.5mb
const addTwoNumbers = (l1, l2) => {
  // have 2 pointers for each linked list
  let pointer1 = l1;
  let pointer2 = l2;
  // create the new linked list variable
  let returnLL;
  // have a third pointer set to the new linked list
  let pointer3 = returnLL;
  // carryover for each run of the while loop
  let carryover = 0;
  // if pointer 1 or 2 or carryover exists, keep running
  while (pointer1 || pointer2 || carryover > 0) {
    // have the sum to store all values added up from linkedlists or carryover
    let sum = 0;
    // add value of each node then set pointer to next node
    if (pointer1 !== null) {
      sum += pointer1.val;
      pointer1 = pointer1.next;
    }
    if (pointer2 !== null) {
      sum += pointer2.val;
      pointer2 = pointer2.next;
    }
    // finally add the carryover, then reset the carryover
    sum += carryover;
    carryover = 0;
    // if the sum is over 10, since each node can only store single digits, run this if statement
    if (sum > 9) {
      // set the new carryover
      carryover = Math.floor(sum / 10);
      // sum set to only the last digit
      sum = sum % 10;
    }
    // if there is no new linked list in the beginning, now create it with new start value
    if (returnLL === undefined) {
      returnLL = new ListNode(sum);
      pointer3 = returnLL;
    } else {
      // otherewise, create a new node then set the pointer to the next
      pointer3.next = new ListNode(sum);
      pointer3 = pointer3.next;
    }
  }
  // return the new linked list
  return returnLL;
};
