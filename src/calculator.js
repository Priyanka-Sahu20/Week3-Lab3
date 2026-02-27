#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation with zero-check
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo operation - returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

// Exponentiation operation - returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Parse command line arguments
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error('Usage: calculator.js <number1> <operator> <number2>');
    console.error('Operators: +, -, *, /');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  let result;

  try {
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'. Supported operators: +, -, *, /`);
        process.exit(1);
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Run if executed directly
if (require.main === module) {
  main();
}
