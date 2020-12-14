const assert = require("assert");

function capitalizeFirstLetters(input) {
  if (input.length > 0) {
    return input
      .split(" ")
      .map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  } else {
    return "";
  }
}

assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(
  capitalizeFirstLetters("i am learning TDD"),
  "I Am Learning TDD"
);

assert.strictEqual(capitalizeFirstLetters("z"), "Z");

assert.strictEqual(capitalizeFirstLetters(""), "");
