const analyzeArray = require("../modules/analyzeArray");

test("does the analyzeArray exist?", () => {
  expect(analyzeArray).toBeDefined();
});

const array = [1, 8, 3, 4, 2, 6];
test("average == 4?", () => {
  expect(analyzeArray(array).average).toBe(4);
});

test("min == 1?", () => {
  expect(analyzeArray(array).min).toBe(1);
});

test("max == 8?", () => {
  expect(analyzeArray(array).max).toBe(8);
});

test("length == 6?", () => {
  expect(analyzeArray(array).length).toBe(6);
});

test("average: 4, min: 1, max: 8, length: 6", () => {
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
