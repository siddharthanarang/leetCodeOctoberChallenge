// You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake.
// Recover the tree without changing its structure.
//
//   Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
//
//
//   Example
//
//   Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  
  let firstNode, secondNode;
  let prev = new TreeNode(-Number.MAX_VALUE);
  traverse(root);
  let temp = firstNode.val;
  firstNode.val = secondNode.val;
  secondNode.val = temp;
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (node.val < prev.val) {
      secondNode = node;
      if (!firstNode) firstNode = prev;
    }
    prev = node;
    traverse(node.right);
  }
};