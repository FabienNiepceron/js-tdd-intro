const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Retangle", () => {
  it("return true if side is = or return flase sides are  !=", () => {
    const firstRectangle = new Rectangle(5, 5);
    assert.strictEqual(firstRectangle.isSquare(), true);
    const secondRectangle = new Rectangle(4, 5);
    assert.strictEqual(secondRectangle.isSquare(), false);
  });

  it("check that it reflects the surface of the rectangle (ex: 91 for a rectangle of 13 by 7).", () => {
    let thirdRectangle = new Rectangle(13, 7);
    assert.strictEqual(thirdRectangle.getArea(), 91);
  });

  it("check that it returns well the surface of the rectangle.", () => {
    let fourthRectangle = new Rectangle(5, 5);
    assert.strictEqual(fourthRectangle.getPerimeter(), 20);
  });
});
