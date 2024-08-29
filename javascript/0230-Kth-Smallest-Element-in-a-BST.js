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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  let arr = [];

  function inOrder(root, k) {
    if (root === null) {
      return;
    }

    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  }
  inOrder(root, k);
  const el = arr[k - 1];
  return el;
};
