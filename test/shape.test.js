const { Shape } = require("../lib/shape");

// describe block for "Shape"
describe("Shape", () => {
  // Test 1
  test("should set up color correctly", () => {
    // set the color
    const color = "red";

    // Create an instance of Shape with color
    const shape = new Shape(color);

    // Check if Shape instance is equal to color
    expect(shape.color).toBe(color);
  });

  // Test 2
  test("should NOT set up color correctly", () => {
    // set the colors
    const incorrectColor = "brown";
    const correctColor = "red";

    // Create an instance of Shape with incorrect color
    const shape = new Shape(incorrectColor);

    // Check if Shape instance is not equal to correctColor
    expect(shape.color).not.toBe(correctColor);
  });
});
