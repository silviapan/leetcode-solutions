/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) return false;

  let stack = [s[0]];

  // If the paren is an opening paren, add to the stack
  // When it's a closing paren, check if it's matching at the top
  // If it's matching, remove the top element

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const mostRecentChar = stack.at(-1);
      if (
        (char === ")" && mostRecentChar === "(") ||
        (char === "]" && mostRecentChar === "[") ||
        (char === "}" && mostRecentChar === "{")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
