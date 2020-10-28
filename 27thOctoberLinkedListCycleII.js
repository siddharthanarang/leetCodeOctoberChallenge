// Linked List Cycle II

// Given a linked list, return the node where the cycle begins. If there is no cycle, r
// eturn null.
//
//   There is a cycle in a linked list if there is some node in the list that can be reached again by
// continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's
// next pointer is connected to. Note that pos is not passed as a parameter.
//
// Notice that you should not modify the linked list.
//
//   Follow up:
//
//   Can you solve it using O(1) (i.e. constant) memory?

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.



// Definition for singly-linked list.
  
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

  if(!head || !head.next){
    return null;
  }

  let currentNode = head;

  while(currentNode.next){
    if(currentNode.visitied){
      return currentNode;
    }
    currentNode.visitied = true;
    currentNode = currentNode.next;
  }
  return null;
};

let first = new ListNode(1);
let second = new ListNode(2);
first.next = second;
let third = new ListNode(3);
second.next = third;
third.next = first;

console.log(`detectCycle response is `, detectCycle(first));


