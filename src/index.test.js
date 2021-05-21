const { sum, sub, times, divide } = require(".");

test("should sum correctly", () => {
  expect(sum(1, 1)).toBe(2);
});

test("should sub correctly", () => {
  expect(sub(10, 1)).toBe(9);
});

test("should multiply correctly", () => {
  expect(times(2, 3)).toBe(6);
});

test("should divide correctly", () => {
  expect(divide(15, 3)).toBe(5);
});
