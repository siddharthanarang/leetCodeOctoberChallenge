// Given a linked list, rotate the list to the right by k places, where k is non-negative.
//
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL

//Definition for singly-linked list.

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

ListNode.prototype.pop = function (val) {

  let newNode = new ListNode(val);
  let currentNode = this;
  while(currentNode.next){
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  return this;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

  // O(nk) solution -> itterating for k node and moving last node to first
  
  // if(!head || !head.next || k === 0){
  //   return head;
  // }
  // let currentNode, lastNode;
  //
  // for(let i=0; i<k; i++){
  //   currentNode = head;
  //   while(currentNode.next.next){
  //     currentNode = currentNode.next;
  //   }
  //   lastNode = currentNode.next;
  //   currentNode.next = null;
  //   lastNode.next = head;
  //   head = lastNode;
  // }
  // return head;
  if(!head || !head.next){
    return head;
  }
  let currentNode, lastNode, replaceNode;
  currentNode = head;
  let counter = 0;
  while(currentNode){
    currentNode = currentNode.next;
    counter++;
  }
  k = k%counter;
  if(k === 0){
    return head;
  }
  let findElementIndex = counter - k;
  currentNode = head;
  for(let i=1; i<counter; i++){
    if(i === findElementIndex){
      replaceNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  lastNode = currentNode;
  lastNode.next = head;
  head = replaceNode.next;
  replaceNode.next = null;
  return head;
};

let list = new ListNode(1);
console.log(`Insert new node in Linked List `,list.pop(2));
console.log(`Insert new node in Linked List `,list.pop(3));
console.log(`Insert new node in Linked List `,list.pop(4));
console.log(`Insert new node in Linked List `,list.pop(5));

console.log(`Rotate Right Linked List `,rotateRight(list,1));


