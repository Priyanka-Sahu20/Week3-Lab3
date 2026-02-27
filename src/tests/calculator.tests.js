const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  // Tests for Modulo
  describe('modulo(a, b)', () => {
    test('should find modulo of two positive numbers: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should find modulo: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should find modulo with negative dividend: (-10) % 3 = -1', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should find modulo with negative divisor: 10 % (-3) = 1', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should find modulo with both negative: (-10) % (-3) = -1', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should return zero when dividend is multiple of divisor: 15 % 5 = 0', () => {
      expect(modulo(15, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo by zero');
    });

    test('should handle decimal modulo: 5.5 % 2 = 1.5', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });
  });

  // Tests for Power (Exponentiation)
  describe('power(base, exponent)', () => {
    test('should raise base to exponent: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should raise base to exponent: 5 ^ 2 = 25', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should handle exponent of zero: 10 ^ 0 = 1', () => {
      expect(power(10, 0)).toBe(1);
    });

    test('should handle base of zero: 0 ^ 5 = 0', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle negative exponent: 2 ^ (-2) = 0.25', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle negative base: (-2) ^ 3 = -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle negative base with even exponent: (-2) ^ 4 = 16', () => {
      expect(power(-2, 4)).toBe(16);
    });

    test('should handle decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should handle decimal exponent: 4 ^ 0.5 = 2', () => {
      expect(power(4, 0.5)).toBe(2);
    });
  });

  // Tests for Square Root
  describe('squareRoot(n)', () => {
    test('should calculate square root: sqrt(16) = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: sqrt(25) = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of 2: sqrt(2) ≈ 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421356);
    });

    test('should calculate square root of zero: sqrt(0) = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal: sqrt(6.25) = 2.5', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should throw error for negative number: sqrt(-1)', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative number: sqrt(-16)', () => {
      expect(() => squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle square root of one: sqrt(1) = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle very small positive numbers: sqrt(0.0001) = 0.01', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });
  });
});
