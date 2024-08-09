import {Stack} from "../DS/Stack";

const sampleQuestion1 = "(A+B)+(C-D)"
const sampleQuestion2 = "((A+B)+(C-D)"
const sampleQuestion3 = "((A+B)+{C-D)}"

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
const checkExpression = (str) => {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char)
      continue;
    }
    if (stack.length === 0) return false;

    let check;
    switch (char) {
      case ")":
        check = stack.pop();
        if (check === '{' || check === '[') {
          return false;
        }
        break;

      case "}":
        check = stack.pop();
        if (check === '(' || check === '[') {
          return false;
        }
        break;

      case "]":
        check = stack.pop();
        if (check === '(' || check === '{') {
          return false;
        }
        break;

    }

  }

  return stack.isEmpty();
}

console.log(checkExpression(sampleQuestion1))
console.log(checkExpression(sampleQuestion2))
console.log(checkExpression(sampleQuestion3))
