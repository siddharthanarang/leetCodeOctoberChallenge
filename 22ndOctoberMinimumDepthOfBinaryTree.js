// Minimum Depth of Binary Tree
//
//
// Given a binary tree, find its minimum depth.
//
//   The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
//   Note: A leaf is a node with no children.
//
//   Example
//
// Input: root = [3,9,20,null,null,15,7]
// Output: 2



// Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {

  let minDepth = 0;
  if(!root){
    return minDepth;
  }
  const traverse = (node, depth) => {
    depth++;
    if(minDepth!=0 && depth > minDepth){
      return;
    }
    if(node.left) traverse(node.left, depth);
    if(node.right) traverse(node.right, depth);
    if(!node.left && !node.right){
      minDepth = minDepth === 0 ? depth :Math.min(minDepth, depth);
    }

  };

  traverse(root, 0);

  return minDepth;

};

let root = new TreeNode(3);
let first = new TreeNode(9);
let second = new TreeNode(20);
let three = new TreeNode(15);
let four = new TreeNode(7);
root.left = first;
root.right = second;
second.left = three;
second.right = four;

console.log(`Minimum depth of tree is `, minDepth(root));