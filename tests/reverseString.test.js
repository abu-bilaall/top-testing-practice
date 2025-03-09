const reverseString = require("../modules/reverseString");

test("does the reverseString module exist?", () => {
  expect(reverseString).toBeDefined();
});

test("axe reversed is: exa", () => {
  expect(reverseString("axe")).toBe("exa");
});

test("bobby reversed is: ybbob", () => {
  expect(reverseString("bobby")).toBe("ybbob");
});

test("cHuCk in reversed is: kCuHc", () => {
  expect(reverseString("cHuCk")).toBe("kCuHc");
});

test("RHOADES reversed is: SEDAOHR", () => {
  expect(reverseString("RHOADES")).toBe("SEDAOHR");
});
