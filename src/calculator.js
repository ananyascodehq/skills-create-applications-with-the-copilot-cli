// Calculator module supporting basic arithmetic operations

/**
 * Addition: Add two or more numbers
 * @param {...number} numbers - Numbers to add
 * @returns {number} Sum of all numbers
 */
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Subtraction: Subtract numbers
 * @param {number} a - First number
 * @param {number} b - Number to subtract
 * @returns {number} Result of a - b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication: Multiply numbers
 * @param {...number} numbers - Numbers to multiply
 * @returns {number} Product of all numbers
 */
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

/**
 * Division: Divide numbers with error handling for division by zero
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number|string} Result of a / b or error message if b is 0
 */
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
