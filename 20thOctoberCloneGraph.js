// Clone Graph
//
// Given a reference of a node in a connected undirected graph.
//
//   Return a deep copy (clone) of the graph.
//
//   Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
//
//
//   class Node {
//   public int val;
//   public List<Node> neighbors;
// }
//
// Example
//
//
// nput: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).


/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return node;
  var map = {};
  return traverse(node);

  function traverse(node) {
    if (!map[node.val]) {
      var newNode = new Node(node.val);
      map[node.val] = newNode;
      newNode.neighbors = node.neighbors.map(traverse);
    }
    return map[node.val];
  }

};