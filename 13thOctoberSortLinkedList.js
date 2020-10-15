// Sort List
//
// Example
//
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]


 // Definition for singly-linked list.

// 1st Aproach traverse the list, convert to array, sort that and form list again
// Implement merge sort on list

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

ListNode.prototype.push = function (val) {

  let newNode = new ListNode(val);
  let currentNode = this;
  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = newNode;

  return this;
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

  const merge = (list1, list2) => {

    let currentNode = new ListNode();
    let initialPointer = currentNode;
    while(list1 && list2){
      if(list1.val < list2.val){
        currentNode.next = list1;
        list1 = list1.next;
        currentNode = currentNode.next;
      }
      else{
        currentNode.next = list2;
        list2 = list2.next;
        currentNode = currentNode.next;
      }
    }
    if(list1){
      currentNode.next = list1;
    }
    if(list2){
      currentNode.next = list2;
    }
    initialPointer = initialPointer.next;
    currentNode = null;
    return initialPointer;
  };

  const findMid = (head) => {

    let middlePreNode = null;
    while (head && head.next){
      middlePreNode = middlePreNode === null ? head : middlePreNode.next;
      head = head.next.next
    }
    let mid = middlePreNode.next;
    middlePreNode.next = null; // Turning Mid Previous to null so that it refers till middle only not after that
    return mid;
  };
  
  const mergeSort = (listNode) => {
    
    if(!listNode || !listNode.next){
      return listNode;
    }
    let middleNode = findMid(listNode);

    let left = mergeSort(listNode); // it has reference till middle only

    let right = mergeSort(middleNode);

    return  merge(left,right);
    
  };
  
  return mergeSort(head);

};

let list = new ListNode(4);

console.log(`Push element into the list `, list.push(2));
console.log(`Push element into the list `, list.push(1));
console.log(`Push element into the list `, list.push(3));

console.log(`Sort list `, sortList(list));