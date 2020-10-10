// Serialize and Deserialize BST
//
// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or
// memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another
// computer environment.
//
//   Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your
// serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be
// serialized to a string, and this string can be deserialized to the original tree structure.
//
//   The encoded string should be as compact as possible.
//
//   Example
//
//   Input: root = [2,1,3]
//   Output: [2,1,3]


//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.add = function (rootNode, val) {
  const newNode = new TreeNode(val);
  let currentNode = rootNode;
  while(true){
    if(val < +currentNode.val){
      if(!currentNode.left){
        currentNode.left = newNode;
        return rootNode;
      }
      currentNode = currentNode.left;
    }
    else {
      if(!currentNode.right){
        currentNode.right = newNode;
        return rootNode;
      }
      currentNode = currentNode.right;
    }
  }
} ;


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

  let serializeString = '';
  if(!root){
    return serializeString;
  }
  const traversal = (currentNode) => {
    serializeString += currentNode.val + '|';
    if(currentNode.left) traversal(currentNode.left);
    if(currentNode.right) traversal(currentNode.right);
  };
  traversal(root);

  return serializeString.slice(0,-1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(!data || !data.length){
    return null;
  }
  const dataArray = data.split('|');
  let tree = new TreeNode(dataArray[0]);
  for(let i=1; i<dataArray.length; i++){
    tree.add(tree, dataArray[i]);
  }
  return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let tree = new TreeNode(41);

console.log(`Add element in to the tree `, tree.add(tree, 37));
console.log(`Add element in to the tree `, tree.add(tree, 44));

console.log(`Serialization of tree is`, serialize(tree));
console.log(`DeSerialization of tree is`, deserialize(serialize(tree)));