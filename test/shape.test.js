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
});
