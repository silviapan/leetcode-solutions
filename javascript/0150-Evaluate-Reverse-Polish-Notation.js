/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const secondNum = stack.pop();
      const firstNum = stack.pop();

      let val;

      switch (token) {
        case "+":
          val = firstNum + secondNum;
          break;
        case "-":
          val = firstNum - secondNum;
          break;
        case "*":
          val = firstNum * secondNum;
          break;
        case "/":
          val = firstNum / secondNum;
          break;
      }
      stack.push(parseInt(val));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};
