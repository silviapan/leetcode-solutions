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
 * @return {number}
 */
// DFS Solution
var maxDepth = function (root) {
  if (!root) return 0;

  maxLeft = maxDepth(root.left);
  maxRight = maxDepth(root.right);

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// BFS Solution
var maxDepth = function (root) {
  if (!root) return 0;

  let max = 0;

  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    max++;
  }
  return max;
};
