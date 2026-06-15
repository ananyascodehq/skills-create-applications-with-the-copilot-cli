const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add multiple numbers', () => {
      expect(add(5, 10, 15)).toBe(30);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add single number', () => {
      expect(add(42)).toBe(42);
    });

    test('should add no numbers (empty)', () => {
      expect(add()).toBe(0);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract and get negative result', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(10, -4)).toBe(14);
    });

    test('should subtract with negative first number', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('should subtract equal numbers', () => {
      expect(subtract(7, 7)).toBe(0);
    });

    test('should handle zero subtraction', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should subtract zero from zero', () => {
      expect(subtract(0, 0)).toBe(0);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply multiple numbers', () => {
      expect(multiply(7, 8, 2)).toBe(112);
    });

    test('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(6, -2)).toBe(-12);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply single number', () => {
      expect(multiply(42)).toBe(42);
    });

    test('should multiply no numbers (empty)', () => {
      expect(multiply()).toBe(1);
    });

    test('should multiply by one', () => {
      expect(multiply(100, 1)).toBe(100);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide and get decimal result', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should handle decimal division', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    // Edge case: Division by zero
    test('should handle division by zero with error message', () => {
      expect(divide(10, 0)).toBe('Error: Division by zero is not allowed');
    });

    test('should handle division by zero with negative dividend', () => {
      expect(divide(-10, 0)).toBe('Error: Division by zero is not allowed');
    });

    test('should handle division of zero by zero', () => {
      expect(divide(0, 0)).toBe('Error: Division by zero is not allowed');
    });

    test('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Integration Tests', () => {
    test('should perform sequence: (2 + 3) * (10 - 4) = 30', () => {
      const step1 = add(2, 3);
      const step2 = subtract(10, 4);
      const result = multiply(step1, step2);
      expect(result).toBe(30);
    });

    test('should perform sequence: ((45 * 2) + (20 / 5)) = 94', () => {
      const step1 = multiply(45, 2);
      const step2 = divide(20, 5);
      const result = add(step1, step2);
      expect(result).toBe(94);
    });

    test('should perform sequence: (100 / 4) - (15 / 3) = 20', () => {
      const step1 = divide(100, 4);
      const step2 = divide(15, 3);
      const result = subtract(step1, step2);
      expect(result).toBe(20);
    });
  });
});
