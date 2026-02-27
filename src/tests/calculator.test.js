const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  
  // Tests for Addition
  describe('add(a, b)', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers: 10 + (-5) = 5', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add two negative numbers: -10 + (-5) = -15', () => {
      expect(add(-10, -5)).toBe(-15);
    });

    test('should add zero: 5 + 0 = 5', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers: 2.5 + 3.7 = 6.2', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });
  });

  // Tests for Subtraction
  describe('subtract(a, b)', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract and return negative: 4 - 10 = -6', () => {
      expect(subtract(4, 10)).toBe(-6);
    });

    test('should subtract negative number: 10 - (-5) = 15', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract from zero: 0 - 5 = -5', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers: 10.5 - 3.2 = 7.3', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });
  });

  // Tests for Multiplication
  describe('multiply(a, b)', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive by negative: 5 * (-3) = -15', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers: (-4) * (-5) = 20', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero: 100 * 0 = 0', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });
  });

  // Tests for Division
  describe('divide(a, b)', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result: 10 / 4 = 2.5', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide positive by negative: 20 / (-4) = -5', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide two negative numbers: (-20) / (-5) = 4', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide zero: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle decimal division: 15.6 / 2 = 7.8', () => {
      expect(divide(15.6, 2)).toBeCloseTo(7.8);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    test('should handle very large numbers in addition', () => {
      expect(add(999999999, 1)).toBe(1000000000);
    });

    test('should handle very small decimal numbers in multiplication', () => {
      expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001);
    });

    test('should handle negative zero', () => {
      expect(add(0, -0)).toBe(0);
    });
  });
});
