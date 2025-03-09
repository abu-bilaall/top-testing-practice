const calculator = require("../modules/calculator");

test("does the calculator module exist?", () => {
  expect(calculator).toBeDefined();
});

// add tests
test("is addition defined?", () => {
  expect(calculator.add()).toBeDefined();
});

test("2 + 2 equals 4", () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test("-2 + 2 equals 0", () => {
  expect(calculator.add(-2, 2)).toEqual(0);
});

test("-2 + (-2) equals - 4", () => {
  expect(calculator.add(-2, -2)).toEqual(-4);
});

// subtract tests
test("is subtraction defined?", () => {
  expect(calculator.subtract()).toBeDefined();
});

test("2 - 2 equals 0", () => {
  expect(calculator.subtract(2, 2)).toEqual(0);
});

test("-2 - 2 equals -4", () => {
  expect(calculator.subtract(-2, 2)).toEqual(-4);
});

test("-2 - (-2) equals 0", () => {
  expect(calculator.subtract(-2, -2)).toEqual(0);
});

// divide tests
test("is division defined?", () => {
  expect(calculator.divide()).toBeDefined();
});

test("8 / 2 equals 4", () => {
  expect(calculator.divide(8, 2)).toEqual(4);
});

test("8 / 0 equals Infinity", () => {
  expect(calculator.divide(8, 0)).toEqual(Infinity);
});

test("0 / 8 equals 0", () => {
  expect(calculator.divide(0, 8)).toEqual(0);
});

// multiply tests
test("is multiplication defined?", () => {
  expect(calculator.multiply()).toBeDefined();
});

test("2 x 2 equals 4", () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
});

test("2 x 0 equals 0", () => {
  expect(calculator.multiply(2, 0)).toEqual(0);
});
