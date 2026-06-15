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

/**
 * Modulo: Calculate the remainder of a divided by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number|string} Remainder of a % b or error message if b is 0
 */
function modulo(a, b) {
  if (b === 0) {
    return "Error: Modulo by zero is not allowed";
  }
  return a % b;
}

/**
 * Power (Exponentiation): Raise base to the exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Result of base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square Root: Calculate the square root of a number with error handling for negative numbers
 * @param {number} n - The number to find the square root of
 * @returns {number|string} The square root of n or error message if n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    return "Error: Cannot calculate square root of negative number";
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
