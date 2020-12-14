const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("is a function and accepts one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transforms i am learning TDD correctly to I Am Learning TDD", () => {
    assert.strictEqual(
      capitalizeFirstLetters("i am learning TDD"),
      "I Am Learning TDD"
    );
  });

  it("works for an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
