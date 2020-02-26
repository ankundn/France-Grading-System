const mark = require("../index");

test("Mark is a number", () => {
  expect(typeof mark.marks).toBe("number");
});

test("Mark is valid", () => {
  expect(mark.isValidate()).toBe(true);
});

test("Mark is A", () => {
  expect(mark.computeScore()).toBe("A");
});
