// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of
// the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
//
//   Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion.
//   You can return any of them.
//
//
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

var insertIntoBST = function(root, val) {
  var newNode = new TreeNode(val);
  if(!root){
    root = newNode;
    return root;
  }

  var current = root;
  while(true){
    if(val === current.val) return root;
    if(val < current.val){
      if(current.left === null){
        current.left = newNode;
        return root;
      }
      current = current.left;
    } else {
      if(current.right === null){
        current.right = newNode;
        return root;
      }
      current = current.right;
    }
  }
};

let tree = new TreeNode(4);
console.log(`Insert into BST is  is `,insertIntoBST(tree, 2));
console.log(`Insert into BST is  is `,insertIntoBST(tree, 7));
console.log(`Insert into BST is  is `,insertIntoBST(tree, 1));
console.log(`Insert into BST is  is `,insertIntoBST(tree, 3));
console.log(`Insert into BST is  is `,insertIntoBST(tree, 5));