const capitalize = require("../modules/capitalize");

test("does the capitalize module exist?", () => {
  expect(capitalize).toBeDefined();
});

test("axe in title case is: Axe", () => {
  expect(capitalize("axe")).toBe("Axe");
});

test("bobby in title case is: Bobby", () => {
  expect(capitalize("bobby")).toBe("Bobby");
});

test("cHuCk in title case is: Chuck", () => {
  expect(capitalize("cHuCk")).toBe("Chuck");
});

test("RHOADES in title case is: Rhoades", () => {
  expect(capitalize("RHOADES")).toBe("Rhoades");
});
